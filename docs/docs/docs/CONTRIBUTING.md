# TsMango 贡献指南

## 前言

你好！欢迎使用 `TsMango`

我很高兴你有兴趣为 `TsMango` 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南。

## 开发规范

- 如需要加入新的工具文件，你需要在项目的 `根目录 `新建一个 `语义明确` 的 `*.ts` 文件，`函数名需要和文件名保持一致`。
- 函数需要使用 `export` 关键字进行导出，而不是使用 `export default`
- 再从 `index.ts` 文件中引入工具函数，还要在 `TsMango` 对象中和 `export` 导出的对象中都添加刚才引入的文件名
- 每个变量、函数返回值、函数参数，都必须设置类型
- 函数变量名需要使用 `interface` 规定类型，类型文件需要在 `tsmango/type` 目录下新建 `和函数名保持一直的 *.d.ts` 文件，类型需要使用 `export` 进行导出
- 也可以使用内部的其它函数引入进行辅助开发
- 如需新增工具辅助函数，需要在 `utils` 目录下新建文件进行引入使用
- 引入类型文件时，需要在 `import` 关键字后面加入 `type`，例如 `import type { xxx } from 'xxx`

**示例代码**

isNumber.ts

```ts
import type { isNumberInterface } from './type/isNumber'
import { getType } from './getType'

/**
 * 检测一个数据是否为 Number 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export const isNumber: isNumberInterface = (target: unknown): boolean => {
  return typeof target === 'number' && getType(target) === '[object Number]'
}
```

index.ts

```ts
import { yourFunction } from './yourFunction'

const TsMango = {
  // ...
  yourFunction
} as const

export {
  // ...
  yourFunction
}

export default TsMango
```

## 格式规范

- 首行作为类型引入
- `jsDoc` 格式的注释和首行引入之间要有一个空行
- 注释可以详细的描述函数的使用方式
- 每个参数的要有详细的描述是什么
- 注释和函数之间没有空行
- `tab` 缩进始终为 `2` 个空格
- 最后结尾要留出一个空行

**示例代码**

```ts
import type { randomNumInterface } from './type/randomNum'

/**
 * 获取指定参数范围的随机数
 * 该方法的取值范围为：包含最小值，但不包含最大值
 * @param min 随机数范围的最小值
 * @param max 随机数范围的最大值
 * @returns 指定参数范围的随机数
 */
export const randomNum: randomNumInterface = (
  max: number,
  min: number
): number => {
  return Math.floor(Math.random() * (max - min)) + min
}
```

## 如何测试

**实际测试**

进入 `tsmango/play` 目录，是一个 `vue3` 的项目，可以引入进行测试

```shell
cd play
pnpm i
pnpm dev
```

**单元测试**

`tsmango/play` 项目中集成了 [vitest](https://github.com/vitest-dev/vitest)，可在 `tsmango/play/__test__` 目录下新建 `函数名.spec.ts` 文件进程测试。

测试命令

```shell
pnpm test
```

## 文档更新

每个函数需要对于指定的文档进行说明，需要在函数开发好之后编写指定的文档，向使用者说明如何使用，以及它的功能。

在 `tsmango/docs/docs/docs/` 目录下，新建 `函数名.md` 文件，来编写文档，文档格式可以参考 `tsmango/docs/docs/.vitepress/demo.md` 或者其它已经写好的文件进行参考。

## 路由更新

文档编写好之后，每个文档都对应着不同的路由，也需要你将路由配置好才可以正常使用文档查看。需要在 `tsmango/docs/docs/.vitepress/utils/sidebar.ts` 中，按照 `分类` 进行编写路由。

## 写在最后

请务必遵守上述开发指南进行开发维护更新 `TsMango`。

也可以加我微信进行详细讨论！

![](https://tianyuhao.cn/images/weixin2.png)
