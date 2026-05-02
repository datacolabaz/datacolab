'use client';
export default function Dashboard() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 24, fontWeight: 700 }}>Dashboard</div>
        <div style={{ fontSize: 13, color: '#6b6b80' }}>Saytın ümumi vəziyyəti</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { num: '2', label: 'Aktiv Layihə' },
          { num: '12+', label: 'Tamamlanan Sistem' },
          { num: '0', label: 'Yeni Mesaj' },
          { num: '100%', label: 'Məmnuniyyət' },
        ].map(s => (
          <div key={s.label} style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#5b6af0', fontFamily: 'monospace' }}>{s.num}</div>
            <div style={{ fontSize: 12, color: '#6b6b80', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>⚡ Sürətli Əməliyyatlar</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['🎯 Hero Dəyiş', '📈 Statistika', '💼 Case Əlavə Et', '✍️ Blog Yaz', '📥 Mesajları Oxu'].map(b => (
            <button key={b} style={{ padding: '8px 16px', background: 'rgba(91,106,240,0.1)', border: '1px solid rgba(91,106,240,0.2)', color: '#5b6af0', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>{b}</button>
          ))}
        </div>
      </div>
    </div>
  );
}