import React, { useEffect, useRef, useState } from 'react';

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

function useCountUp(end: number, suffix = '', duration = 1600) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting && !done.current) {
          done.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(end * eased);
            if (p < 1) requestAnimationFrame(tick);
            else setVal(end);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [end, duration]);
  return { ref, shown: Math.round(val) + suffix };
}

function RocketIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M12 15l-3-3a16 16 0 018-9 16 16 0 01-1 9c-2 2-4 3-4 3z"/><circle cx="14" cy="10" r="1.5"/></svg>; }
function CheckIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"/></svg>; }
function BoltIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>; }
function ShieldIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>; }
function LayersIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>; }

const STATS = [
  { end: 6, suffix: '+', label: 'Production apps shipped', sub: 'Across BFSI & social', pct: 60, Icon: RocketIcon, lead: true },
  { end: 98, suffix: '%', label: 'Release success rate', sub: 'Clean, monitored rollouts', pct: 98, Icon: CheckIcon, lead: false },
  { end: 45, suffix: '%', label: 'Faster app startup', sub: 'Profiled & re-architected', pct: 45, Icon: BoltIcon, lead: false },
  { end: 38, suffix: '%', label: 'Crash rate reduction', sub: 'Stability & error tracking', pct: 38, Icon: ShieldIcon, lead: false },
  { end: 70, suffix: '%', label: 'Expanded device coverage', sub: 'Responsive + QA matrix', pct: 70, Icon: LayersIcon, lead: false },
];

function StatCard({ s, i }: { s: typeof STATS[0]; i: number }) {
  const { ref, shown } = useCountUp(s.end, s.suffix);
  const [vis, setVis] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setVis(true)), { threshold: 0.4 });
    io.observe(barRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className={'stat-card card reveal' + (s.lead ? ' stat-card--lead' : '')} data-d={Math.min(i + 1, 5)}>
      <div className="stat-top">
        <span className="stat-ic"><s.Icon /></span>
        <span className="stat-num mono" ref={ref}>{shown}</span>
      </div>
      <p className="stat-label">{s.label}</p>
      <p className="stat-sub mono">{s.sub}</p>
      <div className="stat-bar" ref={barRef}>
        <div className="stat-fill" style={{ width: vis ? s.pct + '%' : 0 }} />
      </div>
    </div>
  );
}

export default function Achievements() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="impact" className="section-pad impact-sec" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">06 — Key achievements</p>
          <h2>Outcomes, measured</h2>
          <p className="sub">The numbers that matter to a product team — performance, stability and reach.</p>
        </div>
        <div className="stats-grid">
          {STATS.map((s, i) => <StatCard s={s} i={i} key={s.label} />)}
        </div>
      </div>
    </section>
  );
}
