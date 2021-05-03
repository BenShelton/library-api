<template>
  <div class="media">
    <h1>
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
        <h1>Videos</h1>
        <div class="media-row">
          <PreviewMedia
            v-for="video of media.videos"
            :key="video.id"
            :media="video"
            :selected="selected"
            @display="onDisplayVideo"
          />
        </div>
        <h1>Images</h1>
        <div class="media-row">
          <PreviewMedia
            v-for="image of media.images"
            :key="image.id"
            :media="image"
            :selected="selected"
            @display="onDisplayImage"
          />
        </div>
      </template>
      <template v-else>
        <p>No Media Found</p>
        <p>It may be that it is not yet available, try a different date</p>
      </template>
    </div>
    <Controls
      :selected="selected"
      @clear="onClear"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from 'vue'

import Loader from '@/components/Loader.vue'
import PreviewMedia from '@/components/PreviewMedia.vue'
import Controls from '@/components/Controls.vue'

import { getMondaysOfYear, formatISODate, closestPreviousMonday } from '@/utils/date'

import { SelectOption } from 'types/select'
import { PublicationMedia, IPCImageDTO, IPCVideoDTO, MediaImage, MediaVideo, MediaClear } from '../../../../../types/ipc'

export default defineComponent({
  name: 'Media',

  components: {
    Loader,
    PreviewMedia,
    Controls
  },

  setup () {
    const monday = closestPreviousMonday()
    const currentYear = monday.getFullYear()

    const year = ref(currentYear)
    const week = ref(formatISODate(monday))
    const publication = ref<'wt' | 'oclm'>('wt')

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

    const selected = ref<string>('')
    function onDisplayVideo (video: IPCVideoDTO): void {
      window.electron.send<MediaVideo>('media:video', { src: video.src })
      selected.value = video.id
    }
    function onDisplayImage (image: IPCImageDTO): void {
      window.electron.send<MediaImage>('media:image', { src: image.src })
      selected.value = image.id
    }
    function onClear (): void {
      window.electron.send<MediaClear>('media:clear')
      selected.value = ''
    }

    return {
      year,
      week,
      publication,

      years,
      weeks,

      media,

      selected,
      onDisplayVideo,
      onDisplayImage,
      onClear
    }
  }
})
</script>

<style scoped>
.media {
  flex: 0 1 100%;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  flex-flow: column nowrap;
  text-align: center;
  padding: 24px 24px 0 24px;
  margin-bottom: 48px;
}
.date-selection {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 24px;
}
.date-selection select {
  min-width: 120px;
}
.media-display {
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
h1 {
  margin: 0 0 16px;
  align-self: flex-start;
  width: 150px;
  text-align: left;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  border-bottom: 1px solid var(--secondary);
}
.media-row {
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  width: 100%;
  margin-bottom: 24px;
}
</style>
