'use client';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.location.href = '/index.html';
  }, []);
  return (
    <div style={{background:'#0a0a0f',minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>
      Loading...
    </div>
  );
}
