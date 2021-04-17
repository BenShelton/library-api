<template>
  <div class="intro">
    <template v-if="!downloading">
      <h3>Welcome to Library Media</h3>
      <p>In order to start you will need to download the Publication Catalog. This is a large file (about 500MB) so it may take some time to download.</p>
      <button
        :disabled="downloading"
        @click="downloadCatalog()"
      >
        Download Catalog
      </button>
      <p
        v-if="error"
        v-text="error"
      />
    </template>
    <template v-else>
      <p>Downloading Catalog, please wait...</p>
      <Loader />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Loader from '@/components/Loader.vue'

import router from '@/router'

export default defineComponent({
  name: 'Intro',

  components: {
    Loader
  },

  setup () {
    const downloading = ref(false)
    const error = ref('')
    async function downloadCatalog () {
      downloading.value = true
      try {
        const result = await window.electron.ipcRenderer.invoke('catalog:update')
        if (!result) throw new Error('An error occurred while downloading')
        router.push({ name: 'Media' })
      } catch (err) {
        error.value = err.message
      } finally {
        downloading.value = false
      }
    }

    return {
      downloading,
      error,
      downloadCatalog
    }
  }
})
</script>

<style scoped>
.intro {
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  text-align: center;
  padding: 24px;
}
</style>
