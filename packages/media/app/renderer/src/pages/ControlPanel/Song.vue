<template>
  <div class="song control-page">
    <h1 class="heading">
      Choose Song
    </h1>
    <p>Select a song from the dropdown to load it</p>
    <select
      v-model="song"
      :disabled="loading"
    >
      <option
        v-for="option of songs"
        :key="option.value"
        :value="option.value"
        v-text="option.text"
      />
    </select>
    <Loader v-if="loading" />
    <div>
      <PreviewMedia
        v-if="details"
        :media="details"
        :downloading="downloading"
        @display="onDisplay"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watchEffect } from 'vue'

import PreviewMedia from '@/components/PreviewMedia.vue'
import Loader from '@/components/Loader.vue'
import { useStore } from '@/composables/store'

import { DownloadSong, MediaVideo, SongDetails, VideoDetails } from 'shared/types/ipc'

export default defineComponent({
  name: 'Song',

  components: {
    PreviewMedia,
    Loader
  },

  setup () {
    const { store } = useStore('controlPanel')

    const loading = ref(false)
    const song = ref<number | undefined>(undefined)
    const details = ref<VideoDetails | null>(null)

    const songs: { text: string, value: number | undefined }[] = [{ text: 'None', value: undefined }]
    for (let i = 1; i <= 151; i++) {
      songs.push({ text: 'Song ' + i, value: i })
    }

    watchEffect(async () => {
      details.value = null
      if (!song.value) return
      loading.value = true
      try {
        const songDetails = await window.electron.invoke<SongDetails>('song:details', { track: song.value, languageId: store.languageId })
        details.value = songDetails
      } catch (err) {
        window.log.error(err)
        song.value = undefined
      } finally {
        loading.value = false
      }
    })

    const downloading = ref(false)
    const updateSelected = inject<(val: string) => void>('updateSelected')
    async function onDisplay (video: VideoDetails): Promise<void> {
      // need to unwrap this from the proxy to be able to send over IPC
      const downloadDetails = { ...video.details }
      if (!video.downloaded) {
        downloading.value = true
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        await window.electron.invoke<DownloadSong>('download:song', { details: downloadDetails, track: song.value!, languageId: store.languageId })
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        details.value!.downloaded = true
        downloading.value = false
      } else {
        window.electron.send<MediaVideo>('media:video', { details: downloadDetails })
        updateSelected?.(video.id)
      }
    }

    return {
      loading,
      song,
      songs,
      details,
      downloading,
      onDisplay
    }
  }
})
</script>

<style scoped>
.song {
  align-items: center;
}
select {
  width: 120px;
  margin-bottom: 24px;
}
</style>
