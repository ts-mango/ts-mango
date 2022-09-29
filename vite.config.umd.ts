import type { UserConfigExport } from 'vite'
import { resolve } from 'path'

export default (): UserConfigExport => {
  return {
    build: {
      outDir: resolve(__dirname, 'dist/_dist'),
      lib: {
        entry: resolve(__dirname, './src/packages/index.ts'),
        name: 'tsMango',
        formats: ['umd'],
        fileName: (target): string => {
          return `index.${target}.js`
        }
      },
      rollupOptions: {
        output: {
          exports: 'named'
        }
      }
    }
  }
}
