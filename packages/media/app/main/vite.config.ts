import { join } from 'path'
import { defineConfig } from 'vite'

const PACKAGE_ROOT = __dirname

export default defineConfig({
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '@/': join(PACKAGE_ROOT, 'src') + '/'
    }
  },
  build: {
    sourcemap: 'inline',
    target: 'node14',
    outDir: 'dist',
    assetsDir: '.',
    minify: process.env.MODE === 'development' ? false : undefined, // undefined must set default value
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs']
    },
    rollupOptions: {
      external: [
        'electron',
        'fs',
        'fs/promises',
        'path',
        'url',
        '@library-api/core'
      ],
      output: {
        entryFileNames: '[name].cjs'
      }
    },
    emptyOutDir: true
  }
})
