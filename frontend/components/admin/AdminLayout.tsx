'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'dashboard', icon: '📊', label: 'Dashboard' },
  { id: 'hero', icon: '🎯', label: 'Hero & Mətnlər' },
  { id: 'stats', icon: '📈', label: 'Statistikalar' },
  { id: 'services', icon: '⚙️', label: 'Xidmətlər' },
  { id: 'cases', icon: '💼', label: 'Case Studies' },
  { id: 'blog', icon: '✍️', label: 'Blog' },
  { id: 'testimonials', icon: '💬', label: 'Rəylər' },
  { id: 'media', icon: '🖼️', label: 'Media' },
  { id: 'inbox', icon: '📥', label: 'Gələn Qutu' },
];

export default function AdminLayout({
  children,
  activePage,
  onNavigate,
}: {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}) {
  const router = useRouter();

  function logout() {
    localStorage.removeItem('dc_token');
    router.push('/admin');
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0f0f14', color: '#f0f0f5', fontFamily: 'system-ui,sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: 240, background: '#13131a', borderRight: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh' }}>
        <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>
            <span style={{ color: '#fff' }}>data</span>
            <span style={{ background: 'linear-gradient(135deg,#5b6af0,#06d6a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>colab</span>
          </div>
          <div style={{ fontSize: 11, color: '#6b6b80', marginTop: 2, fontFamily: 'monospace' }}>Admin Panel</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 8px', overflowY: 'auto' }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => onNavigate(item.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 500,
                color: activePage === item.id ? '#5b6af0' : '#6b6b80',
                background: activePage === item.id ? 'rgba(91,106,240,0.15)' : 'transparent',
                border: 'none', width: '100%', textAlign: 'left', transition: 'all 0.15s',
              }}>
              <span style={{ fontSize: 16 }}>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: 16, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#5b6af0,#06d6a0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>DA</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Admin</div>
            <div style={{ fontSize: 11, color: '#6b6b80' }}>Superadmin</div>
          </div>
          <button onClick={logout} style={{ background: 'transparent', border: 'none', color: '#6b6b80', cursor: 'pointer', fontSize: 16 }}>⇥</button>
        </div>
      </div>
      {/* Main */}
      <div style={{ marginLeft: 240, flex: 1, padding: 32 }}>{children}</div>
    </div>
  );
}