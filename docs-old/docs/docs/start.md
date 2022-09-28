# 快速上手

## 安装

使用快速的，节省磁盘空间的包管理工具 [pnpm](https://pnpm.io/zh) 进行安装

```shell
pnpm add tsmango --save
```

使用 `npm` 进行安装

```shell
npm i tsmango --save
```

或者使用 `yarn` 进行安装

```shell
yarn add tsmango --save
```

## 使用

完整引入

```ts
import TsMango from 'tsmango'
TsMango.randomNum()
```

按需引入

```ts
import { randomNum } from 'tsmango'
randomNum()
```
