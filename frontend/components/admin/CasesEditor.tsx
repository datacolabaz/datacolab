'use client';
import { useState } from 'react';

const initial = [
  { id: 1, title: 'Mentorix', tag_az: 'Təhsil Platforması', live_url: 'https://mentorix.io', is_active: true },
  { id: 2, title: 'Medpanel', tag_az: 'Klinik Sistem', live_url: 'https://medpanel.co', is_active: true },
];

export default function CasesEditor() {
  const [cases, setCases] = useState(initial);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', tag_az: '', live_url: '', problem_az: '', solution_az: '', result_az: '', dashboard_image: '' });

  const inputStyle = { width: '100%', background: '#0f0f14', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f0f5', padding: '10px 14px', borderRadius: 8, fontSize: 14, outline: 'none' };
  const labelStyle = { display: 'block' as const, fontSize: 12, color: '#6b6b80', marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.05em' };

  function addCase() {
    setCases(prev => [...prev, { id: Date.now(), title: form.title, tag_az: form.tag_az, live_url: form.live_url, is_active: true }]);
    setShowForm(false);
    setForm({ title: '', tag_az: '', live_url: '', problem_az: '', solution_az: '', result_az: '', dashboard_image: '' });
  }

  function deleteCase(id: number) {
    if (!confirm('Silinsin?')) return;
    setCases(prev => prev.filter(c => c.id !== id));
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>Case Studies</div>
          <div style={{ fontSize: 13, color: '#6b6b80' }}>Layihə nümunələrini idarə edin</div>
        </div>
        <button onClick={() => setShowForm(true)} style={{ padding: '8px 16px', background: '#5b6af0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>+ Yeni Case</button>
      </div>

      {showForm && (
        <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24, marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Yeni Case Study</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div><label style={labelStyle}>Başlıq</label><input style={inputStyle} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /></div>
            <div><label style={labelStyle}>Tag (AZ)</label><input style={inputStyle} value={form.tag_az} onChange={e => setForm({ ...form, tag_az: e.target.value })} /></div>
            <div><label style={labelStyle}>Canlı URL</label><input style={inputStyle} value={form.live_url} onChange={e => setForm({ ...form, live_url: e.target.value })} /></div>
          </div>
          {[{ f: 'problem_az', l: 'Problem (AZ)' }, { f: 'solution_az', l: 'Həll (AZ)' }, { f: 'result_az', l: 'Nəticə (AZ)' }].map(({ f, l }) => (
            <div key={f} style={{ marginBottom: 14 }}>
              <label style={labelStyle}>{l}</label>
              <textarea style={{ ...inputStyle, minHeight: 70, resize: 'vertical', fontFamily: 'inherit' }} value={form[f as keyof typeof form]} onChange={e => setForm({ ...form, [f]: e.target.value })} />
            </div>
          ))}
          <div style={{ marginBottom: 16 }}><label style={labelStyle}>Dashboard şəkli URL</label><input style={inputStyle} value={form.dashboard_image} onChange={e => setForm({ ...form, dashboard_image: e.target.value })} placeholder="/medpanel-dashboard.jpeg" /></div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={addCase} style={{ padding: '8px 16px', background: '#5b6af0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>💾 Saxla</button>
            <button onClick={() => setShowForm(false)} style={{ padding: '8px 16px', background: 'transparent', color: '#6b6b80', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 13, cursor: 'pointer' }}>Ləğv et</button>
          </div>
        </div>
      )}

      <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {['Başlıq', 'Tag', 'URL', 'Status', 'Əməliyyat'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b6b80' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cases.map(c => (
              <tr key={c.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 600 }}>{c.title}</td>
                <td style={{ padding: '12px 16px', fontSize: 12, color: '#6b6b80' }}>{c.tag_az}</td>
                <td style={{ padding: '12px 16px' }}><a href={c.live_url} target="_blank" rel="noreferrer" style={{ color: '#5b6af0', fontSize: 12 }}>{c.live_url}</a></td>
                <td style={{ padding: '12px 16px' }}><span style={{ background: 'rgba(6,214,160,0.1)', color: '#06d6a0', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>Aktiv</span></td>
                <td style={{ padding: '12px 16px' }}><button onClick={() => deleteCase(c.id)} style={{ width: 30, height: 30, background: 'rgba(240,91,91,0.1)', border: 'none', color: '#f05b5b', borderRadius: 6, cursor: 'pointer' }}>🗑</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}