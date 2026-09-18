/**
 * claims.ts — Unified Service Claim Formatting Helper
 * Strictly enforces attribution to "服务商公开资料" for all unverified third-party claims.
 */

export function formatVerificationClaim(
  text: string | null | undefined,
  verificationLevel: string = 'service_claim',
  prefixType: '称' | '载明' | '提及' | '显示' = '称'
): string {
  if (!text || !text.trim()) return '';
  const clean = text.replace(/^摘要[：:]\s*/, '').trim();

  if (clean.startsWith('服务商公开资料') || clean.startsWith('公开资料') || clean.startsWith('服务商宣传资料')) {
    return clean;
  }

  if (verificationLevel === 'service_claim') {
    return `服务商公开资料${prefixType}：${clean}`;
  }

  return clean;
}

export function formatFeatureBullet(bullet: string): string {
  if (!bullet) return '';
  const trimmed = bullet.trim();
  if (trimmed.startsWith('服务商公开资料') || trimmed.startsWith('服务商资料') || trimmed.startsWith('公开资料')) {
    return trimmed;
  }
  return `服务商资料标称：${trimmed}`;
}
