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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Controls',

  props: {
    selected: { type: String, default: null }
  },

  emits: [
    'clear'
  ],

  setup (props, { emit }) {
    function onClear () {
      emit('clear')
    }
    return {
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
