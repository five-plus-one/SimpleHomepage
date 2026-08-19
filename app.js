import { siteConfig as config } from "./site.config.js";

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 19c-4 1.2-4-2-5.5-2.5M15.5 21v-3.1a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6A4.6 4.6 0 0 0 19 6.6 4.3 4.3 0 0 0 18.9 3s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.1 0C7 2.7 6 3 6 3a4.3 4.3 0 0 0-.1 3.6 4.6 4.6 0 0 0-1.2 3.2c0 4.7 2.8 5.7 5.5 6a2.7 2.7 0 0 0-.8 2.1V21"/></svg>',
  wechat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.8 9.6c0-3.1-3.2-5.6-7.2-5.6S2.4 6.5 2.4 9.6s3.2 5.6 7.2 5.6c.7 0 1.4-.1 2-.3l2.5 1.4-.6-2.1c.8-.7 1.4-1.6 1.7-2.6"/><path d="M13.4 12.1c0 2.5 2.7 4.5 6 4.5.5 0 1-.1 1.5-.2l1.7 1-.4-1.5c.6-.6.9-1.3.9-2.1 0-2.5-2.7-4.5-6-4.5-.7 0-1.3.1-1.9.3"/><path d="M7 9.3h.01M11.8 9.3h.01M17 12.9h.01M20.3 12.9h.01"/></svg>',
  qq: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 17.5c-1.4.1-2.8.7-3.8 1.7 1.7.6 3.5.8 5.3.5M15.5 17.5c1.4.1 2.8.7 3.8 1.7-1.7.6-3.5.8-5.3.5M8 14.5c-1-1.4-1.4-3.1-1.2-4.8C7 5.8 9.2 3 12 3s5 2.8 5.2 6.7c.2 1.7-.2 3.4-1.2 4.8l.6 3.3c-1.5.8-3 .9-4.6.2-1.6.7-3.1.6-4.6-.2l.6-3.3Z"/><path d="M9.5 10.4h.01M14.5 10.4h.01"/></svg>',
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

const icon = (name) => icons[name] || icons.link;
const external = (url) => /^https?:/i.test(url) ? ' target="_blank" rel="noreferrer"' : "";
const safe = (text) => String(text).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);

function resourceList(items) {
  return items.map(({ label, description, url, icon: iconName }) => `
    <a class="resource" href="${url}"${external(url)}>
      <span class="resource-icon">${icon(iconName)}</span>
      <span><strong>${safe(label)}</strong><small>${safe(description || "")}</small></span>
      <span class="outbound">${icon("arrow")}</span>
    </a>`).join("");
}

function socialLink(item) {
  return `<a class="social" href="${item.url}"${external(item.url)} aria-label="${safe(item.label)}">
    <span>${icon(item.icon)}</span><em>${safe(item.label)}</em>
  </a>`;
}

function render() {
  const compliance = [config.compliance?.icp, config.compliance?.publicSecurity].filter((item) => item?.label);
  const complianceHtml = compliance.length ? `<div class="compliance">${compliance.map((item, index) => `<a href="${item.url}" target="_blank" rel="noreferrer">${index === 1 ? icon("shield") : ""}${safe(item.label)}</a>`).join("")}</div>` : "";
  const repository = config.repository ? `<a class="repository" href="${config.repository}" target="_blank" rel="noreferrer">${icon("github")}本项目 GitHub</a>` : "";

  document.documentElement.style.setProperty("--accent-light", config.theme.accent.light);
  document.documentElement.style.setProperty("--accent-dark", config.theme.accent.dark);
  document.title = `${config.profile.name} · Simple`;
  document.querySelector("#app").innerHTML = `
    <section class="page-shell">
      <header><button id="theme-toggle" class="theme-toggle" aria-label="切换颜色模式">${icon("sun")}<span>浅色</span></button></header>
      <div class="main-grid">
        <section class="identity" aria-label="个人介绍">
          <div class="avatar-orbit"><img class="avatar" src="${config.profile.avatar}" alt="${safe(config.profile.name)}的头像" /></div>
          <p class="eyebrow">${safe(config.profile.handle)}</p>
          <h1>${safe(config.profile.name)}</h1>
          <p class="introduction">${safe(config.profile.introduction)}</p>
          <p class="quote"><span aria-hidden="true">“</span><span id="typed-quote"></span><i aria-hidden="true"></i></p>
          <section class="social-section"><p>联系</p><div class="social-wrap"><nav class="socials" aria-label="社交账号">${config.socials.map(socialLink).join("")}</nav><button id="more-button" class="more-button" aria-expanded="false" hidden>更多 <span></span></button><div id="more-popover" class="more-popover" aria-hidden="true"></div></div></section>
        </section>
        <section class="content" aria-label="站点与项目">
          ${config.sites?.length ? `<div class="content-group"><h2>站点</h2>${resourceList(config.sites)}</div>` : ""}
          ${config.projects?.length ? `<div class="content-group"><h2>项目</h2>${resourceList(config.projects)}</div>` : ""}
        </section>
      </div>
      <footer><div class="footer-bottom">${complianceHtml}<span class="footer-meta">${repository}© ${new Date().getFullYear()} ${safe(config.profile.name)}</span></div></footer>
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
    popover.innerHTML = hiddenItems.map((link) => link.outerHTML.replace(" hidden=\"\"", "")).join("");
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
