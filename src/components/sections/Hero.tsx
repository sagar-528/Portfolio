import React, { useEffect, useRef } from 'react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const SOCIALS = [
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sagar-gupta-655271187/' },
  { icon: 'github',   label: 'GitHub',   href: 'https://github.com/sagar-528' },
];

function LinkedInIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4"/></svg>;
}
function GitHubIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6 0C6.2 3.3 5.1 3.6 5.1 3.6a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 003.7 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>;
}
function CodeIcon() {
  return <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>;
}
function DownloadIcon() {
  return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>;
}
function ArrowIcon() {
  return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
function PhoneIcon() {
  return <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>;
}

const HERO_METRICS = [
  { val: '6+',   label: 'Apps shipped', sub: 'App Store & Play Store' },
  { val: '10M+', label: 'Users served', sub: 'USAA · Toyota FS' },
  { val: '98%',  label: 'Release success', sub: 'Zero-downtime deploys' },
  { val: '4+',   label: 'Years RN', sub: 'BFSI specialist' },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const el = heroRef.current;
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth, h = window.innerHeight;
      const px = (e.clientX / w - 0.5) * 2;
      const py = (e.clientY / h - 0.5) * 2;
      el.style.setProperty('--px', px.toFixed(3));
      el.style.setProperty('--py', py.toFixed(3));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-aurora">
          <span className="au au1" /><span className="au au2" /><span className="au au3" />
        </div>
        <div className="hero-grid" />
      </div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="hero-status">
            <span className="dot" />
            <span>Available for senior React Native roles</span>
            <span className="hero-status-sep">·</span>
            <span className="hero-status-loc mono">Pune, India</span>
          </div>

          <p className="eyebrow" style={{ marginTop: 28 }}>
            <PhoneIcon /> React Native · TypeScript · BFSI
          </p>

          <h1 className="hero-title">
            Sagar<br />Gupta
          </h1>
          <p className="hero-role">Senior React Native Developer</p>
          <p className="hero-tag">
            Building high-performance, secure cross-platform mobile apps for enterprise scale.
            Trusted by 10M+ users in the BFSI domain.
          </p>

          <div className="hero-cta">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
            >
              View projects <ArrowIcon />
            </a>
            <a href="/Sagar-Gupta-Resume.pdf" download className="btn btn-ghost">
              <DownloadIcon /> Résumé
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              Get in touch
            </a>
          </div>

          <div className="hero-socials">
            {SOCIALS.map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="hero-social">
                {icon === 'linkedin' ? <LinkedInIcon /> : <GitHubIcon />}
                {label}
              </a>
            ))}
          </div>

          <div className="hero-metrics">
            {HERO_METRICS.map(m => (
              <div className="hero-metric" key={m.label}>
                <span className="hero-metric-val">{m.val}</span>
                <span className="hero-metric-label">{m.label}</span>
                <span className="hero-metric-sub mono">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            <img
              src="/images/Profile_Image.jpeg"
              alt="Sagar Gupta"
              className="portrait-img"
            />
            <div className="portrait-badge">
              <CodeIcon /> 4+ yrs RN
            </div>
          </div>
          <div className="portrait-meta">
            <div>
              <span className="num">06+</span>
              <span className="lbl">apps shipped</span>
            </div>
            <div>
              <span className="num">98%</span>
              <span className="lbl">release success</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll mono" aria-hidden="true">
        scroll <span className="line" />
      </div>
    </section>
  );
}
