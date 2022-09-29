import type { UserConfigExport } from 'vite'
import { resolve } from 'path'

export default (): UserConfigExport => {
  return {
    build: {
      minify: false, // 压缩代码
      outDir: resolve(__dirname, 'dist/'),
      lib: {
        entry: resolve(__dirname, './src/packages/index.ts'),
        formats: ['es'],
        fileName: () => 'index.js'
      },
      rollupOptions: {
        output: {
          preserveModules: true
        }
      }
    }
  }
}
