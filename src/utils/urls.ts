const ALLOWED_PROTOCOLS = new Set(['http:', 'https:', 'mailto:']);

export function validateUrl(input: string | undefined | null): string | null {
  if (!input) return null;
  try {
    const u = new URL(input, window.location.origin);
    return ALLOWED_PROTOCOLS.has(u.protocol) ? u.toString() : null;
  } catch {
    return null;
  }
}
