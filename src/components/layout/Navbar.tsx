import React, { useState, useEffect } from 'react';

const LINKS = [
  ['About',       'about'],
  ['Skills',      'skills'],
  ['Experience',  'experience'],
  ['Work',        'projects'],
  ['Engineering', 'showcase'],
  ['Impact',      'impact'],
  ['Contact',     'contact'],
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className={'nav' + (scrolled ? ' nav-solid' : '')}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand" onClick={go('top')}>
          <span className="brand-mark">SG</span>
          <span className="brand-name">Sagar Gupta</span>
        </a>

        <nav className="nav-links">
          {LINKS.map(([label, id]) => (
            <a key={id} href={'#' + id} onClick={go(id)}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="/Sagar-Gupta-Resume.pdf" download className="btn btn-ghost nav-cta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>
            </svg>
            Résumé
          </a>
          <a href="#contact" onClick={go('contact')} className="btn btn-primary nav-cta">
            Get in touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
        </div>

        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map(([label, id]) => (
            <a key={id} href={'#' + id} onClick={go(id)}>{label}</a>
          ))}
          <a href="/Sagar-Gupta-Resume.pdf" download className="btn btn-ghost">
            <svg width={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>
            </svg>
            Résumé
          </a>
          <a href="#contact" onClick={go('contact')} className="btn btn-primary">Get in touch</a>
        </div>
      )}
    </header>
  );
}
