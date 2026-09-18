# USER_KEYWORD_SOURCE_MAP.md — 用户关键词主数据源映射总表

**数据源文件**：`KeywordStats_2026_9_18 (1).csv`  
**总记录数**：143 条  
**说明**：本表中的“印象数”严格标记为【用户关键词文件中的 Impression Metric】，绝不推断或声称为任何搜索引擎的公开月搜索量。所有有效关键词均已按主题聚类并明确映射至对应目标页面。

---

## 全量关键词分类映射明细表

| 原始关键字 (Original) | 规范化关键字 (Normalized) | 印象数指标 (Impression Metric) | 趋势 (Trend) | 关联度 (Relevance) | 意图类型 (Intent) | 主题集群 (Cluster) | 优先级 (Tier) | 目标承接页面 (Target Page) | 规划覆盖位置 (Coverage Location) | 状态 | 排除理由 (Exclusion) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| vpn | vpn | 2724738 | `[228049,222482,231412,243791,239524,215069,207989,211161,221072,236063,230731,237395]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场推荐 | 机场推荐 | 79784 | `[6650,6085,6356,6747,7348,6932,5755,6523,7331,6258,7087,6712]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (Core) | `/ (首页) & /blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| mitce | mitce | 39507 | `[3446,3009,3000,3013,3035,3021,3020,2722,3324,3303,4166,4448]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| vpn推荐 | vpn推荐 | 33034 | `[2748,2589,2642,2622,3046,2774,2682,2619,3041,2732,2673,2866]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 性价比机场 | 性价比机场 | 28260 | `[2168,2298,2270,2355,2450,2457,2078,2095,2503,2364,2542,2680]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (Core) | `/ (首页) & /blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子工具 | 梯子工具 | 24456 | `[654,1496,2617,1990,1433,1273,1965,2603,2880,2456,2454,2635]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/ (首页) & /blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 加速器vpn | 加速器vpn | 23912 | `[1853,1733,1778,2146,2262,2254,1930,1810,2245,2193,2017,1691]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 蓝胖云 | 蓝胖云 | 20302 | `[1926,1964,1719,1790,1803,1644,1380,1414,1544,1424,1815,1879]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 梯子推荐 | 梯子推荐 | 13945 | `[1145,1108,993,1214,1273,1330,1123,1100,1070,1070,1230,1289]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (Core) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 免费翻墙加速器 | 免费翻墙加速器 | 12055 | `[874,804,944,1341,1598,1311,1172,1301,1649,803,208,50]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (Core) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场推荐 clash | 机场推荐 clash | 10065 | `[1271,1204,1295,1371,1566,1579,515,389,290,206,159,220]` | High | Tutorial / Configuration | Cluster D: Clash / 机场订阅 | Tier A (Core) | `/blog/beginner-clash-guide/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 宝可梦加速器 | 宝可梦加速器 | 9913 | `[655,608,885,897,856,773,778,772,843,935,959,952]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 好用的梯子 | 好用的梯子 | 9812 | `[848,874,780,907,965,795,748,746,758,773,777,841]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (Core) | `/ (首页) & /blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场节点 | 机场节点 | 9627 | `[742,652,792,717,712,661,842,853,863,937,977,879]` | High | Technical / Node Infrastructure | Cluster C: 机场节点 / 代理节点 | Tier A (Core) | `/ (首页) & /blog/airport-node-concepts/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 顶级机场 | 顶级机场 | 8444 | `[775,682,640,654,703,698,543,606,586,582,1213,762]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (Core) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 好用的vpn | 好用的vpn | 8072 | `[795,761,777,678,722,639,607,562,611,604,567,749]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场vpn | 机场vpn | 7346 | `[390,407,505,352,397,407,680,888,775,838,881,826]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vpn节点 | vpn节点 | 6716 | `[578,556,581,645,658,508,536,515,544,569,470,556]` | High | Technical / Node Infrastructure | Cluster C: 机场节点 / 代理节点 | Tier A (Core) | `/blog/airport-node-concepts/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 国外加速器 | 国外加速器 | 6480 | `[153,166,185,2112,512,1918,668,138,206,149,129,144]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 便宜机场 | 便宜机场 | 6176 | `[440,560,648,476,501,392,505,485,501,547,539,582]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (Core) | `/ (首页) & /blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 怎么翻墙 | 怎么翻墙 | 5874 | `[462,545,461,527,527,530,503,507,508,410,405,489]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vpn机场 | vpn机场 | 5554 | `[373,327,383,341,351,367,508,499,541,589,636,639]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| bestssr | bestssr | 5543 | `[195,237,1072,1035,692,506,465,302,251,260,264,264]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 加速器梯子 | 加速器梯子 | 5483 | `[682,603,651,598,549,390,323,275,397,392,284,339]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场订阅 | 机场订阅 | 5369 | `[465,409,401,391,349,335,436,431,476,547,518,611]` | High | Tutorial / Configuration | Cluster D: Clash / 机场订阅 | Tier A (Core) | `/ (首页) & /blog/beginner-clash-guide/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vpn梯子 | vpn梯子 | 5138 | `[435,493,429,475,453,438,453,407,474,391,317,373]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (Core) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 性价比飞机场 | 性价比飞机场 | 4872 | `[374,400,368,379,427,396,362,358,403,418,419,568]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (High) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 国外加速器免费翻墙 | 国外加速器免费翻墙 | 4651 | `[304,300,396,575,496,332,337,460,760,410,185,96]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (High) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 翻墙梯子 | 翻墙梯子 | 4431 | `[382,318,331,411,452,377,377,314,409,382,309,369]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子免费加速 | 梯子免费加速 | 4333 | `[29,71,260,217,63,40,354,692,841,691,531,544]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (High) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子下载 | 梯子下载 | 4294 | `[449,300,335,450,458,400,352,351,458,277,217,247]` | High | Navigation / Access | Cluster H: 官网 / 导航 / 购买入口 | Tier A (High) | `/airports/` | Table / CTA / Footer | **MAPPED** | NONE |
| 机场测评 | 机场测评 | 4284 | `[309,224,284,317,426,385,346,304,378,317,519,475]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子软件哪个好用 | 梯子软件哪个好用 | 4235 | `[61,125,501,294,97,87,319,535,542,550,523,601]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子vpn | 梯子vpn | 4150 | `[432,353,329,344,401,375,397,288,351,285,304,291]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (High) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子猫 | 梯子猫 | 4103 | `[159,294,463,333,264,291,297,350,383,389,424,456]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 节点推荐 | 节点推荐 | 4094 | `[350,261,312,327,428,314,305,333,384,337,380,363]` | High | Technical / Node Infrastructure | Cluster C: 机场节点 / 代理节点 | Tier A (High) | `/blog/airport-node-concepts/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 性价比机场官网入口 | 性价比机场官网入口 | 3661 | `[265,308,290,334,346,310,258,286,287,295,310,372]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (High) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 翻墙机场 | 翻墙机场 | 2992 | `[198,233,187,220,277,313,322,214,266,211,296,255]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 好用的机场 | 好用的机场 | 2819 | `[273,212,225,220,246,218,197,244,244,209,295,236]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 稳定机场 | 稳定机场 | 2225 | `[201,174,161,186,182,166,143,189,209,151,233,230]` | High | Performance / Methodology | Cluster F: 测速与稳定性 | Tier A (High) | `/ (首页) & /blog/iepl-iplc-line-guide/` | H2 / H3 / Body / FAQ | **MAPPED** | NONE |
| 性价比机场net | 性价比机场net | 1749 | `[139,133,143,165,151,115,138,124,154,158,180,149]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (High) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 免费的梯子 | 免费的梯子 | 1696 | `[151,136,139,176,142,136,106,108,172,139,129,162]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (High) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 加速器翻墙 | 加速器翻墙 | 1573 | `[104,117,148,174,127,109,129,108,141,166,151,99]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier A (High) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 性价 比高 机场 | 性价 比高 机场 | 1533 | `[125,123,115,110,143,146,145,118,117,113,131,147]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场代理 | 机场代理 | 1459 | `[77,103,87,123,80,81,133,151,142,155,167,160]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 手机梯子 | 手机梯子 | 1451 | `[147,191,134,111,146,115,90,80,87,112,104,134]` | High | Device Compatibility | Cluster G: 客户端与设备 | Tier A (High) | `/blog/device-setup-guide/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场 推荐 | 机场 推荐 | 1314 | `[133,68,96,71,116,97,101,107,146,123,128,128]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 好用的梯子推荐 | 好用的梯子推荐 | 1313 | `[75,121,108,110,122,111,129,107,88,91,125,126]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场节点推荐 | 机场节点推荐 | 1271 | `[105,90,115,105,108,86,106,92,99,79,149,137]` | High | Technical / Node Infrastructure | Cluster C: 机场节点 / 代理节点 | Tier A (High) | `/blog/airport-node-concepts/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 稳定的梯子 | 稳定的梯子 | 1218 | `[113,114,96,102,145,97,86,89,82,88,105,101]` | High | Performance / Methodology | Cluster F: 测速与稳定性 | Tier A (High) | `/blog/iepl-iplc-line-guide/` | H2 / H3 / Body / FAQ | **MAPPED** | NONE |
| 便宜vpn | 便宜vpn | 1144 | `[83,76,65,123,129,112,111,83,113,91,75,83]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier A (High) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 代理节点 | 代理节点 | 1131 | `[106,67,105,89,121,110,96,76,103,92,77,89]` | High | Technical / Node Infrastructure | Cluster C: 机场节点 / 代理节点 | Tier A (High) | `/blog/airport-node-concepts/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| jichang | jichang | 1103 | `[61,81,84,74,88,80,115,84,120,103,99,114]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier A (High) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子节点 | 梯子节点 | 1061 | `[122,97,97,81,104,83,72,91,78,69,77,90]` | High | Technical / Node Infrastructure | Cluster C: 机场节点 / 代理节点 | Tier A (High) | `/blog/airport-node-concepts/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场测速 | 机场测速 | 1044 | `[90,72,81,77,83,97,89,92,83,95,97,88]` | High | Performance / Methodology | Cluster F: 测速与稳定性 | Tier A (High) | `/blog/iepl-iplc-line-guide/` | H2 / H3 / Body / FAQ | **MAPPED** | NONE |
| 红杏云优惠码 | 红杏云优惠码 | 977 | `[88,62,78,109,105,70,55,99,97,81,71,62]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 稳定梯子 | 稳定梯子 | 972 | `[59,79,93,80,85,78,96,64,74,90,65,109]` | High | Performance / Methodology | Cluster F: 测速与稳定性 | Tier B (Medium) | `/blog/iepl-iplc-line-guide/` | H2 / H3 / Body / FAQ | **MAPPED** | NONE |
| 便宜的vpn | 便宜的vpn | 970 | `[84,88,62,92,112,91,49,88,76,77,58,93]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子机场 | 梯子机场 | 931 | `[55,58,59,54,58,79,74,77,88,85,124,120]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| best ssr | best ssr | 931 | `[25,49,163,215,121,74,48,51,40,56,41,48]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| clash梯子 | clash梯子 | 915 | `[87,78,71,87,86,77,69,55,91,65,65,84]` | High | Tutorial / Configuration | Cluster D: Clash / 机场订阅 | Tier B (Medium) | `/blog/beginner-clash-guide/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vpn机场推荐 | vpn机场推荐 | 899 | `[75,92,75,72,72,72,55,72,71,86,61,96]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier B (Medium) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 便宜机场推荐 | 便宜机场推荐 | 819 | `[60,65,73,60,64,61,42,56,97,58,98,85]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场购买 | 机场购买 | 801 | `[43,44,33,57,57,59,64,67,99,85,84,109]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子vpn推荐 | 梯子vpn推荐 | 784 | `[76,69,64,77,82,68,67,66,73,62,43,37]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier B (Medium) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vpn 机场 | vpn 机场 | 783 | `[66,50,63,47,61,57,72,69,79,81,66,72]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier B (Medium) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| xingjiabijichang | xingjiabijichang | 769 | `[53,52,59,66,69,80,54,73,73,51,59,80]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vpn节点购买 | vpn节点购买 | 759 | `[56,64,80,67,60,61,71,56,62,77,49,56]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场推荐便宜 | 机场推荐便宜 | 724 | `[38,39,39,38,48,40,44,102,95,64,87,90]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 代理机场 | 代理机场 | 675 | `[40,38,69,58,47,56,50,58,46,69,73,71]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 稳定机场推荐 | 稳定机场推荐 | 666 | `[44,45,39,45,60,47,59,55,52,46,82,92]` | High | Performance / Methodology | Cluster F: 测速与稳定性 | Tier B (Medium) | `/blog/iepl-iplc-line-guide/` | H2 / H3 / Body / FAQ | **MAPPED** | NONE |
| 蓝胖云机场 | 蓝胖云机场 | 610 | `[52,61,55,79,50,53,42,40,37,31,53,57]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 梯子免费加速器vpn下载 | 梯子免费加速器vpn下载 | 592 | `[20,23,20,24,25,31,58,53,89,99,84,66]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子测速 | 梯子测速 | 586 | `[28,41,40,43,42,46,48,56,62,55,53,72]` | High | Performance / Methodology | Cluster F: 测速与稳定性 | Tier B (Medium) | `/blog/iepl-iplc-line-guide/` | H2 / H3 / Body / FAQ | **MAPPED** | NONE |
| github机场推荐 | github机场推荐 | 585 | `[54,43,71,25,53,24,55,45,46,31,53,85]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 科学上网推荐 | 科学上网推荐 | 563 | `[62,53,38,56,46,38,36,44,51,34,60,45]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| xsus优惠码 | xsus优惠码 | 554 | `[38,54,50,59,39,30,44,44,48,35,52,61]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 机场github | 机场github | 544 | `[36,36,37,42,49,42,51,50,57,55,51,38]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 科学上网 爬梯子 | 科学上网 爬梯子 | 535 | `[57,38,35,41,40,64,42,52,39,37,51,39]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场 github | 机场 github | 527 | `[45,33,33,49,23,38,46,42,42,55,58,63]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场梯子clash | 机场梯子clash | 515 | `[60,49,54,43,90,85,46,23,24,41]` | High | Tutorial / Configuration | Cluster D: Clash / 机场订阅 | Tier B (Medium) | `/blog/beginner-clash-guide/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 便宜梯子 | 便宜梯子 | 508 | `[36,36,49,51,50,43,37,33,43,41,47,42]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场 vpn | 机场 vpn | 506 | `[31,27,20,26,26,21,53,56,62,60,67,57]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier B (Medium) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 便宜的机场 | 便宜的机场 | 494 | `[27,39,60,35,29,35,37,50,37,55,41,49]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 宝可梦机场官网 | 宝可梦机场官网 | 477 | `[25,25,29,27,35,53,30,28,51,53,67,54]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 好用机场 | 好用机场 | 462 | `[38,23,27,33,20,27,44,53,49,79,69]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子购买 | 梯子购买 | 449 | `[38,42,35,46,28,43,47,31,24,48,33,34]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 翻墙梯子推荐 | 翻墙梯子推荐 | 448 | `[33,46,39,48,44,30,26,34,31,25,54,38]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 好用梯子 | 好用梯子 | 443 | `[30,30,33,48,45,33,36,24,26,34,50,54]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子翻墙 | 梯子翻墙 | 442 | `[44,49,42,47,38,39,35,32,35,27,27,27]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 宝可梦梯子 | 宝可梦梯子 | 420 | `[32,21,33,37,24,27,63,36,23,32,50,42]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 机场订阅推荐 | 机场订阅推荐 | 404 | `[29,27,28,30,31,27,38,41,43,28,41,41]` | High | Tutorial / Configuration | Cluster D: Clash / 机场订阅 | Tier B (Medium) | `/blog/beginner-clash-guide/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 宝可梦加速器优惠码 | 宝可梦加速器优惠码 | 398 | `[28,45,46,23,34,36,36,40,27,48,35]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 国内梯子 | 国内梯子 | 395 | `[27,41,27,39,45,32,31,28,24,27,31,43]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 便宜好用的机场 | 便宜好用的机场 | 395 | `[31,29,30,34,30,38,36,32,34,43,58]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 小猫梯子 | 小猫梯子 | 391 | `[27,23,46,26,28,23,27,25,35,33,51,47]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| vpn 梯子 | vpn 梯子 | 380 | `[29,33,26,33,40,30,34,34,31,24,24,42]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier B (Medium) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 便宜的梯子 | 便宜的梯子 | 379 | `[29,47,29,21,41,31,32,35,31,43,40]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier B (Medium) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场链接 | 机场链接 | 373 | `[40,31,27,26,28,22,43,41,41,26,48]` | High | Navigation / Access | Cluster H: 官网 / 导航 / 购买入口 | Tier B (Medium) | `/airports/` | Table / CTA / Footer | **MAPPED** | NONE |
| 科学上网梯子 | 科学上网梯子 | 371 | `[34,44,39,33,24,31,44,37,26,25,34]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vpn梯子推荐 | vpn梯子推荐 | 361 | `[27,24,42,23,27,36,26,38,39,23,31,25]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier B (Medium) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 手机梯子推荐 | 手机梯子推荐 | 360 | `[29,39,33,29,31,29,24,32,28,25,21,40]` | High | Device Compatibility | Cluster G: 客户端与设备 | Tier B (Medium) | `/blog/device-setup-guide/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场梯子推荐 | 机场梯子推荐 | 338 | `[33,34,29,25,30,34,34,23,23,36,37]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier B (Medium) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 翻墙机场.com | 翻墙机场.com | 297 | `[42,31,26,23,40,29,26,26,31,23]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 翻墙节点 | 翻墙节点 | 295 | `[20,34,32,36,25,32,35,23,33,25]` | High | Technical / Node Infrastructure | Cluster C: 机场节点 / 代理节点 | Tier C (Long-tail) | `/blog/airport-node-concepts/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子翻推荐 | 梯子翻推荐 | 275 | `[38,72,49,56,60]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子加速 | 梯子加速 | 256 | `[22,21,33,23,37,36,33,25,26]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 顶级机场vpn | 顶级机场vpn | 247 | `[30,25,24,26,26,30,55,31]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier C (Long-tail) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 网络机场 | 网络机场 | 233 | `[52,29,28,37,50,37]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 便宜好用的梯子 | 便宜好用的梯子 | 227 | `[22,21,31,28,22,26,29,28,20]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier C (Long-tail) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 好用的梯子软件 | 好用的梯子软件 | 207 | `[30,29,29,25,23,22,27,22]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 性价比vpn | 性价比vpn | 207 | `[27,26,25,35,34,27,33]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier C (Long-tail) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 红叶vpn | 红叶vpn | 199 | `[41,24,33,32,36,33]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| github梯子推荐 | github梯子推荐 | 194 | `[22,29,27,27,22,30,37]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 穿墙猫机场 | 穿墙猫机场 | 191 | `[23,24,29,26,26,22,41]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 靠谱机场 | 靠谱机场 | 188 | `[22,25,23,27,22,21,25,23]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vowa梯子 | vowa梯子 | 179 | `[21,23,36,46,26,27]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 梯子是什么 | 梯子是什么 | 163 | `[26,21,20,25,21,20,30]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier C (Long-tail) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场翻墙 | 机场翻墙 | 159 | `[21,20,23,44,28,23]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vpn是梯子吗 | vpn是梯子吗 | 146 | `[21,22,33,23,25,22]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier C (Long-tail) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子导航 | 梯子导航 | 144 | `[21,28,29,29,37]` | High | Navigation / Access | Cluster H: 官网 / 导航 / 购买入口 | Tier C (Long-tail) | `/airports/` | Table / CTA / Footer | **MAPPED** | NONE |
| 梯子测评 | 梯子测评 | 142 | `[22,20,20,21,28,31]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 宝可梦机场优惠码 | 宝可梦机场优惠码 | 139 | `[22,28,26,37,26]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 梯子云 | 梯子云 | 138 | `[39,23,42,34]` | High | Brand | Brand (Matched) | Tier A | `/airport/tiziyun/` | Title / Meta / H1 / Body / FAQ | **MAPPED** | NONE |
| 机场 梯子 | 机场 梯子 | 122 | `[20,25,22,22,33]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场稳定 | 机场稳定 | 118 | `[28,20,21,24,25]` | High | Performance / Methodology | Cluster F: 测速与稳定性 | Tier C (Long-tail) | `/blog/iepl-iplc-line-guide/` | H2 / H3 / Body / FAQ | **MAPPED** | NONE |
| 蓝梯机场 | 蓝梯机场 | 116 | `[29,44,43]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| geevpn优惠码 | geevpn优惠码 | 104 | `[20,84]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 梯子大全 | 梯子大全 | 82 | `[26,30,26]` | High | Navigation / Access | Cluster H: 官网 / 导航 / 购买入口 | Tier C (Long-tail) | `/airports/` | Table / CTA / Footer | **MAPPED** | NONE |
| 最新机场 | 最新机场 | 76 | `[23,53]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| vpn专线 | vpn专线 | 65 | `[21,22,22]` | High | Definition / Conceptual Difference | Cluster B: 梯子 / VPN / 加速器概念辨析 | Tier C (Long-tail) | `/blog/airport-vs-vpn-difference/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场代理节点 | 机场代理节点 | 48 | `[27,21]` | High | Technical / Node Infrastructure | Cluster C: 机场节点 / 代理节点 | Tier C (Long-tail) | `/blog/airport-node-concepts/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子排行 | 梯子排行 | 41 | `[21,20]` | Excluded | Selection (Compare) | Forbidden (Compare) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_COMPARE_FORBIDDEN |
| 国内梯子推荐 | 国内梯子推荐 | 30 | `[30]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 梯子排行榜 | 梯子排行榜 | 29 | `[29]` | Excluded | Selection (Compare) | Forbidden (Compare) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_COMPARE_FORBIDDEN |
| 电脑机场 | 电脑机场 | 29 | `[29]` | High | Device Compatibility | Cluster G: 客户端与设备 | Tier C (Long-tail) | `/blog/device-setup-guide/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 最新机场推荐 | 最新机场推荐 | 28 | `[28]` | High | Selection / General Guide | Cluster A: 机场推荐 / 机场选择 | Tier C (Long-tail) | `/blog/how-to-choose-airport/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| sharkcloud梯子 | sharkcloud梯子 | 26 | `[26]` | Excluded | Brand | Brand (Unmatched) | Tier X (Excluded) | `N/A` | N/A | **EXCLUDED** | EXCLUDED_NO_SOURCE_DATA |
| 稳定梯子推荐 | 稳定梯子推荐 | 21 | `[21]` | High | Performance / Methodology | Cluster F: 测速与稳定性 | Tier C (Long-tail) | `/blog/iepl-iplc-line-guide/` | H2 / H3 / Body / FAQ | **MAPPED** | NONE |
| 高性价比机场 | 高性价比机场 | 21 | `[21]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier C (Long-tail) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 便宜好用机场 | 便宜好用机场 | 21 | `[21]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier C (Long-tail) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |
| 机场vpn官网 | 机场vpn官网 | 20 | `[20]` | High | Navigation / Access | Cluster H: 官网 / 导航 / 购买入口 | Tier C (Long-tail) | `/airports/` | Table / CTA / Footer | **MAPPED** | NONE |
| 便宜梯子推荐 | 便宜梯子推荐 | 20 | `[20]` | High | Cost / Pricing Analysis | Cluster E: 价格与性价比 | Tier C (Long-tail) | `/blog/airport-pricing-traps/` | Title / H1 / H2 / Body / FAQ | **MAPPED** | NONE |

---

## 映射汇总统计
- **总关键词数**：143
- **有效收录映射关键词数 (MAPPED)**：121
- **排除无源品牌词数 (EXCLUDED_NO_SOURCE_DATA)**：20
- **排除违规对比词数 (EXCLUDED_COMPARE_FORBIDDEN)**：2
- **Tier A 核心词映射率**：100% (全部已分配至首页、档案库、选购指南或对应深度专刊)
