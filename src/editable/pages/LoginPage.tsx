import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-warm)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="rounded-[2rem] border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-6 shadow-[0_14px_0_rgba(32,25,22,0.08)] sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.auth.login.badge}</p>
            <h1 className="editable-display mt-4 max-w-2xl text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[.84] tracking-normal text-[var(--slot4-accent)]">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-[var(--slot4-muted-text)]">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Saved shelves', 'Quick access', 'Curator tools'].map((item) => (
                <span key={item} className="rounded-[1.25rem] border border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-[var(--slot4-page-text)]">{item}</span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-6 shadow-[0_14px_0_rgba(32,25,22,0.08)] sm:p-8">
            <div className="rounded-[1.5rem] bg-[var(--slot4-accent)] p-6 text-[var(--slot4-on-accent)]">
              <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">{SITE_CONFIG.name}</p>
              <h2 className="editable-display mt-3 text-4xl font-black uppercase leading-[.86]">{pagesContent.auth.login.formTitle}</h2>
            </div>
            <EditableLocalLoginForm />
            <p className="mt-6 text-sm font-semibold text-[var(--slot4-muted-text)]">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
