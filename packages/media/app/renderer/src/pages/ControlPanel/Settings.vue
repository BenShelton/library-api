<template>
  <div class="settings control-page">
    <h1 class="heading">
      SETTINGS
    </h1>
    <h2>Media</h2>
    <div>
      <div class="settings-line">
        <p>
          Choose the language for publications & songs
        </p>
        <select
          v-model="settings.languageId"
        >
          <option
            v-for="language of languages"
            :key="language.id"
            :value="language.id"
            v-text="language.englishName"
          />
        </select>
      </div>
      <div class="settings-line">
        <p>
          Hide images not normally shown during the meeting (cover images, publication covers etc.)
        </p>
        <select
          v-model="settings.showImages"
        >
          <option value="all">
            Show all
          </option>
          <option value="display">
            Only show relevant
          </option>
        </select>
      </div>
    </div>
    <h2>Reset</h2>
    <div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import { useStore } from '@/composables/store'

import { SettingsClearDownloads } from 'shared/types/ipc'

export default defineComponent({
  name: 'Settings',

  setup () {
    const { push } = useRouter()
    const loading = ref(false)

    const { store: settings } = useStore('controlPanel')
    const languages = [...window.languages]
      .filter(l => !l.signLanguage)
      .sort((a, b) => {
        return a.englishName > b.englishName ? 1 : -1
      })

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
      settings,
      languages,
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
  margin: 0 8px;
  padding: 8px 0;
}
.settings-line:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.settings-line p {
  margin: 0;
}
.settings-line button,
.settings-line select {
  flex: 0 0 160px;
  width: 160px;
  margin: 0 0 0 24px;
}
</style>
