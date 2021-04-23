<template>
  <div class="preview-image">
    <div
      class="image"
      @mouseenter="onMouseenter"
    >
      <img :src="image.src">
    </div>
    <div
      v-if="hovering"
      class="overlay"
      @mouseleave="onMouseleave"
    >
      <p>Click to play</p>
    </div>
    <div class="text">
      <p v-text="image.caption" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { IPCImageDTO } from '../../../../types/ipc'

export default defineComponent({
  name: 'PreviewImage',

  props: {
    image: { type: Object as PropType<IPCImageDTO>, required: true }
  },

  setup () {
    const hovering = ref(false)
    function onMouseenter () {
      hovering.value = true
    }
    function onMouseleave () {
      hovering.value = false
    }
    return {
      hovering,
      onMouseenter,
      onMouseleave
    }
  }
})
</script>

<style scoped>
.preview-image {
  display: flex;
  flex-flow: column nowrap;
  margin: 0 8px;
  box-sizing: content-box;
  border: 1px solid var(--secondary);
  flex: 0 0 160px;
  height: 140px;
  width: 160px;
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.text {
  overflow-y: scroll;
  flex: 0 0 50px;
  border-top: 1px dashed var(--secondary);
}
p {
  margin: 0 0 12px;
  font-size: 12px;
}
.image {
  flex: 0 0 90px;
  height: 90px;
  width: 100%;
}
img {
  height: 100%;
  max-width: 160px;
}
</style>
