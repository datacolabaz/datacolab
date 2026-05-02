'use client';
import { useTranslations } from 'next-intl';

export default function TrustedBar() {
  const t = useTranslations('trusted');
  const logos = ['MENTORIX', 'MEDPANEL', 'EDUTECH AZ', 'CLINICPRO', 'STARTUPBAKU'];
  return (
    <div className="py-8 px-10 border-y flex items-center gap-10 overflow-hidden"
      style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
      <span className="text-xs uppercase tracking-widest whitespace-nowrap shrink-0"
        style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{t('label')}</span>
      <div className="flex gap-10 items-center">
        {logos.map(l => (
          <span key={l} className="text-sm font-bold tracking-wider" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-syne)' }}>{l}</span>
        ))}
      </div>
    </div>
  );
}
