<template>
  <div class="preview-image">
    <img :src="image.src">
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { IPCImageDTO } from '../../../../types/ipc'

export default defineComponent({
  name: 'PreviewImage',

  props: {
    image: { type: Object as PropType<IPCImageDTO>, required: true }
  }
})
</script>

<style scoped>
.preview-image {
  margin: 0 8px;
  border: 1px solid var(--secondary);
  flex: 0 0 160px;
  height: 90px;
  width: 160px;
}
img {
  height: 100%;
}
</style>
