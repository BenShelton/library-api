import { createRouter, createWebHashHistory } from 'vue-router'

import ControlPanel from '@/pages/ControlPanel.vue'
import Display from '@/pages/Display.vue'

const routes = [
  { path: '/control-panel', name: 'ControlPanel', component: ControlPanel },
  { path: '/display', name: 'Display', component: Display }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})
