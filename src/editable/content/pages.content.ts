import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Curated finds, collections, and useful resources',
      description: 'Explore bright collections of useful links, tools, references, and resources.',
      openGraphTitle: 'Curated finds, collections, and useful resources',
      openGraphDescription: 'Discover useful links and resources through a playful curated collection experience.',
      keywords: ['curated resources', 'bookmark collections', 'useful links', 'resource discovery'],
    },
    hero: {
      badge: 'Fresh finds',
      title: ['Meet the best', 'links on the shelf.'],
      description: 'A playful tray of useful resources, clever tools, and reference-worthy links curated for faster discovery.',
      primaryCta: { label: 'Browse finds', href: '/sbm' },
      secondaryCta: { label: 'Search resources', href: '/search' },
      searchPlaceholder: 'Search resources, tools, and collections',
      focusLabel: 'Focus',
      featureCardBadge: 'fresh shelf',
      featureCardTitle: 'Useful resources stay bright, skimmable, and easy to open.',
      featureCardDescription: 'The latest saved links shape the homepage while the core platform behavior stays intact.',
    },
    intro: {
      badge: 'About the shelf',
      title: 'Built for fast, cheerful resource discovery.',
      paragraphs: [
        'This site gathers useful links, tools, references, and collections into one easy browsing rhythm.',
        'Every public surface is centered on finding, saving, and opening resources without extra noise.',
        'Start with a collection, follow a related link, or search directly when you know what you need.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Resource-first homepage with bright collection cards.',
        'Direct search for links, topics, domains, and categories.',
        'Curated shelves for design, ideas, tools, and references.',
        'Fast interactions that keep browsing light.',
      ],
      primaryLink: { label: 'Browse finds', href: '/sbm' },
      secondaryLink: { label: 'Search resources', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Find something useful before your next tab gets lost.',
      description: 'Browse curated links, open a resource, or submit something worth adding to the shelf.',
      primaryCta: { label: 'Browse finds', href: '/sbm' },
      secondaryCta: { label: 'Contact us', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest resources in this collection.',
    },
  },
  about: {
    badge: 'Our Shelf',
    title: 'A brighter way to collect the web.',
    description: `${slot4BrandConfig.siteName} curates useful resources into snackable shelves so visitors can find good links faster.`,
    paragraphs: [
      'The public experience is built around bookmarks, collections, and resource discovery.',
      'Instead of sending visitors through generic feeds, the site keeps useful links grouped, searchable, and easy to open.',
    ],
    values: [
      {
        title: 'Curated before crowded',
        description: 'The best shelves feel selected, not stuffed. We make room for useful context around every link.',
      },
      {
        title: 'Fast to scan',
        description: 'Cards, filters, and search are tuned for quick decisions and return visits.',
      },
      {
        title: 'Easy to trust',
        description: 'Domains, categories, summaries, and direct visit actions make every resource clear before opening.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send a resource, collection idea, or note.',
    description: 'Tell us what should be added, improved, or organized. We will route it to the right shelf.',
    formTitle: 'Send a note',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search resources, topics, categories, and domains across the site.',
    },
    hero: {
      badge: 'Search the shelf',
      title: 'Find useful links faster.',
      description: 'Use keywords, categories, and resource types to discover saved links across the public collection.',
      placeholder: 'Search by keyword, topic, category, or domain',
    },
    resultsTitle: 'Latest searchable resources',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Submit a new resource for the site.',
    },
    locked: {
      badge: 'Curator access',
      title: 'Login to submit a resource.',
      description: 'Use your account to open the submission workspace and add useful links to the active shelves.',
    },
    hero: {
      badge: 'Submission workspace',
      title: 'Add a resource to the shelf.',
      description: 'Choose the resource type, add details, and prepare a clear title, link, summary, and supporting notes.',
    },
    formTitle: 'Resource details',
    submitLabel: 'Submit resource',
    successTitle: 'Resource submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Curator access',
      title: 'Welcome back to the shelf.',
      description: 'Login to continue browsing and submitting useful resources.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start curating.',
      description: 'Create an account to access the submission workspace and add useful resources.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related reads',
      fallbackTitle: 'Resource details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Related resources',
      fallbackDescription: 'Identity details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
