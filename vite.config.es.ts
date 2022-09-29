import type { UserConfigExport } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts' // https://github.com/qmhc/vite-plugin-dts

export default (): UserConfigExport => {
  return {
    plugins: [
      dts({
        // logDiagnostics: true, // 是否打印类型诊断信息
        // skipDiagnostics: false, // 是否跳过类型诊断
        insertTypesEntry: true, // 是否生成类型声明入口
        cleanVueFileName: false, // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
        copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
        include: ['./src/packages'] // 手动设置包含路径的 glob
      })
    ],
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
