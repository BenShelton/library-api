<template>
  <router-link
    v-slot="{ href, navigate }"
    :to="{ name }"
  >
    <button
      :href="href"
      class="icon-btn"
      @click="navigate"
    >
      <img :src="src">
    </button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavbarBtn',

  props: {
    name: { type: String, required: true },
    src: { type: String, required: true }
  }
})
</script>

<style scoped>
a {
  width: 46px;
  height: 46px;
  display: inline-flex;
  margin-left: 8px;
}
button {
  border: 1px solid transparent;
}
.router-link-active button {
  background-color: var(--button-disabled);
  border: 1px solid var(--secondary);
}
</style>
