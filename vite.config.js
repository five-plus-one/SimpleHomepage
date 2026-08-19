import { defineConfig } from "vite";
import { siteConfig } from "./site.config.js";

const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

const seo = siteConfig.seo || {};
const sourceUrl = (source) => {
  if (typeof source === "string") return source;
  if (!source) return "";
  if (source.url) return source.url;
  if (source.local?.startsWith("./public/")) return source.local.slice("./public".length);
  return source.local || "";
};
const themedSource = (asset, mode = "light") => sourceUrl(asset?.[mode] || asset);
const replacements = {
  __SITE_TITLE__: seo.title || siteConfig.siteName || siteConfig.profile.name,
  __SEO_DESCRIPTION__: seo.description || siteConfig.profile.introduction || "",
  __SEO_KEYWORDS__: Array.isArray(seo.keywords) ? seo.keywords.join(", ") : seo.keywords || "",
  __SEO_AUTHOR__: siteConfig.profile.name || "",
  __SEO_URL__: seo.siteUrl || "",
  __SEO_IMAGE__: seo.image || themedSource(siteConfig.profile.avatar) || "",
  __FAVICON__: themedSource(siteConfig.favicon) || "/favicon.ico",
};

export default defineConfig({
  plugins: [{
    name: "simple-homepage-seo",
    transformIndexHtml(html) {
      return Object.entries(replacements).reduce((result, [token, value]) => result.replaceAll(token, escapeHtml(value)), html);
    },
  }],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
