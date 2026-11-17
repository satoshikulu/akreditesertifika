import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

/* Demo veri katmanı — gerçek entegrasyonda bir API çağrısıyla değiştirin. */
const DEMO_RECORDS = {
  'AL-21-10987-ÇK': {
    no: 'AL-21-10987-ÇK',
    org: 'Akredite Sertifika Kurumu',
    status: 'Geçerli',
    pdf: '/cigdemPDF.pdf',
    pdfName: 'cigdemPDF.pdf',
  },
  'AI-2021-CK-4792': {
    no: 'AI-2021-CK-4792',
    org: 'Akredite Sertifika Kurumu',
    status: 'Geçerli',
    pdf: '/cigdemPDF.pdf',
    pdfName: 'cigdemPDF.pdf',
  },
  'ASK-2025-08417': {
    name: 'A*** Y***',
    program: 'Ön Muhasebe Uzmanlığı',
    no: 'ASK-2025-08417',
    issueDate: '12.03.2025',
    validUntil: '12.03.2028',
    org: 'Akredite Sertifika Kurumu',
    status: 'Geçerli',
  },
}

const nowStamp = () =>
  new Date().toLocaleString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

const ticketNo = () => 'DGR-' + Date.now().toString().slice(-8)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)

export default function Dogrulama() {
  useReveal()

  const [sorguKodu, setSorguKodu] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const code = sorguKodu.trim().toUpperCase()

    if (!code) {
      setResult({ type: 'error', message: 'Lütfen belge sorgu kodunu giriniz.' })
      return
    }

    setLoading(true)
    setResult(null)

    setTimeout(() => {
      const record = DEMO_RECORDS[code]
      if (record) {
        setResult({ type: 'success', record })
      } else {
        setResult({
          type: 'error',
          message:
            'Girilen sorgu kodu ile eşleşen bir kayıt bulunamadı. Lütfen kodu kontrol edip tekrar deneyiniz.',
        })
      }
      setLoading(false)
    }, 900)
  }

  const handleReset = () => {
    setSorguKodu('')
    setResult(null)
  }

  return (
    <>
      {/* PAGE HERO */}
      <header className="page-hero">
        <div className="hero-grid"></div>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Anasayfa</Link>
            <span className="sep">/</span>
            <span className="current">Belge Doğrulama</span>
          </nav>
          <h1>
            Belge <em>Doğrulama</em> Sistemi
          </h1>
          <p className="lead">
            Tarafımızca düzenlenen tüm sertifikaların gerçekliğini, belge sorgu kodu ile
            saniyeler içinde resmî kayıtlarımızdan sorgulayabilirsiniz.
          </p>
          <div className="hero-chips">
            <span className="chip">
              <svg viewBox="0 0 24 24">
                <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4z" />
              </svg>{' '}
              256-bit SSL Korumalı
            </span>
            <span className="chip">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>{' '}
              Anlık Sorgulama
            </span>
            <span className="chip">
              <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>{' '}
              TÜRKAK Onaylı Kayıt
            </span>
          </div>
        </div>
      </header>

      {/* VERIFY */}
      <section className="verify-section">
        <div className="container">
          <div className="verify-card reveal">
            <div className="verify-card-head">
              <div>
                <h2>Sertifika Sorgulama</h2>
                <p>
                  Belgenizde yer alan bilgileri aşağıdaki alanlara girerek doğrulama işlemini
                  başlatın.
                </p>
              </div>
              <div className="secure-badge">
                <svg viewBox="0 0 24 24">
                  <path d="M18 8h-1V6a5 5 0 00-10 0v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zm-6 9a2 2 0 110-4 2 2 0 010 4zm3.1-9H8.9V6a3.1 3.1 0 016.2 0v2z" />
                </svg>
                Güvenli Bağlantı
              </div>
            </div>

            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="sorguKodu">Belge Sorgu Kodu</label>
                  <input
                    type="text"
                    id="sorguKodu"
                    className="code-input"
                    placeholder="Örn: XX-00-00000-XX"
                    maxLength={24}
                    value={sorguKodu}
                    onChange={(e) => setSorguKodu(e.target.value.toUpperCase())}
                  />
                  <span className="hint">
                    Belgenizin üzerinde yer alan sorgu kodunu giriniz.
                  </span>
                </div>
              </div>

              <div className="verify-actions">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.5 4.5 0 019.5 14z" />
                  </svg>
                  {loading ? 'Sorgulanıyor…' : 'Sorgula'}
                </button>
                <button type="button" className="btn btn-ghost" onClick={handleReset}>
                  Temizle
                </button>
                <span className="note">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  Sorgulama işlemi ücretsizdir ve kayıt gerektirmez.
                </span>
              </div>
            </form>

            {/* SONUÇ ALANI */}
            <div aria-live="polite">
              {result && result.type === 'success' && (
                <div className="result success">
                  <div className="result-head">
                    <div className="result-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm-1.2 15.4l5.7-5.7-1.4-1.4-4.3 4.3-2.1-2.1-1.4 1.4 3.5 3.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Belge Geçerli</h3>
                      <p>Bu belge, Akredite Sertifika Kurumu kayıtlarında doğrulanmıştır.</p>
                    </div>
                  </div>

                  {result.record.pdf ? (
                    <div className="result-pdf">
                      <div className="pdf-toolbar">
                        <span className="pdf-name">
                          <svg viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13h8v2H8v-2zm0 4h8v2H8v-2z" />
                          </svg>
                          {result.record.pdfName}
                        </span>
                        <div className="pdf-toolbar-actions">
                          <a
                            href={result.record.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-sm"
                          >
                            Yeni Sekmede Aç
                          </a>
                          <a
                            href={result.record.pdf}
                            download
                            className="btn btn-primary btn-sm"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
                            </svg>
                            PDF'i İndir
                          </a>
                        </div>
                      </div>
                      <iframe
                        className="pdf-frame"
                        src={result.record.pdf}
                        title="Belge önizleme"
                      />
                    </div>
                  ) : (
                    <div className="result-grid">
                      <div className="rfield">
                        <span>Belge Sahibi</span>
                        <b>{result.record.name}</b>
                      </div>
                      <div className="rfield">
                        <span>Sertifika Programı</span>
                        <b>{result.record.program}</b>
                      </div>
                      <div className="rfield">
                        <span>Belge Numarası</span>
                        <b>{result.record.no}</b>
                      </div>
                      <div className="rfield">
                        <span>Düzenlenme Tarihi</span>
                        <b>{result.record.issueDate}</b>
                      </div>
                      <div className="rfield">
                        <span>Geçerlilik Bitişi</span>
                        <b>{result.record.validUntil}</b>
                      </div>
                      <div className="rfield">
                        <span>Durum</span>
                        <b className="ok">{result.record.status}</b>
                      </div>
                    </div>
                  )}

                  <div className="result-foot">
                    <span className="stamp">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                      Sorgu No: {ticketNo()} · {nowStamp()}
                    </span>
                    <span>Düzenleyen: {result.record.org}</span>
                  </div>
                </div>
              )}

              {result && result.type === 'error' && (
                <div className="result error">
                  <div className="result-head">
                    <div className="result-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm1-5a10 10 0 100 20 10 10 0 000-20z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Kayıt Bulunamadı</h3>
                      <p dangerouslySetInnerHTML={{ __html: result.message }} />
                    </div>
                  </div>
                  <div className="result-help">
                    Bilgilerin doğru olduğundan eminseniz bizimle iletişime geçin:
                    <a href="mailto:info@akreditesertifika.com">info@akreditesertifika.com</a>
                    <span>·</span>
                    <a href="tel:+902125550444">+90 (212) 555 0 444</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="verify-info">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Neden Doğrulama?</span>
            <h2>Sahte belgeye karşı güvenli kontrol</h2>
            <p>
              İşe alım süreçlerinde ve kurumsal denetimlerde belge gerçekliğini resmî kaynaktan
              teyit edin.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-card reveal">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm-1.2 15.4l5.7-5.7-1.4-1.4-4.3 4.3-2.1-2.1-1.4 1.4 3.5 3.5z" />
                </svg>
              </div>
              <h3>Sahteciliğe Karşı Koruma</h3>
              <p>
                Her belge için üretilen tekil doğrulama kodu sayesinde kopyalanmış veya
                değiştirilmiş belgeler anında tespit edilir.
              </p>
            </div>
            <div className="info-card reveal">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
              <h3>Anlık Sonuç</h3>
              <p>
                Sorgulama sonuçları merkezî veri tabanımızdan gerçek zamanlı olarak alınır;
                gecikme veya manuel onay beklenmez.
              </p>
            </div>
            <div className="info-card reveal">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3>Resmî Kayıt</h3>
              <p>
                Tüm doğrulamalar kurum arşivinde tarih, saat ve sorgu numarası ile kayıt altına
                alınır; denetimlerde delil olarak kullanılabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR */}
      <section className="qr-section">
        <div className="container">
          <div className="qr-grid">
            <div className="qr-visual reveal">
              <div className="qr-frame">
                <div className="qr-code">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm10-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v-2h-2v2zm4 0h2v-2h-2v2z" />
                  </svg>
                </div>
                <div className="qr-caption">
                  <b>Belge üzerindeki QR kodu okutun</b>
                  Doğrulama sayfasına otomatik yönlendirilirsiniz
                </div>
              </div>
            </div>

            <div className="qr-content reveal">
              <span className="eyebrow qr-eyebrow">Hızlı Doğrulama</span>
              <h2>QR kod ile saniyeler içinde teyit edin</h2>
              <p>
                Basılı sertifikalarımızın üzerinde bulunan QR kodu telefonunuzun kamerasıyla
                okutarak, belgeye ait tüm bilgilere anında erişebilirsiniz.
              </p>
              <ul className="qr-list">
                <li>
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <div>
                    <b>Manuel giriş gerekmez</b>QR kod okutulduğunda belge sorgu kodu otomatik
                    doldurulur.
                  </div>
                </li>
                <li>
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <div>
                    <b>Mobil uyumlu arayüz</b>Sorgulama sayfası tüm mobil cihazlarda sorunsuz
                    çalışır.
                  </div>
                </li>
                <li>
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <div>
                    <b>Paylaşılabilir sonuç</b>Doğrulama sonucunu PDF olarak indirip kurumsal
                    dosyanıza ekleyebilirsiniz.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Sıkça Sorulan Sorular</span>
            <h2>Doğrulama hakkında merak edilenler</h2>
          </div>
          <div className="faq-list reveal">
            <details className="faq-item">
              <summary>Belge sorgu kodu nerede yer alır?</summary>
              <p>
                Belge sorgu kodu, sertifikanızın üzerinde yer alır. Dijital sertifikalarda ise PDF
                dosyasında belirtilmiştir. Sorgulama büyük/küçük harf duyarsızdır.
              </p>
            </details>
            <details className="faq-item">
              <summary>Sorgulama sonucu "bulunamadı" çıkarsa ne yapmalıyım?</summary>
              <p>
                Belge sorgu kodunu kontrol ediniz. Kodun doğru olmasına rağmen
                sonuç alamıyorsanız, belgenizin yeni düzenlenmiş olması veya arşiv güncellemesi
                sürecinde olması mümkündür. Bu durumda info@akreditesertifika.com adresinden
                bizimle iletişime geçebilirsiniz.
              </p>
            </details>
            <details className="faq-item">
              <summary>Doğrulama işlemi ücretli mi?</summary>
              <p>
                Hayır. Belge doğrulama hizmetimiz tamamen ücretsizdir ve herhangi bir üyelik veya
                kayıt gerektirmez. Sorgulama sayısında bir sınırlama bulunmamaktadır.
              </p>
            </details>
            <details className="faq-item">
              <summary>Kurumsal toplu doğrulama yapabilir miyim?</summary>
              <p>
                Evet. İnsan kaynakları ve denetim ekipleri için geliştirdiğimiz toplu doğrulama
                API'si ile birden fazla belgeyi tek seferde sorgulayabilirsiniz. Kurumsal
                entegrasyon için bizimle iletişime geçin.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
