'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const posts = [
  { slug: 'saas-2026', tag: 'SAAS', title_az: '2026-da SaaS necə qurulur', title_en: 'How to build SaaS in 2026', title_ru: 'Как строить SaaS в 2026', excerpt_az: 'Çoxları SaaS qurmağın texnologiya haqqında olduğunu düşünür.', read_time: '5 dəq' },
  { slug: 'why-apps-fail', tag: 'UĞURSUZLUQ', title_az: 'Niyə əksər tətbiqlər uğursuz olur', title_en: 'Why most apps fail', title_ru: 'Почему большинство приложений проваливаются', excerpt_az: 'Texniki borclar deyil. Yanlış problem həll edilir.', read_time: '8 dəq' },
  { slug: 'automate-5', tag: 'AVTOMATLAŞMA', title_az: 'Hər kiçik biznes avtomatlaşdıra biləcəyi 5 proses', title_en: '5 processes every business can automate', title_ru: '5 процессов для автоматизации', excerpt_az: 'Ödənişlər, xatırlatmalar, hesabatlar.', read_time: '6 dəq' },
];

export default function BlogPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#f0f0f5', fontFamily: 'system-ui,sans-serif', padding: '120px 40px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#5b6af0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Biliklər</div>
          <h1 style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16 }}>Blog</h1>
          <p style={{ fontSize: 18, color: '#7a7a8e', maxWidth: 500 }}>Sistem qurma, SaaS, avtomatlaşdırma haqqında real təcrübələr</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#15151e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 32, cursor: 'pointer', transition: 'all 0.2s', color: '#f0f0f5' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(91,106,240,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#5b6af0', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{p.tag}</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, lineHeight: 1.3 }}>{p.title_az}</h2>
                <p style={{ fontSize: 13, color: '#7a7a8e', lineHeight: 1.6, marginBottom: 20 }}>{p.excerpt_az}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#4a4a5e' }}>{p.read_time} oxu</span>
                  <span style={{ fontSize: 13, color: '#5b6af0', fontWeight: 600 }}>Oxu →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 60, textAlign: 'center' }}>
          <Link href="/" style={{ color: '#5b6af0', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>← Ana səhifəyə qayıt</Link>
        </div>
      </div>
    </main>
  );
}