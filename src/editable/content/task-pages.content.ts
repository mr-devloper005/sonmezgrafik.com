import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Reading desk',
    headline: 'Long-form reads with a calmer editorial rhythm.',
    description: 'Use this surface for guides, explainers, and deeper context around useful resources.',
    filterLabel: 'Choose reading topic',
    secondaryNote: 'Reading surfaces need space, hierarchy, and fewer distractions.',
    chips: ['Editorial pacing', 'Topic filters', 'Long-read friendly'],
  },
  classified: {
    eyebrow: 'Notice board',
    headline: 'Fast-moving offers and time-sensitive resources.',
    description: 'Classified content should feel quick to scan, practical, and action-oriented.',
    filterLabel: 'Filter category',
    secondaryNote: 'Prioritize urgency, short summaries, and direct browsing.',
    chips: ['Fast scan', 'Offers', 'Action cues'],
  },
  sbm: {
    eyebrow: 'Finds · Curators',
    headline: 'Useful links arranged like snackable collections.',
    description: 'Browse shelves of tools, references, inspiration, and resources worth opening next.',
    filterLabel: 'Filter collection',
    secondaryNote: 'Curated resources need grouping, clear domains, and direct visit actions.',
    chips: ['Collections', 'Resources', 'Reference shelf'],
  },
  profile: {
    eyebrow: 'Identity detail',
    headline: 'Direct identity pages with trust and context.',
    description: 'Identity detail pages remain available by direct URL while staying hidden from public navigation.',
    filterLabel: 'Filter identity category',
    secondaryNote: 'Keep identity routes functional without public promotion.',
    chips: ['Direct URL', 'Identity context', 'Hidden publicly'],
  },
  pdf: {
    eyebrow: 'Document shelf',
    headline: 'Documents presented as useful reference material.',
    description: 'Document pages should feel like downloadable guides, reports, files, and reference material.',
    filterLabel: 'Filter document type',
    secondaryNote: 'Document surfaces need file context and clear browsing.',
    chips: ['Documents', 'Guides', 'Reference ready'],
  },
  listing: {
    eyebrow: 'Directory shelf',
    headline: 'Listings built for discovery and comparison.',
    description: 'Listing pages should behave like a practical directory with trust cues and clear actions.',
    filterLabel: 'Filter listing category',
    secondaryNote: 'Prioritize comparison, location, and direct action paths.',
    chips: ['Directory', 'Compare', 'Discovery'],
  },
  image: {
    eyebrow: 'Visual shelf',
    headline: 'Visual resources with a gallery-first browsing experience.',
    description: 'Image pages should lead with visual impact, stronger cards, and a portfolio-like rhythm.',
    filterLabel: 'Filter visual category',
    secondaryNote: 'Let images carry the page before long text does.',
    chips: ['Gallery', 'Visual-first', 'Portfolio mood'],
  },
} satisfies Record<TaskKey, TaskPageVoice>
