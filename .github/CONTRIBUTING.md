# TsMango 贡献指南

## 前言

你好！欢迎使用 `TsMango`

我很高兴你有兴趣为 `TsMango` 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南。

## 开发规范

- 如需要加入新的工具文件，你需要在项目的根目录新建一个 `语义明确` 的 `*.ts` 文件，`函数名需要和文件名保持一致`。
- 函数需要使用 `export` 关键字进行导出，而不是使用 `export default`
- 再从 `index.ts` 文件中引入工具函数，还要在 `TsMango` 对象中和 `export` 导出的对象中都添加刚才引入的文件名
- 每个变量、函数返回值、函数参数，都必须设置类型

示例代码：

```ts
// index.ts
import { yourFunction } from './yourFunction'

const TsMango: object = {
  // ...
  yourFunction,
}

export {
  // ...
  yourFunction,
}

export default TsMango
```

## 格式规范

参考下面文件代码

```ts
/**
 * 获取指定参数范围的随机数
 * 该方法的取值范围为：包含最小值，但不包含最大值
 * @param min 随机数范围的最小值
 * @param max 随机数范围的最大值
 * @returns 指定参数范围的随机数
 */
export const randomNum = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min)) + min
}
```

规范为：

- 首行必须为 `jsDoc` 格式的注释
- 注释可以详细的描述函数的使用方式
- 每个参数的要有详细的描述是什么
- 注释和函数直接没有空行
- `tab` 缩进始终为 `2` 个空格
- 最后要留出一个空行

## 如何测试

项目中有一个 `play` 的目录，是一个 `vue3` 的项目，可以引入进行测试

tsmango/play

```shell
cd play
npm i
npm run dev
```
