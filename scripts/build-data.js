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

const slugMapByFile = {
  'Sogo云.md': 'sogoyun',
  'U1S1.md': 'u1s1',
  'firefly.md': 'firefly',
  'flyv.md': 'flyv',
  'ssone.md': 'ssone',
  'wgetcloud.md': 'wgetcloud',
  '一翻云.md': '1flyun',
  '二猫云.md': '2maoyun',
  '光年梯.md': 'guangnianti',
  '光速云.md': 'lightspeed',
  '全球云.md': 'quanqiuyun',
  '可信云_Kexin_Cloud.md': 'kexin',
  '唯兔云.md': 'v2yun',
  '大哥云.md': 'degeyun',
  '宇宙云.md': 'yuzhouyun',
  '微风网络.md': 'weifeng',
  '快狸_Kuaili_Cloud.md': 'kuaili',
  '无忧链接.md': 'wuyoulink',
  '星岛梦.md': 'stardream',
  '暮光加速.md': 'muguang',
  '极连云.md': 'jilian',
  '梯子云.md': 'tiziyun',
  '浪网.md': 'langwang',
  '灵动云.md': 'lingdong',
  '灵猫网络.md': 'spiritcat',
  '赛博云.md': 'saiboyun',
  '跨界云.md': 'crossover',
  '边缘节点_EdgeNova.md': 'edgenova',
  '速界.md': 'speedworld',
  '闪跃.md': 'shanyue',
  '隐形人.md': 'yinxingren',
  '飞猫云.md': 'feimaoyun'
};

const csvPath = path.resolve('src/data/airports.raw.csv');
if (!fs.existsSync(csvPath)) {
  console.error(`Error: ${csvPath} does not exist.`);
  process.exit(1);
}

const csvData = fs.readFileSync(csvPath, 'utf8');
const rows = parseCSV(csvData);
const headers = rows[0];
const rawRecords = rows.slice(1);

const airports = rawRecords.map((r) => {
  const rowObj = {};
  headers.forEach((h, i) => {
    rowObj[h] = (r[i] !== undefined) ? r[i].trim() : '';
  });

  const sourceFile = rowObj.source_file;
  const slug = slugMapByFile[sourceFile] || sourceFile.replace(/\.md$/, '').toLowerCase();
  
  let regions = [];
  if (rowObj.node_regions_standardized) {
    try {
      regions = JSON.parse(rowObj.node_regions_standardized);
    } catch {
      regions = [];
    }
  }

  let plans = [];
  if (rowObj.plans_json) {
    try {
      plans = JSON.parse(rowObj.plans_json);
    } catch {
      plans = [];
    }
  }

  let testData = null;
  if (rowObj.test_or_performance_data_json) {
    try {
      testData = JSON.parse(rowObj.test_or_performance_data_json);
    } catch {
      testData = null;
    }
  }

  let featureBullets = [];
  if (rowObj.feature_bullets) {
    featureBullets = rowObj.feature_bullets
      .split('|')
      .map(s => s.trim())
      .filter(Boolean);
  }

  const displayOrder = parseInt(rowObj.display_order, 10) || 99;
  
  // Strategic provider priority:
  // 1: 隐形人, 2: 暮光加速, 3: 飞猫云, 4: 微风网络, 5: 浪网, 6: 梯子云, 7: 灵动云, 8: FlyV
  let promotionPriority = 99;
  if (slug === 'yinxingren') promotionPriority = 1;
  else if (slug === 'muguang') promotionPriority = 2;
  else if (slug === 'feimaoyun') promotionPriority = 3;
  else if (slug === 'weifeng') promotionPriority = 4;
  else if (slug === 'langwang') promotionPriority = 5;
  else if (slug === 'tiziyun') promotionPriority = 6;
  else if (slug === 'lingdong') promotionPriority = 7;
  else if (slug === 'flyv') promotionPriority = 8;
  else promotionPriority = displayOrder;

  const monthlyPrice = rowObj.lowest_direct_monthly_price_cny ? parseFloat(rowObj.lowest_direct_monthly_price_cny) : null;
  const annualPrice = rowObj.lowest_listed_annual_price_cny ? parseFloat(rowObj.lowest_listed_annual_price_cny) : null;
  const oneTimePrice = rowObj.lowest_listed_one_time_price_cny ? parseFloat(rowObj.lowest_listed_one_time_price_cny) : null;

  // Strict UNKNOWN IS UNKNOWN: missing values must remain null
  return {
    slug,
    sourceFile,
    documentTitle: rowObj.document_title || rowObj.service_name,
    serviceName: rowObj.service_name,
    aliases: rowObj.aliases || null,
    summary: rowObj.summary || '',
    officialUrl: rowObj.official_url || null,
    affiliateUrl: rowObj.affiliate_url || rowObj.registration_url || null,
    affiliateCode: rowObj.affiliate_code || null,
    registrationUrl: rowObj.registration_url || null,
    telegramUrl: rowObj.telegram_url || null,
    currency: rowObj.currency || 'CNY',
    operatingInfo: rowObj.operating_info || null,
    lineArchitecture: rowObj.line_architecture || null,
    protocols: rowObj.protocols || null,
    nodeRegionsRaw: rowObj.node_regions_raw || null,
    nodeRegionsStandardized: regions,
    bandwidthOrSpeedClaims: rowObj.bandwidth_or_speed_claims || null,
    deviceOrUsageLimits: rowObj.device_or_usage_limits || null,
    clientSupport: rowObj.client_support || null,
    platforms: rowObj.platforms || null,
    paymentMethods: rowObj.payment_methods || null,
    freeTrial: rowObj.free_trial || null,
    refundPolicy: rowObj.refund_policy || null,
    discountsOrCoupon: rowObj.discounts_or_coupon || null,
    unlockSupportFromOverview: rowObj.unlock_support_from_overview || null,
    streamingServicesMentioned: rowObj.streaming_services_mentioned || null,
    aiServicesMentioned: rowObj.ai_services_mentioned || null,
    lowestDirectMonthlyPriceCny: monthlyPrice,
    lowestListedAnnualPriceCny: annualPrice,
    lowestListedOneTimePriceCny: oneTimePrice,
    plans,
    testOrPerformanceData: testData,
    featureBullets,
    purchaseAdvice: rowObj.purchase_advice || null,
    verificationStatus: rowObj.verification_status || 'service_document',
    verificationLevel: rowObj.verification_level || 'service_claim',
    sourceUrl: rowObj.source_url || null,
    lastCheckedAt: rowObj.last_checked_at || null,
    sourceType: rowObj.source_type || 'service_document',
    isExcluded: rowObj.is_excluded === 'true',
    displayOrder,
    promotionPriority,
    isStrategic: promotionPriority <= 8
  };
});

