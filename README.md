# admin

这里是你的项目介绍

# 快速上手

## 环境准备

首先得有 node，并确保 node 版本是 14 或以上。（推荐用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本，windows 下推荐用 [nvm-windows](https://github.com/coreybutler/nvm-windows)）

mac 或 linux 下安装 nvm。

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm -v
0.39.1
```

安装 node。

```
$ nvm install 16
$ nvm use 16
$ node -v
v16.10.0
```

然后需要包管理工具。node 默认包含 npm，但也可以选择其他方案，

- [pnpm](https://pnpm.io/installation), umi 团队推荐
- [Yarn](https://yarnpkg.com/getting-started/install)

安装 pnpm。

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
$ pnpm -v
7.3.0
```

## 安装依赖

```bash
$ yarn

or

$ npm install


```

## 启动项目

执行 `yarn dev` 命令，

```bash
$ yarn dev
        ╔═════════════════════════════════════════════════════╗
        ║ App listening at:                                   ║
        ║  >   Local: https://127.0.0.1:8000                  ║
ready - ║  > Network: https://192.168.1.1:8000                ║
        ║                                                     ║
        ║ Now you can open browser with the above addresses👆 ║
        ╚═════════════════════════════════════════════════════╝
event - compiled successfully in 1121 ms (388 modules)
event - MFSU compiled successfully in 1308 ms (875 modules)
```

在浏览器里打开 [http://localhost:8000/](http://localhost:8000/)，能看到界面了，

## 部署发布

执行 `yarn build` 命令，

```bash
> umi build
event - compiled successfully in 1179 ms (567 modules)
event - build index.html
```

产物默认会生成到 `./dist` 目录下，

```
./dist
├── index.html
├── umi.css
└── umi.js
```

完成构建后，就可以把 dist 目录部署到服务器上了。

## GIT COMMIT 规范

👉 type 主要有以下几种类型：

- feat: 一个新特性
- fix: 修复 bug
- fix(core): handle events on blur (close #28)
- docs: 文档修改
- style: 不影响代码含义的更改（空格、格式、缺少分号等）
- refactor: 代码重构
- perf: 优化性能
- test: 测试用例修改
- chore: 对构建过程或辅助工具和库的更改，例如文档生成
- chore(release): update changelog
- scope：可以是影响范围的任何内容。
- subject：包含对更改的简洁描述，规则：

  使用陈述语句

  第一个字母不要大写

  末尾没有点 (.)

- body：commit 具体修改内容, 可以分为多行，应该包括改变的动机，并与以前的行为进行对比。
- footer: 一些备注, 通常是修复的 bug 的链接。

## https://aika-admin.parsec.com.cn/

[## 原型：](https://www.figma.com/proto/MToYWQKwV0jAjp6f5L6md9/AIKA-Admin-panel-prototype?node-id=2309-67949&starting-point-node-id=2309%3A67949mqtt)

[## 原型：](https://www.figma.com/design/rnUwBDi6MjSaEMvT9pbeTk/AIKA-Prototype?t=Y5gMUbtuSY8Opv0A-0)

[mqtt](https://gitlab.parsec.com.cn/aika/doc-and-issues/-/wikis/%E8%81%8A%E5%A4%A9%E6%B6%88%E6%81%AF%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%96%87%E6%A1%A3)

- [测试后台访问域名](https://admin-test.aikavision.com)

- [生产后台访问域名](https://admin.aikavision.com)

[推送](https://www.figma.com/design/rnUwBDi6MjSaEMvT9pbeTk/AIKA-for-iOS?node-id=3094-90&t=v8hHoOd7reu8OYs6-1)

Google Pay https://www.figma.com/design/rnUwBDi6MjSaEMvT9pbeTk/AIKA-for-iOS?node-id=3208-100&t=VhGIfmcmtkJSRCob-4

Support Management https://www.figma.com/design/rnUwBDi6MjSaEMvT9pbeTk/AIKA-for-iOS?node-id=3094-90&t=ZKNdzC37lRGMwg52-0

[figma-issues](https://www.figma.com/board/QSkPS8GwIU3TvHboxtTl9k/AIKA-V2.0%E8%BF%AD%E4%BB%A3?node-id=2-175&t=94EOWCFANpa4iaBM-4)
