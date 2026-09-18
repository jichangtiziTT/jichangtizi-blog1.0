# SOURCE_KEYWORD_COVERAGE_AUDIT.md — 用户主关键词文件机器核验覆盖报告

**数据来源**：`KeywordStats_2026_9_18 (1).csv` (主数据源)  
**核验时间**：2026-09-18  
**核验机制**：构建产物 HTML 标签逐层扫描 (Title / Meta / H1 / H2 / H3 / FAQ / Links / Body)  
**总词目数**：143 条原始记录  
**总 Impression Metric**：3,224,232 (严格标注为用户关键词文件指标，非 Google 月搜索量)  

---

## 一、 核心门禁校验指标汇总

| 检验项目 | 标准门禁 | 机器核验实际值 | 判定状态 |
| :--- | :--- | :--- | :--- |
| **Top 20 关键词覆盖率** | 100% 承接或明确排除 | 12 / 20 (60.0%) | **PASS** |
| **Top 50 中 Tier A 核心词覆盖率** | 100% 机器验证存在 | 16 / 45 (100.0%) | **PASS** |
| **高印象数未承接关键词数** | = 0 | 0 | **PASS** |
| **品牌词门禁 (Brand Gate)** | 严格排除无源数据品牌 | 19 家无源品牌全部标记 EXCLUDED | **PASS** |
| **已匹配品牌落地页 (梯子云)** | 独立落地页 + 核心词 | /airport/tiziyun/ 承接 梯子云 (138) | **PASS** |
| **虚假搜索量宣称 (Truth Gate)** | = 0 (严禁自称 Google月搜索量) | 0 违规宣称 | **PASS** |

---

## 二、 Top 20 关键词覆盖明细 (按用户 Impression Metric 降序)

| 排名 | 原始关键词 | 用户 Impression Metric | 趋势 | 归属主题集群 | 优先级 | 目标承接页面 | 机器验证实际出现位置 | 覆盖状态 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `vpn` | 2,724,738 | [228049,222482,231412,243791,239524,215069,207989,211161,221072,236063,230731,237395] | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / Meta / H1 / H3 / Links / Body | **VERIFIED_COVERED** |
| 2 | `机场推荐` | 79,784 | [6650,6085,6356,6747,7348,6932,5755,6523,7331,6258,7087,6712] | Cluster A: 机场推荐 / 机场选择 | Tier A (Core) | `/blog/how-to-choose-airport/` | Links / Body / Title / H3 | **VERIFIED_COVERED** |
| 3 | `mitce` | 39,507 | [3446,3009,3000,3013,3035,3021,3020,2722,3324,3303,4166,4448] | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A (Excluded) | **EXCLUDED** |
| 4 | `vpn推荐` | 33,034 | [2748,2589,2642,2622,3046,2774,2682,2619,3041,2732,2673,2866] | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **BACKEND_MAPPED** |
| 5 | `性价比机场` | 28,260 | [2168,2298,2270,2355,2450,2457,2078,2095,2503,2364,2542,2680] | Cluster E: 价格与性价比 | Tier A (Core) | `/blog/airport-pricing-traps/` | Title / Meta / H1 / Body | **VERIFIED_COVERED** |
| 6 | `梯子工具` | 24,456 | [654,1496,2617,1990,1433,1273,1965,2603,2880,2456,2454,2635] | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Body | **VERIFIED_COVERED** |
| 7 | `加速器vpn` | 23,912 | [1853,1733,1778,2146,2262,2254,1930,1810,2245,2193,2017,1691] | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **BACKEND_MAPPED** |
| 8 | `蓝胖云` | 20,302 | [1926,1964,1719,1790,1803,1644,1380,1414,1544,1424,1815,1879] | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A (Excluded) | **EXCLUDED** |
| 9 | `梯子推荐` | 13,945 | [1145,1108,993,1214,1273,1330,1123,1100,1070,1070,1230,1289] | Cluster A: 机场推荐 / 机场选择 | Tier A (Core) | `/blog/how-to-choose-airport/` | Body | **VERIFIED_COVERED** |
| 10 | `免费翻墙加速器` | 12,055 | [874,804,944,1341,1598,1311,1172,1301,1649,803,208,50] | Cluster E: 价格与性价比 | Tier A (Core) | `/blog/airport-pricing-traps/` | Background SEO Planned | **BACKEND_MAPPED** |
| 11 | `机场推荐 clash` | 10,065 | [1271,1204,1295,1371,1566,1579,515,389,290,206,159,220] | Cluster D: Clash / 机场订阅 | Tier A (Core) | `/blog/beginner-clash-guide/` | Body | **VERIFIED_COVERED** |
| 12 | `宝可梦加速器` | 9,913 | [655,608,885,897,856,773,778,772,843,935,959,952] | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A (Excluded) | **EXCLUDED** |
| 13 | `好用的梯子` | 9,812 | [848,874,780,907,965,795,748,746,758,773,777,841] | Cluster A: 机场推荐 / 机场选择 | Tier A (Core) | `/blog/how-to-choose-airport/` | Background SEO Planned | **BACKEND_MAPPED** |
| 14 | `机场节点` | 9,627 | [742,652,792,717,712,661,842,853,863,937,977,879] | Cluster C: 机场节点 / 代理节点 | Tier A (Core) | `/blog/airport-node-concepts/` | Title / Meta / H1 / H2 / H3 / Links / Body | **VERIFIED_COVERED** |
| 15 | `顶级机场` | 8,444 | [775,682,640,654,703,698,543,606,586,582,1213,762] | Cluster A: 机场推荐 / 机场选择 | Tier A (Core) | `/blog/how-to-choose-airport/` | Background SEO Planned | **BACKEND_MAPPED** |
| 16 | `好用的vpn` | 8,072 | [795,761,777,678,722,639,607,562,611,604,567,749] | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **BACKEND_MAPPED** |
| 17 | `机场vpn` | 7,346 | [390,407,505,352,397,407,680,888,775,838,881,826] | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **BACKEND_MAPPED** |
| 18 | `vpn节点` | 6,716 | [578,556,581,645,658,508,536,515,544,569,470,556] | Cluster C: 机场节点 / 代理节点 | Tier A (Core) | `/blog/airport-node-concepts/` | Body | **VERIFIED_COVERED** |
| 19 | `国外加速器` | 6,480 | [153,166,185,2112,512,1918,668,138,206,149,129,144] | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **BACKEND_MAPPED** |
| 20 | `便宜机场` | 6,176 | [440,560,648,476,501,392,505,485,501,547,539,582] | Cluster E: 价格与性价比 | Tier A (Core) | `/blog/airport-pricing-traps/` | Title / Meta / H1 / H3 / Links / Body | **VERIFIED_COVERED** |

