<template>
  <div class="preview-image">
    <div
      class="image"
      @mouseenter="onMouseenter"
    >
      <img :src="media.src">
    </div>
    <div
      v-if="hovering || isSelected"
      class="overlay"
      @mouseleave="onMouseleave"
      @click="onClick"
    >
      <p v-if="isSelected">
        Showing
      </p>
      <p v-else>
        Click to show
      </p>
    </div>
    <div class="text">
      <p v-text="media.text" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, PropType, ref } from 'vue'

import { IPCImageDTO, IPCVideoDTO } from '../../../../types/ipc'

export default defineComponent({
  name: 'PreviewMedia',

  props: {
    media: { type: Object as PropType<IPCImageDTO | IPCVideoDTO>, required: true },
    selected: { type: String, required: true }
  },

  emits: [
    'display'
  ],

  setup (props, { emit }) {
    const hovering = ref(false)
    function onMouseenter () {
      hovering.value = true
    }
    function onMouseleave () {
      hovering.value = false
    }
    function onClick () {
      if (isSelected.value) return
      emit('display', props.media)
      hovering.value = false
    }
    const isSelected = computed(() => {
      return props.selected === props.media.id
    })
    onMounted(() => {
      window.addEventListener('blur', onMouseleave)
    })
    onUnmounted(() => {
      window.removeEventListener('blur', onMouseleave)
    })
    return {
      hovering,
      isSelected,
      onMouseenter,
      onMouseleave,
      onClick
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
  cursor: pointer;
  user-select: none;
}
.text {
  overflow-y: scroll;
  flex: 0 0 50px;
  border-top: 1px dashed var(--secondary);
  padding: 2px;
}
p {
  margin: 0;
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
