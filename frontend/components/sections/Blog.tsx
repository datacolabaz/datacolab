'use client';
import { useTranslations } from 'next-intl';

export default function Blog() {
  const t = useTranslations('blog');
  const posts = t.raw('posts') as { tag: string; title: string; excerpt: string; read_time: string }[];
  return (
    <section id="blog" className="py-28 px-10" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{t('label')}</span>
        <h2 className="text-5xl font-extrabold mb-14">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <div key={i} className="rounded-2xl p-8 border transition-all hover:-translate-y-1 cursor-pointer"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border)' }}>
              <span className="block text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{p.tag}</span>
              <h3 className="text-lg font-bold mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{p.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs" style={{ color: 'var(--text-dim)' }}>{p.read_time}</span>
                <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>{t('read')} →</span>
              </div>
            </div>
          ))}
        </div>
        {/* Lead Magnet */}
        <div className="mt-10 rounded-2xl p-10 border flex flex-wrap justify-between items-center gap-6"
          style={{ background: 'linear-gradient(135deg,rgba(91,106,240,0.07),rgba(139,92,246,0.07))', borderColor: 'rgba(91,106,240,0.18)' }}>
          <div>
            <div className="text-2xl mb-1">📥</div>
            <h3 className="text-xl font-extrabold mb-2">{t('lead_title')}</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{t('lead_sub')}</p>
          </div>
          <button className="px-6 py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', fontFamily: 'var(--font-syne)' }}>
            {t('lead_cta')} ↓
          </button>
        </div>
      </div>
    </section>
  );
}
