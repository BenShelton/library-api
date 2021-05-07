<template>
  <div class="control-panel">
    <Navbar />
    <Media />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Navbar from '@/components/Navbar.vue'
import Media from '@/components/Media.vue'

export default defineComponent({
  name: 'ControlPanel',

  components: {
    Navbar,
    Media
  }
})
</script>

<style scoped>
.control-panel {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
}
</style>
