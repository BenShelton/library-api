<template>
  <div class="navbar">
    <img
      class="icon"
      src="@/assets/logo.svg"
    >
    <div>
      <router-link
        v-slot="{ href, navigate }"
        :to="{ name: 'Media' }"
      >
        <button
          :href="href"
          class="icon-btn"
          @click="navigate"
        >
          <img src="@/assets/media.svg">
        </button>
      </router-link>
      <router-link
        v-slot="{ href, navigate }"
        :to="{ name: 'Settings' }"
      >
        <button
          :href="href"
          class="icon-btn"
          @click="navigate"
        >
          <img src="@/assets/settings.svg">
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
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
button {
  margin-left: 8px;
  border: 1px solid transparent;
}
.router-link-active button {
  background-color: var(--button-disabled);
  border: 1px solid var(--secondary);
}
</style>
