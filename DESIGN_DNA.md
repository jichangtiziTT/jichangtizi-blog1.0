# DESIGN_DNA.md — 机场梯子 (jichangtizi.com)

## 1. Project Positioning
- **定位**：面向中国普通网络用户与新手消费者的“调查新闻晚报与机场消费档案库”（Investigative Gazette & Consumer Dossier Bureau）。
- **设计家族**：E05 — Data Newspaper (数据新闻 / 信息报纸 / 行业信息终端)。
- **设计核心**：以严谨客观的“调查新闻社”视角，呈现机场真实规格、协议演进、线路鉴别指南与防坑常识。彻底抛弃浮夸的商业营销辞令与虚构测评，通过新闻纸风格的清晰排版与条目式档案，为用户提供可信的选购决策依据。

## 2. Design Variant & Rationale
- **Variant**：E05 (Investigative Gazette Edition)。
- **与历史 E05 (clashcheck) 的差异理由**：
  - clashcheck 属于华尔街/金融市场风格的公报（居中宽版头、行情走势跳动条、4列均等方格、红蓝双色、右侧悬浮盒）；
  - 机场梯子则定位为“深度调查晚报与消费者档案所”（大字非对称偏左报头、顶部号外通报与实时发行栏、头条大字导读排版、左侧固定报刊导读轨、双平线报纸裁切卡片、焦褐与碳黑双色调）。

## 3. Visual Identity System
- **Theme**：Warm Antique Newsprint Paper（微泛黄古董新闻纸质感，无噪点、无炫光）。
- **Primary Color**：Burnt Amber (`#b45309`, 报纸专刊焦橙/琥珀褐) 与 Carbon Ink (`#1a1816`, 深度碳墨印刷黑)。
- **Secondary Color**：Editorial Forest (`#15803d`, 事实核验标识绿) 与 Warm Tint Paper (`#efece4`, 新闻栏目微底衬)。
- **Background**：`#f7f5f0`（古董新闻纸暖白底色）。
- **Text Color**：
  - 主标题与正文：`#1a1816`（高对比印刷碳墨）。
  - 副标题与元数据：`#57534e`（深铅灰印刷铅字）。
- **Heading Typography**：
  - 中文：宋体/明朝体风格 (`Noto Serif SC`, `Source Han Serif SC`, `Songti SC`, `SimSun`, serif)。
  - 英文：传统报业衬线体 (`Georgia`, `Times New Roman`, serif)。
- **Body Typography**：
  - 中文阅读：系统清晰黑体 (`PingFang SC`, `Hiragino Sans GB`, `Microsoft YaHei`, `Noto Sans SC`, sans-serif)。
  - 规格比例：16px - 17px，行高 1.8 - 1.85，字间距略宽，确保长文阅读体验舒适。
- **Mono Typography Rules**：
  - 用于：价格、计费周期、节点规格、端口/协议名称、刊期编号、核查日期。
  - 字体：`JetBrains Mono`, `Consolas`, monospace。

## 4. Header & Navigation Type
- **Header Type**：Asymmetric Gazette Dispatch Header（非对称调查报社版头）。
  - 顶栏：报刊发行日期栏 + 号外快讯条（通报最新线路变动与核查事实）。
  - 主栏：左侧大字报业标 `机场梯子 · 调查公报`，右侧配备编委会审核原则徽记。
- **Navigation Type**：报业版面切换轨（带有点线底缀的分类版面导航）。

## 5. Hero Type
- **Hero Type**：Headline Story Deck + 3-Column Decision Matrix（头条大字号外导读 + 选购决策分流矩阵）。
  - 主区呈现首版深度调查导读《新手选购第一课：避开年付陷阱与协议迷思》。
  - 辅助区直连“5秒需求筛选入口”与“事实核验档案库”。

## 6. Card Geometry & Elevation
- **Card Geometry**：Sharp Boxout with Double Hairline Bottom Cut（0px 方直几何 + 底部双平线报刊裁切装饰）。
- **Border Radius**：`0px`（严格拒绝圆角胶囊与大圆角 SaaS 风格）。
- **Border Style**：`1px solid #d6d1c7`（细致的新闻纸铅线边框）。
- **Shadow Style**：平面报纸印刷投影 `2px 2px 0px rgba(26, 24, 22, 0.08)`。

## 7. Airport Presentation (Zero Compare)
- **Presentation**：Gazette Classifieds & Dossier Entries（分类档案条目与参数简报）。
- **展示要素**：服务商官方名称、入网最低价格、线路与协议明细、AI/流媒体提及情况、事实核查状态、专属直达链接。
- **严格禁止**：横向 PK、评分天梯图、加入对比复选框、Winner/冠军结论。

## 8. Table & Ledger Style
- **Table Style**：Gazette Archive Ledger（调查报社档案台账）。
- **设计规范**：浅黄亚麻交替条纹行（Zebra Linen Tint）、表头加粗带下双平线、数字等宽对齐、无任何彩色霓虹发光。

## 9. Filter Style
- **Filter Style**：Editorial Query Desk（报社查询检索台）。
- **支持维度**：预算范围、专线类型（IEPL/IPLC/BGP）、协议偏好、客户端平台支持、服务提及场景。
- **动态联动**：完全读取 URLSearchParams，支持跨页面参数深链接。

## 10. Article Visual Style & Topology
- **Article Topology**：Left Rail TOC (Sticky Left Column Index) + 820px Broad Reading Column（左侧固定导读轨 + 820px 宽幅阅读主栏）。
- **TOC Visual Style**：左侧竖排报刊栏目导航（Numbered Gazette Index），带实时滚动高亮定位。
- **Section Dividers**：经典铅字报刊分割线（三点星芒或细双平线）。
- **Quote & Boxouts**：左侧 3px 焦橙实线引言框，背景轻微泛黄。

## 11. Commercial & Recommendation Engine
- **Touchpoint 规划**：严格限制每篇 2-3 个以内，只出现在阅读 25% 之后及文末。
- **推荐原则**：严格基于文章内容情境匹配（如 IEPL 专线文章只推荐真实记录 IEPL 的服务商），无真实匹配时绝对留空（NO_CONTEXTUAL_MATCH）。
- **优先度隐私**：`promotion_priority` 仅用于后台排序决策，严禁在前台展示任何相关数字或伪装成“热度/评分”。

## 12. Mobile Visual Strategy
- **Mobile Strategy**：Gazette Pocket Edition（袖珍报刊流）。
- **呈现适配**：版头折叠为紧凑徽记，桌面双栏折叠为标准单列报纸流，复杂表格转换为条目式紧凑档案卡。

## 13. Forbidden Visual Elements
- 严禁霓虹发光、Cyberpunk 渐变、大圆角阴影卡片。
- 严禁任何形式的对比（Compare/VS）组件。
- 严禁所有未核实的 0 丢包/全满速/最稳营销承诺。
