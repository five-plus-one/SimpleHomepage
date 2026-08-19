import { siteConfig as config } from "./site.config.js";

const icons = {
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7M8 12h9"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 19c-4 1.2-4-2-5.5-2.5M15.5 21v-3.1a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6A4.6 4.6 0 0 0 19 6.6 4.3 4.3 0 0 0 18.9 3s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.1 0C7 2.7 6 3 6 3a4.3 4.3 0 0 0-.1 3.6 4.6 4.6 0 0 0-1.2 3.2c0 4.7 2.8 5.7 5.5 6a2.7 2.7 0 0 0-.8 2.1V21"/></svg>',
  wechat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.2C10.2 2.4 4 4.2 4 8.7c0 2.4 2.1 4.3 4.8 4.8l-.6 2.1 2.8-1.6c.8.2 1.7.3 2.5.2"/><path d="M12.4 12.1c0-3.2 3-5.6 6.3-5.1 2.2.3 3.9 1.8 3.9 4 0 3-3 5.1-6 4.3l-2.5 1.4.5-1.9c-1.4-.8-2.2-1.7-2.2-2.8Z"/><path d="M8.2 8.7h.01M11.6 8.7h.01M16.7 11.5h.01M19.5 11.5h.01"/></svg>',
  qq: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="10" r="5.5"/><path d="M14.9 14.1 20 20M11 7.5v5M8.5 10h5"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
  screen: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M8 3v3M16 3v3M9 12h.01M15 12h.01"/></svg>',
  link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13.8a4 4 0 0 0 5.7.1l2.1-2.1a4 4 0 0 0-5.7-5.7l-1.2 1.2M14 10.2a4 4 0 0 0-5.7-.1l-2.1 2.1a4 4 0 0 0 5.7 5.7l1.2-1.2"/></svg>',
  blocks: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="8.5" y="13" width="7" height="7" rx="1"/></svg>',
  paper: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/></svg>',
  archive: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v13H4zM3 4h18v3H3zM10 12h4"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z"/></svg>',
  people: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 20c.4-3.5 2.3-5.3 5.5-5.3s5.1 1.8 5.5 5.3M16 5.5a2.5 2.5 0 0 1 0 5M16.5 14.8c2.3.2 3.7 1.9 4 5.2"/></svg>',
  cube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 19 6v5c0 4.3-2.7 7.8-7 10-4.3-2.2-7-5.7-7-10V6Z"/><path d="m8.5 12 2.2 2.2 4.8-4.8"/></svg>',
};

const external = (url) => /^https?:/i.test(url) ? ' target="_blank" rel="noreferrer"' : "";
const safe = (text) => String(text).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
const icon = (name) => {
  if (typeof name === "object" && name?.paths) {
    const viewBox = safe(name.viewBox || "0 0 24 24");
    return `<svg viewBox="${viewBox}" aria-hidden="true">${name.paths.map((path) => `<path d="${safe(path)}"/>`).join("")}</svg>`;
  }
  return icons[name] || icons.link;
};
const sourceUrl = (source) => {
  if (typeof source === "string") return source;
  if (!source) return "";
  if (source.url) return source.url;
  if (source.local?.startsWith("./public/")) return source.local.slice("./public".length);
  return source.local || "";
};
const themedAsset = (asset, mode) => sourceUrl(typeof asset === "string" ? asset : asset?.[mode] || asset?.light || asset?.dark || asset);
const avatarFor = (mode) => themedAsset(config.profile.avatar, mode);
// 压力数据只允许在 Vite 开发服务器中启用，生产构建会固定关闭。
const stressMode = import.meta.env.DEV && new URLSearchParams(window.location.search).has("stress");
const stressItems = (kind) => Array.from({ length: 14 }, (_, index) => ({
  label: `${kind} 压力测试条目 ${String(index + 1).padStart(2, "0")}：用于验证极长中英文混合名称不会挤压布局或截断交互区域`,
  description: "this-is-an-intentionally-very-long-description-for-layout-and-rendering-performance-validation.example.com",
  url: "https://example.com/",
  icon: kind === "项目" ? "spark" : "paper",
}));
let renderedCollections = {};

function resourceList(items) {
  return items.map(({ label, description, url, icon: iconName }) => `
    <a class="resource" href="${url}"${external(url)} title="${safe(label)}${description ? ` — ${safe(description)}` : ""}">
      <span class="resource-icon">${icon(iconName)}</span>
      <span><strong>${safe(label)}</strong><small>${safe(description || "")}</small></span>
      <span class="outbound">${icon("arrow")}</span>
    </a>`).join("");
}

