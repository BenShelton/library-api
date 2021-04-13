<template>
  <div class="display-wrapper">
    <p>Nothing Displaying</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Display'
})
</script>

<style scoped>
.display-wrapper {
  height: 100%;
  width: 100%;
  background-color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
