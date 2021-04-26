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
  name: 'Navbar',

  props: {
    selected: { type: String, required: true }
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
  width: 100vw;
  height: 48px;
  flex: 0 0 48px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
}
</style>
