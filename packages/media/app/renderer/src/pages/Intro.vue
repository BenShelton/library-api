<template>
  <div class="intro">
    <img src="@/assets/logo-banner.png">
    <h2>Welcome to Library Media</h2>
    <p>In order to start you will need to download the Publication Catalog. This is a large file (about 500MB) so it may take some time to download</p>
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
    <div class="downloading">
      <template v-if="downloading">
        <p>Downloading Catalog, please wait...</p>
        <Loader />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import Loader from '@/components/Loader.vue'

import { CatalogUpdate } from 'shared/types/ipc'

export default defineComponent({
  name: 'Intro',

  components: {
    Loader
  },

  setup () {
    const downloading = ref(false)
    const error = ref('')
    const { push } = useRouter()
    async function downloadCatalog () {
      downloading.value = true
      try {
        const result = await window.electron.invoke<CatalogUpdate>('catalog:update')
        if (!result) throw new Error('An error occurred while downloading')
        push({ name: 'Media' })
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
  height: 100%;
}
img, p {
  width: 100%;
  margin: 0 24px;
  max-width: 600px;
}
button {
  margin: 24px 0;
}
img {
  width: 100%;
  margin-bottom: 48px;
}
.downloading {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 140px;
}
.downloading p {
  margin-bottom: 12px;
}
</style>
