'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ROIPage() {
  const [hours, setHours] = useState(20);
  const [clients, setClients] = useState(100);
  const [rate, setRate] = useState(15);
  const [bizType, setBizType] = useState('edu');

  const multipliers: Record<string, number> = { edu: 0.80, clinic: 0.85, retail: 0.70, service: 0.75 };
  const monthlyHours = hours * 4;
  const hoursSaved = Math.round(monthlyHours * (multipliers[bizType] || 0.75));
  const savings = Math.round(hoursSaved * rate);
  const annual = savings * 12;

  const inputStyle = { width: '100%', background: '#1e1e28', border: '1px solid rgba(255,255,255,0.07)', color: '#f0f0f5', padding: '12px 16px', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' };

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#f0f0f5', fontFamily: 'system-ui,sans-serif', padding: '120px 40px 80px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 60, textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#5b6af0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Pulsuz Alət</div>
          <h1 style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16 }}>ROI Hesablayıcı</h1>
          <p style={{ fontSize: 18, color: '#7a7a8e', maxWidth: 500, margin: '0 auto' }}>
            Avtomatlaşdırma sizin biznesdə nə qədər vaxt və pul qənaət edəcək?
          </p>
        </div>

        <div style={{ background: '#15151e', border: '1px solid rgba(91,106,240,0.15)', borderRadius: 20, padding: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            {/* Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, color: '#7a7a8e', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Biznes növü</label>
                <select value={bizType} onChange={e => setBizType(e.target.value)} style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="edu">Təhsil / Kurslar</option>
                  <option value="clinic">Klinika / Tibb</option>
                  <option value="retail">Pərakəndə / E-ticarət</option>
                  <option value="service">Xidmət biznesi</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, color: '#7a7a8e', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Aylıq müştəri sayı: <strong style={{ color: '#f0f0f5' }}>{clients}</strong>
                </label>
                <input type="range" min={10} max={1000} step={10} value={clients} onChange={e => setClients(+e.target.value)}
                  style={{ width: '100%', accentColor: '#5b6af0' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, color: '#7a7a8e', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Manual iş saatı / həftə: <strong style={{ color: '#f0f0f5' }}>{hours}</strong>
                </label>
                <input type="range" min={1} max={80} value={hours} onChange={e => setHours(+e.target.value)}
                  style={{ width: '100%', accentColor: '#5b6af0' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, color: '#7a7a8e', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Saatlıq əmək haqqı (₼)</label>
                <input type="number" value={rate} min={5} max={200} onChange={e => setRate(+e.target.value)} style={inputStyle} />
              </div>
            </div>

            {/* Result */}
            <div style={{ background: 'linear-gradient(135deg,rgba(91,106,240,0.1),rgba(139,92,246,0.1))', border: '1px solid rgba(91,106,240,0.2)', borderRadius: 16, padding: 36, textAlign: 'center' }}>
              <div style={{ fontSize: 12, color: '#7a7a8e', fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>AYLIQ QƏNAƏT</div>
              <div style={{ fontSize: 64, fontWeight: 800, background: 'linear-gradient(135deg,#5b6af0,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
                ₼{savings.toLocaleString()}
              </div>
              <div style={{ fontSize: 14, color: '#7a7a8e', marginTop: 8, marginBottom: 28 }}>avtomatlaşdırma ilə</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { label: 'Qənaət edilən saatlar/ay', value: `${hoursSaved}h` },
                  { label: 'Xəta azalması', value: '~85%' },
                  { label: 'İllik qənaət', value: `₼${annual.toLocaleString()}`, accent: true },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '8px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <span style={{ color: '#7a7a8e' }}>{row.label}</span>
                    <span style={{ color: row.accent ? '#5b6af0' : '#f0f0f5', fontWeight: row.accent ? 700 : 400 }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <a href="/#contact" style={{ display: 'block', marginTop: 24, padding: '14px', background: 'linear-gradient(135deg,#5b6af0,#8b5cf6)', color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Layihəni müzakirə edək →
              </a>
            </div>
          </div>
        </div>

        {/* SEO content */}
        <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {[
            { icon: '⏱', title: 'Vaxt qənaəti', desc: 'Manual əməliyyatları avtomatlaşdıraraq həftəlik onlarla saat qənaət edin.' },
            { icon: '💰', title: 'Maliyyə effekti', desc: 'Əmək xərclərini azaldın, insan xətalarından yaranan itkiləri sıfırlayın.' },
            { icon: '📈', title: 'Böyümə imkanı', desc: 'Qənaət edilən resursu biznesin böyüməsinə yönləndirin.' },
          ].map(c => (
            <div key={c.title} style={{ background: '#15151e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{c.title}</h3>
              <p style={{ fontSize: 13, color: '#7a7a8e', lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, textAlign: 'center' }}>
          <Link href="/" style={{ color: '#5b6af0', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>← Ana səhifəyə qayıt</Link>
        </div>
      </div>
    </main>
  );
}