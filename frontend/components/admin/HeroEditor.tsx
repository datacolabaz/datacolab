'use client';
import { useState } from 'react';

export default function HeroEditor() {
  const [lang, setLang] = useState('az');
  const [saved, setSaved] = useState(false);
  const [content, setContent] = useState({
    az: { h1: 'Biz sistemlər', h2: 'qururuq,', h3: 'saytlar yox', sub: 'İdeadan sistemə qədər. SaaS, platformalar, avtomatlaşdırma. Biz sayt yox, biznesin işləyən tərəfini qururuq.' },
    ru: { h1: 'Мы строим', h2: 'системы,', h3: 'не сайты', sub: 'От идеи до системы. SaaS, платформы, автоматизация.' },
    en: { h1: 'We build', h2: 'systems,', h3: 'not just websites', sub: 'From idea to system. SaaS, platforms, automation.' },
  });

  function update(field: string, value: string) {
    setContent(prev => ({ ...prev, [lang]: { ...prev[lang as keyof typeof prev], [field]: value } }));
  }

  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const c = content[lang as keyof typeof content];

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 24, fontWeight: 700 }}>Hero & Mətnlər</div>
        <div style={{ fontSize: 13, color: '#6b6b80' }}>Saytdakı başlıq və mətnləri dəyişin</div>
      </div>
      <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>🎯 Hero Başlıq</div>
        <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
          {['az', 'ru', 'en'].map(l => (
            <button key={l} onClick={() => setLang(l)}
              style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)', background: lang === l ? '#5b6af0' : 'transparent', color: lang === l ? '#fff' : '#6b6b80', fontSize: 12, cursor: 'pointer', fontFamily: 'monospace', fontWeight: 600 }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        {[
          { field: 'h1', label: 'Başlıq 1' },
          { field: 'h2', label: 'Başlıq 2 (gradient)' },
          { field: 'h3', label: 'Başlıq 3' },
        ].map(({ field, label }) => (
          <div key={field} style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontSize: 12, color: '#6b6b80', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</label>
            <input value={c[field as keyof typeof c]} onChange={e => update(field, e.target.value)}
              style={{ width: '100%', background: '#0f0f14', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f0f5', padding: '10px 14px', borderRadius: 8, fontSize: 14, outline: 'none' }} />
          </div>
        ))}
        <div style={{ marginBottom: 14 }}>
          <label style={{ display: 'block', fontSize: 12, color: '#6b6b80', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Alt mətn</label>
          <textarea value={c.sub} onChange={e => update('sub', e.target.value)}
            style={{ width: '100%', background: '#0f0f14', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f0f5', padding: '10px 14px', borderRadius: 8, fontSize: 14, outline: 'none', minHeight: 100, resize: 'vertical', fontFamily: 'inherit' }} />
        </div>
        <button onClick={save}
          style={{ padding: '10px 20px', background: '#5b6af0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
          {saved ? '✓ Saxlanıldı!' : '💾 Yadda saxla'}
        </button>
      </div>
    </div>
  );
}