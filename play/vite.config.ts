import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [vue()],
    server: {
      port: 1216
    }
  }
}
