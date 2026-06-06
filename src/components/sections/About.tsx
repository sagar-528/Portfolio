import React, { useEffect, useRef } from 'react';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

const FACTS = [
  { icon: 'pin',    key: 'Based in',         val: 'Pune, India' },
  { icon: 'code',   key: 'Focus',             val: 'React Native · TypeScript' },
  { icon: 'shield', key: 'Domain',            val: 'Banking, Financial Services & Insurance' },
  { icon: 'layers', key: 'Ways of working',   val: 'Agile · Tech lead · Mentoring' },
  { icon: 'rocket', key: 'Apps shipped',      val: '6+ to App Store and Google Play' },
  { icon: 'time',   key: 'Experience',        val: '4+ years in mobile engineering' },
];

const PHILOSOPHY = [
  {
    title: 'Mobile first, always',
    body: 'I think in terms of gesture, network conditions, and battery. Good mobile software is invisible — it never makes you think about the app.',
  },
  {
    title: 'Performance is a feature',
    body: 'Users in BFSI check their balances during commutes on 4G. Every millisecond of startup time and every crash costs trust that took years to earn.',
  },
  {
    title: 'Own the outcome',
    body: 'I care about what ships, not what I wrote. I\'ve rewritten my own code when it was the right call, and I\'ll do it again.',
  },
];

const LINKS = [
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sagar-gupta-655271187/' },
  { icon: 'github',   label: 'GitHub',   href: 'https://github.com/sagar-528' },
];

function PinIcon()    { return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>; }
function CodeIcon()   { return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>; }
function ShieldIcon() { return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>; }
function LayersIcon() { return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>; }
function RocketIcon() { return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M12 15l-3-3a16 16 0 018-9 16 16 0 01-1 9c-2 2-4 3-4 3z"/><circle cx="14" cy="10" r="1.5"/></svg>; }
function TimeIcon()   { return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>; }
function LinkedInIcon() { return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4"/></svg>; }
function GitHubIcon()   { return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6 0C6.2 3.3 5.1 3.6 5.1 3.6a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 003.7 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>; }
function ArrowUpIcon()  { return <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>; }

const ICON_MAP: Record<string, React.ReactNode> = {
  pin: <PinIcon />, code: <CodeIcon />, shield: <ShieldIcon />,
  layers: <LayersIcon />, rocket: <RocketIcon />, time: <TimeIcon />,
};

export default function About() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="about" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="about-grid">
          <div className="about-lead reveal">
            <p className="eyebrow">01 — About</p>
            <h2 className="about-h">
              I build mobile products that thousands of people trust with their money.
            </h2>
            <div className="about-links">
              {LINKS.map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="about-link">
                  {icon === 'linkedin' ? <LinkedInIcon /> : <GitHubIcon />}
                  {label}
                  <ArrowUpIcon />
                </a>
              ))}
            </div>
          </div>

          <div className="about-body reveal" data-d="1">
            <p>
              I'm a Senior React Native Developer with <strong>4+ years</strong> shipping
              cross-platform apps for the BFSI sector — where reliability, security, and
              performance aren't features, they're the baseline. I work end-to-end in
              <strong> React Native</strong> and <strong>TypeScript</strong>, from architecture
              and state design to release engineering and post-launch monitoring.
            </p>
            <p>
              My path started at Mantra Labs, moved through building greenfield products at
              Dev Story, and led me to TCS where I now lead the mobile frontend for enterprise
              clients at Toyota and USAA. Each step added a layer — more scale, more users,
              more accountability for what goes out the door.
            </p>
            <p>
              As a frontend lead I set technical direction, mentor engineers, and keep delivery
              tight inside agile teams. I pair clean, testable code with measurable outcomes —
              faster startups, fewer crashes, and broader device coverage.
            </p>

            <div className="about-philosophy">
              {PHILOSOPHY.map(({ title, body }) => (
                <div className="about-phil-item" key={title}>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>

            <div className="about-facts">
              {FACTS.map(({ icon, key, val }) => (
                <div className="about-fact" key={key}>
                  <span className="fi">{ICON_MAP[icon]}</span>
                  <div>
                    <span className="fk">{key}</span>
                    <span className="fv">{val}</span>
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
