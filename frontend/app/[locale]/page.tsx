'use client';
import { useEffect } from 'react';

export default function LocalePage() {
  useEffect(() => {
    window.location.replace('/index.html');
  }, []);
  return null;
}
