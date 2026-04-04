import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Champions League Analyse – CL Prognosen & Statistiken 2025/26',
  description: 'Tiefgehende Champions League Analysen: Gruppenphase, K.o.-Runde, historische Statistiken und Markteinschätzungen für die UCL 2025/26.',
}

export default function HomePage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0a0f1c 0%, #0f1e3a 100%)', padding: '5rem 1.5rem 4rem', borderBottom: '1px solid #1e2d4a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-200px', right: '-100px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
            <span style={{ color: '#00ff88', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em' }}>⭐ UCL 2025/26 Analysen live</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
            Champions League Analyse<br /><span style={{ color: '#00ff88' }}>Daten. Taktik. Prognosen.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#a0aec0', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Tiefgehende UCL-Analysen: Gruppenphase, Achtelfinale, Halbfinale, Finale. Mit Marktdaten von Atlas Market – dem Prediction Market für Champions League Fußball.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ background: '#00ff88', color: '#0a0f1c', padding: '0.85rem 2rem', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}>CL live traden →</a>
            <a href="#articles" style={{ background: 'transparent', color: '#ffffff', padding: '0.85rem 2rem', borderRadius: '10px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', border: '1px solid #1e2d4a' }}>Analysen lesen</a>
          </div>
        </div>
      </section>
      <section style={{ background: '#0f1628', borderBottom: '1px solid #1e2d4a', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          {[{ label: 'UCL-Teams analysiert', value: '36' }, { label: 'Märkte verfügbar', value: '200+' }, { label: 'Buchmacher-Marge', value: '0%' }, { label: 'Live-Analysen', value: '20+' }].map((s) => (
            <div key={s.label}><div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00ff88' }}>{s.value}</div><div style={{ fontSize: '0.8rem', color: '#4a5568', marginTop: '0.25rem' }}>{s.label}</div></div>
          ))}
        </div>
      </section>
      <section id="articles" style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>UCL Analysen & Prognosen</h2>
        <p style={{ color: '#718096', fontSize: '0.95rem', marginBottom: '2.5rem' }}>Champions League taktisch und statistisch durchleuchtet</p>
        {featured && <div style={{ marginBottom: '2rem' }}><ArticleCard post={featured} featured /></div>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {rest.map((post) => <ArticleCard key={post.slug} post={post} />)}
        </div>
      </section>
      <section style={{ background: 'linear-gradient(135deg, #0f1e3a 0%, #0a1628 100%)', border: '1px solid rgba(0,255,136,0.15)', borderRadius: '16px', maxWidth: '1200px', margin: '0 auto 4rem', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>Champions League live traden</h2>
        <p style={{ color: '#a0aecold', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Atlas Market bietet CL-Märkte ohne Buchmacher-Marge. Fair, transparent, in Echtzeit.</p>
        <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ background: '#00ff88', color: '#0a0f1c', padding: '0.85rem 2.5rem', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>Jetzt auf atlasmarkets.de →</a>
      </section>
    </>
  )
}
