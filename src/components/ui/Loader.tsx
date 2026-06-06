import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLSpanElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const labelEl = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const el = root.current;
    if (!el) return;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    document.body.classList.add('preloading');

    const cleanup = () => {
      document.body.classList.remove('preloading', 'morphing');
      if (el) el.style.display = 'none';
    };

    const heroTargets = document.querySelectorAll<HTMLElement>('.hero-copy > *, .hero-portrait');
    const navMark = document.querySelector<HTMLElement>('.brand-mark');

    if (reduced || !navMark) { cleanup(); return; }

    document.body.classList.add('morphing');
    gsap.set(heroTargets, { opacity: 0, y: 30 });
    if (bar.current) gsap.set(bar.current, { scaleX: 0, transformOrigin: 'left center' });

    const a = mark.current!.getBoundingClientRect();
    const b = navMark.getBoundingClientRect();

    const counter = { v: 0 };
    const tl = gsap.timeline({ onComplete: cleanup });

    tl.from(mark.current!, { scale: 0.5, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' })
      .from(labelEl.current!, { opacity: 0, y: 8, duration: 0.4, ease: 'power2.out' }, '-=0.2')
      .to(bar.current!, { scaleX: 1, duration: 1.05, ease: 'power2.inOut' }, '<')
      .to(counter, {
        v: 100, duration: 1.05, ease: 'power2.inOut',
        onUpdate: () => {
          if (num.current) num.current.textContent = String(Math.round(counter.v)).padStart(3, '0');
        },
      }, '<')
      .to([labelEl.current!, num.current!, bar.current!.parentElement!],
        { opacity: 0, y: -10, duration: 0.35, ease: 'power2.in', stagger: 0.04 }, '+=0.15')
      .set(mark.current!, {
        position: 'fixed', left: a.left, top: a.top, width: a.width, height: a.height,
        margin: 0, zIndex: 10000,
      })
      .to(el, { backgroundColor: 'rgba(0,0,0,0)', duration: 0.7, ease: 'power2.inOut' }, '<')
      .to('.loader-glow', { opacity: 0, duration: 0.4 }, '<')
      .to(heroTargets, { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out' }, '<0.05')
      .to(mark.current!, {
        left: b.left, top: b.top, scale: b.width / a.width, transformOrigin: 'top left',
        duration: 0.9, ease: 'power4.inOut',
      }, '<')
      .add(() => { document.body.classList.remove('morphing'); })
      .set(mark.current!, { opacity: 0 });
  }, []);

  return (
    <div className="loader" ref={root}>
      <div className="loader-glow" aria-hidden="true" />
      <div className="loader-inner">
        <span className="loader-mark" ref={mark}>SG</span>
        <span className="loader-label mono" ref={labelEl}>Senior React Native Developer</span>
        <div className="loader-bar"><span ref={bar} /></div>
        <span className="loader-num mono" ref={num}>000</span>
      </div>
    </div>
  );
}
