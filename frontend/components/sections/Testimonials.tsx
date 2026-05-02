'use client';
import { useTranslations } from 'next-intl';

const avatarColors = [
  'linear-gradient(135deg,#5b6af0,#8b5cf6)',
  'linear-gradient(135deg,#06d6a0,#00b4d8)',
  'linear-gradient(135deg,#f0c05b,#f05b5b)',
];

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as { quote: string; name: string; role: string }[];
  return (
    <section id="testimonials" className="py-28 px-10">
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{t('label')}</span>
        <h2 className="text-5xl font-extrabold mb-14">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl p-7 border transition-all hover:-translate-y-1"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border)' }}>
              <div className="text-sm mb-4" style={{ color: '#f0c05b', letterSpacing: '2px' }}>★★★★★</div>
              <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'var(--text-muted)' }}>"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0"
                  style={{ background: avatarColors[i], fontFamily: 'var(--font-syne)' }}>
                  {item.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold">{item.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-dim)' }}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
