import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Intro from '@/pages/Intro.vue'
import ControlPanel from '@/pages/ControlPanel.vue'
import Display from '@/pages/Display.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/control-panel',
    name: 'ControlPanel',
    component: ControlPanel
  },
  {
    path: '/display',
    name: 'Display',
    component: Display
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})
