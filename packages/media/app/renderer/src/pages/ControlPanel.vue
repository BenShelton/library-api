<template>
  <div class="navbar">
    <span>Library Media</span>
    <img
      class="icon"
      src="@/assets/icon.svg"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ControlPanel'
})
</script>

<style scoped>
.navbar {
  width: 100vw;
  height: 64px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}

.icon {
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
}
</style>
