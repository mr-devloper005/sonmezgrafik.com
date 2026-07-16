'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, Menu, PlusCircle, Search, UserPlus, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navItems = [{ label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }]

  const pill =
    'inline-flex items-center justify-center rounded-full border border-[var(--slot4-accent)] px-5 py-3 text-sm font-black uppercase tracking-[0.04em] text-[var(--slot4-accent)] transition duration-300 hover:scale-95 hover:bg-[var(--slot4-accent)] hover:text-white'

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/95 text-[var(--editable-nav-text)] backdrop-blur-md">
      <nav className="mx-auto grid min-h-[92px] w-full max-w-[var(--editable-container)] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`${pill} ${active ? 'bg-[var(--slot4-accent)] text-white' : ''}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <Link href="/" className="group flex min-w-0 flex-col items-center justify-center text-center">
          <span className="editable-display text-4xl font-black uppercase leading-none text-[var(--slot4-accent)] transition duration-300 group-hover:scale-95 sm:text-5xl">
            {SITE_CONFIG.name}
          </span>
          <span className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[var(--slot4-muted-text)]">
            {globalContent.nav?.tagline || SITE_CONFIG.tagline}
          </span>
        </Link>

        <div className="flex items-center justify-end gap-2">
          <Link href="/search" aria-label="Search resources" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--slot4-accent)] text-[var(--slot4-accent)] transition duration-300 hover:scale-95 hover:bg-[var(--slot4-accent)] hover:text-white">
            <Search className="h-5 w-5" />
          </Link>

          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-5 py-3 text-sm font-black uppercase tracking-[0.04em] text-[var(--editable-cta-text)] transition duration-300 hover:scale-95 sm:inline-flex">
                <PlusCircle className="h-4 w-4" /> Create
              </Link>
              <button type="button" onClick={logout} className="hidden rounded-full border border-[var(--slot4-accent)] px-5 py-3 text-sm font-black uppercase tracking-[0.04em] text-[var(--slot4-accent)] transition duration-300 hover:scale-95 sm:inline-flex">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-full border border-[var(--slot4-accent)] px-5 py-3 text-sm font-black uppercase tracking-[0.04em] text-[var(--slot4-accent)] transition duration-300 hover:scale-95 sm:inline-flex">
                <LogIn className="h-4 w-4" /> Login
              </Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-5 py-3 text-sm font-black uppercase tracking-[0.04em] text-[var(--editable-cta-text)] transition duration-300 hover:scale-95 sm:inline-flex">
                <UserPlus className="h-4 w-4" /> Sign up
              </Link>
            </>
          )}

          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--slot4-accent)] text-white transition duration-300 hover:scale-95 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-5 lg:hidden">
          <form action="/search" className="mb-4 flex items-center gap-3 rounded-full border border-[var(--slot4-accent)] bg-white px-4">
            <Search className="h-4 w-4 text-[var(--slot4-accent)]" />
            <input name="q" type="search" placeholder="Search resources" className="min-w-0 flex-1 bg-transparent py-3 text-sm text-[var(--slot4-page-text)] outline-none placeholder:text-[var(--slot4-muted-text)]" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`rounded-full px-5 py-3 text-sm font-black uppercase tracking-[0.04em] ${active ? 'bg-[var(--slot4-accent)] text-white' : 'border border-[var(--slot4-accent)] text-[var(--slot4-accent)]'}`}>
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </header>
  )
}
