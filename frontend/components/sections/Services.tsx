'use client';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');
  const cards = [
    { key: 'build', icon: '🚀', bg: 'rgba(91,106,240,0.1)' },
    { key: 'automate', icon: '⚙️', bg: 'rgba(6,214,160,0.1)' },
    { key: 'analyze', icon: '📊', bg: 'rgba(240,192,91,0.1)' },
    { key: 'grow', icon: '🎯', bg: 'rgba(240,91,91,0.1)' },
  ] as const;

  return (
    <section id="services" className="py-28 px-10" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{t('label')}</span>
        <h2 className="text-5xl font-extrabold mb-4">{t('title')}</h2>
        <p className="text-lg mb-14 max-w-xl" style={{ color: 'var(--text-muted)' }}>{t('sub')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map(({ key, icon, bg }) => (
            <div key={key} className="rounded-2xl p-8 border transition-all hover:-translate-y-1 cursor-pointer"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: bg }}>{icon}</div>
              <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{t(`${key}.outcome`)}</div>
              <h3 className="text-xl font-bold mb-4">{t(`${key}.title`)}</h3>
              <ul className="flex flex-col gap-2">
                {(t.raw(`${key}.items`) as string[]).map((item: string) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent)' }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
