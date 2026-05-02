'use client';
import { useTranslations } from 'next-intl';

export default function CaseStudies() {
  const t = useTranslations('cases');
  const cases = [
    {
      num: '01', tag: t('mentorix.tag'), title: 'Mentorix', desc: t('mentorix.desc'),
      feats: [t('mentorix.feat1'), t('mentorix.feat2'), t('mentorix.feat3')],
      problem: t('mentorix.problem'), solution: t('mentorix.solution'), result: t('mentorix.result'),
      color: 'var(--accent3)',
    },
    {
      num: '02', tag: t('medpanel.tag'), title: 'Medpanel', desc: t('medpanel.desc'),
      feats: [t('medpanel.feat1'), t('medpanel.feat2'), t('medpanel.feat3')],
      problem: t('medpanel.problem'), solution: t('medpanel.solution'), result: t('medpanel.result'),
      color: 'var(--accent)',
    },
  ];

  return (
    <section id="cases" className="py-28 px-10">
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{t('label')}</span>
        <h2 className="text-5xl font-extrabold mb-4">{t('title')}</h2>
        <p className="text-lg mb-14 max-w-xl" style={{ color: 'var(--text-muted)' }}>{t('sub')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.num} className="rounded-2xl p-10 border relative transition-all hover:-translate-y-1"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
              <span className="absolute top-6 right-6 text-7xl font-extrabold" style={{ color: 'var(--border)', fontFamily: 'var(--font-syne)' }}>{c.num}</span>
              <span className="inline-block text-xs px-2 py-1 rounded mb-5 border" style={{ color: c.color, borderColor: c.color + '33', background: c.color + '11', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>{c.tag}</span>
              <h3 className="text-3xl font-extrabold mb-2">{c.title}</h3>
              <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.feats.map(f => <span key={f} className="text-xs px-3 py-1 rounded-lg border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg3)' }}>{f}</span>)}
              </div>
              {[{ label: t('problem'), text: c.problem }, { label: t('solution'), text: c.solution }].map(s => (
                <div key={s.label} className="rounded-xl p-4 mb-3" style={{ background: 'var(--bg3)' }}>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{s.text}</div>
                </div>
              ))}
              <div className="rounded-xl p-5 mt-4 border" style={{ background: 'linear-gradient(135deg,rgba(91,106,240,0.06),rgba(139,92,246,0.06))', borderColor: 'rgba(91,106,240,0.18)' }}>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{t('result')}</div>
                <div className="text-sm font-semibold">{c.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