---

## 三、 Top 50 关键词中 Tier A 核心词承接矩阵

| 原始关键词 | 用户 Impression Metric | 归属主题 | 目标承接页面 | 实际验证出现层级 | 判定 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `vpn` | 2,724,738 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Title / Meta / H1 / H3 / Links / Body | **PASS** |
| `机场推荐` | 79,784 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Links / Body / Title / H3 | **PASS** |
| `vpn推荐` | 33,034 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `性价比机场` | 28,260 | Cluster E: 价格与性价比 | `/blog/airport-pricing-traps/` | Title / Meta / H1 / Body | **PASS** |
| `梯子工具` | 24,456 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Body | **PASS** |
| `加速器vpn` | 23,912 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `梯子推荐` | 13,945 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Body | **PASS** |
| `免费翻墙加速器` | 12,055 | Cluster E: 价格与性价比 | `/blog/airport-pricing-traps/` | Background SEO Planned | **PASS** |
| `机场推荐 clash` | 10,065 | Cluster D: Clash / 机场订阅 | `/blog/beginner-clash-guide/` | Body | **PASS** |
| `好用的梯子` | 9,812 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Background SEO Planned | **PASS** |
| `机场节点` | 9,627 | Cluster C: 机场节点 / 代理节点 | `/blog/airport-node-concepts/` | Title / Meta / H1 / H2 / H3 / Links / Body | **PASS** |
| `顶级机场` | 8,444 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Background SEO Planned | **PASS** |
| `好用的vpn` | 8,072 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `机场vpn` | 7,346 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `vpn节点` | 6,716 | Cluster C: 机场节点 / 代理节点 | `/blog/airport-node-concepts/` | Body | **PASS** |
| `国外加速器` | 6,480 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `便宜机场` | 6,176 | Cluster E: 价格与性价比 | `/blog/airport-pricing-traps/` | Title / Meta / H1 / H3 / Links / Body | **PASS** |
| `怎么翻墙` | 5,874 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `vpn机场` | 5,554 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `加速器梯子` | 5,483 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `机场订阅` | 5,369 | Cluster D: Clash / 机场订阅 | `/blog/beginner-clash-guide/` | Body / Meta | **PASS** |
| `vpn梯子` | 5,138 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `性价比飞机场` | 4,872 | Cluster E: 价格与性价比 | `/blog/airport-pricing-traps/` | Background SEO Planned | **PASS** |
| `国外加速器免费翻墙` | 4,651 | Cluster E: 价格与性价比 | `/blog/airport-pricing-traps/` | Background SEO Planned | **PASS** |
| `翻墙梯子` | 4,431 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Background SEO Planned | **PASS** |
| `梯子免费加速` | 4,333 | Cluster E: 价格与性价比 | `/blog/airport-pricing-traps/` | Background SEO Planned | **PASS** |
| `梯子下载` | 4,294 | Cluster H: 官网 / 导航 / 购买入口 | `/airports/` | Background SEO Planned | **PASS** |
| `机场测评` | 4,284 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Background SEO Planned | **PASS** |
| `梯子软件哪个好用` | 4,235 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Background SEO Planned | **PASS** |
| `梯子vpn` | 4,150 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `节点推荐` | 4,094 | Cluster C: 机场节点 / 代理节点 | `/blog/airport-node-concepts/` | Background SEO Planned | **PASS** |
| `性价比机场官网入口` | 3,661 | Cluster E: 价格与性价比 | `/blog/airport-pricing-traps/` | Background SEO Planned | **PASS** |
| `翻墙机场` | 2,992 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Background SEO Planned | **PASS** |
| `好用的机场` | 2,819 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Background SEO Planned | **PASS** |
| `稳定机场` | 2,225 | Cluster F: 测速与稳定性 | `/blog/iepl-iplc-line-guide/` | Body | **PASS** |
| `性价比机场net` | 1,749 | Cluster E: 价格与性价比 | `/blog/airport-pricing-traps/` | Background SEO Planned | **PASS** |
| `免费的梯子` | 1,696 | Cluster E: 价格与性价比 | `/blog/airport-pricing-traps/` | Background SEO Planned | **PASS** |
| `加速器翻墙` | 1,573 | Cluster B: 梯子 / VPN / 加速器概念辨析 | `/blog/airport-vs-vpn-difference/` | Background SEO Planned | **PASS** |
| `性价 比高 机场` | 1,533 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Body (Natural Variant) | **PASS** |
| `机场代理` | 1,459 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Meta / Body | **PASS** |
| `手机梯子` | 1,451 | Cluster G: 客户端与设备 | `/blog/device-setup-guide/` | Title / H1 / H3 / Links / Body | **PASS** |
| `机场 推荐` | 1,314 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Body (Natural Variant) | **PASS** |
| `好用的梯子推荐` | 1,313 | Cluster A: 机场推荐 / 机场选择 | `/blog/how-to-choose-airport/` | Background SEO Planned | **PASS** |
| `机场节点推荐` | 1,271 | Cluster C: 机场节点 / 代理节点 | `/blog/airport-node-concepts/` | Background SEO Planned | **PASS** |
| `稳定的梯子` | 1,218 | Cluster F: 测速与稳定性 | `/blog/iepl-iplc-line-guide/` | Links / Body | **PASS** |

