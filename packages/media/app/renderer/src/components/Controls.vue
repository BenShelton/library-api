<template>
  <div class="controls">
    <p v-if="!selected">
      Nothing Displaying
    </p>
    <template v-else>
      <button @click="onClear">
        Hide
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'

import { MediaClear } from 'shared/types/ipc'

export default defineComponent({
  name: 'Controls',

  setup () {
    const selected = inject<Ref<string | null>>('selected')
    const updateSelected = inject<(val: string | null) => void>('updateSelected')
    function onClear () {
      window.electron.send<MediaClear>('media:clear')
      updateSelected?.(null)
    }
    return {
      selected,
      onClear
    }
  }
})
</script>

<style scoped>
.controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
}
</style>
