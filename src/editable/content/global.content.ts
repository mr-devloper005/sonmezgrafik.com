import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const uiHiddenTaskKeys = ['profile'] as const
export const isUiHiddenTask = (key: string) => (uiHiddenTaskKeys as readonly string[]).includes(key)

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Curated resource discovery',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Finds · Curators',
    primaryLinks: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Finds · Curators',
    description: 'A bright tray of useful links, collections, and references worth opening next.',
    columns: [
      {
        title: 'Collections',
        links: [
          { label: 'Business', href: '/sbm?category=business' },
          { label: 'Health', href: '/sbm?category=health' },
          { label: 'Technology', href: '/sbm?category=technology' },
          { label: 'Real Estate', href: '/sbm?category=real-estate' },
          { label: 'Home Improvement', href: '/sbm?category=home-improvement' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Made for crunchy collections and useful resources.',
  },
  commonLabels: {
    readMore: 'Open find',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
