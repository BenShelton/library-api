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
    <Loader v-if="media.loading" />
    <template v-else-if="media.found">
      <h1>Videos</h1>
      <span
        v-for="video of media.videos"
        :key="video.url"
        v-text="video.url"
      />
      <h1>Images</h1>
      <span
        v-for="image of media.images"
        :key="image.url"
        v-text="image.url"
      />
    </template>
    <template v-else>
      <p>No Media Found</p>
      <p>It may be that it is not yet available, try a different date</p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from 'vue'
import { ImageDTO, VideoDTO } from '@library-api/core/types/dto'

import Loader from '@/components/Loader.vue'
import { getMondaysOfYear, formatISODate, closestPreviousMonday } from '@/utils/date'

import { SelectOption } from 'types/select'
import { PublicationMedia } from '../../../../../types/ipc'

export default defineComponent({
  name: 'Media',

  components: {
    Loader
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
      videos: [] as VideoDTO[],
      images: [] as ImageDTO[]
    })
    watchEffect(async () => {
      media.loading = true

      const args: PublicationMedia.Args = { date: week.value, type: publication.value }
      const pubMedia: PublicationMedia.Response = await window.electron.ipcRenderer.invoke('publication:media', args)

      if (!pubMedia) {
        media.found = false
      } else {
        media.videos = pubMedia.videos
        media.images = pubMedia.images
        media.found = true
      }

      media.loading = false
    })

    return {
      year,
      week,
      publication,

      years,
      weeks,

      media
    }
  }
})
</script>

<style scoped>
.media {
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  text-align: center;
  padding: 24px;
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
</style>
