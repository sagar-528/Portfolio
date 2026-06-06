import React, { useEffect, useRef, useState } from 'react';

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

type ArchTab = 'architecture' | 'performance' | 'state' | 'navigation' | 'offline';

const TABS: { key: ArchTab; label: string; short: string }[] = [
  { key: 'architecture', label: 'RN Architecture', short: 'Arch' },
  { key: 'performance',  label: 'Performance',     short: 'Perf' },
  { key: 'state',        label: 'State Flow',       short: 'State' },
  { key: 'navigation',   label: 'Navigation',       short: 'Nav' },
  { key: 'offline',      label: 'Offline First',    short: 'Offline' },
];

function ArchDiagram() {
  return (
    <div className="arch-diagram">
      <div className="arch-layer arch-layer--top">
        <div className="arch-box arch-box--js">
          <span className="arch-badge">JS Thread</span>
          <div className="arch-row">
            <span className="arch-chip">React Components</span>
            <span className="arch-chip">Business Logic</span>
            <span className="arch-chip">Redux / State</span>
          </div>
        </div>
      </div>
      <div className="arch-bridge">
        <div className="arch-bridge-line" aria-hidden="true">
          <span className="arch-bridge-label mono">JSI Bridge</span>
          <div className="arch-pulse" />
        </div>
      </div>
      <div className="arch-layer arch-layer--mid">
        <div className="arch-box arch-box--native">
          <span className="arch-badge">Native Thread</span>
          <div className="arch-row">
            <span className="arch-chip arch-chip--native">iOS (Swift)</span>
            <span className="arch-chip arch-chip--native">Android (Kotlin)</span>
            <span className="arch-chip arch-chip--native">Native Modules</span>
          </div>
        </div>
      </div>
      <div className="arch-bridge">
        <div className="arch-bridge-line arch-bridge-line--down" aria-hidden="true">
          <span className="arch-bridge-label mono">OS APIs</span>
        </div>
      </div>
      <div className="arch-layer arch-layer--bottom">
        <div className="arch-row arch-row--spread">
          <div className="arch-box arch-box--sys">Camera<br/><span className="mono">Native</span></div>
          <div className="arch-box arch-box--sys">Push<br/><span className="mono">FCM/APNs</span></div>
          <div className="arch-box arch-box--sys">Keychain<br/><span className="mono">Secure</span></div>
          <div className="arch-box arch-box--sys">Network<br/><span className="mono">HTTP/WS</span></div>
        </div>
      </div>
      <div className="arch-note mono">Hermes engine · Fabric renderer · TurboModules</div>
    </div>
  );
}

