<template>
  <transition name="slide">
    <div
      v-if="modelValue"
      class="settings"
    >
      <div class="header">
        <h1>SETTINGS</h1>
        <button
          class="icon-btn"
          :disabled="loading"
          @click="onClose"
        >
          <img src="@/assets/close.svg">
        </button>
      </div>
      <h2>Clear Cache</h2>
      <div class="settings-line">
        <p>
          Removes all downloaded data (catalog, publications, videos etc.)
          May fix issues with corrupted publications not showing properly.
          This will send you back to the intro screen.
        </p>
        <button
          :disabled="loading"
          @click="onClearCache"
        >
          CLEAR CACHE
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import router from '@/router'

import { CacheClear } from '../../../../types/ipc'

export default defineComponent({
  name: 'Settings',

  props: {
    modelValue: { type: Boolean, required: true }
  },

  emits: [
    'update:modelValue'
  ],

  setup (props, { emit }) {
    const loading = ref(false)
    function onClose () {
      emit('update:modelValue', false)
    }

    async function onClearCache () {
      loading.value = true
      try {
        await window.electron.invoke<CacheClear>('cache:clear')
        router.push({ name: 'Intro' })
      } catch (err) {
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      loading,
      onClose,
      onClearCache
    }
  }
})
</script>

<style scoped>
.settings {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--background);
  z-index: 20;
  padding: 12px;
}
.header {
  background-color: var(--secondary);
  height: 64px;
  margin: -12px -12px 24px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  margin: 0;
  font-size: 24px;
}
h2 {
  font-size: 18px;
  text-decoration: underline;
}
.icon-btn {
  background-color: transparent;
}
.settings-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}
.settings-line p {
  margin: 0;
}
.settings-line button {
  width: 240px;
  margin-left: 24px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform ease 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
