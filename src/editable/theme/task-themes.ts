import type { CSSProperties } from 'react'
import type { TaskKey } from '@/lib/site-config'

/*
  Snaxxco-style task surfaces.

  Archive and detail screens share the reference identity: cream foundations,
  loud tomato-red action color, rounded snack-pack panels, and friendly type.
  Tokens are delivered via CSS variables (`--tk-*`).
*/

export type TaskTheme = {
  /** short flavour word shown as an eyebrow kicker */
  kicker: string
  /** one-line mood note for the page intro */
  note: string
  dark: boolean
  fontDisplay: string
  fontBody: string
  bg: string
  surface: string
  raised: string
  text: string
  muted: string
  line: string
  accent: string
  accentSoft: string
  onAccent: string
  glow: string
  radius: string
}

const SNAXX_DISPLAY_FONT = "'Bombi Din', Arial, sans-serif"
const SNAXX_BODY_FONT = "'Manrope', system-ui, sans-serif"

// Shared Snaxxco palette: every task inherits this; only kicker/note differ.
const base = {
  dark: false,
  fontDisplay: SNAXX_DISPLAY_FONT,
  fontBody: SNAXX_BODY_FONT,
  bg: '#f7f7ee',
  surface: '#fefee8',
  raised: '#fff',
  text: '#201916',
  muted: '#6b5843',
  line: '#201f1f12',
  accent: '#ff0300',
  accentSoft: '#ffe3e1',
  onAccent: '#fff',
  glow: 'rgba(255,3,0,0.12)',
  radius: '1.75rem',
} satisfies Omit<TaskTheme, 'kicker' | 'note'>

export const taskThemes: Record<TaskKey, TaskTheme> = {
  article: { ...base, kicker: 'Articles', note: 'In-depth reads, guides and stories worth your time.' },
  listing: { ...base, kicker: 'Businesses', note: 'Find, compare and connect with local businesses.' },
  classified: { ...base, kicker: 'Marketplace', note: 'Fresh offers and listings, ready to act on.' },
  image: { ...base, kicker: 'Photos', note: 'A visual feed of standout images and galleries.' },
  sbm: { ...base, kicker: 'Finds · Curators', note: 'Curated resources and links worth keeping.' },
  pdf: { ...base, kicker: 'Documents', note: 'Downloadable guides, reports and references.' },
  profile: { ...base, kicker: 'Identity', note: 'Direct profile detail views remain available by URL.' },
}

export function getTaskTheme(task: TaskKey): TaskTheme {
  return taskThemes[task] || taskThemes.article
}

/** All `--tk-*` tokens + font overrides for a task surface, ready for `style`. */
export function taskThemeStyle(task: TaskKey): CSSProperties {
  const t = getTaskTheme(task)
  return {
    '--tk-bg': t.bg,
    '--tk-surface': t.surface,
    '--tk-raised': t.raised,
    '--tk-text': t.text,
    '--tk-muted': t.muted,
    '--tk-line': t.line,
    '--tk-accent': t.accent,
    '--tk-accent-soft': t.accentSoft,
    '--tk-on-accent': t.onAccent,
    '--tk-glow': t.glow,
    '--tk-radius': t.radius,
    '--slot4-accent': t.accent,
    '--slot4-accent-fill': t.accent,
    '--editable-font-display': t.fontDisplay,
    '--editable-font-body': t.fontBody,
    fontFamily: t.fontBody,
  } as CSSProperties
}
