import fs from 'fs';
import path from 'path';

function parseCSV(text) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentField);
      if (currentRow.some(f => f.trim() !== '')) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }
  if (currentField !== '' || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some(f => f.trim() !== '')) {
      rows.push(currentRow);
    }
  }
  return rows;
}

const csvPath = path.resolve('src/data/KeywordStats.csv');
const rawContent = fs.readFileSync(csvPath, 'utf8');
const rows = parseCSV(rawContent);

const header = rows[0];
const dataRows = rows.slice(1);

// List of brand keywords known not in our database:
const excludedBrands = [
  'mitce', '蓝胖云', '宝可梦加速器', 'bestssr', '梯子猫', '红杏云优惠码',
  'xsus优惠码', 'vowa梯子', 'geevpn优惠码', 'sharkcloud梯子', '蓝梯机场',
  '宝可梦机场优惠码', '穿墙猫机场', '红叶vpn', '宝可梦梯子', '宝可梦机场官网',
  '宝可梦加速器优惠码', '蓝胖云机场', 'best ssr', '小猫梯子'
];

// Keywords forbidden by compare policy:
const compareForbiddenKeywords = ['梯子排行榜', '梯子排行'];

const processedKeywords = dataRows.map(row => {
  const original = row[0].trim();
  const trend = row[1].trim();
  const impression = parseInt(row[2].trim(), 10) || 0;

  const normalized = original.replace(/\s+/g, ' ').toLowerCase();

  let relevance = 'High';
  let intent = 'Selection';
  let cluster = 'Cluster A: 机场推荐 / 机场选择';
  let priorityTier = 'Tier B';
  let targetPage = '/airports/';
  let coverageLocation = 'Title / Meta / H1 / Body / FAQ';
  let status = 'MAPPED';
  let exclusionReason = 'NONE';

  // Check Excluded Brands
  const isExcludedBrand = excludedBrands.some(b => normalized.includes(b.toLowerCase()) || normalized === b.toLowerCase());
  if (isExcludedBrand) {
    relevance = 'Excluded';
    intent = 'Brand';
    cluster = 'Brand (Unmatched)';
    priorityTier = 'Tier X (Excluded)';
    targetPage = 'N/A';
    coverageLocation = 'N/A';
    status = 'EXCLUDED';
    exclusionReason = 'EXCLUDED_NO_SOURCE_DATA';
    return {
      original, normalized, impression, trend, relevance, intent, cluster, priorityTier, targetPage, coverageLocation, status, exclusionReason
    };
  }

  // Check Compare Forbidden
  if (compareForbiddenKeywords.some(f => normalized.includes(f))) {
    relevance = 'Excluded';
    intent = 'Selection (Compare)';
    cluster = 'Forbidden (Compare)';
    priorityTier = 'Tier X (Excluded)';
    targetPage = 'N/A';
    coverageLocation = 'N/A';
    status = 'EXCLUDED';
    exclusionReason = 'EXCLUDED_COMPARE_FORBIDDEN';
    return {
      original, normalized, impression, trend, relevance, intent, cluster, priorityTier, targetPage, coverageLocation, status, exclusionReason
    };
  }

  // Check Specific Brand Match: 梯子云
  if (normalized.includes('梯子云')) {
    relevance = 'High';
    intent = 'Brand';
    cluster = 'Brand (Matched)';
    priorityTier = 'Tier A';
    targetPage = '/airport/tiziyun/';
    coverageLocation = 'Title / Meta / H1 / Body / FAQ';
    status = 'MAPPED';
    return {
      original, normalized, impression, trend, relevance, intent, cluster, priorityTier, targetPage, coverageLocation, status, exclusionReason
    };
  }

  // Categorize into Clusters A - H
  if (normalized.includes('clash') || normalized.includes('订阅')) {
    cluster = 'Cluster D: Clash / 机场订阅';
    intent = 'Tutorial / Configuration';
    targetPage = '/blog/beginner-clash-guide/';
    coverageLocation = 'Title / H1 / H2 / Body / FAQ';
  } else if (normalized.includes('便宜') || normalized.includes('性价比') || normalized.includes('购买') || normalized.includes('免费')) {
    cluster = 'Cluster E: 价格与性价比';
    intent = 'Cost / Pricing Analysis';
    targetPage = '/blog/airport-pricing-traps/';
    coverageLocation = 'Title / H1 / H2 / Body / FAQ';
  } else if (normalized.includes('节点') || normalized.includes('代理节点')) {
    cluster = 'Cluster C: 机场节点 / 代理节点';
    intent = 'Technical / Node Infrastructure';
    targetPage = '/blog/airport-node-concepts/';
    coverageLocation = 'Title / H1 / H2 / Body / FAQ';
  } else if (normalized.includes('测速') || normalized.includes('稳定')) {
    cluster = 'Cluster F: 测速与稳定性';
    intent = 'Performance / Methodology';
    targetPage = '/blog/iepl-iplc-line-guide/';
    coverageLocation = 'H2 / H3 / Body / FAQ';
  } else if (normalized.includes('手机') || normalized.includes('电脑')) {
    cluster = 'Cluster G: 客户端与设备';
    intent = 'Device Compatibility';
    targetPage = '/blog/device-setup-guide/';
    coverageLocation = 'Title / H1 / H2 / Body / FAQ';
  } else if (normalized.includes('官网') || normalized.includes('链接') || normalized.includes('下载') || normalized.includes('导航') || normalized.includes('大全')) {
    cluster = 'Cluster H: 官网 / 导航 / 购买入口';
    intent = 'Navigation / Access';
    targetPage = '/airports/';
    coverageLocation = 'Table / CTA / Footer';
  } else if (normalized.includes('vpn') || normalized.includes('加速器') || normalized.includes('梯子工具') || normalized.includes('怎么翻墙') || normalized.includes('梯子是什么')) {
    cluster = 'Cluster B: 梯子 / VPN / 加速器概念辨析';
    intent = 'Definition / Conceptual Difference';
    targetPage = '/blog/airport-vs-vpn-difference/';
    coverageLocation = 'Title / H1 / H2 / Body / FAQ';
  } else {
    // Cluster A: General Airport Selection
    cluster = 'Cluster A: 机场推荐 / 机场选择';
    intent = 'Selection / General Guide';
    targetPage = '/blog/how-to-choose-airport/';
    coverageLocation = 'Title / H1 / H2 / Body / FAQ';
  }

  // Priority Tiers based on Impression Metric & Relevance
  if (impression >= 5000) {
    priorityTier = 'Tier A (Core)';
  } else if (impression >= 1000) {
    priorityTier = 'Tier A (High)';
  } else if (impression >= 300) {
    priorityTier = 'Tier B (Medium)';
  } else {
    priorityTier = 'Tier C (Long-tail)';
  }

  // Assign Homepage to key high-volume general terms
  if (['机场推荐', '性价比机场', '机场节点', '便宜机场', '机场订阅', '梯子工具', '好用的梯子', '稳定机场'].includes(normalized)) {
    targetPage = '/ (首页) & ' + targetPage;
  }

  return {
    original, normalized, impression, trend, relevance, intent, cluster, priorityTier, targetPage, coverageLocation, status, exclusionReason
  };
});

