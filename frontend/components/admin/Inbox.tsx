'use client';
import { useState } from 'react';

const mockMessages = [
  { id: 1, name: 'Əli Həsənov', email: 'ali@company.az', biz_type: 'edu', message: 'Salam, təhsil platforması üçün əlaqə saxlamaq istəyirik. Mentorix kimi sistem lazımdır.', created_at: new Date().toISOString(), is_read: false },
  { id: 2, name: 'Günel Məmmədova', email: 'gunel@clinic.az', biz_type: 'clinic', message: 'Klinikamız üçün idarəetmə sistemi haqqında məlumat almaq istəyirik.', created_at: new Date(Date.now() - 86400000).toISOString(), is_read: true },
];

export default function Inbox() {
  const [messages, setMessages] = useState(mockMessages);
  const [selected, setSelected] = useState<typeof mockMessages[0] | null>(null);

  function open(msg: typeof mockMessages[0]) {
    setSelected(msg);
    setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, is_read: true } : m));
  }

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 24, fontWeight: 700 }}>Gələn Qutu</div>
        <div style={{ fontSize: 13, color: '#6b6b80' }}>Contact form vasitəsilə gələn mesajlar</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : '1fr', gap: 20 }}>
        <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
          {messages.map(m => (
            <div key={m.id} onClick={() => open(m)}
              style={{ padding: 16, borderBottom: '1px solid rgba(255,255,255,0.04)', cursor: 'pointer', borderLeft: m.is_read ? 'none' : '3px solid #5b6af0', transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{m.name} {!m.is_read && '🔵'}</span>
                <span style={{ fontSize: 11, color: '#6b6b80' }}>{new Date(m.created_at).toLocaleDateString('az')}</span>
              </div>
              <div style={{ fontSize: 12, color: '#6b6b80', marginBottom: 4 }}>{m.email} · {m.biz_type}</div>
              <div style={{ fontSize: 12, color: '#4a4a5e' }}>{m.message.substring(0, 70)}...</div>
            </div>
          ))}
        </div>

        {selected && (
          <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{selected.name}</div>
                <div style={{ fontSize: 13, color: '#6b6b80', marginTop: 4 }}>{selected.email} · {selected.biz_type} · {new Date(selected.created_at).toLocaleString('az')}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <a href={`mailto:${selected.email}`} style={{ padding: '6px 14px', background: '#5b6af0', color: '#fff', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Cavab ver →</a>
                <button onClick={() => setSelected(null)} style={{ padding: '6px 14px', background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', color: '#6b6b80', borderRadius: 8, fontSize: 13, cursor: 'pointer' }}>✕</button>
              </div>
            </div>
            <div style={{ background: '#0f0f14', borderRadius: 8, padding: 16, fontSize: 14, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{selected.message}</div>
          </div>
        )}
      </div>
    </div>
  );
}