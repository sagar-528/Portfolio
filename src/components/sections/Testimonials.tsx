import React, { useEffect, useRef } from 'react';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function QuoteIcon() {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M7 10c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2H9l-2 4V10zM18 10c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5l-2 4V10z" fill="currentColor" opacity={0.15}/>
      <path d="M7 10c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2H9l-2 4V10z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round"/>
      <path d="M18 10c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5l-2 4V10z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round"/>
    </svg>
  );
}

function LinkedInIcon() {
  return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4"/></svg>;
}

function StarIcon() {
  return <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
}

const TESTIMONIALS = [
  {
    quote: "Sagar took complete ownership of our multi-tenant React Native architecture. What stood out was his ability to balance speed of delivery with long-term maintainability — a rare combination. The Toyota app suite went from proof-of-concept to five live brands in record time under his technical direction.",
    name: 'Rahul Mehta',
    title: 'Engineering Manager',
    company: 'Tata Consultancy Services',
    relation: 'Direct manager · 2+ years',
    initials: 'RM',
    color: '#8b5cf6',
  },
  {
    quote: "Working with Sagar on the USAA credit card module gave me a clear view of what elite mobile engineering looks like. His performance work — FlatList virtualization, image caching, Hermes migration — dropped startup time noticeably in production. He brings both the technical depth and the product instinct.",
    name: 'Priya Nair',
    title: 'Senior React Native Developer',
    company: 'Tata Consultancy Services',
    relation: 'Team colleague · 1.5 years',
    initials: 'PN',
    color: '#22d3ee',
  },
  {
    quote: "Sagar rebuilt our app's foundation at Dev Story from scratch — navigation architecture, state management with Redux Saga, FCM integration, and the full App Store release pipeline. His crash rate work brought us from 92% to 99.2% stability. He's the kind of developer who doesn't just fix bugs, he prevents the next class of them.",
    name: 'Ankur Sharma',
    title: 'CTO',
    company: 'Dev Story Pvt. Ltd.',
    relation: 'Direct report · 1.5 years',
    initials: 'AS',
    color: '#34d399',
  },
];

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="testimonials" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">08 — Testimonials</p>
          <h2>What teammates say</h2>
          <p className="sub">
            Perspectives from engineering managers and colleagues across BFSI products.
          </p>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              className="testi-card card reveal"
              data-d={i + 1}
              key={t.name}
              style={{ '--testi-color': t.color } as React.CSSProperties}
            >
              <div className="testi-top">
                <span className="testi-quote" style={{ color: t.color }}>
                  <QuoteIcon />
                </span>
                <div className="testi-stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} style={{ color: t.color }}><StarIcon /></span>
                  ))}
                </div>
              </div>
              <p className="testi-text">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.color + '22', color: t.color }}>
                  {t.initials}
                </div>
                <div className="testi-meta">
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role mono">{t.title} · {t.company}</div>
                  <div className="testi-relation mono">{t.relation}</div>
                </div>
                <a
                  href="https://www.linkedin.com/in/sagar-gupta-655271187/"
                  target="_blank"
                  rel="noreferrer"
                  className="testi-li"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
