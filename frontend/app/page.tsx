'use client';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin.html') return;
    window.location.href = '/index.html';
  }, []);
  return null;
}