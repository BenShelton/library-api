<template>
  <div class="preview-image">
    <div
      v-if="!media.downloaded"
      class="download-icon"
    >
      <img src="@/assets/download.svg">
    </div>
    <div
      class="image"
      @mouseenter="onMouseenter"
    >
      <img :src="media.src">
    </div>
    <div
      v-if="showOverlay"
      class="overlay"
      @mouseleave="onMouseleave"
      @click="onClick"
    >
      <p v-text="displayText" />
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
    selected: { type: String, required: true },
    downloading: { type: Boolean, required: true }
  },

  emits: [
    'display'
  ],

  setup (props, { emit }) {
    const hovering = ref(false)
    const displayText = computed(() => {
      if (isSelected.value) return 'Showing'
      if (props.downloading) return 'Downloading, please wait...'
      if (!props.media.downloaded) return 'Click to download'
      return 'Click to show'
    })
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
    const showOverlay = computed(() => {
      return hovering.value || isSelected.value || props.downloading
    })
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
      displayText,
      showOverlay,
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
.download-icon {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 28px;
  height: 28px;
  z-index: 5;
  background-color: var(--primary);
  border-radius: 50%;
  padding: 4px;
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
  z-index: 10;
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
  position: relative;
}
img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>