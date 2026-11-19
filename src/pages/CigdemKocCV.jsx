export default function CigdemKocCV() {
  const pdfUrl = '/cigdemkocPDFCV.pdf'

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a2e',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 16px',
      boxSizing: 'border-box',
    }}>
      {/* Toolbar */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        gap: '12px',
        flexWrap: 'wrap',
      }}>
        <span style={{
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          fontWeight: 600,
        }}>
          Çiğdem Koç — CV
        </span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '9px 18px',
              borderRadius: '9px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
            Yeni Sekmede Aç
          </a>
          <a
            href={pdfUrl}
            download="CigdemKoc_CV.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '9px 18px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #c9a961, #e0c58a)',
              border: 'none',
              color: '#0a1f44',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/>
            </svg>
            İndir
          </a>
        </div>
      </div>

      {/* PDF iframe */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        flex: 1,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
      }}>
        <iframe
          src={pdfUrl}
          title="Çiğdem Koç CV"
          style={{
            width: '100%',
            height: '85vh',
            border: 'none',
            display: 'block',
            background: '#fff',
          }}
        />
      </div>
    </div>
  )
}
