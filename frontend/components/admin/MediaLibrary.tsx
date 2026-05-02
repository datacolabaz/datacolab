'use client';
import { useState, useRef } from 'react';

export default function MediaLibrary() {
  const [files, setFiles] = useState<{ id: number; name: string; url: string; type: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(fileList: FileList | null) {
    if (!fileList) return;
    Array.from(fileList).forEach(file => {
      const url = URL.createObjectURL(file);
      setFiles(prev => [...prev, { id: Date.now() + Math.random(), name: file.name, url, type: file.type }]);
    });
  }

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 24, fontWeight: 700 }}>Media Kitabxanası</div>
        <div style={{ fontSize: 13, color: '#6b6b80' }}>Şəkil və video yükləyin</div>
      </div>

      <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div onClick={() => inputRef.current?.click()}
          style={{ border: '2px dashed rgba(255,255,255,0.08)', borderRadius: 10, padding: 40, textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s' }}
          onDragOver={e => e.preventDefault()}
          onDrop={e => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📁</div>
          <div style={{ fontSize: 14, color: '#6b6b80' }}>Şəkil və ya video seçin və ya buraya sürükləyin</div>
          <div style={{ fontSize: 12, color: '#4a4a5e', marginTop: 6 }}>JPG, PNG, GIF, WebP, MP4 (max 50MB)</div>
          <input ref={inputRef} type="file" style={{ display: 'none' }} multiple accept="image/*,video/*" onChange={e => handleFiles(e.target.files)} />
        </div>
      </div>

      {files.length > 0 && (
        <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>🖼️ Yüklənmiş Fayllar</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 12 }}>
            {files.map(f => (
              <div key={f.id} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
                {f.type.startsWith('video') ? (
                  <video src={f.url} style={{ width: '100%', height: 100, objectFit: 'cover', display: 'block' }} muted />
                ) : (
                  <img src={f.url} alt={f.name} style={{ width: '100%', height: 100, objectFit: 'cover', display: 'block' }} />
                )}
                <button onClick={() => setFiles(prev => prev.filter(i => i.id !== f.id))}
                  style={{ position: 'absolute', top: 4, right: 4, background: 'rgba(0,0,0,0.7)', border: 'none', color: '#fff', borderRadius: 4, width: 24, height: 24, cursor: 'pointer', fontSize: 12 }}>✕</button>
                <div style={{ fontSize: 11, color: '#6b6b80', padding: '6px 8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}