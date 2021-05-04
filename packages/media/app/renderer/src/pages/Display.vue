<template>
  <div class="display-wrapper">
    <template v-if="!src">
      <p>Nothing Displaying</p>
      <br>
      <p>Click and drag from inside this window to move it</p>
      <p>Click and drag the corners to resize it</p>
    </template>
    <img
      v-else
      :src="src"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { DisplayImage, DisplayVideo, DisplayClear } from '../../../../types/ipc'

export default defineComponent({
  name: 'Display',

  setup () {
    const src = ref<string | null>(null)
    window.electron.on<DisplayImage>('display:image', (args) => {
      src.value = args.src
    })
    window.electron.on<DisplayVideo>('display:video', (args) => {
      src.value = args.src
    })
    window.electron.on<DisplayClear>('display:clear', () => {
      src.value = null
    })
    return {
      src
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
img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  pointer-events: none;
}
</style>
