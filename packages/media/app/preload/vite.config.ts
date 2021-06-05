import { join } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vite'

const PACKAGE_ROOT = __dirname

export default defineConfig({
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '@/': join(PACKAGE_ROOT, 'src') + '/',
      shared: join(PACKAGE_ROOT, '..', 'shared')
    }
  },
  build: {
    sourcemap: 'inline',
    target: 'chrome89',
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
        ...builtinModules
      ],
      output: {
        entryFileNames: '[name].cjs'
      }
    },
    emptyOutDir: true
  }
})
