<template>
  <div class="display-wrapper">
    <p v-if="!src">
      Nothing Displaying
    </p>
    <img
      v-else
      :src="src"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { DisplayImage } from '../../../../types/ipc'

export default defineComponent({
  name: 'Display',

  setup () {
    const src = ref('')
    window.electron.on<DisplayImage>('display:image', (args) => {
      src.value = args.src
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
  justify-content: center;
  align-items: center;
  color: white;
}
img {
  width: 100%;
}
</style>
