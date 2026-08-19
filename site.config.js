/**
 * 这是通用配置示例。替换内容即可生成另一位用户的主页；未填写的区块会自动隐藏。
 * accent 仅支持一组用户主题色，light/dark 分别用于浅色和深色模式。
 */
export const siteConfig = {
  // 站点标题可自由定义；不填写时使用 profile.name。
  siteName: "五加一",
  seo: {
    title: "五加一｜个人主页",
    description: "五加一的个人主页：编程、技术探索与作品链接。",
    keywords: ["五加一", "five-plus-one", "个人主页", "编程", "技术探索"],
    siteUrl: "https://five-plus-one.com/",
    image: "https://img.assets.five-plus-one.com/i/2025/02/06/1738833569469/08EA894CBCAE2A559E6E18CF4B2E700F-removebg-preview.png",
  },
  // 浏览器标签页小图标：可使用远程 url 或 public/ 内的 local 文件。
  favicon: {
    // light: { local: "./public/favicon.svg" },
    // dark: { local: "./public/favicon.svg" },
    light: { local: "https://img.assets.five-plus-one.com/i/2025/02/06/1738833569469/08EA894CBCAE2A559E6E18CF4B2E700F-removebg-preview.png" },
    dark: { local: "https://img.assets.five-plus-one.com/i/2025/02/06/1738833569469/08EA894CBCAE2A559E6E18CF4B2E700F-removebg-preview.png" },
  },
  profile: {
    name: "五加一",
    handle: "five-plus-one",
    // 支持远程 url 或 public/ 内的 local 文件，并可分别设置浅色与深色头像。
    avatar: {
      light: { url: "https://img.assets.five-plus-one.com/i/2025/02/06/1738833569469/08EA894CBCAE2A559E6E18CF4B2E700F-removebg-preview.png" },
      dark: { url: "https://img.assets.five-plus-one.com/i/2025/02/06/1738833569469/08EA894CBCAE2A559E6E18CF4B2E700F-removebg-preview.png" },
    },
    introduction: "河海大学计算机科学学生，持续探索编程、技术与有趣的想法。",
  },
  quotes: [
    "世界不死，理想不灭。",
    "The world endures, and ideals never fade.",
  ],
  sites: [
    { label: "博客", description: "五加一的星空", url: "https://blog.five-plus-one.com", icon: "paper" },
    { label: "五加一的网盘", description: "资源分享", url: "https://pan.five-plus-one.com", icon: "archive" },
    { label: "南通中学 2215", description: "班级站点", url: "https://ntzx2215.five-plus-one.com", icon: "people" },
    { label: "5PLUS1 SERVER", description: "Minecraft 服务器", url: "https://mc.five-plus-one.com", icon: "cube" },
  ],
  projects: [
    { label: "AI-Marker-Suite", description: "AI 阅卷自动批改助手", url: "https://aimarking.five-plus-one.com/", icon: "spark" },
    { label: "HoHai 110", description: "河海大学校庆交互网站", url: "https://hohai110.five-plus-one.com/", icon: "people" },
    { label: "Cardan", description: "卡尔丹圆运动学可视化", url: "https://cardan.five-plus-one.com/", icon: "cube" },
  ],
  socials: [
    { label: "GitHub", url: "https://r-l.ink/github", icon: "github", primary: true },
    { label: "微信", url: "https://r-l.ink/wx", icon: "wechat", primary: true },
    { label: "QQ", url: "https://r-l.ink/qq", icon: "qq", primary: true },
    { label: "邮箱", url: "mailto:5plus1@five-plus-one.com", icon: "mail", primary: true },
    { label: "Bilibili", url: "https://r-l.ink/bili", icon: "screen", primary: false },
    { label: "CCW", url: "https://r-l.ink/ccw", icon: "link", primary: false },
    { label: "GitBlock", url: "https://r-l.ink/gitblock", icon: "blocks", primary: false },
  ],
  theme: {
    accent: { light: "#FD8B07", dark: "#FD8B07" },
    defaultMode: "system", // 默认跟随浏览器：system | light | dark
  },
  compliance: {
    // 填写后才会显示；
    icp: { label: "苏ICP备2025155286号-1", url: "https://beian.miit.gov.cn/" },
    publicSecurity: { label: "苏公网安备32060202002665号", url: "https://beian.mps.gov.cn/#/query/webSearch?code=32060202002665" },
  },
  poweredBy: {
    // 建议保留署名以支持项目；设为 false 可隐藏。
    show: true,
    url: "https://github.com/five-plus-one/SimpleHomepage",
  },
};
