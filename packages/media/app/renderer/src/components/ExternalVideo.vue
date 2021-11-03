<template>
  <video
    ref="video"
    :src="src"
    autoplay
    @timeupdate="updateTime"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { VideoTime } from 'shared/types/ipc'

export default defineComponent({
  name: 'ExternalVideo',

  props: {
    src: { type: String, required: true }
  },

  setup () {
    const video = ref<HTMLVideoElement | null>(null)

    function updateTime () {
      const minutes = Math.floor(video.value.currentTime / 60)
      const hours = Math.floor(minutes / 60)
      const seconds = Math.floor(video.value.currentTime - minutes * 60)
      const minuteValue = String(minutes % 60).padStart(2, '0')
      const secondValue = String(seconds).padStart(2, '0')
      const hourValue = String(hours).padStart(2, '0')

      const time = `${hourValue}:${minuteValue}:${secondValue}`
      window.electron.send<VideoTime>('video:time', { time })
    }

    return {
      video,
      updateTime
    }
  }
})
</script>
