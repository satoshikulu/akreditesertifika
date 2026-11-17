import { Link, useParams } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { CERTIFICATES, getCertificate } from '../data/certificates'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l2.4 6.9H22l-6 4.4 2.3 7-6.3-4.6L5.7 20.3 8 13.3 2 8.9h7.6L12 2z" />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4z" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M5 12h14M13 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function SertifikaDetay() {
  useReveal()

  const { slug } = useParams()
  const cert = getCertificate(slug)

  if (!cert) {
    return (
      <section className="detail-section detail-missing">
        <div className="container">
          <h1>Program bulunamadı</h1>
          <p>Aradığınız sertifika programı mevcut değil veya kaldırılmış olabilir.</p>
          <Link to="/#sertifikalar" className="btn btn-primary">
            Sertifika Programlarına Dön
          </Link>
        </div>
      </section>
    )
  }

  const others = CERTIFICATES.filter((c) => c.slug !== cert.slug)

  return (
    <>
      {/* PAGE HERO */}
      <header className="page-hero detail-hero">
        <div className="hero-grid"></div>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Anasayfa</Link>
            <span className="sep">/</span>
            <Link to="/#sertifikalar">Sertifika Programları</Link>
            <span className="sep">/</span>
            <span className="current">{cert.title}</span>
          </nav>
          <h1>{cert.title}</h1>
          <p className="lead">{cert.desc}</p>
          <div className="hero-chips">
            <span className="chip">
              <ClockIcon /> {cert.duration}
            </span>
            <span className="chip">
              <StarIcon /> {cert.level} Seviye
            </span>
            <span className="chip">
              <ShieldIcon /> Akredite Belge
            </span>
          </div>
        </div>
      </header>

      {/* DETAIL */}
      <section className="detail-section">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-main">
              <div className="detail-block reveal">
                <h2>Program Hakkında</h2>
                <p>{cert.intro}</p>
              </div>

              <div className="detail-block reveal">
                <h2>Program İçeriği</h2>
                <ol className="module-list">
                  {cert.modules.map((m, i) => (
                    <li key={m.title}>
                      <span className="module-num">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <b>{m.title}</b>
                        <span>{m.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="detail-block reveal">
                <h2>Kazanımlar</h2>
                <ul className="outcome-list">
                  {cert.outcomes.map((o) => (
                    <li key={o}>
                      <span className="check">
                        <CheckIcon />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-block reveal">
                <h2>Kimler Katılabilir?</h2>
                <ul className="audience-list">
                  {cert.audience.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="detail-side">
              <div className="detail-card reveal">
                <h3>Program Özeti</h3>
                <ul className="summary-list">
                  <li>
                    <span>Süre</span>
                    <b>{cert.duration}</b>
                  </li>
                  <li>
                    <span>Seviye</span>
                    <b>{cert.level}</b>
                  </li>
                  <li>
                    <span>Eğitim Formatı</span>
                    <b>{cert.format}</b>
                  </li>
                  <li>
                    <span>Değerlendirme</span>
                    <b>{cert.exam}</b>
                  </li>
                  <li>
                    <span>Geçerlilik</span>
                    <b>{cert.validity}</b>
                  </li>
                </ul>
                <Link to="/#iletisim" className="btn btn-gold detail-cta">
                  Hemen Başvur
                </Link>
                <Link to="/dogrulama" className="btn btn-ghost detail-cta">
                  Belge Doğrula
                </Link>
              </div>

              <div className="detail-card reveal">
                <h3>Diğer Programlar</h3>
                <ul className="other-list">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link to={`/sertifika/${o.slug}`}>
                        {o.title}
                        <ArrowIcon />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
