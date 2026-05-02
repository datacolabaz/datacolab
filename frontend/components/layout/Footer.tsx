'use client';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="px-10 pt-16 pb-10 border-t" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-2xl font-extrabold mb-3" style={{
              fontFamily: 'var(--font-syne)',
              background: 'linear-gradient(135deg,var(--accent),var(--accent2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>datacolab</div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>{t('tagline')}</p>
          </div>
          {[
            { title: t('services'), links: ['SaaS Development', 'Automation', 'Analytics', 'Consulting'] },
            { title: t('company'), links: ['About', 'Case Studies', 'Blog', 'Process'] },
            { title: t('contact'), links: ['hello@datacolab.az', 'Telegram', 'WhatsApp', 'Book a call'] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-sm font-bold mb-4" style={{ fontFamily: 'var(--font-syne)' }}>{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="text-sm no-underline transition-colors hover:opacity-100" style={{ color: 'var(--text-muted)' }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-7 flex justify-between items-center flex-wrap gap-4 text-xs" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}>
          <span>© 2026 Datacolab · {t('rights')}</span>
          <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>{t('badge')}</span>
        </div>
      </div>
    </footer>
  );
}