const activeAirports = airports.filter(a => !a.isExcluded);

const fileContent = `// Strictly generated from src/data/airports.raw.csv (Single Source of Truth)
// DO NOT MODIFY MANUALLY. Total airports: ${airports.length}, Active: ${activeAirports.length}

export interface PlanRow {
  [key: string]: string;
}

export interface PlanSection {
  section?: string;
  rows?: PlanRow[];
}

export interface Airport {
  slug: string;
  sourceFile: string;
  documentTitle: string;
  serviceName: string;
  aliases: string | null;
  summary: string;
  officialUrl: string | null;
  affiliateUrl: string | null;
  affiliateCode: string | null;
  registrationUrl: string | null;
  telegramUrl: string | null;
  currency: string;
  operatingInfo: string | null;
  lineArchitecture: string | null;
  protocols: string | null;
  nodeRegionsRaw: string | null;
  nodeRegionsStandardized: string[];
  bandwidthOrSpeedClaims: string | null;
  deviceOrUsageLimits: string | null;
  clientSupport: string | null;
  platforms: string | null;
  paymentMethods: string | null;
  freeTrial: string | null;
  refundPolicy: string | null;
  discountsOrCoupon: string | null;
  unlockSupportFromOverview: string | null;
  streamingServicesMentioned: string | null;
  aiServicesMentioned: string | null;
  lowestDirectMonthlyPriceCny: number | null;
  lowestListedAnnualPriceCny: number | null;
  lowestListedOneTimePriceCny: number | null;
  plans: PlanSection[];
  testOrPerformanceData: any;
  featureBullets: string[];
  purchaseAdvice: string | null;
  verificationStatus: string;
  verificationLevel: string;
  sourceUrl: string | null;
  lastCheckedAt: string | null;
  sourceType: string;
  isExcluded: boolean;
  displayOrder: number;
  promotionPriority: number;
  isStrategic: boolean;
}

export const ALL_AIRPORTS: Airport[] = ${JSON.stringify(airports, null, 2)};

export const ACTIVE_AIRPORTS: Airport[] = ALL_AIRPORTS.filter(a => !a.isExcluded);

export function getAllActiveAirports(): Airport[] {
  return [...ACTIVE_AIRPORTS].sort((a, b) => a.promotionPriority - b.promotionPriority);
}

export function getAirportBySlug(slug: string): Airport | undefined {
  return ACTIVE_AIRPORTS.find(a => a.slug === slug);
}

export function getStrategicAirports(): Airport[] {
  return ACTIVE_AIRPORTS.filter(a => a.isStrategic).sort((a, b) => a.promotionPriority - b.promotionPriority);
}
`;

fs.writeFileSync('src/data/airports.ts', fileContent, 'utf8');
fs.writeFileSync('src/data/airports.json', JSON.stringify(activeAirports, null, 2), 'utf8');
console.log(`[build-data] Successfully generated: Total ${airports.length}, Active: ${activeAirports.length}, Excluded: ${airports.length - activeAirports.length}`);
