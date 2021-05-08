<template>
  <div class="control-panel">
    <Navbar
      @settings:show="showSettings"
    />
    <Media />
    <Settings
      v-model="settingsVisible"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Navbar from '@/components/Navbar.vue'
import Media from '@/components/Media.vue'
import Settings from '@/components/Settings.vue'

export default defineComponent({
  name: 'ControlPanel',

  components: {
    Navbar,
    Media,
    Settings
  },

  setup () {
    const settingsVisible = ref(false)
    function showSettings () {
      settingsVisible.value = true
    }
    return {
      settingsVisible,
      showSettings
    }
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
