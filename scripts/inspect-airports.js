import fs from 'fs';

const code = fs.readFileSync('src/data/airports.ts', 'utf8');

['feimaoyun', 'weifeng', 'flyv', 'tiziyun', 'muguang', 'yinxingren'].forEach(s => {
  const startIdx = code.indexOf(`"slug": "${s}"`);
  const block = code.slice(startIdx, startIdx + 1200);
  console.log(`=== ${s} ===`);
  const lines = block.split('\n').filter(l => l.includes('Price') || l.includes('has') || l.includes('lineArchitecture') || l.includes('clientSupport') || l.includes('aiServices'));
  console.log(lines.join('\n'));
});
