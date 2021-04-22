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
      <h1>Songs</h1>
      <h1>Videos</h1>
      <h1>Images</h1>
    </template>
    <template v-else>
      <p>No Media Found</p>
      <p>It may be that it is not yet available, try a different date</p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from 'vue'

import Loader from '@/components/Loader.vue'
import { getMondaysOfYear, formatISODate, closestPreviousMonday } from '@/utils/date'

import { SelectOption } from 'types/select'

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
    const publication = ref('wt')

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
      songs: [],
      videos: [],
      images: []
    })
    watchEffect(async () => {
      media.loading = true

      // TODO: Load the publication
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const pub = week.value + publication.value
      setTimeout(() => {
        media.found = false
        media.loading = false
      }, 3000)
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
