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

function CpuIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>; }
function LayersIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>; }
function ShieldIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>; }
function TestIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/><path d="M7 14h10"/></svg>; }
function ToolIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M14 7a4 4 0 00-5 5l-6 6 3 3 6-6a4 4 0 005-5l-3 3-3-3 3-3z"/></svg>; }

const ICONS: Record<string, React.ReactNode> = {
  cpu: <CpuIcon />, layers: <LayersIcon />, shield: <ShieldIcon />, test: <TestIcon />, tool: <ToolIcon />,
};

const GROUPS = [
  ['cpu', 'Core', ['React Native', 'React', 'TypeScript', 'JavaScript ES6+']],
  ['layers', 'State Management', ['Redux Toolkit', 'Redux-Saga']],
  ['shield', 'Auth & APIs', ['OKTA OAuth 2.0', 'REST', 'GraphQL', 'Axios', 'Firebase / FCM']],
  ['test', 'Testing', ['Appium', 'Mocha', 'Sauce Labs', 'Crashlytics', 'E2E']],
  ['tool', 'Tools', ['Xcode', 'Android Studio', 'Git', 'GitLab', 'JIRA', 'Figma', 'Confluence']],
] as const;

export default function Skills() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="skills" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">02 — Skills</p>
          <h2>The stack I reach for</h2>
          <p className="sub">A toolkit tuned for secure, high-performance mobile delivery — from core framework work to authentication, testing and release.</p>
        </div>
        <div className="skills-grid">
          {GROUPS.map(([ic, title, items], i) => (
            <div className={'skill-card card reveal' + (i === 0 ? ' skill-card--wide' : '')} data-d={(i % 4) + 1} key={title}>
              <div className="skill-top">
                <span className="skill-ic">{ICONS[ic]}</span>
                <h3>{title}</h3>
                <span className="skill-count mono">{String(items.length).padStart(2, '0')}</span>
              </div>
              <div className="skill-chips">
                {items.map(s => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