// Sort by Impression descending
processedKeywords.sort((a, b) => b.impression - a.impression);

// Generate USER_KEYWORD_SOURCE_MAP.md
let md = `# USER_KEYWORD_SOURCE_MAP.md — 用户关键词主数据源映射总表

**数据源文件**：\`KeywordStats_2026_9_18 (1).csv\`  
**总记录数**：${processedKeywords.length} 条  
**说明**：本表中的“印象数”严格标记为【用户关键词文件中的 Impression Metric】，绝不推断或声称为任何搜索引擎的公开月搜索量。所有有效关键词均已按主题聚类并明确映射至对应目标页面。

---

## 全量关键词分类映射明细表

| 原始关键字 (Original) | 规范化关键字 (Normalized) | 印象数指标 (Impression Metric) | 趋势 (Trend) | 关联度 (Relevance) | 意图类型 (Intent) | 主题集群 (Cluster) | 优先级 (Tier) | 目标承接页面 (Target Page) | 规划覆盖位置 (Coverage Location) | 状态 | 排除理由 (Exclusion) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
`;

processedKeywords.forEach(k => {
  md += `| ${k.original} | ${k.normalized} | ${k.impression} | \`${k.trend}\` | ${k.relevance} | ${k.intent} | ${k.cluster} | ${k.priorityTier} | \`${k.targetPage}\` | ${k.coverageLocation} | **${k.status}** | ${k.exclusionReason} |\n`;
});

md += `
---

## 映射汇总统计
- **总关键词数**：${processedKeywords.length}
- **有效收录映射关键词数 (MAPPED)**：${processedKeywords.filter(k => k.status === 'MAPPED').length}
- **排除无源品牌词数 (EXCLUDED_NO_SOURCE_DATA)**：${processedKeywords.filter(k => k.exclusionReason === 'EXCLUDED_NO_SOURCE_DATA').length}
- **排除违规对比词数 (EXCLUDED_COMPARE_FORBIDDEN)**：${processedKeywords.filter(k => k.exclusionReason === 'EXCLUDED_COMPARE_FORBIDDEN').length}
- **Tier A 核心词映射率**：100% (全部已分配至首页、档案库、选购指南或对应深度专刊)
`;

fs.writeFileSync('USER_KEYWORD_SOURCE_MAP.md', md, 'utf8');
console.log('Successfully generated USER_KEYWORD_SOURCE_MAP.md');
