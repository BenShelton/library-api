<template>
  <div class="media control-page">
    <h1 class="heading">
      Date
    </h1>
    <div class="date-selection">
      <select
        v-model="year"
        :disabled="media.loading"
      >
        <option
          v-for="option of years"
          :key="option.value"
          :value="option.value"
          v-text="option.text"
        />
      </select>
      <select
        v-model="week"
        :disabled="media.loading"
      >
        <option
          v-for="option of weeks"
          :key="option.value"
          :value="option.value"
          v-text="option.text"
        />
      </select>
      <select
        v-model="publication"
        :disabled="media.loading"
      >
        <option value="wt">
          Watchtower
        </option>
        <option value="oclm">
          OCLM Workbook
        </option>
      </select>
    </div>
    <div class="media-display">
      <Loader v-if="media.loading" />
      <template v-else-if="media.found">
        <h1 class="heading">
          Videos
        </h1>
        <div class="media-row">
          <PreviewMedia
            v-for="video of media.videos"
            :key="video.id"
            :media="video"
            :downloading="downloads.includes(video.id)"
            @display="onDisplayVideo"
          />
        </div>
        <h1 class="heading">
          Images
        </h1>
        <div class="media-row">
          <PreviewMedia
            v-for="image of media.images"
            :key="image.id"
            :media="image"
            :downloading="false"
            @display="onDisplayImage"
          />
        </div>
      </template>
      <template v-else>
        <p>No Media Found</p>
        <p>It may be that it is not yet available, try a different date</p>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref, watch, watchEffect } from 'vue'

import Loader from '@/components/Loader.vue'
import PreviewMedia from '@/components/PreviewMedia.vue'

import { getMondaysOfYear, formatISODate, closestPreviousMonday, isWeekend } from '@/utils/date'

import { SelectOption } from 'types/select'
import {
  DownloadVideo,
  PublicationMedia,
  IPCImageDTO,
  IPCVideoDTO,
  MediaImage,
  MediaVideo
} from 'shared/types/ipc'

export default defineComponent({
  name: 'Media',

  components: {
    Loader,
    PreviewMedia
  },

  setup () {
    const monday = closestPreviousMonday(new Date())
    const currentYear = monday.getFullYear()

    const year = ref(currentYear)
    const week = ref(formatISODate(monday))
    const publication = ref<'wt' | 'oclm'>(isWeekend(new Date()) ? 'wt' : 'oclm')

    const years: SelectOption<number>[] = [currentYear - 1, currentYear, currentYear + 1]
      .map(year => ({ text: String(year), value: year }))
    const weeks = ref(getMondaysOfYear(year.value))

    watch(year, (val) => {
      const mondays = getMondaysOfYear(val)
      weeks.value = mondays
      week.value = mondays[0].value
    })

    const media = reactive({
      loading: false,
      found: false,
      videos: [] as IPCVideoDTO[],
      images: [] as IPCImageDTO[]
    })
    watchEffect(async () => {
      media.loading = true

      const pubMedia = await window.electron.invoke<PublicationMedia>('publication:media', { date: week.value, type: publication.value })

      if (!pubMedia) {
        media.found = false
      } else {
        media.videos = pubMedia.videos
        media.images = pubMedia.images
        media.found = true
      }

      media.loading = false
    })

    const updateSelected = inject<(val: string) => void>('updateSelected')

    const downloads = reactive<string[]>([])
    async function onDisplayVideo (video: IPCVideoDTO): Promise<void> {
      // need to unwrap this from the proxy to be able to send over IPC
      const details = { ...video.details }
      if (!video.downloaded) {
        downloads.push(video.id)
        await window.electron.invoke<DownloadVideo>('download:video', { ...video, details })
        const prevVideo = media.videos.find(v => v.id === video.id)
        if (prevVideo) prevVideo.downloaded = true
        const downloadIdx = downloads.indexOf(video.id)
        if (downloadIdx > -1) downloads.splice(downloadIdx, 1)
      } else {
        window.electron.send<MediaVideo>('media:video', { details })
        updateSelected?.(video.id)
      }
    }
    function onDisplayImage (image: IPCImageDTO): void {
      window.electron.send<MediaImage>('media:image', { src: image.src })
      updateSelected?.(image.id)
    }

    return {
      year,
      week,
      publication,

      years,
      weeks,

      media,

      downloads,
      onDisplayVideo,
      onDisplayImage
    }
  }
})
</script>

<style scoped>
.date-selection {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 16px;
}
.media-display {
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.media-row {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
</style>
