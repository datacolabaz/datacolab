'use client';
import { useState } from 'react';

export default function BlogEditor() {
  const [posts, setPosts] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ tag_az: '', title_az: '', excerpt_az: '', content_az: '', read_time_az: '', is_published: false });
  const [saved, setSaved] = useState('');

  const inputStyle = { width: '100%', background: '#0f0f14', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f0f5', padding: '10px 14px', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit' };
  const labelStyle = { display: 'block' as const, fontSize: 12, color: '#6b6b80', marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.05em' };

  function save(publish: boolean) {
    setPosts(prev => [...prev, { ...form, id: Date.now(), is_published: publish, created_at: new Date().toISOString() }]);
    setSaved(publish ? 'Dərc edildi!' : 'Qaralama saxlanıldı');
    setShowForm(false);
    setForm({ tag_az: '', title_az: '', excerpt_az: '', content_az: '', read_time_az: '', is_published: false });
    setTimeout(() => setSaved(''), 2000);
  }

  function togglePublish(id: number) {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, is_published: !p.is_published } : p));
  }

  function deletePost(id: number) {
    if (!confirm('Silinsin?')) return;
    setPosts(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700 }}>Blog</div>
          <div style={{ fontSize: 13, color: '#6b6b80' }}>Blog yazılarını idarə edin</div>
        </div>
        <button onClick={() => setShowForm(true)} style={{ padding: '8px 16px', background: '#5b6af0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>+ Yeni Yazı</button>
      </div>

      {saved && <div style={{ background: 'rgba(6,214,160,0.1)', border: '1px solid #06d6a0', color: '#06d6a0', padding: '10px 16px', borderRadius: 8, fontSize: 13, marginBottom: 16 }}>✓ {saved}</div>}

      {showForm && (
        <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24, marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Yeni Blog Yazısı</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 14 }}>
            <div><label style={labelStyle}>Tag</label><input style={inputStyle} value={form.tag_az} onChange={e => setForm({ ...form, tag_az: e.target.value })} placeholder="SAAS" /></div>
            <div><label style={labelStyle}>Oxuma müddəti</label><input style={inputStyle} value={form.read_time_az} onChange={e => setForm({ ...form, read_time_az: e.target.value })} placeholder="5 dəq oxu" /></div>
          </div>
          <div style={{ marginBottom: 14 }}><label style={labelStyle}>Başlıq</label><input style={inputStyle} value={form.title_az} onChange={e => setForm({ ...form, title_az: e.target.value })} /></div>
          <div style={{ marginBottom: 14 }}><label style={labelStyle}>Xülasə</label><textarea style={{ ...inputStyle, minHeight: 70, resize: 'vertical' }} value={form.excerpt_az} onChange={e => setForm({ ...form, excerpt_az: e.target.value })} /></div>
          <div style={{ marginBottom: 16 }}><label style={labelStyle}>Məzmun</label><textarea style={{ ...inputStyle, minHeight: 200, resize: 'vertical' }} value={form.content_az} onChange={e => setForm({ ...form, content_az: e.target.value })} /></div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => save(false)} style={{ padding: '8px 16px', background: '#1a1a24', color: '#f0f0f5', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>💾 Qaralama</button>
            <button onClick={() => save(true)} style={{ padding: '8px 16px', background: '#06d6a0', color: '#000', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>🚀 Dərc et</button>
            <button onClick={() => setShowForm(false)} style={{ padding: '8px 16px', background: 'transparent', color: '#6b6b80', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 13, cursor: 'pointer' }}>Ləğv et</button>
          </div>
        </div>
      )}

      <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
        {posts.length === 0 ? (
          <div style={{ padding: 32, textAlign: 'center', color: '#6b6b80', fontSize: 13 }}>Hələ blog yazısı yoxdur. İlk yazını əlavə edin!</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {['Başlıq', 'Tag', 'Status', 'Tarix', 'Əməliyyat'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b6b80' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {posts.map(p => (
                <tr key={p.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 600 }}>{p.title_az}</td>
                  <td style={{ padding: '12px 16px' }}><span style={{ background: 'rgba(91,106,240,0.1)', color: '#5b6af0', padding: '2px 8px', borderRadius: 4, fontSize: 11 }}>{p.tag_az}</span></td>
                  <td style={{ padding: '12px 16px' }}><span style={{ background: p.is_published ? 'rgba(6,214,160,0.1)' : 'rgba(240,192,91,0.1)', color: p.is_published ? '#06d6a0' : '#f0c05b', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>{p.is_published ? 'Dərc edilib' : 'Qaralama'}</span></td>
                  <td style={{ padding: '12px 16px', fontSize: 12, color: '#6b6b80' }}>{new Date(p.created_at).toLocaleDateString('az')}</td>
                  <td style={{ padding: '12px 16px', display: 'flex', gap: 6 }}>
                    <button onClick={() => togglePublish(p.id)} style={{ padding: '4px 10px', background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', color: '#6b6b80', borderRadius: 6, fontSize: 12, cursor: 'pointer' }}>{p.is_published ? 'Gizlət' : 'Dərc et'}</button>
                    <button onClick={() => deletePost(p.id)} style={{ width: 28, height: 28, background: 'rgba(240,91,91,0.1)', border: 'none', color: '#f05b5b', borderRadius: 6, cursor: 'pointer' }}>🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}