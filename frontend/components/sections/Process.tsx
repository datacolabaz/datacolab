'use client';
import { useTranslations } from 'next-intl';

export default function Process() {
  const t = useTranslations('process');
  const steps = t.raw('steps') as { title: string; desc: string }[];
  return (
    <section id="process" className="py-28 px-10">
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{t('label')}</span>
        <h2 className="text-5xl font-extrabold mb-14">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl p-7 border text-center transition-all hover:-translate-y-1"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-white mx-auto mb-5"
                style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2))', fontFamily: 'var(--font-syne)', boxShadow: '0 8px 24px rgba(91,106,240,0.3)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-base font-bold mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
