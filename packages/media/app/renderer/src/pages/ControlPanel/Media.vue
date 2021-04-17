<template>
  <div class="media">
    <p>Media Page</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Media'
})
</script>

<style scoped>
.media {
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  text-align: center;
  padding: 24px;
}
</style>
