<div align="center">

# 自强 Studio Vue 3 前端工程模板

_✨ 武汉大学自强网络综合技术社团 · 前端标准模板 ✨_

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.x-brightgreen" alt="vue">
  <img src="https://img.shields.io/badge/Vite-5.x-blue" alt="vite">
  <img src="https://img.shields.io/badge/Node.js-24.x-green" alt="node">
  <img src="https://img.shields.io/badge/Package%20Manager-pnpm-orange" alt="pnpm">
  <br />
  <a href="https://github.com/ZiqiangStudio/zq_vue_template/actions/workflows/cicd.yml">
    <img src="https://github.com/ZiqiangStudio/zq_vue_template/actions/workflows/cicd.yml/badge.svg?branch=main" alt="CI/CD">
  </a>
</p>
</div>

## 🚀 快速建项

本项目为 **GitHub Template 仓库**：
1. 点击 GitHub 页面右上角的 **[Use this template]** -> **[Create a new repository]**。
2. 输入您的新项目仓库名（如 `zq_score_frontend`），完成创建。
3. 克隆新仓库到本地即可开始开发。

---

## 🛠️ 本地开发上手

### 1. 安装依赖

推荐使用 pnpm：

```bash
pnpm install
```

### 2. 启动本地开发服务

```bash
pnpm dev
```

### 3. 代码规范与打包

```bash
# 代码检查
pnpm lint

# 生产环境打包
pnpm build

# 本地预览打包产物
pnpm preview
```

---

## 📦 自动化部署 (zq-deploy)

项目内置 `.github/workflows/cicd.yml`，推送至 `main` 分支时将自动调用组织中央部署流水线 (`zq-deploy`) 完成 Docker 构建与发布。
- **容器环境**：多阶段构建，采用 Nginx Alpine 镜像托管 SPA 静态资源，支持 HTML5 History 路由与 Gzip 压缩。
- **端口契约**：容器内部标准监听 `80` 端口。
- **域名绑定**：由项目负责人在 `.github/workflows/cicd.yml` 中的 `domain:` 字段直接填入，直观透明。
