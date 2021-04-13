<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
:root {
  --primary: #5E83FF;
  --secondary: #24E8BD;
  --button-active: #00E0FF;
  --button-disabled: #449FE8;
  --background: #666666;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  border: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
  background-color: var(--background);
}
</style>
