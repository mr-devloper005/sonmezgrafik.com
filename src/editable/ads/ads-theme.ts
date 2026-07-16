// EDITABLE: theme the ads to match this site. Devs own this file.
// You control the LOOK here (radius, border, shadow, background, label color).
// You CANNOT change the ad's shape/fit from here; that stays locked in
// src/lib/ad-slots.ts, so the ad always displays correctly no matter what.

import type { AdSkin } from '@/lib/ads/ad-frame'

// Site-wide default skin tuned to the Snaxxco reference palette.
export const adSkin: AdSkin = {
  radius: '28px',
  border: '1px solid rgba(32,25,22,0.12)',
  shadow: '0 12px 0 rgba(255,3,0,0.08)',
  background: '#fefee8',
  labelClassName: 'bg-[#ff0300] text-white',
}

// Optional per-slot overrides. Keep them in the same package-like visual family.
export const adSkinBySlot: Partial<Record<string, AdSkin>> = {
  sidebar: { radius: '24px', shadow: '0 10px 0 rgba(32,25,22,0.08)' },
  popup: { radius: '32px' },
  header: { radius: '32px', background: '#fff', shadow: '0 12px 0 rgba(32,25,22,0.06)' },
  rail: { radius: '24px' },
  feature: { radius: '28px' },
  interstitial: { radius: '32px', shadow: '0 28px 80px rgba(32,25,22,0.2)' },
  anchor: { radius: '22px', shadow: '0 8px 24px rgba(32,25,22,0.12)' },
}

/** Merge site default + per-slot override for a slot. */
export function skinFor(slot: string): AdSkin {
  return { ...adSkin, ...(adSkinBySlot[slot] ?? {}) }
}
