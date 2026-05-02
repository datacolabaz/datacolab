'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(91,106,240,0.12) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border rounded-full mb-10 px-4 py-2"
          style={{ borderColor: 'var(--border-strong)', background: 'var(--surface)' }}>
          <div className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: 'var(--accent3)' }} />
          <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            {t('badge')}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-7xl font-extrabold mb-7" style={{ lineHeight: 1.05 }}>
          {t('headline1')}{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2), var(--accent3))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {t('headline2')}
          </span>
          <br />
          {t('headline3')}
        </h1>

        {/* Subtext */}
        <p className="text-xl mb-12 max-w-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('sub')}
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap mb-20">
          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-4 rounded-xl text-base font-bold text-white flex items-center gap-2 transition-all hover:-translate-y-0.5"
            style={{
              background: 'var(--accent)',
              fontFamily: 'var(--font-syne)',
              boxShadow: '0 8px 24px rgba(91,106,240,0.3)',
            }}
          >
            {t('cta1')} →
          </button>
          <button
            onClick={() => scrollTo('cases')}
            className="px-7 py-4 rounded-xl text-base font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 border"
            style={{
              borderColor: 'var(--border-strong)',
              color: 'var(--text)',
              fontFamily: 'var(--font-syne)',
              background: 'transparent',
            }}
          >
            {t('cta2')}
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-12 flex-wrap">
          {[
            { num: t('stat1_num'), label: t('stat1_label') },
            { num: t('stat2_num'), label: t('stat2_label') },
            { num: t('stat3_num'), label: t('stat3_label') },
          ].map((stat, i) => (
            <div key={i} className="pl-5 border-l-2" style={{ borderColor: 'var(--accent)' }}>
              <div className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-syne)' }}>
                {stat.num}
              </div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
