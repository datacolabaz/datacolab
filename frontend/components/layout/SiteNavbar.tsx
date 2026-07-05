'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('az');

  const navLinks = [
    { href: '/en/cases', label: { az: 'Keyslərimiz', ru: 'Кейсы', en: 'Cases' } },
    { href: '/#services', label: { az: 'Xidmətlər', ru: 'Услуги', en: 'Services' } },
    { href: '/#process', label: { az: 'Proses', ru: 'Процесс', en: 'Process' } },
    { href: '/en/roi', label: { az: 'ROI', ru: 'Калькулятор', en: 'ROI' } },
    { href: '/en/blog', label: { az: 'Blog', ru: 'Блог', en: 'Blog' } },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        padding: '14px 40px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        fontFamily: 'system-ui, sans-serif',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', fontSize: 20, fontWeight: 800 }}>
          <span style={{ color: '#fff' }}>data</span>
          <span style={{ background: 'linear-gradient(135deg,#5b6af0,#06d6a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>colab</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} style={{ color: '#7a7a8e', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
              {l.label[lang as keyof typeof l.label]}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {/* Lang */}
          <div style={{ display: 'flex', gap: 3, background: '#1e1e28', borderRadius: 8, padding: 3 }}>
            {['az', 'ru', 'en'].map(l => (
              <button key={l} onClick={() => setLang(l)}
                style={{ border: 'none', background: lang === l ? '#5b6af0' : 'transparent', color: lang === l ? '#fff' : '#7a7a8e', fontSize: 11, fontWeight: 600, padding: '4px 8px', borderRadius: 5, cursor: 'pointer', fontFamily: 'monospace' }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          {/* CTA */}
          <Link href="/#contact"
            style={{ background: '#5b6af0', color: '#fff', padding: '8px 18px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            {lang === 'az' ? 'Layihə başlat' : lang === 'ru' ? 'Начать' : 'Start'}
          </Link>
          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', flexDirection: 'column', gap: 5, border: 'none', background: 'transparent', cursor: 'pointer', padding: 8 }}
            className="hamburger-btn">
            <span style={{ display: 'block', width: 22, height: 2, background: '#f0f0f5', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 22, height: 2, background: '#f0f0f5', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 22, height: 2, background: '#f0f0f5', borderRadius: 2 }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: '#13131a', zIndex: 998, padding: '80px 28px 40px',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ color: '#f0f0f5', textDecoration: 'none', fontSize: 20, fontWeight: 600, padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {l.label[lang as keyof typeof l.label]}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 'auto', background: '#5b6af0', color: '#fff', padding: 16, borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none', textAlign: 'center', display: 'block' }}>
            {lang === 'az' ? 'Layihə başlat →' : lang === 'ru' ? 'Начать проект →' : 'Start a Project →'}
          </Link>
        </div>
      )}

      <style>{`
        @media(max-width:768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}