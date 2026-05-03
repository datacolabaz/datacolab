'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const posts: Record<string, any> = {
  'saas-2026': {
    tag: 'SAAS',
    title: '2026-da SaaS necə qurulur',
    date: '2026-05-01',
    read_time: '5 dəq oxu',
    content: `
2026-da SaaS qurmaq texnologiya seçimindən çox problem anlayışı ilə başlayır.

Əksər startaplar texnologiyadan başlayır — hansı framework, hansı database, hansı cloud. Bu yanlışdır.

**Düzgün yol:**

1. Problemi dəqiq müəyyənləşdir
2. Ən kiçik həlli qur (MVP)
3. Real istifadəçilərlə sına
4. Ölçəkləndir

Mentorix-i quranda əvvəlcə kağız üzərində prosesi anladıq. Yalnız sonra kod yazdıq.

**Nəticə:** 6 həftədə 200+ istifadəçi.
    `,
  },
  'why-apps-fail': {
    tag: 'UĞURSUZLUQ',
    title: 'Niyə əksər tətbiqlər uğursuz olur',
    date: '2026-04-15',
    read_time: '8 dəq oxu',
    content: `
8 real layihəni araşdırdıq. Hamısında eyni pattern var idi.

**Problem texniki deyil, strateji idi.**

Ən çox rast gəlinən səbəblər:

1. Yanlış problem həll edilir
2. İstifadəçi ilə danışılmır
3. Çox tez ölçəklənmə cəhdi
4. Pul qurtarır, MVP yoxdur

**Həll:** Əvvəlcə problemi validate et, sonra qur.
    `,
  },
  'automate-5': {
    tag: 'AVTOMATLAŞMA',
    title: 'Hər kiçik biznes avtomatlaşdıra biləcəyi 5 proses',
    date: '2026-04-01',
    read_time: '6 dəq oxu',
    content: `
Manuel əməliyyatlar biznesinizi yavaşladır. Bu 5 prosesi avtomatlaşdırın:

1. **Ödəniş xatırlatmaları** — SMS və email ilə avtomatik
2. **Müştəri onboardingi** — ilk addımları avtomatlaşdırın
3. **Hesabatlar** — hər gün əl ilə yox, sistem özü yaratsın
4. **Görüş planlaması** — Calendly kimi həllər
5. **İnventar idarəsi** — stok azalanda avtomatik xəbərdarlıq

Mentorix-də ödəniş avtomatlaşması +40% toplanma artışı verdi.
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = posts[slug];

  if (!post) return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#f0f0f5', fontFamily: 'system-ui,sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>404</div>
        <div style={{ color: '#7a7a8e', marginBottom: 24 }}>Yazı tapılmadı</div>
        <Link href="/en/blog" style={{ color: '#5b6af0', textDecoration: 'none' }}>← Bloga qayıt</Link>
      </div>
    </main>
  );

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#f0f0f5', fontFamily: 'system-ui,sans-serif', padding: '120px 40px 80px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#5b6af0', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{post.tag}</span>
          <h1 style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em', margin: '12px 0 16px', lineHeight: 1.1 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: 16, fontSize: 13, color: '#7a7a8e' }}>
            <span>Datacolab</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.read_time}</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 40 }}>
          {post.content.trim().split('\n').map((line: string, i: number) => {
            if (!line.trim()) return <div key={i} style={{ height: 16 }} />;
            if (line.startsWith('**') && line.endsWith('**')) return <h2 key={i} style={{ fontSize: 22, fontWeight: 700, margin: '24px 0 12px' }}>{line.replace(/\*\*/g, '')}</h2>;
            if (line.match(/^\d+\./)) return <div key={i} style={{ fontSize: 15, color: '#c0c0d0', lineHeight: 1.7, marginBottom: 8, paddingLeft: 16 }}>{line}</div>;
            return <p key={i} style={{ fontSize: 16, color: '#c0c0d0', lineHeight: 1.8, marginBottom: 8 }}>{line}</p>;
          })}
        </div>

        <div style={{ marginTop: 60, padding: '28px', background: 'linear-gradient(135deg,rgba(91,106,240,0.08),rgba(139,92,246,0.08))', border: '1px solid rgba(91,106,240,0.2)', borderRadius: 14, textAlign: 'center' }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Sisteminizi qurmağa hazırsınız?</h3>
          <p style={{ fontSize: 14, color: '#7a7a8e', marginBottom: 20 }}>Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın</p>
          <a href="/#contact" style={{ display: 'inline-block', padding: '12px 28px', background: '#5b6af0', color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Layihəni müzakirə edək →</a>
        </div>

        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/en/blog" style={{ color: '#5b6af0', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>← Bütün yazılar</Link>
          <Link href="/" style={{ color: '#7a7a8e', textDecoration: 'none', fontSize: 14 }}>Ana səhifə</Link>
        </div>
      </div>
    </main>
  );
}