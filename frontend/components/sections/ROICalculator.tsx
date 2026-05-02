'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ROICalculator() {
  const t = useTranslations('roi');
  const [hours, setHours] = useState(20);
  const [clients, setClients] = useState(100);
  const [rate, setRate] = useState(15);

  const monthlyHours = hours * 4;
  const savings = Math.round(monthlyHours * rate * 0.75);
  const hoursSaved = Math.round(monthlyHours * 0.75);
  const annual = savings * 12;

  return (
    <section id="roi" className="py-28 px-10" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
          {t('label')}
        </span>
        <h2 className="text-5xl font-extrabold mb-4">{t('title')}</h2>

        <div className="mt-10 rounded-2xl p-12 border" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                  {t('clients')}: <strong>{clients}</strong>
                </label>
                <input type="range" min={10} max={1000} step={10} value={clients}
                  onChange={e => setClients(+e.target.value)}
                  className="w-full" style={{ accentColor: 'var(--accent)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                  {t('hours')}: <strong>{hours}</strong>
                </label>
                <input type="range" min={1} max={80} value={hours}
                  onChange={e => setHours(+e.target.value)}
                  className="w-full" style={{ accentColor: 'var(--accent)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>{t('rate')}</label>
                <input type="number" value={rate} min={5} max={200}
                  onChange={e => setRate(+e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-sm border outline-none"
                  style={{ background: 'var(--bg3)', borderColor: 'var(--border)', color: 'var(--text)' }} />
              </div>
            </div>

            {/* Result */}
            <div className="rounded-2xl p-9 text-center border"
              style={{ background: 'linear-gradient(135deg,rgba(91,106,240,0.08),rgba(139,92,246,0.08))', borderColor: 'rgba(91,106,240,0.2)' }}>
              <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {t('savings_label')}
              </div>
              <div className="text-6xl font-extrabold" style={{
                fontFamily: 'var(--font-syne)',
                background: 'linear-gradient(135deg,var(--accent),var(--accent2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                ₼{savings.toLocaleString()}
              </div>
              <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>{t('with')}</div>

              <div className="mt-6 flex flex-col gap-3">
                {[
                  { label: t('hours_saved'), value: `${hoursSaved}h` },
                  { label: t('error_reduction'), value: '~85%' },
                  { label: t('annual'), value: `₼${annual.toLocaleString()}` },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between text-sm py-2 border-b last:border-none last:font-bold"
                    style={{ borderColor: 'var(--border)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{row.label}</span>
                    <span style={{ color: i === 2 ? 'var(--accent)' : 'var(--text)' }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 w-full py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2))', fontFamily: 'var(--font-syne)' }}
              >
                {t('cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