function PerfDiagram() {
  const metrics = [
    { label: 'Startup Time', before: 100, after: 55, unit: '%', note: '-45% via Hermes + lazy loading' },
    { label: 'Crash Rate', before: 100, after: 62, unit: '%', note: '-38% via Crashlytics monitoring' },
    { label: 'Device Coverage', before: 30, after: 100, unit: '%', note: '+70% via Sauce Labs matrix' },
    { label: 'Release Success', before: 85, after: 98, unit: '%', note: '98% via staged rollouts' },
  ];
  return (
    <div className="perf-diagram">
      <p className="perf-intro mono">Before → After optimisation at Toyota Financial Services</p>
      {metrics.map(m => (
        <div className="perf-row" key={m.label}>
          <div className="perf-label">{m.label}</div>
          <div className="perf-bars">
            <div className="perf-bar-wrap">
              <span className="mono perf-val-label">Before</span>
              <div className="perf-bar perf-bar--before">
                <div className="perf-fill perf-fill--before" style={{ width: m.before + '%' }} />
              </div>
            </div>
            <div className="perf-bar-wrap">
              <span className="mono perf-val-label">After</span>
              <div className="perf-bar">
                <div className="perf-fill" style={{ width: m.after + '%' }} />
              </div>
            </div>
          </div>
          <div className="perf-note mono">{m.note}</div>
        </div>
      ))}
      <div className="perf-techniques">
        {['FlatList Virtualization', 'Image Caching', 'Hermes Engine', 'Lazy Loading', 'Bundle Splitting', 'Memoization'].map(t => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function StateDiagram() {
  return (
    <div className="state-diagram">
      <div className="state-flow">
        <div className="state-node state-node--ui">
          <span className="state-icon">📱</span>
          <span>UI Component</span>
          <span className="mono state-sub">dispatch(action)</span>
        </div>
        <div className="state-arrow">→</div>
        <div className="state-node state-node--mid">
          <span className="state-icon">⚙️</span>
          <span>Redux Saga</span>
          <span className="mono state-sub">side effects</span>
        </div>
        <div className="state-arrow">→</div>
        <div className="state-node state-node--api">
          <span className="state-icon">🌐</span>
          <span>API / Firebase</span>
          <span className="mono state-sub">REST · GraphQL</span>
        </div>
      </div>
      <div className="state-return">
        <div className="state-return-line" />
        <span className="mono state-return-label">reducer updates store → component re-renders</span>
      </div>
      <div className="state-slice">
        <h4>Slice Architecture (Redux Toolkit)</h4>
        <div className="state-slices">
          {['auth', 'user', 'account', 'payments', 'notifications', 'ui'].map(s => (
            <div className="state-slice-box" key={s}>
              <span className="mono">{s}Slice</span>
            </div>
          ))}
        </div>
      </div>
      <div className="state-stack">
        {['Redux Toolkit · RTK Query', 'Redux-Saga (complex async flows)', 'Optimistic updates · Normalised cache', 'Secure token storage · OKTA OAuth'].map(item => (
          <div className="state-stack-item" key={item}>
            <span className="state-dot" />
            <span className="mono">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavDiagram() {
  return (
    <div className="nav-diagram">
      <div className="nav-tree">
        <div className="nav-root">
          <span className="nav-node nav-node--root">RootNavigator</span>
        </div>
        <div className="nav-branches">
          <div className="nav-branch">
            <span className="nav-node nav-node--stack">AuthStack</span>
            <div className="nav-leaves">
              <span className="nav-leaf mono">Splash</span>
              <span className="nav-leaf mono">Login (OKTA)</span>
              <span className="nav-leaf mono">Biometric</span>
            </div>
          </div>
          <div className="nav-branch">
            <span className="nav-node nav-node--tab">MainTab</span>
            <div className="nav-leaves">
              <span className="nav-leaf mono">Home</span>
              <span className="nav-leaf mono">Account</span>
              <span className="nav-leaf mono">Payments</span>
              <span className="nav-leaf mono">Profile</span>
            </div>
          </div>
          <div className="nav-branch">
            <span className="nav-node nav-node--modal">Modals</span>
            <div className="nav-leaves">
              <span className="nav-leaf mono">PIN Setup</span>
              <span className="nav-leaf mono">Confirm</span>
              <span className="nav-leaf mono">Deep Link</span>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-features">
        {['Deep Linking · Universal Links', 'Push Notification routing', 'OKTA SSO redirect handling', 'Tab bar + Stack composition', 'Gesture-driven transitions'].map(f => (
          <div className="state-stack-item" key={f}>
            <span className="state-dot" />
            <span className="mono">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfflineDiagram() {
  return (
    <div className="offline-diagram">
      <div className="offline-layers">
        <div className="offline-layer offline-layer--top">
          <span className="offline-label">UI Layer</span>
          <div className="offline-chips">
            <span className="chip">Optimistic Updates</span>
            <span className="chip">Loading States</span>
            <span className="chip">Error Boundaries</span>
          </div>
        </div>
        <div className="offline-connector">
          <div className="offline-conn-box">
            <span className="mono">Network Status Monitor</span>
            <div className="offline-status">
              <span className="offline-online">● Online</span>
              <span className="offline-line" />
              <span className="offline-offline">● Offline</span>
            </div>
          </div>
        </div>
        <div className="offline-layer offline-layer--mid">
          <span className="offline-label">Cache / Queue Layer</span>
          <div className="offline-chips">
            <span className="chip">AsyncStorage</span>
            <span className="chip">Request Queue</span>
            <span className="chip">Stale-while-revalidate</span>
          </div>
        </div>
        <div className="offline-connector offline-connector--dashed" />
        <div className="offline-layer offline-layer--bottom">
          <span className="offline-label">Network Layer</span>
          <div className="offline-chips">
            <span className="chip">Axios Interceptors</span>
            <span className="chip">Retry Logic</span>
            <span className="chip">Background Sync</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const DIAGRAMS: Record<ArchTab, React.ReactNode> = {
  architecture: <ArchDiagram />,
  performance:  <PerfDiagram />,
  state:        <StateDiagram />,
  navigation:   <NavDiagram />,
  offline:      <OfflineDiagram />,
};

const DESCRIPTIONS: Record<ArchTab, { title: string; body: string }> = {
  architecture: {
    title: 'React Native Architecture',
    body: 'Leveraging JSI (JavaScript Interface) and the new architecture — Fabric renderer for synchronous UI updates and TurboModules for direct native access. Hermes engine compiles JS ahead-of-time, cutting cold start by 45%.',
  },
  performance: {
    title: 'Performance Optimisation',
    body: 'Systematic profiling using Flipper, React DevTools, and Xcode Instruments. FlatList virtualisation for large lists, image caching strategies, and Hermes adoption reduced startup time by 45% and crash rate by 38%.',
  },
  state: {
    title: 'State Management Flow',
    body: 'Redux Toolkit with feature slices for predictable state. Redux-Saga handles complex async flows — OKTA token refresh, background syncs, and retry logic. RTK Query manages server-state caching and invalidation.',
  },
  navigation: {
    title: 'Navigation Architecture',
    body: 'React Navigation with typed route params across Stack, Tab, and Modal navigators. Deep linking with Universal Links on iOS / App Links on Android routes users to the correct screen from push notifications and OKTA SSO redirects.',
  },
  offline: {
    title: 'Offline-First Design',
    body: 'Network status monitoring with immediate UI feedback. Request queuing during offline periods with automatic replay on reconnect. Stale-while-revalidate keeps data fresh without blocking user interaction.',
  },
};

export default function MobileShowcase() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const [active, setActive] = useState<ArchTab>('architecture');

  return (
    <section id="showcase" className="section-pad" ref={root}>
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">05 — Engineering</p>
          <h2>Mobile architecture, explained</h2>
          <p className="sub">Interactive diagrams covering the patterns behind every production app I've shipped.</p>
        </div>

        <div className="showcase-tabs reveal" data-d="1">
          {TABS.map(t => (
            <button
              key={t.key}
              className={'showcase-tab' + (active === t.key ? ' active' : '')}
              onClick={() => setActive(t.key)}
            >
              <span className="showcase-tab-long">{t.label}</span>
              <span className="showcase-tab-short">{t.short}</span>
            </button>
          ))}
        </div>

        <div className="showcase-panel card reveal" data-d="2">
          <div className="showcase-info">
            <h3>{DESCRIPTIONS[active].title}</h3>
            <p className="showcase-desc">{DESCRIPTIONS[active].body}</p>
          </div>
          <div className="showcase-diagram">
            {DIAGRAMS[active]}
          </div>
        </div>
      </div>
    </section>
  );
}
