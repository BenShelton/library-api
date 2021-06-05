<template>
  <div class="control-panel">
    <Navbar />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Controls />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'

import Navbar from '@/components/Navbar.vue'
import Controls from '@/components/Controls.vue'

export default defineComponent({
  name: 'ControlPanel',

  components: {
    Navbar,
    Controls
  },

  setup () {
    const selected = ref<string>('')
    function updateSelected (val: string): void {
      selected.value = val
    }

    provide('selected', selected)
    provide('updateSelected', updateSelected)
  }
})
</script>

<style scoped>
.control-panel {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  position: relative;
  /* room for controls */
  padding-bottom: 48px;
}
</style>
