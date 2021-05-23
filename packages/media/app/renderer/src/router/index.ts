import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Intro from '@/pages/Intro.vue'
import ControlPanel from '@/pages/ControlPanel/Index.vue'
import Media from '@/pages/ControlPanel/Media.vue'
import Song from '@/pages/ControlPanel/Song.vue'
import Picker from '@/pages/ControlPanel/Picker.vue'
import Settings from '@/pages/ControlPanel/Settings.vue'
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
    component: ControlPanel,
    children: [
      {
        path: '',
        redirect: { name: 'Media' }
      },
      {
        path: 'media',
        name: 'Media',
        component: Media
      },
      {
        path: 'song',
        name: 'Song',
        component: Song
      },
      {
        path: 'picker',
        name: 'Picker',
        component: Picker
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings
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
