<template>
  <div class="control-panel">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  name: 'ControlPanel',

  components: {
    Navbar
  }
})
</script>

<style scoped>
.control-panel {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  position: relative;
}
</style>
