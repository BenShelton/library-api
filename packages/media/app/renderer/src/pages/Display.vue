<template>
  <div
    class="display-wrapper"
    @contextmenu="onContextmenu"
  >
    <template v-if="!src && helpText">
      <p>Nothing Displaying</p>
      <br>
      <p>Right click to hide/show this help text (on some devices this is a 2-finger click)</p>
      <br>
      <p>Click and drag from inside this window to move it</p>
      <p>Click and drag the corners to resize it</p>
    </template>
    <template v-if="src">
      <img
        v-if="mediaType === 'image'"
        :src="src"
      >
      <video
        v-else-if="mediaType === 'video'"
        :key="src"
        :src="src"
        autoplay
        controls
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { imageExtensions, videoExtensions } from 'shared/extensions'

import { DisplayMedia, DisplayClear } from 'shared/types/ipc'

export default defineComponent({
  name: 'Display',

  setup () {
    const src = ref<string | null>(null)
    const mediaType = ref<'image' | 'video'>('image')
    window.electron.on<DisplayMedia>('display:media', (args) => {
      if (args.src.startsWith('data:image/jpeg;base64')) {
        mediaType.value = 'image'
      } else {
        const ext = args.src.split('.').pop()
        if (ext) {
          if (imageExtensions.includes(ext)) {
            mediaType.value = 'image'
          } else if (videoExtensions.includes(ext)) {
            mediaType.value = 'video'
          }
        }
      }
      src.value = args.src
    })
    window.electron.on<DisplayClear>('display:clear', () => {
      src.value = null
    })

    const helpText = ref(true)
    function onContextmenu () {
      helpText.value = !helpText.value
    }
    return {
      src,
      mediaType,

      helpText,
      onContextmenu
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
p, br {
  user-select: none;
  color: #666666;
}
img, video {
  height: 100%;
  width: 100%;
  object-fit: contain;
  outline: none;
}
img {
  pointer-events: none;
}
</style>
