/* eslint-env node */

import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const PACKAGE_ROOT = __dirname

export default defineConfig({
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '@/': join(PACKAGE_ROOT, 'src') + '/',
      shared: join(PACKAGE_ROOT, '..', 'shared')
    }
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          img: ['src'],
          NavbarBtn: ['src']
        }
      }
    })
  ],
  base: '',
  build: {
    sourcemap: true,
    target: 'chrome89',
    polyfillDynamicImport: false,
    outDir: 'dist',
    assetsDir: '.'
  }
})
