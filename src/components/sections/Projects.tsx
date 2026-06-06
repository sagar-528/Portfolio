import React, { useEffect, useRef } from 'react';
import { PhoneMock, ScreenAutoFinance, ScreenCardManage, ScreenSafety } from '../ui/PhoneScreens';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function ZapIcon() { return <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>; }
function ExternalIcon() { return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h4"/></svg>; }
function PlayIcon() { return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l14 8-14 8V4z"/></svg>; }

const PROJECTS = [
  {
    n: '01',
    title: 'Toyota Motor Credit — Multi-Tenant App',
    period: '2023 — Present · TCS',
    accent: '#7c83ff',
    screen: 'autofinance',
    desc: 'A configurable auto-finance app serving multiple lender tenants from one React Native codebase — lease balances, payments and document access, secured with OKTA OAuth 2.0.',
    impact: ['45% faster startup', '38% fewer crashes', 'Multi-tenant theming'],
    stack: ['React Native', 'TypeScript', 'OKTA OAuth 2.0', 'Redux Toolkit', 'GraphQL'],
    links: [{ icon: 'play', label: 'View on Play Store', href: 'https://play.google.com/store/apps/details?id=com.toyotafinance.projectvikram', primary: true }],
    note: 'UI preview is an original styling mock, not the production app.',
  },
  {
    n: '02',
    title: 'USAA — Credit Card Management Platform',
    period: '2023 · TCS',
    accent: '#6aa3ff',
    screen: 'cardmanage',
    desc: 'Secure card servicing for members — real-time balances, freeze/unfreeze, in-app PIN management and statements, built for high reliability under heavy load.',
    impact: ['98% release success', 'Secure PIN flow', 'Real-time servicing'],
    stack: ['React Native', 'Redux-Saga', 'REST', 'Crashlytics', 'Secure Auth'],
    links: [{ icon: 'external', label: 'View live', href: 'https://www.usaa.com', primary: false }],
    note: 'UI preview is an original styling mock, not the production app.',
  },
  {
    n: '03',
    title: 'Their Actions — Social Safety App',
    period: '2021 — 2022 · Dev Story',
    accent: '#a78bfa',
    screen: 'safety',
    desc: 'A personal-safety social app — live check-ins, trusted-contact circles and instant alerts with push notifications, designed to be reassuring and fast in the moment.',
    impact: ['70% wider device coverage', 'Real-time push', 'Friendly, calm UX'],
    stack: ['React Native', 'Firebase / FCM', 'GraphQL', 'Push'],
    links: [
      { icon: 'external', label: 'App Store', href: '#', primary: false },
      { icon: 'play', label: 'Play Store', href: '#', primary: false },
    ],
    note: '',
  },
];

const SCREENS: Record<string, (accent: string) => React.ReactNode> = {
  autofinance: (a) => <ScreenAutoFinance accent={a} />,
  cardmanage:  (a) => <ScreenCardManage accent={a} />,
  safety:      (a) => <ScreenSafety accent={a} />,
};

export default function Projects() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="projects" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">04 — Selected work</p>
          <h2>Shipped to production, at scale</h2>
          <p className="sub">Mobile-first products across auto-finance, card servicing and personal safety. Each preview is rendered inside a real device frame.</p>
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
                <span className="project-n mono">{p.n}</span>
                <span className="project-period mono">{p.period}</span>
                <h3>{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-impact">
                  {p.impact.map(m => (
                    <span className="impact-pill" key={m} style={{ '--app-color': p.accent } as React.CSSProperties}>
                      <ZapIcon /> {m}
                    </span>
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
                </div>
                {p.note && <p className="project-note mono">{p.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
