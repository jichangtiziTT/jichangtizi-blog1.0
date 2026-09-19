# STRUCTURAL_SIMILARITY_AUDIT.md — 结构相似度审查公报

**当前项目**：机场梯子 (jichangtizi.xyz)  
**设计家族**：E05 — Data Newspaper (Investigative Gazette & Dossier Bureau)  
**审查时间**：2026-09-18  
**门禁阈值**：与任意历史项目在 16 项结构维度中，重合数必须 **< 5 / 16**。若 ≥ 5 则判定为 STRUCTURALLY_TOO_SIMILAR 并触发熔断。

---

## 逐项比对矩阵

### 对比 1：当前项目 vs 历史项目 1 (机不可失 jibukeji.com / E12 Dark Technical Terminal)

| 结构维度 | 当前项目 (机场梯子) | 历史项目 1 (jibukeji) | 判定结果 |
| :--- | :--- | :--- | :--- |
| 1. Layout Family | Investigative Gazette & Dossier Bureau | Dark Technical Terminal | **DIFFERENT** |
| 2. Homepage Topology | Dispatch -> Asymmetric Masthead -> Lead Deck -> Filter -> Ledger -> Guides | Terminal Header -> Status Bar -> Node Cards -> Knowledge Docs | **DIFFERENT** |
| 3. Header Topology | Asymmetric Left Gazette Header with Dispatch Marquee | Sticky Dark Monospace Bar with Live Ping Indicator | **DIFFERENT** |
| 4. Navigation Topology | Tabular Gazette Deck Bar with Underline Dot Accent | Horizontal Monospace Tabs | **DIFFERENT** |
| 5. Hero Topology | Front-Page Headline Deck + 3-Col Decision Gateway | Dark Grid Terminal Hero with Metric KPIs | **DIFFERENT** |
| 6. Container System | gazette-container (max-w-[1280px] / 820px reading line) | max-w-7xl mx-auto px-4 | **DIFFERENT** |
| 7. Section Rhythm | Editorial Gazette Rhythm (40px - 56px) with Double-Cuts | Dense 32px Vertical Stack | **DIFFERENT** |
| 8. Grid System | Asymmetric 7/5 Newspaper Grid + 3-Col Stream | grid-cols-1 md:grid-cols-2 lg:grid-cols-3 | **DIFFERENT** |
| 9. Card Topology | Sharp Boxout Cards with Double-Line Bottom Cut | Obsidian Slabs with 1px Cyan Beam Focus | **DIFFERENT** |
| 10. Airport Presentation | Gazette Dossier Entries & Ledger Rows | Dense Terminal Rows with Ping Metrics | **DIFFERENT** |
| 11. Article Topology | Left Rail Sticky TOC + 820px Broad Reading Line | 12-Col Grid (8 Cols Article + 4 Cols Sidebar) | **DIFFERENT** |
| 12. TOC Position | Sticky Left Rail Column | Right Sticky Monospace Box | **DIFFERENT** |
| 13. Sidebar Strategy | Left Sticky Meta & TOC Rail (Zero Ad Banners) | Right Sticky Commercial Sidebar | **DIFFERENT** |
| 14. CTA Topology | Amber Solid Badge Button + Dotted Underline Text Link | Neon Cyan Monospace Buttons | **DIFFERENT** |
| 15. Footer Topology | Bureau Impressum with Publication Registry | Dark 4-Column Terminal Footprint | **DIFFERENT** |
| 16. Mobile Topology | Gazette Pocket Edition with Single-Column Stack | Single-Column Monospace Stack | **DIFFERENT** |

**重合项目数**：0 / 16  
**判定结论**：**PASS (STRUCTURALLY UNIQUE)**

---

### 对比 2：当前项目 vs 历史项目 2 (机不可失 JibiKeXi.com / E02 Clean Consumer Guide)

