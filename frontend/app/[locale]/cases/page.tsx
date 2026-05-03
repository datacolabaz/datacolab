'use client';
import Link from 'next/link';

const cases = [
  {
    num: '01', title: 'Mentorix', tag: 'Təhsil Platforması', color: '#06d6a0',
    desc: 'Tam funksiyalı mentorluq və tədris idarəetmə sistemi',
    feats: ['Tələbə izləmə', 'Ödəniş avtomatlaşması', 'SMS xatırlatmalar'],
    problem: 'Manual tələbə qeydi, ödəniş itkiləri — tam xaos.',
    solution: 'Tələbə ömür dövrünü tam idarə edən platform.',
    result: '+40% ödəniş toplanması. 0 manual giriş.',
    url: 'https://mentorix.io',
    image: '/mentorix-dashboard.jpeg',
  },
  {
    num: '02', title: 'Medpanel', tag: 'Klinik Sistem', color: '#5b6af0',
    desc: 'Klinika üçün tam idarəetmə və analitika platforması',
    feats: ['Xəstə idarəetmə', 'Görüş sistemi', 'Analitika'],
    problem: 'Kağız kartlar, itirilən görüşlər, heç bir analitika.',
    solution: 'Real vaxtlı görüş idarəetmə, xəstə tarixi, həkim tabloları.',
    result: 'Gündəlik 200+ görüşü idarə edir. Xəstə məmnuniyyəti 2x artdı.',
    url: 'https://www.medpanel.co',
    image: '/medpanel-dashboard.jpeg',
  },
];

export default function CasesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#f0f0f5', fontFamily: 'system-ui,sans-serif', padding: '120px 40px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#5b6af0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Həqiqi Nəticələr</div>
          <h1 style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16 }}>Case Studies</h1>
          <p style={{ fontSize: 18, color: '#7a7a8e', maxWidth: 500 }}>Hər layihə həqiqi problemin həlli üçün qurulmuş real sistemdir.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {cases.map(c => (
            <div key={c.num} style={{ background: '#15151e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 600px), 1fr))', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 64, fontWeight: 800, color: 'rgba(255,255,255,0.05)', lineHeight: 1, marginBottom: 8 }}>{c.num}</div>
                <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 4, background: c.color + '15', color: c.color, border: `1px solid ${c.color}33`, fontFamily: 'monospace', letterSpacing: '0.1em', display: 'inline-block', marginBottom: 16 }}>{c.tag}</span>
                <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>{c.title}</h2>
                <p style={{ fontSize: 14, color: '#7a7a8e', marginBottom: 20 }}>{c.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  {c.feats.map(f => <span key={f} style={{ fontSize: 12, background: '#1e1e28', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6, padding: '4px 10px', color: '#7a7a8e' }}>{f}</span>)}
                </div>
                {[{ l: 'Problem', t: c.problem }, { l: 'Həll', t: c.solution }, { l: 'Nəticə', t: c.result }].map(s => (
                  <div key={s.l} style={{ background: '#1e1e28', borderRadius: 10, padding: '12px 16px', marginBottom: 10 }}>
                    <div style={{ fontSize: 10, color: '#4a4a5e', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{s.l}</div>
                    <div style={{ fontSize: 13, color: '#7a7a8e' }}>{s.t}</div>
                  </div>
                ))}
                <a href={c.url} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, padding: '10px 20px', background: c.color, color: c.color === '#06d6a0' ? '#000' : '#fff', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                  Canlı bax →
                </a>
              </div>
              <div>
                <img src={c.image} alt={c.title} style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 60, textAlign: 'center' }}>
          <Link href="/" style={{ color: '#5b6af0', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>← Ana səhifəyə qayıt</Link>
        </div>
      </div>
    </main>
  );
}