<template>
  <div
    class="loader"
    :style="dimensions"
  >
    <!-- eslint-disable vue/max-attributes-per-line -->
    <svg id="Loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.34 305.27">
      <g id="Camera">
        <rect class="cls-1" x="44.16" y="148.87" width="89.25" height="12.18" />
        <rect class="cls-1" x="21.88" y="77.56" width="144.04" height="71.31" />
        <polygon class="cls-1" points="217.84 77.56 217.2 148.87 165.92 137.87 165.92 93.01 217.84 77.56" />
        <rect class="cls-1" x="79.26" y="161.04" width="14.65" height="143.73" />
        <polygon class="cls-1" points="65.39 161.04 15.34 304.77 0.7 304.77 51.17 161.04 65.39 161.04" />
        <polygon class="cls-1" points="170.91 304.77 156.26 304.77 106.86 161.04 121.64 161.04 170.91 304.77" />
        <rect class="cls-2" x="35.15" y="91.14" width="69.2" height="20.58" />
        <line class="cls-2" x1="124.93" y1="117.64" x2="124.93" y2="135.1" />
        <line class="cls-2" x1="138.89" y1="117.64" x2="138.89" y2="135.1" />
        <line class="cls-3" x1="150.81" y1="117.64" x2="150.81" y2="135.1" />
        <line class="cls-2" x1="206.92" y1="88.02" x2="206.92" y2="137.59" />
      </g>
      <g id="large-reel">
        <path class="cls-4" d="M335.13,177.62a38.85,38.85,0,0,1-1.16,9.46,36.5,36.5,0,0,1-1.2,3.89c-.23.63-.47,1.24-.74,1.85h0s0,0,0,0c-.34.82-.72,1.62-1.13,2.41-.17.35-.35.7-.54,1a39.21,39.21,0,0,1-3.63,5.46c-.54.69-1.1,1.35-1.69,2a37.64,37.64,0,0,1-2.67,2.69c-.6.54-1.21,1.06-1.84,1.56-.92.74-1.87,1.44-2.86,2.09a38.91,38.91,0,1,1,17.46-32.46Z" transform="translate(-174.64 -138.21)" />
        <circle class="cls-5" cx="121.58" cy="15.2" r="10.53" />
        <circle class="cls-5" cx="100.79" cy="27.4" r="10.53" />
        <circle class="cls-5" cx="100.79" cy="51.48" r="10.53" />
        <circle class="cls-5" cx="121.58" cy="63.6" r="10.53" />
        <circle class="cls-5" cx="142.37" cy="51.48" r="10.53" />
        <circle class="cls-5" cx="142.37" cy="27.4" r="10.53" />
        <circle class="cls-5" cx="121.58" cy="39.65" r="5.5" />
        <circle class="cls-6" cx="126.34" cy="31.24" r="2.2" />
        <circle class="cls-6" cx="130.97" cy="39.4" r="2.2" />
        <circle class="cls-6" cx="126.34" cy="47.71" r="2.2" />
        <circle class="cls-6" cx="116.83" cy="47.71" r="2.2" />
        <circle class="cls-6" cx="112.01" cy="39.65" r="2.2" />
        <circle class="cls-6" cx="116.83" cy="31.24" r="2.2" />
      </g>
      <g id="small-reel">
        <path class="cls-4" d="M248.34,184.75a31.66,31.66,0,0,1-1.92,10.84c-.18.51-.38,1-.6,1.5h0c-.28.67-.59,1.32-.92,2-.14.29-.28.57-.44.85a31.23,31.23,0,0,1-2.94,4.43c-.44.55-.9,1.09-1.37,1.62a29.75,29.75,0,0,1-2.18,2.17c-.48.44-1,.87-1.48,1.27-.75.61-1.53,1.17-2.33,1.7a31.58,31.58,0,1,1,14.18-26.35Z" transform="translate(-174.64 -138.21)" />
        <circle class="cls-5" cx="42.11" cy="26.89" r="8.55" />
        <circle class="cls-5" cx="25.23" cy="36.79" r="8.55" />
        <circle class="cls-5" cx="25.23" cy="56.34" r="8.55" />
        <circle class="cls-5" cx="42.11" cy="66.18" r="8.55" />
        <circle class="cls-5" cx="58.98" cy="56.34" r="8.55" />
        <circle class="cls-5" cx="58.98" cy="36.79" r="8.55" />
        <circle class="cls-5" cx="42.11" cy="46.73" r="4.47" />
        <circle class="cls-6" cx="45.97" cy="39.9" r="1.78" />
        <circle class="cls-6" cx="49.73" cy="46.53" r="1.78" />
        <circle class="cls-6" cx="45.97" cy="53.27" r="1.78" />
        <circle class="cls-6" cx="38.25" cy="53.27" r="1.78" />
        <circle class="cls-6" cx="34.34" cy="46.73" r="1.78" />
        <circle class="cls-6" cx="38.25" cy="39.9" r="1.78" />
      </g>
    </svg>
    <!-- eslint-enable -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',

  props: {
    size: { type: Number, default: 100 }
  },

  setup (props) {
    const dimensions = computed(() => {
      const pxSize = props.size + 'px'
      return { height: pxSize, width: pxSize }
    })
    return {
      dimensions
    }
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
}

@keyframes reelspin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

#large-reel,
#small-reel {
  animation-name: reelspin;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  animation-timing-function: linear;
}

#large-reel {
  transform-origin: 122px 40px;
  animation-direction: normal;
}

#small-reel {
  transform-origin: 44px 46px;
  animation-direction: reverse;
}

/* SVG Style Defs */
.cls-1{
  fill: #3c3c3b;
}
.cls-1,
.cls-4{
  stroke: #1d1d1b;
}
.cls-1,
.cls-2,
.cls-4,
.cls-5,
.cls-6{
  stroke-miterlimit: 10;
}
.cls-2,
.cls-3{
  fill: none;
}
.cls-2,
.cls-5,
.cls-6{
  stroke: #fff;
}
.cls-4{
  fill:#1d1d1b;
}
.cls-5,
.cls-6{
  fill: #fff;
}
.cls-5{
  stroke-width: 0.75px;
}
.cls-6{
  stroke-width: 0.5px;
}
</style>
