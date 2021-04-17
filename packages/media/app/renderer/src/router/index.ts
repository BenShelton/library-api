import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import ControlPanel from '@/pages/ControlPanel/Index.vue'
import Intro from '@/pages/ControlPanel/Intro.vue'
import Media from '@/pages/ControlPanel/Media.vue'
import Display from '@/pages/Display.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/control-panel',
    name: 'ControlPanel',
    component: ControlPanel,
    children: [
      {
        path: 'intro',
        name: 'Intro',
        component: Intro
      },
      {
        path: 'media',
        name: 'Media',
        component: Media
      }
    ]
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
