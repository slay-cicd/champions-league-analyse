export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1c', borderTop: '1px solid #1e2d4a', padding: '3rem 1.5rem', marginTop: '5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ color: '#718096', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Ein Projekt von{' '}
          <a href="https://atlasmarkets.de" style={{ color: '#00ff88', textDecoration: 'none' }}>Atlas Market</a>
          {' '}— Prediction Markets für Fußball.
        </p>
        <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#00ff88', color: '#0a0f1c', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', marginBottom: '2rem' }}>atlasmarkets.de →</a>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem', borderTop: '1px solid #1e2d4a' }}>
        <p style={{ color: '#4a5568', fontSize: '0.85rem' }}>© 2026 Atlas Market. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}
