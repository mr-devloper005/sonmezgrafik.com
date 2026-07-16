'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent, isUiHiddenTask } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const hasPublicFinds = SITE_CONFIG.tasks.some((task) => task.enabled && task.key === 'sbm' && !isUiHiddenTask(task.key))
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const collectionLinks = [
    { label: 'Business', href: '/sbm?category=business' },
    { label: 'Health', href: '/sbm?category=health' },
    { label: 'Technology', href: '/sbm?category=technology' },
    { label: 'Real Estate', href: '/sbm?category=real-estate' },
    { label: 'Home Improvement', href: '/sbm?category=home-improvement' },
  ]

  return (
    <footer className="border-t border-[var(--slot4-accent)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex flex-col">
            <span className="editable-display text-5xl font-black uppercase leading-none">{SITE_CONFIG.name}</span>
            <span className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-white/75">{globalContent.footer?.tagline}</span>
          </Link>
          <p className="mt-5 max-w-md text-base font-semibold leading-8 text-white/85">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Collections</h3>
          <div className="mt-5 grid gap-3">
            {collectionLinks.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 text-base font-black uppercase tracking-[0.04em] text-white transition hover:translate-x-1">
                {link.label} <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
            {hasPublicFinds ? null : (
              <Link href="/sbm" className="inline-flex items-center gap-2 text-base font-black uppercase tracking-[0.04em] text-white transition hover:translate-x-1">
                Finds <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Site</h3>
          <div className="mt-5 grid gap-3">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-base font-black uppercase tracking-[0.04em] text-white transition hover:translate-x-1">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-base font-black uppercase tracking-[0.04em] text-white transition hover:translate-x-1">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-5 text-center text-xs font-black uppercase tracking-[0.16em] text-white/75">
        Â© {year} {SITE_CONFIG.name}. {globalContent.footer?.bottomNote}
      </div>
    </footer>
  )
}


