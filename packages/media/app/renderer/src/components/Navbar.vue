<template>
  <div class="navbar">
    <img
      class="icon"
      src="@/assets/logo.svg"
    >
    <div>
      <NavbarBtn
        name="Media"
        src="@/assets/media.svg"
      />
      <NavbarBtn
        name="Settings"
        src="@/assets/settings.svg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavbarBtn from '@/components/NavbarBtn.vue'

export default defineComponent({
  name: 'Navbar',

  components: {
    NavbarBtn
  }
})
</script>

<style scoped>
.navbar {
  width: 100vw;
  height: 64px;
  flex: 0 0 64px;
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
  box-sizing: unset;
}
</style>
