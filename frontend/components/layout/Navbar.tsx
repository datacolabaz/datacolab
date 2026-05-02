'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const locales = ['en', 'az', 'ru'] as const;

  const switchLocale = (newLocale: string) => {
    // Remove current locale prefix and replace with new
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 border-b backdrop-blur-xl"
      style={{ background: 'rgba(10,10,15,0.85)', borderColor: 'var(--border)' }}>
      
      {/* Logo */}
      <span className="font-bold text-xl" style={{
        fontFamily: 'var(--font-syne)',
        background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        datacolab
      </span>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        {[
          { key: 'cases', id: 'cases' },
          { key: 'services', id: 'services' },
          { key: 'process', id: 'process' },
          { key: 'roi', id: 'roi' },
          { key: 'blog', id: 'blog' },
        ].map(({ key, id }) => (
          <li key={key}>
            <button
              onClick={() => scrollTo(id)}
              className="text-sm font-medium transition-colors cursor-pointer border-none bg-transparent"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-dm)' }}
            >
              {t(key)}
            </button>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Language Switcher */}
        <div className="flex gap-1 rounded-lg p-1" style={{ background: 'var(--surface)' }}>
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className="text-xs font-semibold px-2 py-1 rounded-md transition-all cursor-pointer border-none"
              style={{
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.05em',
                background: locale === l ? 'var(--accent)' : 'transparent',
                color: locale === l ? '#fff' : 'var(--text-muted)',
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-base transition-all cursor-pointer border"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)', color: 'var(--text-muted)' }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* CTA */}
        <button
          onClick={() => scrollTo('contact')}
          className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all cursor-pointer border-none"
          style={{ background: 'var(--accent)', fontFamily: 'var(--font-syne)' }}
        >
          {t('cta')}
        </button>
      </div>
    </nav>
  );
}
