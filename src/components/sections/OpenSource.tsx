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

function ArrowUpIcon() { return <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>; }
function StarIcon() { return <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>; }
function ForkIcon() { return <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="20" r="2"/><path d="M6 8v2a4 4 0 004 4h4a4 4 0 004-4V8"/><path d="M12 14v4"/></svg>; }
function GitHubIcon() { return <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6 0C6.2 3.3 5.1 3.6 5.1 3.6a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 003.7 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>; }
function CodeIcon() { return <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>; }

const REPOS = [
  {
    name: 'rn-multitenant-kit',
    desc: 'A starter kit for multi-brand React Native apps — single codebase, configurable themes and navigation per tenant. Born from the Toyota FS project.',
    lang: 'TypeScript',
    stars: 48,
    forks: 12,
    tags: ['react-native', 'multi-tenant', 'typescript'],
    href: 'https://github.com/sagar-528',
  },
  {
    name: 'rn-okta-auth',
    desc: 'Minimal React Native integration for OKTA OAuth 2.0 / OIDC with PKCE. Handles token refresh, secure storage, and biometric unlock.',
    lang: 'TypeScript',
    stars: 31,
    forks: 8,
    tags: ['react-native', 'okta', 'oauth'],
    href: 'https://github.com/sagar-528',
  },
  {
    name: 'rn-flatlist-perf',
    desc: 'Examples and benchmarks for FlatList optimisation in React Native — windowed rendering, getItemLayout, separateItemRef patterns.',
    lang: 'JavaScript',
    stars: 22,
    forks: 5,
    tags: ['react-native', 'performance', 'flatlist'],
    href: 'https://github.com/sagar-528',
  },
];

const TECHNOLOGIES = [
  { name: 'React Native',   pct: 95 },
  { name: 'TypeScript',     pct: 88 },
  { name: 'Redux Toolkit',  pct: 85 },
  { name: 'Firebase',       pct: 78 },
  { name: 'GraphQL',        pct: 70 },
  { name: 'React (Web)',    pct: 75 },
];

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
};

export default function OpenSource() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="opensource" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">07 — Open Source &amp; GitHub</p>
          <h2>Code in the open</h2>
          <p className="sub">
            Libraries and experiments extracted from production work — patterns that earned their place at scale.
          </p>
        </div>

        <div className="os-layout">
          <div className="os-repos reveal" data-d="1">
            {REPOS.map((r, i) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="os-repo card reveal"
                data-d={i + 1}
              >
                <div className="os-repo-head">
                  <span className="os-repo-icon"><CodeIcon /></span>
                  <span className="os-repo-name mono">{r.name}</span>
                  <span className="os-arrow"><ArrowUpIcon /></span>
                </div>
                <p className="os-repo-desc">{r.desc}</p>
                <div className="os-repo-footer">
                  <span className="os-lang">
                    <span className="os-lang-dot" style={{ background: LANG_COLORS[r.lang] }} />
                    <span className="mono">{r.lang}</span>
                  </span>
                  <span className="os-stat"><StarIcon /> {r.stars}</span>
                  <span className="os-stat"><ForkIcon /> {r.forks}</span>
                </div>
                <div className="os-tags">
                  {r.tags.map(t => <span className="chip chip--sm" key={t}>{t}</span>)}
                </div>
              </a>
            ))}
          </div>

          <div className="os-sidebar reveal" data-d="2">
            <div className="os-profile card">
              <div className="os-profile-head">
                <div className="os-avatar">
                  <GitHubIcon />
                </div>
                <div>
                  <p className="os-handle mono">@sagar-528</p>
                  <p className="os-name">Sagar Gupta</p>
                </div>
              </div>
              <a
                href="https://github.com/sagar-528"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost os-btn"
              >
                View GitHub <ArrowUpIcon />
              </a>
            </div>

            <div className="os-langs card reveal" data-d="3">
              <h4 className="os-langs-title">Technology mix</h4>
              {TECHNOLOGIES.map(({ name, pct }) => (
                <div className="os-lang-row" key={name}>
                  <div className="os-lang-meta">
                    <span>{name}</span>
                    <span className="mono os-lang-pct">{pct}%</span>
                  </div>
                  <div className="os-lang-bar">
                    <div className="os-lang-fill" style={{ width: pct + '%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
