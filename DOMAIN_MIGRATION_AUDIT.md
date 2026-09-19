# DOMAIN_MIGRATION_AUDIT.md — 域名迁移与 SEO URL 一致性审计公报

**迁移时间**：2026-09-18  
**旧域名 (Old Domain)**：`jichangtizi.com` (`https://jichangtizi.com`)  
**正式新域名 (New Domain)**：`jichangtizi.xyz` (`https://jichangtizi.xyz`)  
**迁移模式**：PRE-LAUNCH CLEAN DOMAIN CUTOVER (上线前纯净域名切换，无 SEO 历史包袱)  

---

## 一、 核心迁移维度逐项校验表

| 检查维度 | 预期标准 | 源码与产物实际配置状态 | 单项判定 |
| :--- | :--- | :--- | :--- |
| **Astro Site URL** | `site: 'https://jichangtizi.xyz'` | 已在 `astro.config.mjs` 完成更新 | **PASS** |
| **Canonical Base URL** | `https://jichangtizi.xyz/...` | `BaseLayout.astro` 与全部 Markdown 规范链接已更新为 `.xyz` | **PASS** |
| **Open Graph (og:url / og:image)** | 绝对路径指向 `https://jichangtizi.xyz/og-banner.svg` | SVG Banner 与全局 OG 元数据统一采用 `.xyz` | **PASS** |
| **Structured Data (JSON-LD)** | Organization & WebSite `@id` / `url` 为 `.xyz` | `BaseLayout.astro` Schema 统一采用 `siteUrl` 动态注入 | **PASS** |
| **Sitemap 配置** | 生成全部 URL 包含 `https://jichangtizi.xyz` | `sitemap-index.xml` / `sitemap-0.xml` 100% 为 `.xyz` | **PASS** |
| **robots.txt 爬虫入口** | `Sitemap: https://jichangtizi.xyz/sitemap-index.xml` | `robots.txt.ts` 默认回退与产物已更新 | **PASS** |
| **RSS / Feed** | 无独立 RSS (若有统一使用新域) | 本项目无需独立 RSS 订阅源 | **PASS** |
| **站内链接规范 (Internal Links)** | 全部保持相对路径 (`/airports/`, `/blog/...`) | 0 处站内绝对旧域名硬编码 | **PASS** |
| **Affiliate 跳转 (/go/[slug])** | 内部继续维持相对路径，外链属性含 `sponsored` | 相对路径承接，外部真实联盟参数完好保留 | **PASS** |
| **Footer 版权声明** | `© 2026 机场梯子 (jichangtizi.xyz)` | `GazetteFooter.astro` 版权标识已更新 | **PASS** |
| **About 档案所说明页** | 介绍文字与联络邮箱指向 `jichangtizi.xyz` | `about.astro` 中品牌标识与邮箱已同步更新 | **PASS** |
| **Contact 勘误页面** | 主编辑邮箱为 `editor@jichangtizi.xyz` | `contact.astro` 已同步更新 | **PASS** |
| **Cloudflare Pages 部署配置** | 生产域名绑定 `jichangtizi.xyz`，无 pages.dev 泄漏 | 构建产物完全解耦环境依赖 | **PASS** |
| **旧域名残留扫描 (Zero Tolerance)** | 源码与 `dist` 产物中旧域名引用数 = 0 | 机器全量扫描验证已清零 | **PASS** |

---

## 二、 关键产物实际抽检明细

1. **Sitemap 抽检 (`dist/sitemap-index.xml` & `dist/sitemap-0.xml`)**
   - 索引地址：`https://jichangtizi.xyz/sitemap-index.xml`
   - 子表地址：`https://jichangtizi.xyz/sitemap-0.xml`
   - 条目地址：`https://jichangtizi.xyz/`, `https://jichangtizi.xyz/airports/`, `https://jichangtizi.xyz/blog/...`
   - 旧域名出现次数：**0**

2. **Robots.txt 抽检 (`dist/robots.txt`)**
   - 爬虫入口：`Allow: /`, `Disallow: /go/`
   - 索引地图：`Sitemap: https://jichangtizi.xyz/sitemap-index.xml`
   - 旧域名出现次数：**0**

3. **核心页面 Canonical & Open Graph 抽检**
   - 首页 (`dist/index.html`): `<link rel="canonical" href="https://jichangtizi.xyz/">`
   - 机场库 (`dist/airports/index.html`): `<link rel="canonical" href="https://jichangtizi.xyz/airports/">`
   - 机场档案页 (`dist/airport/sogoyun/index.html`): `<link rel="canonical" href="https://jichangtizi.xyz/airport/sogoyun/">`
   - 专刊文章页 (`dist/blog/how-to-choose-airport/index.html`): `<link rel="canonical" href="https://jichangtizi.xyz/blog/how-to-choose-airport/">`
   - 旧域名出现次数：**0**

4. **结构化数据 Schema 抽检**
   - Organization: `url: "https://jichangtizi.xyz"`, `logo: "https://jichangtizi.xyz/favicon.svg"`
   - WebSite: `url: "https://jichangtizi.xyz"`
   - 旧域名出现次数：**0**

---

## 三、 域名迁移最终审计判定

- **Old Domain References Remaining (dist)**: **0**
- **Old Domain References Remaining (src)**: **0**
- **New Canonical Base URL**: `https://jichangtizi.xyz`
- **New Sitemap URL**: `https://jichangtizi.xyz/sitemap-index.xml`
- **Migration Status**: **100% COMPLETE & VERIFIED PASS**
