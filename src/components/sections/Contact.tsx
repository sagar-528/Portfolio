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

function MailIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>; }
function PhoneIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-3 2a14 14 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z"/></svg>; }
function LinkedInIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4"/></svg>; }
function GitHubIcon() { return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6 0C6.2 3.3 5.1 3.6 5.1 3.6a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 003.7 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>; }
function ArrowUpIcon() { return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>; }
function MailSendIcon() { return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>; }

const METHODS = [
  { Icon: MailIcon,     k: 'Email',    v: 'gupta.sagar528@gmail.com', href: 'mailto:gupta.sagar528@gmail.com' },
  { Icon: PhoneIcon,   k: 'Phone',    v: '+91 98346 19561',           href: 'tel:+919834619561' },
  { Icon: LinkedInIcon, k: 'LinkedIn', v: '/in/sagar-gupta',          href: 'https://www.linkedin.com/in/sagar-gupta-655271187/' },
  { Icon: GitHubIcon,  k: 'GitHub',   v: '@sagar-528',               href: 'https://github.com/sagar-528' },
];

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="contact" className="section-pad contact-sec" ref={root}>
      <div className="contact-bg" aria-hidden="true">
        <div className="contact-glow" />
      </div>
      <div className="wrap contact-inner">
        <p className="eyebrow reveal">09 — Contact</p>
        <h2 className="contact-h reveal" data-d="1">Let's build something<br />reliable together.</h2>
        <p className="contact-sub reveal" data-d="2">
          Open to senior React Native roles and consulting in the BFSI space. The fastest way to reach me is email.
        </p>
        <a href="mailto:gupta.sagar528@gmail.com" className="btn btn-primary contact-cta reveal" data-d="2">
          <MailSendIcon /> gupta.sagar528@gmail.com
        </a>
        <div className="contact-grid reveal" data-d="3">
          {METHODS.map(({ Icon, k, v, href }) => (
            <a key={k} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-card">
              <span className="cc-ic"><Icon /></span>
              <span className="cc-k mono">{k}</span>
              <span className="cc-v">{v}</span>
              <span className="cc-arrow"><ArrowUpIcon /></span>
            </a>
          ))}
        </div>
      </div>
      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="mono">Sagar Gupta · Senior React Native Developer</span>
          <span className="mono">Pune, India · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </section>
  );
}
