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

::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  border-radius: 100px;
}
::-webkit-scrollbar:hover {
  background-color: rgba(0, 0, 0, 0.09);
}
::-webkit-scrollbar-thumb:vertical {
  background-color: rgba(0,0,0,0.5);
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:vertical:active {
  background-color: rgba(0,0,0,0.61);
  border-radius: 100px;
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

select {
  min-width: 140px;
  margin: 0 8px;
  background-color: var(--secondary);
  padding: 4px;
  border: none;
  outline: none;
  margin-bottom: 8px;
}

.icon-btn {
  height: 46px;
  width: 46px;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid transparent;
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

.control-page {
  flex: 0 1 100%;
  display: flex;
  overflow-y: overlay;
  flex-flow: column nowrap;
  padding: 24px;
}

.heading {
  margin: 0 0 16px;
  align-self: flex-start;
  width: 180px;
  text-align: left;
  font-size: 24px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--secondary);
}
</style>
