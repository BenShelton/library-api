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

@font-face {
  font-family: 'Quicksand';
  src: url('@/assets/Quicksand.ttf') format('truetype-variations');
  font-weight: 1 999;
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
  font-family: 'Quicksand';
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

button {
  padding: 8px 16px;
  background-color: var(--button-active);
  border: none;
  cursor: pointer;
  outline: none;
}

button:disabled {
  background-color: var(--button-disabled);
}

.icon-btn {
  height: 44px;
  width: 44px;
  padding: 10px;
  border-radius: 50%;
}

.icon-btn img {
  height: 24px;
  width: 24px;
}

.container {
  width: 100%;
  height: 100%;
  background-color: var(--background);
}
</style>
