<template>
  <div class="picker control-page">
    <h1 class="heading">
      Choose File
    </h1>
    <p>Select a media file from your file system to display</p>
    <p>Only some file extensions are supported</p>
    <button @click="onPick">
      Choose File
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

import { MediaPick } from 'shared/types/ipc'

export default defineComponent({
  name: 'Picker',

  setup () {
    const updateSelected = inject<(val: string | null) => void>('updateSelected')

    async function onPick (): Promise<void> {
      const selected = await window.electron.invoke<MediaPick>('media:pick')
      if (selected) updateSelected?.('picker')
    }

    return {
      onPick
    }
  }
})
</script>

<style scoped>
.picker {
  align-items: center;
}
button {
  width: 120px;
}
</style>