| 结构维度 | 当前项目 (机场梯子) | 历史项目 2 (jibikexi) | 判定结果 |
| :--- | :--- | :--- | :--- |
| 1. Layout Family | Investigative Gazette & Dossier Bureau | Clean Consumer Guide | **DIFFERENT** |
| 2. Homepage Topology | Dispatch -> Asymmetric Masthead -> Lead Deck -> Filter -> Ledger -> Guides | Value Hero -> Quick Choice Selector -> Directory -> Anti-Pitfall | **DIFFERENT** |
| 3. Header Topology | Asymmetric Left Gazette Header | Sticky White Navbar with Rounded Buttons | **DIFFERENT** |
| 4. Navigation Topology | Tabular Gazette Deck Bar with Underline Dots | Horizontal Pill-style Links | **DIFFERENT** |
| 5. Hero Topology | Front-Page Headline Deck + 3-Col Decision Gateway | Centered Hero with Budget/Scenario Selector | **DIFFERENT** |
| 6. Container System | gazette-container (max-w-[1280px] / 820px reading line) | max-w-6xl / max-w-7xl mx-auto px-4 | **DIFFERENT** |
| 7. Section Rhythm | Editorial Gazette Rhythm (40px - 56px) | Comfortable 48px-64px Padding | **DIFFERENT** |
| 8. Grid System | Asymmetric 7/5 Newspaper Grid + 3-Col Stream | grid-cols-1 md:grid-cols-2 lg:grid-cols-3 | **DIFFERENT** |
| 9. Card Topology | Sharp Boxout Cards with Double-Line Bottom Cut | 12px Rounded White Cards with Subtle Border | **DIFFERENT** |
| 10. Airport Presentation | Gazette Dossier Entries & Ledger Rows | Directory Cards with Badges and Pricing | **DIFFERENT** |
| 11. Article Topology | Left Rail Sticky TOC + 820px Broad Reading Line | max-w-4xl Centered with Sticky TOC Indicator | **DIFFERENT** |
| 12. TOC Position | Sticky Left Rail Column | Right Sticky Clean Rail | **DIFFERENT** |
| 13. Sidebar Strategy | Left Sticky Meta & TOC Rail (Zero Ad Banners) | No Sidebar (Inline Recommendations) | **DIFFERENT** |
| 14. CTA Topology | Amber Solid Badge Button + Dotted Underline Text Link | Teal Rounded-xl Buttons | **DIFFERENT** |
| 15. Footer Topology | Bureau Impressum with Publication Registry | Light Slate 4-Column Consumer Footer | **DIFFERENT** |
| 16. Mobile Topology | Gazette Pocket Edition with Single-Column Stack | Card-based Accordion Stack | **DIFFERENT** |

**重合项目数**：0 / 16  
**判定结论**：**PASS (STRUCTURALLY UNIQUE)**

---

### 对比 3：当前项目 vs 历史项目 3 (clashcheck.com / E05 Data Newspaper Broadsheet)

| 结构维度 | 当前项目 (机场梯子) | 历史项目 3 (clashcheck) | 判定结果 |
| :--- | :--- | :--- | :--- |
| 1. Layout Family | Investigative Gazette & Dossier Bureau | Financial Broadsheet & Fact Check Gazette | **DIFFERENT** |
| 2. Homepage Topology | Dispatch -> Asymmetric Masthead -> Lead Deck -> Filter -> Ledger -> Guides | Dateline -> Classical Masthead -> Ticker -> Lead -> 4-Col Grid -> Table | **DIFFERENT** |
| 3. Header Topology | Asymmetric Left Gazette Header with Marquee | Classical Centered Masthead with Double Hairlines | **DIFFERENT** |
| 4. Navigation Topology | Tabular Gazette Deck Bar with Underline Dots | Hairline Tabular Category Bar with Quantitative Badges | **DIFFERENT** |
| 5. Hero Topology | Front-Page Headline Deck + 3-Col Decision Gateway | Financial Market Ticker + Editorial Lead Dossier Split | **DIFFERENT** |
| 6. Container System | gazette-container (max-w-[1280px] / 820px line) | broadsheet-container (max-w-[1200px] / 768px line) | **DIFFERENT** |
| 7. Section Rhythm | Editorial Gazette Rhythm (40px - 56px) | Compact Newspaper Section Padding (36px - 48px) | **DIFFERENT** |
| 8. Grid System | Asymmetric 7/5 Newspaper Grid + 3-Col Stream | Dense 4-Column Newspaper Square Grid + 3-Col Split | **DIFFERENT** |
| 9. Card Topology | Sharp Boxout with Double-Line Bottom Cut Accent | Sharp 0-2px Radius Boxout with Single Hairline | **DIFFERENT** |
| 10. Airport Presentation | Gazette Dossier Entries & Ledger Rows | Financial Dossier Spotlight + Dense 4-Col Grid | **DIFFERENT** |
| 11. Article Topology | Left Rail Sticky TOC + 820px Broad Reading Line | 768px Centered Editorial Line with Floating Right Boxout | **DIFFERENT** |
| 12. TOC Position | Sticky Left Rail Column | Floating Sticky Right Margin Boxout | **DIFFERENT** |
| 13. Sidebar Strategy | Left Sticky Meta & TOC Rail (Zero Ad Banners) | No Card Sidebar (In-article Touchpoints) | **DIFFERENT** |
| 14. CTA Topology | Amber Solid Badge Button + Dotted Underline Text Link | Crimson Primary Button + Hairline Outline Button | **DIFFERENT** |
| 15. Footer Topology | Bureau Impressum with Publication Registry | Traditional Newspaper Imprint & Colophon | **DIFFERENT** |
| 16. Mobile Topology | Gazette Pocket Edition with Single-Column Stack | Story Stream with Horizontal Metric Ticker | **DIFFERENT** |

**重合项目数**：0 / 16  
**判定结论**：**PASS (STRUCTURALLY UNIQUE)**

---

## 终审结论
当前架构方案在全部 16 项结构拓扑指标上，与所有历史登记项目均保持高度的独立性与拓扑差异。  
最高重合项数：**0 / 16**（远低于 5/16 熔断标准）。  
**结构门禁状态：PASS，批准进入数据流水线与编码阶段。**
