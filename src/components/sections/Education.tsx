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

function GradIcon() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 9L12 5 2 9l10 4 10-4z"/>
      <path d="M6 11v5c0 1 3 3 6 3s6-2 6-3v-5"/>
    </svg>
  );
}

export default function Education() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="education" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="edu reveal card">
          <div className="edu-left">
            <p className="eyebrow">09 — Education</p>
            <h2 className="edu-h">B.Tech, Computer Science</h2>
            <p className="edu-school">Rajarshi Chhatrapati Shahu Maharaj Polytechnic Institute of Technology (RCPIT), Maharashtra</p>
          </div>
          <div className="edu-right">
            <span className="edu-ic"><GradIcon /></span>
            <span className="edu-year mono">2014 — 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
}
