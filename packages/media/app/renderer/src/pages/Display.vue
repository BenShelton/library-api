<template>
  <div class="display-wrapper">
    <template v-if="!src">
      <p>Nothing Displaying</p>
      <br>
      <p>Click and drag from inside this window to move it</p>
      <p>Click and drag the corners to resize it</p>
    </template>
    <img
      v-else-if="mediaType === 'image'"
      :src="src"
    >
    <video
      v-else-if="mediaType === 'video'"
      :key="src"
      autoplay
      controls
    >
      <source
        :src="src"
        type="video/mp4"
      >
    </video>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { DisplayImage, DisplayVideo, DisplayClear } from '../../../../types/ipc'

export default defineComponent({
  name: 'Display',

  setup () {
    const src = ref<string | null>(null)
    const mediaType = ref<'image' | 'video'>('image')
    window.electron.on<DisplayImage>('display:image', (args) => {
      mediaType.value = 'image'
      src.value = args.src
    })
    window.electron.on<DisplayVideo>('display:video', (args) => {
      mediaType.value = 'video'
      src.value = args.src
    })
    window.electron.on<DisplayClear>('display:clear', () => {
      src.value = null
    })
    return {
      src,
      mediaType
    }
  }
})
</script>

<style scoped>
.display-wrapper {
  height: 100%;
  width: 100%;
  background-color: #111111;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: white;
  -webkit-app-region: drag;
}
p {
  user-select: none;
  color: #666666;
}
img, video {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
img {
  pointer-events: none;
}
</style>
