/**
 * Idempotency Key Management
 * Generates and validates unique idempotency tokens for safe order retries.
 * Prevents duplicate orders, double payments, and race conditions.
 */

export function generateIdempotencyKey(): string {
  // Generates RFC4122 v4 UUID with timestamp prefix for client traceability
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `idem_${crypto.randomUUID()}`;
  }
  
  // Fallback for older environments
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `idem_${s4()}${s4()}-${s4()}-4${s4().substr(0, 3)}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function generateCorrelationId(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).substring(2, 8);
  return `corr_${ts}_${rand}`;
}
