'use client';
import { useState, useEffect } from 'react';
import LoginForm from '@/components/admin/LoginForm';
import AdminLayout from '@/components/admin/AdminLayout';
import Dashboard from '@/components/admin/Dashboard';
import HeroEditor from '@/components/admin/HeroEditor';
import StatsEditor from '@/components/admin/StatsEditor';
import ServicesEditor from '@/components/admin/ServicesEditor';
import CasesEditor from '@/components/admin/CasesEditor';
import BlogEditor from '@/components/admin/BlogEditor';
import TestimonialsEditor from '@/components/admin/TestimonialsEditor';
import MediaLibrary from '@/components/admin/MediaLibrary';
import Inbox from '@/components/admin/Inbox';

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [page, setPage] = useState('dashboard');

  useEffect(() => {
    const t = localStorage.getItem('dc_token');
    if (t) setToken(t);
  }, []);

  if (!token) return <LoginForm onLogin={setToken} />;

  const pages: Record<string, React.ReactNode> = {
    dashboard: <Dashboard />,
    hero: <HeroEditor />,
    stats: <StatsEditor />,
    services: <ServicesEditor />,
    cases: <CasesEditor />,
    blog: <BlogEditor />,
    testimonials: <TestimonialsEditor />,
    media: <MediaLibrary />,
    inbox: <Inbox />,
  };

  return (
    <AdminLayout activePage={page} onNavigate={setPage}>
      {pages[page]}
    </AdminLayout>
  );
}