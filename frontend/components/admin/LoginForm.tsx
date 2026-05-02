'use client';
import { useState } from 'react';

export default function LoginForm({ onLogin }: { onLogin: (token: string) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  async function handleLogin() {
    try {
      const r = await fetch(`${API}/admin/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await r.json();
      if (data.token) {
        localStorage.setItem('dc_token', data.token);
        onLogin(data.token);
      } else {
        setError('İstifadəçi adı və ya şifrə yanlışdır');
      }
    } catch {
      // Demo mode
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('dc_token', 'demo-token');
        onLogin('demo-token');
      } else {
        setError('İstifadəçi adı və ya şifrə yanlışdır');
      }
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0f0f14' }}>
      <div style={{ background: '#1a1a24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 40, width: 360 }}>
        <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
          <span style={{ color: '#fff' }}>data</span>
          <span style={{ background: 'linear-gradient(135deg,#5b6af0,#06d6a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>colab</span>
        </div>
        <div style={{ fontSize: 13, color: '#6b6b80', marginBottom: 28 }}>Admin panelə giriş</div>
        {error && <div style={{ background: 'rgba(240,91,91,0.1)', border: '1px solid #f05b5b', color: '#f05b5b', padding: '10px 14px', borderRadius: 8, fontSize: 13, marginBottom: 16 }}>{error}</div>}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: 12, color: '#6b6b80', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>İstifadəçi adı</label>
          <input value={username} onChange={e => setUsername(e.target.value)}
            style={{ width: '100%', background: '#0f0f14', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f0f5', padding: '10px 14px', borderRadius: 8, fontSize: 14, outline: 'none' }}
            placeholder="admin" />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', fontSize: 12, color: '#6b6b80', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Şifrə</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password"
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            style={{ width: '100%', background: '#0f0f14', border: '1px solid rgba(255,255,255,0.08)', color: '#f0f0f5', padding: '10px 14px', borderRadius: 8, fontSize: 14, outline: 'none' }}
            placeholder="••••••••" />
        </div>
        <button onClick={handleLogin}
          style={{ width: '100%', padding: 12, background: '#5b6af0', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          Daxil ol →
        </button>
      </div>
    </div>
  );
}