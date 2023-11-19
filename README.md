# 自强 Vue3 模板

一个 Vue3 + Vite 的开发模板

- Lint 代码规范化
- commitlint 提交信息校验
- commitizen 辅助提交工具
- GitHub Action 自动化代码检查流程

## 各分支对应模板

- `main` - 普通 Vue3 项目
- `ts` - TypeScript Vue3 项目

## 如何使用本模板

1. 使用 [tiged](https://github.com/tiged/tiged) 拉取代码，比如 `tiged ZiqiangStudio/zq_vue_template#ts my-vue-project`
2. 将 [package.json](./package.json) 中的 `name` 改成响亮的项目名
3. 执行 `pnpm install` 安装依赖
4. 执行 `pnpm dev` 在本地运行项目

如果能成功看到浏览器中的 Vite + Vue 字样，则代表项目成功搭建 🎉

## 常用命令

- `commit` 使用 commitizen 提交代码
- `dev` 在本地运行项目
- `build` 打包项目至 `dist`
- `preview` 预览 `dist` 内打包后资源
- `lint` 检查代码是否符合规范
- `lint --fix` 检查代码是否符合规范，并自动修复

_对本模板有任何问题或者建议可以通过 issue、email、钉钉、QQ 联系我_
