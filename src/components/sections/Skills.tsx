import React, { useEffect, useRef } from 'react';

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function RNIcon() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="11" ry="5"/><ellipse cx="12" cy="12" rx="11" ry="5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="5" transform="rotate(120 12 12)"/></svg>; }
function ShieldIcon() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>; }
function ZapIcon() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>; }
function LayersIcon() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 8l9 5 9-5"/></svg>; }
function TestTubeIcon() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/><path d="M7 14h10"/></svg>; }
function ToolIcon() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M14 7a4 4 0 00-5 5l-6 6 3 3 6-6a4 4 0 005-5l-3 3-3-3 3-3z"/></svg>; }
function CheckIcon() { return <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>; }

export default function Skills() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="skills" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">02 — Expertise</p>
          <h2>The stack I reach for</h2>
          <p className="sub">A toolkit tuned for secure, high-performance mobile delivery — from core framework work to auth, testing and release infrastructure.</p>
        </div>

        <div className="bento-grid">

          {/* Feature cell: React Native core */}
          <div className="bento bento--8 bento--feature reveal" data-d="1">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
              <div className="bento-icon"><RNIcon /></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Primary Stack</span>
            </div>
            <span className="bento-label">Core Framework</span>
            <h3 className="bento-title" style={{ fontSize: 22 }}>React Native + TypeScript</h3>
            <p className="bento-desc">4+ years shipping production RN apps — multi-tenant architectures, Hermes engine, Fabric renderer, JSI bridges, TurboModules, and the full New Architecture stack.</p>
            <div className="bento-chips" style={{ marginTop: 18 }}>
              {['React Native', 'React', 'TypeScript', 'JavaScript ES6+', 'Hermes', 'Fabric', 'JSI'].map(s => (
                <span key={s} className="chip" style={{ borderColor: 'var(--accent-line)', color: 'var(--accent-3)' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Number callout */}
          <div className="bento bento--4 reveal" data-d="2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span className="bento-label">Years React Native</span>
            <span className="bento-number">4+</span>
            <p className="bento-desc" style={{ marginTop: 0 }}>Exclusively mobile engineering since 2021</p>
          </div>

          {/* State Management */}
          <div className="bento bento--4 reveal" data-d="1">
            <div className="bento-icon"><LayersIcon /></div>
            <span className="bento-label">State & Data Flow</span>
            <h3 className="bento-title">Redux Architecture</h3>
            <div className="bento-chips">
              {['Redux Toolkit', 'Redux-Saga', 'Context API', 'React Query'].map(s => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          {/* Auth & APIs */}
          <div className="bento bento--4 reveal" data-d="2">
            <div className="bento-icon"><ShieldIcon /></div>
            <span className="bento-label">Auth & APIs</span>
            <h3 className="bento-title">Enterprise Security</h3>
            <div className="bento-chips">
              {['OKTA OAuth 2.0', 'OIDC', 'REST', 'GraphQL', 'Firebase / FCM', 'Axios'].map(s => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          {/* Performance callout */}
          <div className="bento bento--4 reveal" data-d="3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="bento-icon"><ZapIcon /></div>
              <span className="bento-label">Performance</span>
              <h3 className="bento-title" style={{ fontSize: 17 }}>Zero-jank delivery</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
              {['FlatList virtualization', 'Image caching', 'JS bundle splitting', 'Hermes ahead-of-time'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: 'var(--text-2)' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}><CheckIcon /></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Apps shipped */}
          <div className="bento bento--3 reveal" data-d="1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span className="bento-label">Apps shipped</span>
            <span className="bento-number">10M+</span>
            <p className="bento-desc" style={{ marginTop: 0 }}>Users served across BFSI platforms</p>
          </div>

          {/* Testing */}
          <div className="bento bento--6 reveal" data-d="2">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div className="bento-icon" style={{ marginBottom: 0 }}><TestTubeIcon /></div>
              <div>
                <span className="bento-label" style={{ display: 'block', marginBottom: 2 }}>Quality Assurance</span>
                <h3 className="bento-title" style={{ margin: 0, fontSize: 18 }}>Testing & Cross-Device</h3>
              </div>
            </div>
            <p className="bento-desc">Sauce Labs cross-device matrix covering 50+ device/OS combinations. Unit, integration, and E2E pipelines in GitLab CI.</p>
            <div className="bento-chips" style={{ marginTop: 14 }}>
              {['Sauce Labs', 'Appium', 'Mocha', 'Crashlytics', 'E2E', 'GitLab CI'].map(s => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bento bento--3 reveal" data-d="3">
            <div className="bento-icon"><ToolIcon /></div>
            <span className="bento-label">Tools & Workflow</span>
            <h3 className="bento-title" style={{ fontSize: 17 }}>Dev Environment</h3>
            <div className="bento-chips" style={{ marginTop: 14 }}>
              {['Xcode', 'Android Studio', 'Git', 'GitLab', 'JIRA', 'Figma', 'Storybook', 'Confluence'].map(s => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