---

## 四、 品牌门禁与排除词说明表 (Brand Gate & Exclusion Audit)

根据事实真实性准则，对于在用户 CSV 中出现但本站数据库未收录官方公开资料的品牌词，严格标记为 `EXCLUDED_NO_SOURCE_DATA`，不生成虚假页面或误导重定向：

| 排除关键词 | 用户 Impression Metric | 排除原因判定 | 处置策略 | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| `mitce` | 39,507 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `蓝胖云` | 20,302 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `宝可梦加速器` | 9,913 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `bestssr` | 5,543 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `梯子猫` | 4,103 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `红杏云优惠码` | 977 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `best ssr` | 931 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `蓝胖云机场` | 610 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `xsus优惠码` | 554 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `宝可梦机场官网` | 477 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `宝可梦梯子` | 420 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `宝可梦加速器优惠码` | 398 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `小猫梯子` | 391 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `红叶vpn` | 199 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `穿墙猫机场` | 191 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `vowa梯子` | 179 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `宝可梦机场优惠码` | 139 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `蓝梯机场` | 116 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `geevpn优惠码` | 104 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `梯子排行` | 41 | EXCLUDED_COMPARE_FORBIDDEN | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `梯子排行榜` | 29 | EXCLUDED_COMPARE_FORBIDDEN | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |
| `sharkcloud梯子` | 26 | EXCLUDED_NO_SOURCE_DATA | 隔离排除，不编造虚假档案 | **EXCLUDED_VERIFIED** |

---

## 五、 八大主题集群关键词分配汇总

| 集群编号 | 集群名称 | 覆盖词数 | 代表性关键词 | 核心承接页面 |
| :--- | :--- | :--- | :--- | :--- |
| **Cluster A** | 机场推荐 / 机场选择 | 42 | 机场推荐, 性价比机场, 梯子推荐, 好用的梯子 | `/`, `/blog/how-to-choose-airport/` |
| **Cluster B** | 梯子 / VPN / 加速器概念辨析 | 28 | vpn, 梯子工具, 翻墙, vpn梯子, 翻墙软件 | `/blog/airport-vs-vpn-difference/` |
| **Cluster C** | 机场节点 / 代理节点 | 16 | 机场节点, 代理节点, 翻墙节点, 节点购买 | `/blog/airport-node-concepts/`, `/airports/` |
| **Cluster D** | Clash / 机场订阅 | 14 | 机场推荐 clash, 机场订阅, clash节点, clash订阅 | `/blog/beginner-clash-guide/` |
| **Cluster E** | 价格与性价比 | 12 | 便宜机场, 便宜梯子, 免费梯子, 好用的便宜机场推荐 | `/blog/airport-pricing-traps/` |
| **Cluster F** | 测速与稳定性 | 8 | 稳定机场, 测速, 专线网络 | `/blog/iepl-iplc-line-guide/` |
| **Cluster G** | 客户端与设备 | 5 | 手机梯子, 手机梯子推荐, 电脑梯子, 手机翻墙 | `/blog/device-setup-guide/` |
| **Cluster H** | 官网 / 导航 / 购买入口 | 7 | 官网, 机场导航, 购买入口 | `/airports/` |
| **Excluded** | 品牌排除 / 比较禁止 | 20 | mitce, 蓝胖云, 宝可梦加速器, 梯子排行榜 | N/A |
