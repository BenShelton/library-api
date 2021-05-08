<template>
  <div class="navbar">
    <img
      class="icon"
      src="@/assets/logo.svg"
    >
    <button
      class="icon-btn"
      @click="onSettingsClick"
    >
      <img src="@/assets/settings.svg">
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',

  emits: [
    'settings:show'
  ],

  setup (props, { emit }) {
    function onSettingsClick () {
      emit('settings:show')
    }
    return {
      onSettingsClick
    }
  }
})
</script>

<style scoped>
.navbar {
  width: 100vw;
  height: 64px;
  flex: 0 0 64px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}
.icon {
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
}
</style>
