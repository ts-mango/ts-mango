const fs = require('fs')
const { version } = require('../src/packages/package.json')

const files = [
  { input: './README.md', outDir: 'dist/README.md' },
  {
    input: './src/packages/package.json',
    outDir: 'dist/package.json'
  },
  { input: './LICENSE', outDir: 'dist/LICENSE' }
]

files.forEach((item) => {
  fs.copyFileSync(item.input, item.outDir)
})

console.warn('\n' + 'Ts Mango 🥭🥭🥭' + '\n\n' + `${version} 版本打包成功 🎉🎉🎉` + '\n')
