import React from 'react';
import { IOSDevice } from './IOSFrame';

const label: React.CSSProperties = {
  fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em',
  color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', margin: 0,
};

const Stripe = ({ h = 64, text = '', radius = 14 }: { h?: number; text?: string; radius?: number }) => (
  <div style={{
    height: h, borderRadius: radius, display: 'grid', placeItems: 'center',
    background: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 10px, rgba(255,255,255,0.015) 10px 20px)',
    border: '1px solid rgba(255,255,255,0.08)',
  }}>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{text}</span>
  </div>
);

export function ScreenAutoFinance({ accent = 'var(--accent)' }: { accent?: string }) {
  return (
    <div style={{ padding: '6px 18px 24px', paddingTop: 58, color: '#fff', fontFamily: 'var(--font-sans)', overflowY: 'auto', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Good morning</p>
          <p style={{ margin: '2px 0 0', fontSize: 19, fontWeight: 600 }}>Sagar</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, fontFamily: 'var(--font-mono)', padding: '8px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: accent, display: 'inline-block' }} /> Toyota Financial ▾
        </div>
      </div>

      <div style={{ marginTop: 18, padding: 18, borderRadius: 20, background: 'linear-gradient(150deg, rgba(124,131,255,0.26) 0%, #101119 100%)', border: '1px solid rgba(255,255,255,0.12)' }}>
        <p style={label}>Remaining lease balance</p>
        <p style={{ margin: '8px 0 0', fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em' }}>$18,420<span style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)' }}>.50</span></p>
        <div style={{ marginTop: 14, height: 7, borderRadius: 999, background: 'rgba(255,255,255,0.12)', overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', borderRadius: 999, background: accent }} />
        </div>
        <p style={{ margin: '8px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-mono)' }}>62% paid off · 22 of 36 months</p>
      </div>

      <div style={{ marginTop: 12, padding: 16, borderRadius: 18, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={label}>Next payment</p>
          <p style={{ margin: '6px 0 0', fontSize: 20, fontWeight: 600 }}>$512.00</p>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Due Jun 15</p>
        </div>
        <div style={{ padding: '12px 20px', borderRadius: 12, background: accent, color: '#0a0b11', fontWeight: 600, fontSize: 14 }}>Pay now</div>
      </div>

      <p style={{ ...label, marginTop: 18, marginBottom: 8 }}>Your vehicle</p>
      <div style={{ padding: 12, borderRadius: 18, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <Stripe h={88} text="vehicle photo" radius={12} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 13 }}>
          <span style={{ fontWeight: 600 }}>2023 Sedan · Hybrid</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)' }}>18,204 mi</span>
        </div>
      </div>

      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {['Statements', 'Payoff quote', 'Documents', 'Support'].map(t => (
          <div key={t} style={{ padding: '14px 14px', borderRadius: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export function ScreenCardManage({ accent = 'var(--accent)' }: { accent?: string }) {
  return (
    <div style={{ padding: '6px 18px 24px', paddingTop: 58, color: '#fff', fontFamily: 'var(--font-sans)', overflowY: 'auto', height: '100%' }}>
      <p style={{ margin: 0, fontSize: 19, fontWeight: 600 }}>My card</p>

      <div style={{ marginTop: 16, aspectRatio: '1.6/1', borderRadius: 20, padding: 20, position: 'relative', overflow: 'hidden',
        background: `linear-gradient(135deg, rgba(106,163,255,0.6) 0%, #15161f 80%)`, border: '1px solid rgba(255,255,255,0.14)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(60deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 9px)' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: 38, height: 28, borderRadius: 6, background: 'linear-gradient(135deg,#d9c27a,#a8893f)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)' }}>PLATINUM</span>
          </div>
          <div>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 18, letterSpacing: '0.14em' }}>•••• •••• •••• 4821</p>
            <div style={{ display: 'flex', gap: 22, marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
              <span>VALID 08/29</span><span>S. GUPTA</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
        <div style={{ flex: 1, padding: 14, borderRadius: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={label}>Balance</p>
          <p style={{ margin: '6px 0 0', fontSize: 18, fontWeight: 700 }}>$1,284.16</p>
        </div>
        <div style={{ flex: 1, padding: 14, borderRadius: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={label}>Available</p>
          <p style={{ margin: '6px 0 0', fontSize: 18, fontWeight: 700, color: accent }}>$8,715.84</p>
        </div>
      </div>

      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
        {[['Freeze', '❄'], ['PIN', '••'], ['Pay', '↑'], ['More', '⋯']].map(([t, g]) => (
          <div key={t} style={{ padding: '12px 6px', borderRadius: 13, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
            <div style={{ fontSize: 15, color: accent }}>{g}</div>
            <div style={{ fontSize: 11, marginTop: 5, color: 'rgba(255,255,255,0.75)' }}>{t}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 12, padding: 16, borderRadius: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={label}>Card PIN</p>
          <p style={{ margin: '8px 0 0', fontSize: 22, letterSpacing: '0.3em' }}>••••</p>
        </div>
        <div style={{ padding: '10px 16px', borderRadius: 11, border: `1px solid ${accent}`, color: accent, fontSize: 13, fontWeight: 600 }}>Change PIN</div>
      </div>

      <p style={{ ...label, marginTop: 16, marginBottom: 6 }}>Recent</p>
      {[['Subscription', '−$14.99'], ['Refund', '+$60.00'], ['Groceries', '−$82.40']].map(([t, v]) => (
        <div key={t} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 2px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: 14 }}>
          <span style={{ color: 'rgba(255,255,255,0.85)' }}>{t}</span>
          <span style={{ fontFamily: 'var(--font-mono)', color: v[0] === '+' ? '#34d399' : 'rgba(255,255,255,0.7)' }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

export function ScreenSafety({ accent = 'var(--accent)' }: { accent?: string }) {
  const bubble = (text: string, me: boolean) => (
    <div style={{
      alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '78%', padding: '11px 14px',
      borderRadius: 16, fontSize: 14, lineHeight: 1.4,
      background: me ? accent : 'rgba(255,255,255,0.07)', color: me ? '#0a0b11' : '#fff',
      borderBottomRightRadius: me ? 5 : 16, borderBottomLeftRadius: me ? 16 : 5,
    }}>{text}</div>
  );
  return (
    <div style={{ padding: '6px 18px 24px', paddingTop: 58, color: '#fff', fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 16, background: 'rgba(52,211,153,0.14)', border: '1px solid rgba(52,211,153,0.35)' }}>
        <span style={{ width: 30, height: 30, borderRadius: 9, display: 'grid', placeItems: 'center', background: 'rgba(52,211,153,0.2)', color: '#34d399' }}>✓</span>
        <div>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>You're checked in</p>
          <p style={{ margin: '1px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>Shared with 3 trusted contacts · 2m ago</p>
        </div>
      </div>

      <p style={{ ...label, marginTop: 18, marginBottom: 10 }}>Circle · Family</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {bubble('On my way home now 🚶', false)}
        {bubble('Great — I can see your live location.', true)}
        {bubble("Tap \"I'm safe\" when you arrive.", true)}
      </div>

      <div style={{ marginTop: 16, padding: 14, borderRadius: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ width: 34, height: 34, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'rgba(167,139,250,0.22)', color: accent }}>🔔</span>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600 }}>Safety alert nearby</p>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>2 contacts notified automatically</p>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ padding: 16, borderRadius: 16, background: accent, color: '#0a0b11', textAlign: 'center', fontWeight: 700, fontSize: 16 }}>I'm safe</div>
        <div style={{ padding: 13, borderRadius: 16, border: '1px solid rgba(255,255,255,0.14)', textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>Send check-in request</div>
      </div>
    </div>
  );
}

interface PhoneMockProps {
  scale?: number;
  accent?: string;
  children: React.ReactNode;
}
export function PhoneMock({ scale = 0.66, accent = '#7c83ff', children }: PhoneMockProps) {
  const w = 402, h = 874;
  return (
    <div className="phone-scale" style={{ width: w * scale, height: h * scale }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: w, height: h }}>
        <IOSDevice dark width={w} height={h}>{children}</IOSDevice>
      </div>
    </div>
  );
}
