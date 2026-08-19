# Simple Homepage

以一屏呈现个人简介、站点、项目、社交账号与可选备案信息的静态个人主页。项目使用 Vite 构建，产物可直接部署到任意静态服务器。

## 使用

```bash
npm install
npm run dev
npm run build
```

构建完成后，上传 `dist/` 内的全部文件到任意静态托管服务即可。修改 `site.config.js` 即可替换页面内容；它是通用字段示例，组件不依赖示例人物资料。

## 配置约定

- `siteName`：浏览器标签页与站点名称；未填写时使用姓名，不会强制添加产品名。
- `profile`：姓名、账号、头像与简介。`avatar` 可为单个 URL，也可分别填写 `light`、`dark` 两个 URL。
- `quotes`：一言列表；页面会以打字机效果轮播，用户偏好减少动态效果时展示第一条。
- `sites`、`projects`：紧凑链接列表，建议分别不超过 4、3 项，以保持一屏。
- `socials`：`primary: true` 的项目常驻；其余放在“更多”弹窗。
- `theme.accent`：唯一的用户主题色，分别设置浅色和深色值；默认 `system` 跟随浏览器。
- `compliance`：ICP备案及公网安备案均为可选；`label` 为空时不显示。
- `poweredBy`：可隐藏页脚的项目链接，但建议保留署名以支持项目。

项目中所有 UI 图标均为内置的原创单色 SVG 线稿，不需要下载图标库。
