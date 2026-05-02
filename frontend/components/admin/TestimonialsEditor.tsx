'use client';
import { useState } from 'react';

const initial = [
  { id: 1, author_name: 'Elçin Məmmədov', author_role_az: 'Mentorix — Qurucu', quote_az: 'Datacolab sadəcə sayt qurmadı — biznesimizdə tam bir sistem inqilabı etdi.', avatar_initials: 'EM' },
  { id: 2, author_name: 'Nigar Həsənova', author_role_az: 'Medpanel — Klinika Direktoru', quote_az: 'Kağız kartlardan tam rəqəmsal sistemə keçid cəmi 6 həftə çəkdi.', avatar_initials: 'NH' },
];

export default function TestimonialsEditor() {
  const [items, setItems] = useState(initial);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ author_name: '', author_role_az: '', quote_az: '', avatar_initials: '' });

  const inputStyle = { width: '100%', background: '#0f0f14', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f0f5', padding: '10px 14px', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit' };
  const labelStyle = { display: 'block' as const, fontSize: 12, color: '#6b6b80', marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.05em' };

  function add() {
    setItems(prev => [...prev, { ...form, id: Date.now() }]);
    setShowForm(false);
    setForm({ author_name: '', author_role_az: '', quote_az: '', avatar_initials: '' });
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>Müştəri Rəyləri</div>
          <div style={{ fontSize: 13, color: '#6b6b80' }}>Testimonialları idarə edin</div>
        </div>
        <button onClick={() => setShowForm(true)} style={{ padding: '8px 16px', background: '#5b6af0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>+ Yeni Rəy</button>
      </div>

      {showForm && (
        <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24, marginBottom: 20 }}>
          <div style={{ marginBottom: 14 }}><label style={labelStyle}>Rəy (AZ)</label><textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} value={form.quote_az} onChange={e => setForm({ ...form, quote_az: e.target.value })} /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 80px', gap: 12, marginBottom: 16 }}>
            <div><label style={labelStyle}>Ad Soyad</label><input style={inputStyle} value={form.author_name} onChange={e => setForm({ ...form, author_name: e.target.value })} /></div>
            <div><label style={labelStyle}>Vəzifə</label><input style={inputStyle} value={form.author_role_az} onChange={e => setForm({ ...form, author_role_az: e.target.value })} /></div>
            <div><label style={labelStyle}>İnitials</label><input style={inputStyle} value={form.avatar_initials} onChange={e => setForm({ ...form, avatar_initials: e.target.value })} maxLength={3} /></div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={add} style={{ padding: '8px 16px', background: '#5b6af0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>💾 Saxla</button>
            <button onClick={() => setShowForm(false)} style={{ padding: '8px 16px', background: 'transparent', color: '#6b6b80', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 13, cursor: 'pointer' }}>Ləğv et</button>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map(t => (
          <div key={t.id} style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: '#6b6b80', fontStyle: 'italic', marginBottom: 10 }}>"{t.quote_az}"</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#5b6af0,#06d6a0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{t.avatar_initials}</div>
                <div><div style={{ fontSize: 13, fontWeight: 600 }}>{t.author_name}</div><div style={{ fontSize: 12, color: '#6b6b80' }}>{t.author_role_az}</div></div>
              </div>
            </div>
            <button onClick={() => setItems(prev => prev.filter(i => i.id !== t.id))} style={{ width: 30, height: 30, background: 'rgba(240,91,91,0.1)', border: 'none', color: '#f05b5b', borderRadius: 6, cursor: 'pointer', flexShrink: 0 }}>🗑</button>
          </div>
        ))}
      </div>
    </div>
  );
}