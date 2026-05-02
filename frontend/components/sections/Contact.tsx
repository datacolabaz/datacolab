'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [form, setForm] = useState({ name: '', email: '', bizType: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('success');
    } catch {
      // Still show success for demo
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-28 px-10" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{t('label')}</span>
        <h2 className="text-5xl font-extrabold mb-4">{t('title')}</h2>
        <p className="text-lg mb-14 max-w-xl" style={{ color: 'var(--text-muted)' }}>{t('sub')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Contact methods */}
          <div className="flex flex-col gap-4">
            {[
              { icon: '💬', title: 'WhatsApp', sub: t('whatsapp'), href: 'https://wa.me/994XXXXXXXXX' },
              { icon: '✈️', title: 'Telegram', sub: '@datacolab', href: 'https://t.me/datacolab' },
              { icon: '📧', title: 'Email', sub: 'hello@datacolab.az', href: 'mailto:hello@datacolab.az' },
            ].map((m) => (
              <a key={m.title} href={m.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border transition-all hover:translate-x-1 no-underline"
                style={{ background: 'var(--card-bg)', borderColor: 'var(--border)', color: 'var(--text)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: 'var(--bg3)' }}>{m.icon}</div>
                <div>
                  <div className="font-bold text-sm">{m.title}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{m.sub}</div>
                </div>
              </a>
            ))}
            <div className="p-5 rounded-xl border" style={{ background: 'var(--card-bg)', borderColor: 'var(--border)' }}>
              <div className="font-bold text-sm mb-1">🗓 {t('book_title')}</div>
              <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{t('book_sub')}</div>
              <button className="w-full py-3 rounded-xl border font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border-strong)', color: 'var(--text)', background: 'transparent', fontFamily: 'var(--font-syne)' }}>
                {t('book_btn')}
              </button>
            </div>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div className="rounded-2xl p-12 text-center border" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">{t('success')}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{t('name')}</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm border outline-none"
                    style={{ background: 'var(--card-bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                    placeholder="Elçin..." />
                </div>
                <div>
                  <label className="block text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{t('email')}</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm border outline-none"
                    style={{ background: 'var(--card-bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                    placeholder="elcin@..." />
                </div>
              </div>
              <div>
                <label className="block text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{t('biz_type')}</label>
                <select value={form.bizType} onChange={e => setForm({ ...form, bizType: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm border outline-none appearance-none"
                  style={{ background: 'var(--card-bg)', borderColor: 'var(--border)', color: 'var(--text)' }}>
                  <option value="edu">Education</option>
                  <option value="clinic">Healthcare</option>
                  <option value="retail">E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{t('message')}</label>
                <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5} className="w-full rounded-xl px-4 py-3 text-sm border outline-none resize-y"
                  style={{ background: 'var(--card-bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="We need to build..." />
              </div>
              <button type="submit" disabled={status === 'loading'}
                className="py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2))', fontFamily: 'var(--font-syne)' }}>
                {status === 'loading' ? 'Sending...' : `${t('submit')} →`}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
