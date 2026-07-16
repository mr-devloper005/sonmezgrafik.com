import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  const stats = [
    ['Curated', 'Resource-first discovery'],
    ['Focused', 'Collections over noise'],
    ['Useful', 'Open the right link faster'],
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="relative overflow-hidden border-b border-[var(--editable-border)] bg-[var(--slot4-warm)]">
          <div className="absolute inset-x-0 top-0 h-24 bg-[var(--slot4-accent)]" />
          <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <article className="overflow-hidden rounded-[2rem] border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-6 shadow-[0_14px_0_rgba(32,25,22,0.08)] sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="editable-display mt-5 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[.84] tracking-normal text-[var(--slot4-accent)]">
                About {SITE_CONFIG.name}
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-[var(--slot4-page-text)]">{pagesContent.about.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map(([label, value]) => (
                  <div key={label} className="rounded-[1.5rem] border border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] p-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--slot4-muted-text)]">{label}</p>
                    <p className="mt-2 text-sm font-black leading-5 text-[var(--slot4-page-text)]">{value}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <article className="rounded-[2rem] border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-6 shadow-[0_10px_0_rgba(32,25,22,0.05)] sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">What this place does</p>
            <div className="mt-6 space-y-5 text-base font-semibold leading-8 text-[var(--slot4-muted-text)]">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-[1.5rem] border border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] p-6 transition duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:bg-[var(--slot4-surface-bg)]">
                <h2 className="editable-display text-3xl font-black uppercase leading-[.9] text-[var(--slot4-accent)]">{value.title}</h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
