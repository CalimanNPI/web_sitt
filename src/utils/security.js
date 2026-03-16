const HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;',
}

const SAFE_LINK_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])
const SAFE_ASSET_PROTOCOLS = new Set(['http:', 'https:'])
const SAFE_HASH_FRAGMENT = /^#[A-Za-z][\w-]*$/

function normalizeInput(value) {
  return String(value ?? '').normalize('NFKC').replace(/\u0000/g, '').trim()
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>"'`]/g, (character) => HTML_ESCAPE_MAP[character])
}

export function sanitizeText(value, options = {}) {
  const { maxLength = 500, preserveNewlines = false } = options
  let normalized = normalizeInput(value)

  normalized = preserveNewlines
    ? normalized.replace(/\r\n/g, '\n').replace(/[^\S\r\n]+/g, ' ')
    : normalized.replace(/\s+/g, ' ')

  return escapeHtml(normalized.slice(0, maxLength))
}

export function sanitizeEmail(value) {
  const normalized = normalizeInput(value).toLowerCase().replace(/\s+/g, '')

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return ''
  }

  return normalized.slice(0, 254)
}

export function sanitizeUrl(value, fallback = '#') {
  const rawValue = typeof value === 'string' ? value.trim() : ''

  if (!rawValue) {
    return fallback
  }

  if (rawValue === '#' || SAFE_HASH_FRAGMENT.test(rawValue) || rawValue.startsWith('/')) {
    return rawValue
  }

  try {
    const parsed = new URL(rawValue)
    return SAFE_LINK_PROTOCOLS.has(parsed.protocol) ? rawValue : fallback
  } catch {
    return fallback
  }
}

export function sanitizeAssetUrl(value, fallback = '') {
  const rawValue = typeof value === 'string' ? value.trim() : ''

  if (!rawValue) {
    return fallback
  }

  if (rawValue.startsWith('/')) {
    return rawValue
  }

  try {
    const parsed = new URL(rawValue)
    return SAFE_ASSET_PROTOCOLS.has(parsed.protocol) ? rawValue : fallback
  } catch {
    return fallback
  }
}