import React, { useEffect, useRef } from 'react';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function QuoteIcon() {
  return (
    <svg width={48} height={48} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M7 10c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2H9l-2 4V10zM18 10c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5l-2 4V10z" fill="currentColor" opacity={0.12}/>
      <path d="M7 10c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2H9l-2 4V10z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round"/>
      <path d="M18 10c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5l-2 4V10z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round"/>
    </svg>
  );
}

function LinkedInIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4"/></svg>;
}

function StarIcon() {
  return <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
}

const COLOR = '#8b5cf6';

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="testimonials" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">07 — Testimonials</p>
          <h2>What my manager says</h2>
          <p className="sub">A LinkedIn recommendation from my direct manager at TCS on the Toyota Financial Services project.</p>
        </div>

        <div className="testi-featured reveal" data-d="1">
          <div className="testi-featured-quote">
            <span style={{ color: COLOR }}><QuoteIcon /></span>
            <p className="testi-featured-text">
              Sagar is a dedicated, hard-working developer who will put the extra time and effort when needed.
              He often goes out of his way to provide assistance to his fellow team members. His outgoing
              personality was a welcome addition to the team. Such a rare talent in Mobile App Development
              especially in React Native.
            </p>
            <p className="testi-featured-text" style={{ marginTop: 16 }}>
              In addition to his technical expertise, Sagar is also a friendly and approachable individual.
              He is always open to discussions and is willing to go the extra mile to ensure a successful outcome.
              He has great communication skills and is able to convey complex technical concepts in a clear and
              concise manner. I highly recommend Sagar for any mobile engineering role.
            </p>
          </div>

          <div className="testi-featured-footer">
            <div className="testi-featured-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: COLOR }}><StarIcon /></span>
              ))}
            </div>
            <div className="testi-featured-author">
              <div className="testi-avatar testi-avatar--lg" style={{ background: COLOR + '22', color: COLOR }}>
                SK
              </div>
              <div className="testi-meta">
                <div className="testi-name" style={{ fontSize: 16 }}>Sanjib Karmakar</div>
                <div className="testi-role mono">Application Architect — Mobility · Blockchain · React Native</div>
                <div className="testi-relation mono">Managed Sagar directly · Tata Consultancy Services · March 2025</div>
              </div>
              <a
                href="https://www.linkedin.com/in/sagar-gupta-655271187/"
                target="_blank"
                rel="noreferrer"
                className="testi-li"
                aria-label="View on LinkedIn"
                style={{ width: 36, height: 36 }}
              >
                <LinkedInIcon />
              </a>
            </div>
            <div className="testi-featured-context mono">
              Recommendation received on LinkedIn · Toyota Financial Services project · TCS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
