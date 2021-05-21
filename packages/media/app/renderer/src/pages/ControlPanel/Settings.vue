<template>
  <div class="settings">
    <h1 class="heading">
      SETTINGS
    </h1>
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import { CacheClear } from '../../../../../types/ipc'

export default defineComponent({
  name: 'Settings',

  setup () {
    const { push } = useRouter()
    const loading = ref(false)

    async function onClearCache () {
      loading.value = true
      try {
        await window.electron.invoke<CacheClear>('cache:clear')
        push({ name: 'Intro' })
      } catch (err) {
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      loading,
      onClearCache
    }
  }
})
</script>

<style scoped>
.settings {
  flex: 0 1 100%;
  display: flex;
  overflow-y: overlay;
  flex-flow: column nowrap;
  padding: 24px 24px 0 24px;
  margin-bottom: 48px;
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
</style>
