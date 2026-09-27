// ── Global type augmentations ──────────────────────────────
export {};

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
