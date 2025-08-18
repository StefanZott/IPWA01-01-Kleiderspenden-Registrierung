import DOMPurify from 'dompurify';

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    // Wenn du nur sehr wenige Tags brauchst, nutze ALLOWED_TAGS/ATTR
    // ALLOWED_TAGS: ['b','i','em','strong','a','p','ul','ol','li','br'],
    // ALLOWED_ATTR: ['href','title','target','rel'],
  });
}