function resourceGroup(title, items, key, limit) {
  const preview = items.slice(0, limit);
  const remaining = items.length - preview.length;
  return `<div class="content-group"><h2>${title}${stressMode ? " · 压力测试" : ""}</h2>${resourceList(preview)}${remaining > 0 ? `<button class="group-more" data-collection="${key}">查看全部 <span>${items.length}</span>${icon("arrow")}</button>` : ""}</div>`;
}

function socialLink(item) {
  return `<a class="social" href="${item.url}"${external(item.url)} aria-label="${safe(item.label)}">
    <span>${icon(item.icon)}</span><em>${safe(item.label)}</em>
  </a>`;
}

function render() {
  const sites = stressMode ? [...(config.sites || []), ...stressItems("站点")] : (config.sites || []);
  const projects = stressMode ? [...(config.projects || []), ...stressItems("项目")] : (config.projects || []);
  // 超量分组使用更小的概览预算，避免任意视口比例下与页脚互相挤压。
  const isNarrow = window.matchMedia("(max-width: 720px)").matches;
  const previewLimitFor = (items) => items.length > 4 ? 2 : (isNarrow ? 3 : 4);
  const sitesPreviewLimit = previewLimitFor(sites);
  const projectsPreviewLimit = previewLimitFor(projects);
  renderedCollections = { sites: sites || [], projects: projects || [] };
  const compliance = [config.compliance?.icp, config.compliance?.publicSecurity].filter((item) => item?.label);
  const complianceHtml = compliance.length ? `<div class="compliance">${compliance.map((item, index) => `<a href="${item.url}" target="_blank" rel="noreferrer">${index === 1 ? icon("shield") : ""}${safe(item.label)}</a>`).join("")}</div>` : "";
  const poweredBy = config.poweredBy?.show !== false && config.poweredBy?.url ? `<a class="repository" href="${config.poweredBy.url}" target="_blank" rel="noreferrer">${icon("github")}由 SimpleHomepage 驱动</a>` : "";

  document.documentElement.style.setProperty("--accent-light", config.theme.accent.light);
  document.documentElement.style.setProperty("--accent-dark", config.theme.accent.dark);
  document.title = config.seo?.title || config.siteName || config.profile.name;
  document.querySelector("#app").innerHTML = `
    <section class="page-shell">
      <header><button id="theme-toggle" class="theme-toggle" aria-label="切换颜色模式">${icon("sun")}<span>浅色</span></button></header>
      <div class="main-grid">
        <section class="identity" aria-label="个人介绍">
          <img class="avatar" src="${avatarFor("light")}" alt="${safe(config.profile.name)}的头像" />
          <p class="eyebrow">${safe(config.profile.handle)}</p>
          <h1>${safe(config.profile.name)}</h1>
          <p class="introduction">${safe(config.profile.introduction)}</p>
          <p class="quote"><span id="typed-quote"></span><i aria-hidden="true"></i></p>
          <section class="social-section"><p>联系</p><div class="social-wrap"><nav class="socials" aria-label="社交账号">${config.socials.map(socialLink).join("")}</nav><button id="more-button" class="more-button" aria-expanded="false" hidden>更多 <span></span></button><div id="more-popover" class="more-popover" aria-hidden="true"></div></div></section>
        </section>
        <section class="content" aria-label="站点与项目">
          <div id="content-overview" class="content-view content-overview">
            ${sites?.length ? resourceGroup("站点", sites, "sites", sitesPreviewLimit) : ""}
            ${projects?.length ? resourceGroup("项目", projects, "projects", projectsPreviewLimit) : ""}
          </div>
          <div id="content-detail" class="content-view content-detail" aria-hidden="true">
            <div class="detail-heading"><button id="collection-back" class="collection-back">${icon("back")}<span>返回</span></button><h2 id="collection-title"></h2></div>
            <div id="collection-list" class="collection-list"></div>
          </div>
        </section>
      </div>
      <footer><div class="footer-bottom">${complianceHtml}<span class="footer-meta">${poweredBy}© ${new Date().getFullYear()} ${safe(config.profile.name)}</span></div></footer>
    </section>`;
}

