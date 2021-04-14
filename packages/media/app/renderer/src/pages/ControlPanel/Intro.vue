<template>
  <div class="intro">
    <h3>Welcome to Library Media</h3>
    <p>In order to start you will need to download the Publication Catalog. This is a large file (about 500MB) so it may take some time to download.</p>
    <button
      :disabled="downloading"
      @click="downloadCatalog()"
    >
      Download Catalog
    </button>
    <div
      class="progress-wrapper"
      :style="{ opacity: downloading ? 1 : 0 }"
    >
      <div class="progress-bar" />
      <p v-text="progress + '%'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Intro',

  setup () {
    const downloading = ref(false)
    const progress = ref(0)
    async function downloadCatalog () {
      downloading.value = true
    }

    return {
      downloading,
      progress,
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
.progress-wrapper {
  flex: 0 0 64px;
}
.progress-bar {
  background-color: var(--primary);
}
</style>
