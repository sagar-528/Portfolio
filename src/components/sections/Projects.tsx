import React, { useEffect, useRef, useState } from 'react';
import { PhoneMock, ScreenAutoFinance, ScreenCardManage, ScreenSafety } from '../ui/PhoneScreens';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -4% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function ZapIcon() { return <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>; }
function ExternalIcon() { return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h4"/></svg>; }
function PlayIcon() { return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l14 8-14 8V4z"/></svg>; }
function ChevronIcon() { return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>; }

interface CaseStudy {
  problem: string;
  solution: string;
  challenges: string[];
  decisions: string[];
}

const PROJECTS = [
  {
    n: '01',
    title: 'Toyota Motor Credit — Multi-Tenant App Suite',
    period: '2023 — 2025 · TCS',
    accent: '#7c83ff',
    screen: 'autofinance',
    role: 'React Native Lead',
    scale: '5 brands · 100K+ users',
    desc: 'A configurable auto-finance platform serving five Toyota Financial subsidiaries — TFS, LFS, TCPR, MFS, and BPFS — from a single React Native codebase. Lease balances, payments, and document access secured with OKTA SSO.',
    impact: [
      { stat: '45%', note: 'faster app startup' },
      { stat: '38%', note: 'crash rate reduction' },
      { stat: '60%', note: 'less duplicate code' },
      { stat: '50%', note: 'faster tenant launch' },
    ],
    stack: ['React Native', 'TypeScript', 'OKTA OAuth 2.0', 'Redux Toolkit', 'GraphQL', 'Sauce Labs', 'Hermes'],
    links: [{ icon: 'play', label: 'View on Play Store', href: 'https://play.google.com/store/apps/details?id=com.toyotafinance.projectvikram', primary: true }],
    note: 'UI preview is an original styling mock, not the production app.',
    caseStudy: {
      problem: 'Toyota Financial Services had five separate mobile apps maintained by five separate teams — each with its own codebase, release cadence, and maintenance burden. Any shared feature required five parallel implementations.',
      solution: 'Designed a single React Native codebase with a config-driven multi-tenant architecture. Each brand is an environment config — theme tokens, feature flags, API endpoints, and navigation rules — loaded at bootstrap via OKTA SSO tenant detection.',
      challenges: [
        'Per-brand theming at runtime without a full app reload',
        'OKTA OIDC with per-tenant issuer URLs and RBAC claims',
        'CI/CD pipeline generating 5 unique app bundles from one source',
      ],
      decisions: [
        'Theme context over StyleSheet.create for runtime token swapping',
        'Redux slices per domain, shared across brands with brand-scoped overrides',
        'Sauce Labs cross-device matrix covering 50+ device/OS combinations',
      ],
    } as CaseStudy,
  },
  {
    n: '02',
    title: 'USAA — Credit Card Management Platform',
    period: '2024 — Present · TCS',
    accent: '#6aa3ff',
    screen: 'cardmanage',
    role: 'Frontend Lead',
    scale: '10M+ customers',
    desc: 'Secure card servicing at enterprise scale for USAA members — real-time balances, freeze/unfreeze, in-app PIN management, and statement access. Built with a Storybook-driven design system on React Talon.',
    impact: [
      { stat: '10M+', note: 'customers served' },
      { stat: '98%', note: 'release success rate' },
      { stat: '35%', note: 'faster page loads' },
      { stat: '30%', note: 'less technical debt' },
    ],
    stack: ['React Native', 'React.js', 'TypeScript', 'Redux-Saga', 'REST', 'Storybook', 'Crashlytics'],
    links: [{ icon: 'external', label: 'Visit USAA', href: 'https://www.usaa.com', primary: false }],
    note: 'UI preview is an original styling mock, not the production app.',
    caseStudy: {
      problem: 'Legacy Java/HTML/CSS PIN management modules were fragile, hard to test, and inconsistently branded. Every card servicing change required coordination across three teams and long regression cycles.',
      solution: 'Led the full modernisation to React.js with TypeScript on web and React Native on mobile. Implemented a Storybook component library as the single source of truth, enabling design and engineering to iterate independently.',
      challenges: [
        'Migrating active PIN flows with zero downtime for 10M users',
        'Consistent design across web (React Talon) and mobile (React Native)',
        'Regulatory compliance for secure PIN entry and display suppression',
      ],
      decisions: [
        'Storybook for component isolation — QA signs off on stories, not PRs',
        'Analytics event tagging at component mount for product observability',
        'Secure TextInput with masked display — no PIN ever stored in JS state',
      ],
    } as CaseStudy,
  },
  {
    n: '03',
    title: 'Their Actions — Social Safety App',
    period: '2021 — 2022 · Dev Story',
    accent: '#a78bfa',
    screen: 'safety',
    role: 'React Native Developer',
    scale: 'App Store + Play Store · live',
    desc: 'A personal-safety social app — live check-ins, trusted-contact circles, and instant alerts with push notifications. Greenfield build from zero to both stores, designed to be reassuring and fast in a moment of need.',
    impact: [
      { stat: '99.2%', note: 'crash-free sessions' },
      { stat: '+15%', note: 'user monetisation' },
      { stat: '70%', note: 'wider device coverage' },
      { stat: '50+', note: 'crashes resolved' },
    ],
    stack: ['React Native', 'Firebase', 'FCM', 'GraphQL', 'Redux-Saga', 'Crashlytics', 'Mocha'],
    links: [
      { icon: 'external', label: 'App Store', href: '#', primary: false },
      { icon: 'play', label: 'Play Store', href: '#', primary: false },
    ],
    note: '',
    caseStudy: {
      problem: 'App stability was at 92% crash-free sessions — below acceptable threshold for a safety-critical product where a crash at the wrong moment could have real consequences. Push notification delivery was unreliable on lower-end Android devices.',
      solution: 'Systematic crash analysis via Crashlytics traces. Identified three root causes — unhandled promise rejections in navigation, memory leaks in real-time listener cleanup, and background FCM handling on Android 12+ restrictions.',
      challenges: [
        'FCM background delivery on Android 12+ with new exact alarm restrictions',
        'Real-time listener cleanup on navigation pop to prevent memory leaks',
        'In-app purchase receipt validation for subscription tiers',
      ],
      decisions: [
        'Global error boundary with Crashlytics breadcrumbs for crash context',
        'Foreground service for reliable location check-ins on Android',
        'RevenueCat for cross-platform IAP receipt validation',
      ],
    } as CaseStudy,
  },
];

const SCREENS: Record<string, (accent: string) => React.ReactNode> = {
  autofinance: (a) => <ScreenAutoFinance accent={a} />,
  cardmanage:  (a) => <ScreenCardManage accent={a} />,
  safety:      (a) => <ScreenSafety accent={a} />,
};

function CaseStudyPanel({ cs, accent }: { cs: CaseStudy; accent: string }) {
  return (
    <div className="cs-panel">
      <div className="cs-row">
        <div className="cs-block">
          <h4 className="cs-label mono">Problem</h4>
          <p className="cs-text">{cs.problem}</p>
        </div>
        <div className="cs-block">
          <h4 className="cs-label mono">Solution</h4>
          <p className="cs-text">{cs.solution}</p>
        </div>
      </div>
      <div className="cs-row cs-row--lists">
        <div className="cs-block">
          <h4 className="cs-label mono">Challenges</h4>
          <ul className="cs-list">
            {cs.challenges.map(c => (
              <li key={c}>
                <span className="cs-dot" style={{ background: accent }} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="cs-block">
          <h4 className="cs-label mono">Technical decisions</h4>
          <ul className="cs-list">
            {cs.decisions.map(d => (
              <li key={d}>
                <span className="cs-dot" style={{ background: accent }} />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const [openCS, setOpenCS] = useState<string | null>(null);

  return (
    <section id="projects" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">04 — Selected work</p>
          <h2>Shipped to production, at scale</h2>
          <p className="sub">Mobile-first products across auto-finance, card servicing, and personal safety. Tap "Case study" to see the architecture, challenges, and decisions behind each one.</p>
        </div>

        <div className="projects">
          {PROJECTS.map((p, i) => (
            <article className={'project reveal' + (i % 2 ? ' project--rev' : '')} key={p.n}>
              <div className="project-phone">
                <div className="phone-halo" style={{ '--app-color': p.accent } as React.CSSProperties} />
                <PhoneMock accent={p.accent}>
                  {SCREENS[p.screen](p.accent)}
                </PhoneMock>
              </div>

              <div className="project-info">
                <div className="project-meta-row">
                  <span className="project-n mono">{p.n}</span>
                  <span className="project-scale chip">{p.scale}</span>
                </div>
                <span className="project-period mono">{p.period}</span>
                <h3>{p.title}</h3>
                <p className="project-role mono" style={{ color: p.accent }}>Role: {p.role}</p>
                <p className="project-desc">{p.desc}</p>

                <div className="project-impact">
                  {p.impact.map(m => (
                    <div className="impact-pill" key={m.stat} style={{ '--app-color': p.accent } as React.CSSProperties}>
                      <span className="impact-stat"><ZapIcon /> {m.stat}</span>
                      <span className="impact-note mono">{m.note}</span>
                    </div>
                  ))}
                </div>

                <div className="project-stack">
                  {p.stack.map(s => <span className="chip" key={s}>{s}</span>)}
                </div>

                <div className="project-links">
                  {p.links.map(({ icon, label, href, primary }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer"
                       className={'btn ' + (primary ? 'btn-primary' : 'btn-ghost')}>
                      {icon === 'play' ? <PlayIcon /> : <ExternalIcon />} {label}
                    </a>
                  ))}
                  <button
                    className="btn btn-ghost"
                    onClick={() => setOpenCS(openCS === p.n ? null : p.n)}
                  >
                    {openCS === p.n ? 'Close' : 'Case study'}
                    <span style={{ transform: openCS === p.n ? 'rotate(180deg)' : 'none', display: 'inline-flex', transition: 'transform .2s' }}>
                      <ChevronIcon />
                    </span>
                  </button>
                </div>

                {p.note && <p className="project-note mono">{p.note}</p>}
              </div>

              {openCS === p.n && (
                <div className="project-cs">
                  <CaseStudyPanel cs={p.caseStudy} accent={p.accent} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