function setupTheme() {
  const key = "simple-homepage-theme";
  const stored = localStorage.getItem(key) || config.theme.defaultMode;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const resolve = (mode) => mode === "system" ? (media.matches ? "dark" : "light") : mode;
  let mode = stored;
  const apply = () => {
    const resolved = resolve(mode);
    document.documentElement.dataset.theme = resolved;
    document.querySelector("meta[name='theme-color']").content = resolved === "dark" ? "#121212" : "#f6f6f4";
    const button = document.querySelector("#theme-toggle");
    button.innerHTML = `${icon(resolved === "dark" ? "moon" : "sun")}<span>${resolved === "dark" ? "深色" : "浅色"}</span>`;
    const avatar = document.querySelector(".avatar");
    if (avatar) avatar.src = avatarFor(resolved);
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = themedAsset(config.favicon, resolved);
  };
  apply();
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    mode = resolve(mode) === "dark" ? "light" : "dark";
    localStorage.setItem(key, mode);
    apply();
  });
  media.addEventListener("change", () => { if (mode === "system") apply(); });
}

function setupQuote() {
  const target = document.querySelector("#typed-quote");
  const quotes = config.quotes?.filter(Boolean) || [];
  if (!quotes.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { target.textContent = quotes[0]; return; }
  let quoteIndex = 0, charIndex = 0, deleting = false;
  const tick = () => {
    const quote = quotes[quoteIndex];
    target.textContent = quote.slice(0, charIndex);
    let delay = deleting ? 55 : 125;
    if (!deleting && charIndex < quote.length) charIndex++;
    else if (!deleting) { deleting = true; delay = 2600; }
    else if (charIndex > 0) charIndex--;
    else { deleting = false; quoteIndex = (quoteIndex + 1) % quotes.length; delay = 600; }
    window.setTimeout(tick, delay);
  };
  tick();
}

render();
setupTheme();
setupQuote();
function setupSocialOverflow() {
  const wrap = document.querySelector(".social-wrap");
  const nav = document.querySelector(".socials");
  const button = document.querySelector("#more-button");
  const popover = document.querySelector("#more-popover");
  const links = [...nav.querySelectorAll(".social")];
  const close = () => {
    popover.classList.remove("is-open");
    popover.setAttribute("aria-hidden", "true");
    button.setAttribute("aria-expanded", "false");
  };
  const update = () => {
    close();
    links.forEach((link) => { link.hidden = false; });
    button.hidden = true;
    if (nav.scrollWidth > nav.clientWidth) {
      button.hidden = false;
      while (nav.scrollWidth > nav.clientWidth && links.some((link) => !link.hidden)) {
        [...links].reverse().find((link) => !link.hidden).hidden = true;
      }
    }
    const hiddenItems = links.filter((link) => link.hidden);
    button.querySelector("span").textContent = `+${hiddenItems.length}`;
    popover.innerHTML = hiddenItems.map((link) => {
      const clone = link.cloneNode(true);
      clone.hidden = false;
      return clone.outerHTML;
    }).join("");
    if (!hiddenItems.length) button.hidden = true;
  };
  button.addEventListener("click", () => {
    const opening = !popover.classList.contains("is-open");
    popover.classList.toggle("is-open", opening);
    popover.setAttribute("aria-hidden", String(!opening));
    button.setAttribute("aria-expanded", String(opening));
  });
  document.addEventListener("click", (event) => { if (!wrap.contains(event.target)) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
  new ResizeObserver(update).observe(wrap);
  update();
}
setupSocialOverflow();
function setupCollectionPanel() {
  const content = document.querySelector(".content");
  const overview = document.querySelector("#content-overview");
  const detail = document.querySelector("#content-detail");
  const title = document.querySelector("#collection-title");
  const list = document.querySelector("#collection-list");
  const backButton = document.querySelector("#collection-back");
  const close = () => {
    content.classList.remove("is-detail");
    overview.setAttribute("aria-hidden", "false");
    detail.setAttribute("aria-hidden", "true");
  };
  document.querySelectorAll("[data-collection]").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.collection;
    title.textContent = key === "sites" ? "全部站点" : "全部项目";
    list.innerHTML = resourceList(renderedCollections[key]);
    list.scrollTop = 0;
    content.classList.add("is-detail");
    overview.setAttribute("aria-hidden", "true");
    detail.setAttribute("aria-hidden", "false");
    backButton.focus();
  }));
  backButton.addEventListener("click", close);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
}
setupCollectionPanel();
