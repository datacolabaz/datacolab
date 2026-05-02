'use client';
import { useState } from 'react';

const initial = [
  { id: 1, icon: '🚀', title_az: 'Məhsul & Platforma', outcome_az: 'QUR', is_active: true },
  { id: 2, icon: '⚙️', title_az: 'Biznes Avtomatlaşması', outcome_az: 'AVTOMATLAŞDIRin', is_active: true },
  { id: 3, icon: '📊', title_az: 'Data & Analitika', outcome_az: 'ANALİZ ET', is_active: true },
  { id: 4, icon: '🎯', title_az: 'Böyümə & Optimizasiya', outcome_az: 'BÖYÜT', is_active: true },
];

export default function ServicesEditor() {
  const [services, setServices] = useState(initial);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ icon: '', title_az: '', outcome_az: '', items_az: '' });

  function addService() {
    setServices(prev => [...prev, { id: Date.now(), icon: form.icon, title_az: form.title_az, outcome_az: form.outcome_az, is_active: true }]);
    setForm({ icon: '', title_az: '', outcome_az: '', items_az: '' });
    setShowForm(false);
  }

  function deleteService(id: number) {
    if (!confirm('Silinsin?')) return;
    setServices(prev => prev.filter(s => s.id !== id));
  }

  const inputStyle = { width: '100%', background: '#0f0f14', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f0f5', padding: '10px 14px', borderRadius: 8, fontSize: 14, outline: 'none' };
  const labelStyle = { display: 'block' as const, fontSize: 12, color: '#6b6b80', marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.05em' };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>Xidmətlər</div>
          <div style={{ fontSize: 13, color: '#6b6b80' }}>Xidmətləri idarə edin</div>
        </div>
        <button onClick={() => setShowForm(true)}
          style={{ padding: '8px 16px', background: '#5b6af0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
          + Yeni Xidmət
        </button>
      </div>

      {showForm && (
        <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24, marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Yeni Xidmət</div>
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div><label style={labelStyle}>İkon</label><input style={inputStyle} value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} placeholder="🚀" /></div>
            <div><label style={labelStyle}>Başlıq (AZ)</label><input style={inputStyle} value={form.title_az} onChange={e => setForm({ ...form, title_az: e.target.value })} /></div>
            <div><label style={labelStyle}>Outcome</label><input style={inputStyle} value={form.outcome_az} onChange={e => setForm({ ...form, outcome_az: e.target.value })} placeholder="QUR" /></div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Xidmətlər (hər sətir ayrı)</label>
            <textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical', fontFamily: 'inherit' }} value={form.items_az} onChange={e => setForm({ ...form, items_az: e.target.value })} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={addService} style={{ padding: '8px 16px', background: '#5b6af0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>💾 Saxla</button>
            <button onClick={() => setShowForm(false)} style={{ padding: '8px 16px', background: 'transparent', color: '#6b6b80', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 13, cursor: 'pointer' }}>Ləğv et</button>
          </div>
        </div>
      )}

      <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {['İkon', 'Başlıq', 'Outcome', 'Status', 'Əməliyyat'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b6b80' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map(s => (
              <tr key={s.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '12px 16px', fontSize: 20 }}>{s.icon}</td>
                <td style={{ padding: '12px 16px', fontSize: 13 }}>{s.title_az}</td>
                <td style={{ padding: '12px 16px' }}><span style={{ background: 'rgba(91,106,240,0.1)', color: '#5b6af0', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>{s.outcome_az}</span></td>
                <td style={{ padding: '12px 16px' }}><span style={{ background: 'rgba(6,214,160,0.1)', color: '#06d6a0', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>Aktiv</span></td>
                <td style={{ padding: '12px 16px' }}>
                  <button onClick={() => deleteService(s.id)} style={{ width: 30, height: 30, background: 'rgba(240,91,91,0.1)', border: 'none', color: '#f05b5b', borderRadius: 6, cursor: 'pointer', fontSize: 14 }}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}