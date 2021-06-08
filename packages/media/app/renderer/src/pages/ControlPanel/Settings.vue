<template>
  <div class="settings control-page">
    <h1 class="heading">
      SETTINGS
    </h1>
    <h2>Reset</h2>
    <div class="settings-line">
      <p>
        Removes all downloaded data (catalog, publications, videos etc.)
        May fix issues with corrupted publications not showing properly.
        This will send you back to the intro screen.
      </p>
      <button
        :disabled="loading"
        @click="onClearDownloads"
      >
        CLEAR DOWNLOADS
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import { SettingsClearDownloads } from 'shared/types/ipc'

export default defineComponent({
  name: 'Settings',

  setup () {
    const { push } = useRouter()
    const loading = ref(false)

    async function onClearDownloads () {
      loading.value = true
      try {
        await window.electron.invoke<SettingsClearDownloads>('settings:clearDownloads')
        push({ name: 'Intro' })
      } catch (err) {
        window.log.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      loading,
      onClearDownloads
    }
  }
})
</script>

<style scoped>
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
