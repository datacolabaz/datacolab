'use client';
import { useState } from 'react';

const defaultStats = [
  { key: 'active_projects', label: 'Aktiv Layihə (Badge)', value: 2 },
  { key: 'systems_built', label: 'Tamamlanan Sistem', value: 12 },
  { key: 'satisfaction', label: 'Məmnuniyyət (%)', value: 100 },
];

export default function StatsEditor() {
  const [stats, setStats] = useState(defaultStats);
  const [saved, setSaved] = useState(false);

  function change(key: string, delta: number) {
    setStats(prev => prev.map(s => s.key === key ? { ...s, value: Math.max(0, s.value + delta) } : s));
  }

  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 24, fontWeight: 700 }}>Statistikalar</div>
        <div style={{ fontSize: 13, color: '#6b6b80' }}>Saytdakı rəqəmləri idarə edin</div>
      </div>
      <div style={{ display: 'grid', gap: 16 }}>
        {stats.map(s => (
          <div key={s.key} style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{s.label}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button onClick={() => change(s.key, -1)}
                style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', background: '#0f0f14', color: '#f0f0f5', fontSize: 20, cursor: 'pointer' }}>−</button>
              <div style={{ fontSize: 36, fontWeight: 700, fontFamily: 'monospace', color: '#5b6af0', minWidth: 80, textAlign: 'center' }}>{s.value}</div>
              <button onClick={() => change(s.key, 1)}
                style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', background: '#0f0f14', color: '#f0f0f5', fontSize: 20, cursor: 'pointer' }}>+</button>
              <button onClick={save}
                style={{ padding: '8px 16px', background: '#06d6a0', color: '#000', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', marginLeft: 8 }}>
                {saved ? '✓ Saxlanıldı' : '💾 Saxla'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}