import { join } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vite'

const PACKAGE_ROOT = __dirname

export default defineConfig({
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '@/': join(PACKAGE_ROOT, 'src') + '/',
      shared: join(PACKAGE_ROOT, '..', 'shared'),
      '@library-api/core': join(PACKAGE_ROOT, '..', '..', '..', 'core', 'src', 'index.ts')
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
        ...builtinModules,
        // core modules
        'sqlite',
        'sqlite3',
        'node-fetch',
        'unzipper'
      ],
      output: {
        entryFileNames: '[name].cjs'
      }
    },
    emptyOutDir: true
  }
})
