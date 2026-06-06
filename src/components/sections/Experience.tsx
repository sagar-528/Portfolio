import React, { useEffect, useRef } from 'react';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function CheckIcon() { return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M5 12l5 5L20 6"/></svg>; }

const ROLES = [
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'System Engineer — Frontend Lead',
    period: 'Jan 2023 — Present',
    now: true,
    summary: 'Leading React Native frontend for enterprise BFSI clients, owning architecture, code quality and release readiness.',
    points: [
      'Lead the mobile frontend for a multi-tenant auto-finance platform serving enterprise clients.',
      'Drove a 45% faster app startup and a 38% drop in crash rate through profiling and architecture work.',
      'Mentor engineers and set standards for state management, testing and CI release flow.',
    ],
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'OKTA OAuth 2.0', 'GraphQL'],
  },
  {
    company: 'Dev Story Pvt. Ltd.',
    role: 'React Native Developer',
    period: 'Jun 2021 — Nov 2022',
    now: false,
    summary: 'Built and shipped production cross-platform apps across fintech and social products.',
    points: [
      'Delivered features end-to-end across iOS and Android with a shared React Native codebase.',
      'Expanded supported device coverage by 70% via responsive layouts and rigorous QA.',
      'Integrated REST/GraphQL APIs, push notifications (FCM) and secure auth flows.',
    ],
    stack: ['React Native', 'Redux-Saga', 'REST', 'Firebase / FCM', 'Appium'],
  },
  {
    company: 'Mantra Labs',
    role: 'Trainee Software Engineer',
    period: 'Mar 2021 — Jun 2021',
    now: false,
    summary: 'Started my mobile career building UI components and learning production engineering practices.',
    points: [
      'Built reusable React Native UI components and screens to design spec.',
      'Learned Git workflows, code review and agile delivery on a live product team.',
    ],
    stack: ['React Native', 'JavaScript ES6+', 'Git', 'Figma'],
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
                  </div>
                  <span className={'tl-period mono' + (r.now ? ' tl-now' : '')}>{r.period}</span>
                </div>
                <p className="tl-summary">{r.summary}</p>
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
