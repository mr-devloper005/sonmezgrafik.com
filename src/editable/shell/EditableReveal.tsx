'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export function EditableReveal({ children, index = 0, className = '' }: { children: ReactNode; index?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setReady(true); observer.disconnect() } }, { threshold: .08 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`editable-reveal ${className}`} data-ready={ready} style={{ animationDelay: `${index * 80}ms` }}>{children}</div>
}
