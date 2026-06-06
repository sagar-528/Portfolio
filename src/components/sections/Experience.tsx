import React, { useEffect, useRef } from 'react';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function CheckIcon() { return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}><path d="M5 12l5 5L20 6"/></svg>; }
function TrendUpIcon() { return <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 7l-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg>; }

const ROLES = [
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'System Engineer — Frontend Lead',
    period: 'Jan 2023 — Present',
    location: 'Pune, India',
    now: true,
    summary: 'Leading React Native frontend for enterprise BFSI clients across two major product lines — USAA credit card servicing and Toyota multi-tenant auto-finance. Full ownership of architecture, code quality, and release engineering.',
    highlights: [
      { metric: '10M+', label: 'USAA customers served' },
      { metric: '98%', label: 'release success rate' },
      { metric: '45%', label: 'faster app startup' },
      { metric: '38%', label: 'crash rate reduction' },
    ],
    points: [
      'Led UI redesign of credit card PIN management modules using React Talon framework and a reusable Storybook component library, serving 10M+ USAA customers across web and mobile.',
      'Modernised legacy Java/HTML/CSS/JavaScript codebases by migrating to React.js with TypeScript, reducing technical debt by ~30% and improving page load speed by 35%.',
      'Mentored 2 junior developers on React hooks, performance patterns, and Git workflows, accelerating team delivery velocity by 25% within Agile/Scrum sprints.',
      'Architected a multi-tenant React Native application from a single shared codebase serving 5 Toyota financial subsidiaries, reducing duplicate code by 60% and cutting maintenance overhead by 40%.',
      'Implemented OKTA OAuth 2.0 / OIDC authentication with Role-Based Access Control (RBAC) and secure REST API bindings, meeting enterprise security and compliance standards.',
      'Owned end-to-end iOS and Android release pipelines publishing to Apple App Store and Google Play Store with zero-downtime deployments and a 98% release success rate.',
      'Integrated Sauce Labs automated cross-device testing with Selenium and Appium scripts, expanding device coverage by 70% and improving CI stability.',
      'Boosted app performance through FlatList virtualisation, image caching, and Hermes engine adoption, cutting startup time by 45% and crash rate by 38%.',
    ],
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'OKTA OAuth 2.0', 'GraphQL', 'REST', 'Sauce Labs', 'Appium', 'Storybook', 'Hermes'],
  },
  {
    company: 'Dev Story Pvt. Ltd.',
    role: 'React Native Developer',
    period: 'Jun 2021 — Nov 2022',
    location: 'Chandigarh, India',
    now: false,
    summary: 'Built and shipped cross-platform production apps end-to-end, from greenfield architecture through to App Store review. Primary delivery ownership across fintech and social-safety products.',
    highlights: [
      { metric: '99.2%', label: 'crash-free sessions' },
      { metric: '+15%', label: 'user monetisation' },
      { metric: '50+', label: 'production crashes resolved' },
      { metric: '70%', label: 'wider device coverage' },
    ],
    points: [
      'Built a React Native cross-platform app from scratch, including reusable component library, navigation stack, and scalable state management with Redux Saga.',
      'Integrated Firebase Cloud Messaging (FCM) push notifications and in-app purchase subscriptions, driving a 15% increase in user monetisation.',
      'Managed full App Store and Google Play Store deployment lifecycle including provisioning profiles, code signing, and successful review submissions on first attempt.',
      'Debugged and resolved 50+ production crashes using Crashlytics and Chrome DevTools, improving app stability from 92% to 99.2% crash-free sessions.',
      'Conducted knowledge transfer sessions and code reviews, mentoring 3 teammates on React Native best practices and component architecture.',
    ],
    stack: ['React Native', 'Redux-Saga', 'REST', 'Firebase', 'FCM', 'Appium', 'Crashlytics', 'Mocha'],
  },
  {
    company: 'Mantra Labs Pvt. Ltd.',
    role: 'Trainee Software Engineer',
    period: 'Mar 2021 — Jun 2021',
    location: 'Bangalore, India',
    now: false,
    summary: 'First professional role. Focused on building a production mobile engineering foundation — from UI components to architecture documentation and agile delivery practices.',
    highlights: [],
    points: [
      'Engineered hybrid mobile UI features and authored detailed architecture artifacts — use-case models, functional specs, and structural diagrams.',
      'Reduced requirement ambiguity by 40% and cut sprint rework by documenting edge cases and design decisions before implementation.',
    ],
    stack: ['React Native', 'JavaScript ES6+', 'Git', 'Figma', 'Agile'],
  },
];

export default function Experience() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="experience" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">03 — Experience</p>
          <h2>Four years, shipping in production</h2>
          <p className="sub">End-to-end ownership across BFSI mobile products — from architecture through to App Store.</p>
        </div>
        <div className="timeline">
          {ROLES.map((r, i) => (
            <div className="tl-item reveal" data-d={Math.min(i + 1, 3)} key={r.company}>
              <div className="tl-marker">
                <span className={r.now ? 'live' : ''} />
              </div>
              <div className="tl-card card">
                <div className="tl-head">
                  <div>
                    <h3>{r.role}</h3>
                    <p className="tl-company">{r.company}</p>
                    <p className="tl-location mono">{r.location}</p>
                  </div>
                  <span className={'tl-period mono' + (r.now ? ' tl-now' : '')}>{r.period}</span>
                </div>

                <p className="tl-summary">{r.summary}</p>

                {r.highlights.length > 0 && (
                  <div className="tl-highlights">
                    {r.highlights.map(h => (
                      <div className="tl-highlight" key={h.label}>
                        <span className="tl-hl-metric"><TrendUpIcon />{h.metric}</span>
                        <span className="tl-hl-label mono">{h.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="tl-points">
                  {r.points.map((p, j) => (
                    <li key={j}><CheckIcon /><span>{p}</span></li>
                  ))}
                </ul>
                <div className="tl-stack">
                  {r.stack.map(s => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
