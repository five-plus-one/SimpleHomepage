# 配置指南

所有站点内容集中在项目根目录的 [`site.config.js`](../site.config.js)。修改后执行 `npm run build`，将生成的 `dist/` 目录部署到静态服务器即可。

## 最小配置

下面是一个可运行的最小示例。未填写的 `sites`、`projects`、`socials`、`compliance` 区块会自动隐藏。

```js
export const siteConfig = {
  siteName: "小林的主页",
  profile: {
    name: "小林",
    handle: "lin",
    avatar: "https://example.com/avatar.png",
    introduction: "设计师与前端开发者。",
  },
  quotes: ["少即是多。"],
  sites: [],
  projects: [],
  socials: [],
  theme: {
    accent: { light: "#1f6f54", dark: "#9bc6aa" },
    defaultMode: "system",
  },
};
```

## 基础资料

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `siteName` | `string` | 站点名称；未设置时使用 `profile.name`。 |
| `profile.name` | `string` | 页面主标题与默认作者名。 |
| `profile.handle` | `string` | 显示在姓名上方的短账号。 |
| `profile.introduction` | `string` | 个人介绍；建议 1–2 句。 |
| `quotes` | `string[]` | 一言数组，会以打字机效果轮播。 |

系统偏好“减少动态效果”开启时，一言会直接展示第一条，不播放动画。

## 图片：远程或本地

`avatar` 和 `favicon` 都支持远程 URL、本地文件、单一图片或浅深色两套图片。

远程图片：

```js
profile: {
  avatar: { url: "https://cdn.example.com/avatar.png" }
},
favicon: { url: "https://cdn.example.com/favicon.png" },
```

本地图片请放入 `public/` 目录。Vite 会在构建时将它们原样复制到 `dist/`；配置中使用 `./public/` 开头的路径：

```text
public/
  images/avatar-light.png
  images/avatar-dark.png
  favicon.svg
```

```js
profile: {
  avatar: {
    light: { local: "./public/images/avatar-light.png" },
    dark: { local: "./public/images/avatar-dark.png" },
  }
},
favicon: {
  light: { local: "./public/favicon.svg" },
  dark: { local: "./public/favicon.svg" },
},
```

如果浅色和深色使用同一图片，两个字段填写同一来源即可。单个字符串 URL 也兼容旧配置：`avatar: "https://example.com/avatar.png"`。

## 主题

页面基础色固定为黑、白、灰；`accent` 是唯一允许的主题强调色，用于链接、光标与焦点状态。

```js
theme: {
  accent: {
    light: "#FD8B07",
    dark: "#FD8B07",
  },
  defaultMode: "system", // system | light | dark
},
```

`system` 会跟随浏览器/系统色彩偏好。用户手动切换后，选择会保存在当前浏览器中。

## SEO 与分享信息

SEO 信息在构建期写入最终 HTML，不依赖 JavaScript。建议完整填写：

```js
seo: {
  title: "小林｜个人主页",
  description: "小林的设计、项目与联系方式。",
  keywords: ["小林", "设计", "前端", "个人主页"],
  siteUrl: "https://example.com/",
  image: "https://example.com/share.png",
},
```

它会生成 `title`、description、keywords、canonical、Open Graph 和 Twitter Card 标签。`siteUrl` 应为最终公开的 HTTPS 地址。

## 站点、项目与社交链接

三个列表使用相同的数据结构：

```js
{
  label: "项目名称",
  description: "一句简短说明",
  url: "https://example.com",
  icon: "spark",
}
```

- `sites`：个人博客、网盘、社区或其他站点。
- `projects`：作品、开源项目、产品或案例。
- `socials`：GitHub、邮箱、即时通讯等联系方式。

首页会测量当前内容区的真实高度，并在站点与项目之间轮流添加预览项：尽可能多展示，下一项会造成溢出时才停止并显示“查看全部”。窗口尺寸、设备方向与字体加载变化后都会重新计算，因此不会以固定条数造成空白或裁切。在原内容区内可切换到带返回按钮的完整列表，不会弹出额外模态框。社交链接会根据实际宽度自动收纳，避免在窄屏裁切。

### 图标

内置图标名称包括：`github`、`wechat`、`qq`、`mail`、`screen`、`link`、`blocks`、`paper`、`archive`、`spark`、`people`、`cube`。

需要更多平台时，可以提供单色 SVG 路径：

```js
{
  label: "自定义平台",
  url: "https://example.com",
  icon: {
    viewBox: "0 0 24 24",
    paths: ["M6 4h12v16H6z", "M9 9v6M15 9v6"],
  },
}
```

该格式只接受 `viewBox` 和 `paths`，图标会自动继承主题色。

## 备案与项目署名

```js
compliance: {
  icp: { label: "京ICP备XXXXXXXX号", url: "https://beian.miit.gov.cn/" },
  publicSecurity: { label: "京公网安备XXXXXXXXXXXXXX号", url: "https://beian.mps.gov.cn/" },
},
poweredBy: {
  show: true,
  url: "https://github.com/your-name/simple-homepage",
},
```

备案项的 `label` 为空时不会显示。`poweredBy.show` 可设为 `false`；建议保留项目署名。

## 构建与部署

```bash
npm install
npm run build
```

上传 `dist/` 中的所有文件。若部署在子路径（例如 `https://example.com/home/`），请在 [vite.config.js](../vite.config.js) 中设置 Vite 的 `base`，并将 `seo.siteUrl` 更新为实际地址。

## 开发压力测试

仅开发服务器支持：

```bash
npm run dev
# 打开 http://localhost:5173/?stress=1
```

它会临时加入超长名称与大量条目，用于验证收纳、滚动和文本省略。生产构建固定关闭，部署后的 `?stress=1` 不会生效。
