<template>
  <div class="controls">
    <p>Controls</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
})
</script>

<style scoped>
.controls {
  width: 100vw;
  height: 48px;
  flex: 0 0 48px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}
</style>
