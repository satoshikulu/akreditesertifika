import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import HeroBackground from '../components/HeroBackground'
import { CERTIFICATES } from '../data/certificates'

function Counter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.unobserve(entry.target)
          let start = 0
          const duration = 1600
          const step = value / (duration / 16)
          const tick = () => {
            start += step
            if (start >= value) {
              el.textContent = prefix + value.toLocaleString('tr-TR') + suffix
              return
            }
            el.textContent = prefix + Math.floor(start).toLocaleString('tr-TR') + suffix
            raf = requestAnimationFrame(tick)
          }
          tick()
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, prefix, suffix])

  return (
    <div className="num" ref={ref}>
      {prefix + value.toLocaleString('tr-TR') + suffix}
    </div>
  )
}

const TESTIMONIALS = [
  {
    initials: 'AY',
    text: 'Ön muhasebe sertifikam sayesinde muhasebe sektöründe işe başladım. Eğitimler son derece pratik ve sektöre yönelikti.',
    name: 'Ayşe Yıldız',
    role: 'Ön Muhasebe Uzmanı',
  },
  {
    initials: 'MK',
    text: 'İnşaat ustalığı belgemi almak için başvurdum, süreç beklediğimden çok daha hızlı ve profesyoneldi. Kesinlikle tavsiye ederim.',
    name: 'Mehmet Kaya',
    role: 'İnşaat Ustası',
  },
  {
    initials: 'SD',
    text: 'Şirketimizde 40 çalışanımız için kurumsal sertifika programı düzenledik. Hem süreç yönetimi hem de belge kalitesi kusursuzdu.',
    name: 'Selim Demir',
    role: 'İK Direktörü · ABC Holding',
  },
]

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

export default function Home() {
  useReveal()

  return (
    <>
      {/* HERO */}
      <header className="hero" id="anasayfa">
        <HeroBackground />
        <div className="hero-grid"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span>
              Türkiye'nin Akredite Belgelendirme Kurumu
            </div>
            <h1>
              Kariyerinizi <em>belgelenmiş</em> yetkinliklerle güçlendirin.
            </h1>
            <p className="lead">
              Kurumsal sertifika, ön muhasebe uzmanlığı, inşaat ustalığı ve 40+ alanda ulusal &
              uluslararası geçerliliğe sahip yetkinlik belgeleri. Resmî, hızlı ve güvenilir.
            </p>
            <div className="hero-actions">
              <Link to="/#sertifikalar" className="btn btn-gold">
                Sertifikaları İncele
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                to="/#iletisim"
                className="btn btn-ghost"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}
              >
                Kurumsal Teklif Al
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">
                  28<span>+</span>
                </div>
                <div className="lbl">Yıllık Tecrübe</div>
              </div>
              <div className="hero-stat">
                <div className="num">
                  65<span>K+</span>
                </div>
                <div className="lbl">Sertifikalı Birey</div>
              </div>
              <div className="hero-stat">
                <div className="num">
                  40<span>+</span>
                </div>
                <div className="lbl">Sertifika Programı</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="container">
          <span className="trust-label">Akreditasyon & İş Birlikleri</span>
          <div className="trust-logos">
            <span>TÜRKAK</span>
            <span>ISO</span>
            <span>MEB</span>
            <span>TSE</span>
            <span>İŞKUR</span>
            <span>TOBB</span>
          </div>
        </div>
      </div>

      {/* CERTIFICATES */}
      <section className="certs" id="sertifikalar">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Sertifika Programları</span>
            <h2>Kurumsal & mesleki yetkinlik belgeleri</h2>
            <p>
              Her seviyeye uygun, sektör tarafından tanınan sertifika programlarımızla
              kariyerinizi bir üst basamağa taşıyın.
            </p>
          </div>

          <div className="cert-grid">
            {CERTIFICATES.map((c) => (
              <div className="cert-card reveal" key={c.title}>
                <div className="cert-icon">
                  <svg viewBox="0 0 24 24">
                    <path d={c.icon} />
                  </svg>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <ul className="cert-topics">
                  {c.topics.map((topic) => (
                    <li key={topic}>
                      <CheckIcon /> {topic}
                    </li>
                  ))}
                </ul>
                <div className="cert-meta">
                  <span>
                    <ClockIcon /> {c.duration}
                  </span>
                  <span>
                    <StarIcon /> {c.level} Seviye
                  </span>
                </div>
                <Link to={`/sertifika/${c.slug}`} className="cert-link">
                  Detayları Gör <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WHY US */}
      <section className="about" id="hakkimizda">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="about-card">
                <span className="tag">Neden Biz?</span>
                <h3>Güvenin belgesi, kalitenin imzası.</h3>
                <ul>
                  <li>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    <div>
                      <b>Resmî Akreditasyon</b>TÜRKAK ve uluslararası akreditasyon kuruluşları
                      tarafından tanınan belgeler.
                    </div>
                  </li>
                  <li>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    <div>
                      <b>Dijital Doğrulama</b>Her sertifika, QR kod ile anında doğrulanabilir ve
                      online sorgulanabilir.
                    </div>
                  </li>
                  <li>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    <div>
                      <b>Uzman Eğitim Kadrosu</b>Sektör deneyimi yüksek, sertifikalı eğitmenlerle
                      yüz yüze ve online eğitim.
                    </div>
                  </li>
                  <li>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    <div>
                      <b>Kurumsal Çözümler</b>Şirketlere özel toplu belgelendirme ve in-house
                      eğitim programları.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="about-content reveal">
              <span className="eyebrow">Hakkımızda</span>
              <h2>Yetkinliği belgeliyor, kariyerleri dönüştürüyoruz.</h2>
              <p>
                28 yılı aşkın tecrübemizle bireylere ve kurumlara uluslararası geçerliliğe sahip
                yetkinlik belgeleri sunuyoruz. Amacımız; iş dünyasında güvenilir, ölçülebilir ve
                sürdürülebilir bir yetkinlik standardı oluşturmak.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <b>%100 Yasal Geçerlilik</b>
                  <span>Tüm sertifikalarımız resmî mevzuata uygun olarak düzenlenir.</span>
                </div>
                <div className="about-feature">
                  <b>Hızlı Süreç</b>
                  <span>Başvurudan belge teslimine ortalama 14 iş günü.</span>
                </div>
                <div className="about-feature">
                  <b>Online + Yüz Yüze</b>
                  <span>Size uygun formatta hibrit eğitim imkânı.</span>
                </div>
                <div className="about-feature">
                  <b>Ömür Boyu Arşiv</b>
                  <span>Sertifikalarınız dijital arşivde kalıcı olarak saklanır.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="surec">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Nasıl İşliyor?</span>
            <h2>4 adımda sertifikanıza kavuşun</h2>
            <p>Şeffaf, hızlı ve tamamen dijital süreçlerle belgenizi kısa sürede elinize alın.</p>
          </div>
          <div className="process-grid">
            <div className="step reveal">
              <div className="step-num">01</div>
              <h4>Başvuru</h4>
              <p>Online formu doldurun veya sizi aramamız için talebinizi iletin.</p>
            </div>
            <div className="step reveal">
              <div className="step-num">02</div>
              <h4>Değerlendirme</h4>
              <p>Uzmanlarımız ihtiyacınıza uygun programı belirler ve sizi yönlendirir.</p>
            </div>
            <div className="step reveal">
              <div className="step-num">03</div>
              <h4>Eğitim & Sınav</h4>
              <p>Hibrit eğitim programı sonunda yetkinlik değerlendirmesi yapılır.</p>
            </div>
            <div className="step reveal">
              <div className="step-num">04</div>
              <h4>Belgelendirme</h4>
              <p>Onaylı sertifikanız dijital ve basılı olarak adresinize gönderilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-band">
        <div className="container">
          <div className="stat reveal">
            <Counter value={28} suffix="+" />
            <div className="lbl">Yıllık Deneyim</div>
          </div>
          <div className="stat reveal">
            <Counter value={65} suffix="K+" />
            <div className="lbl">Sertifikalı Birey</div>
          </div>
          <div className="stat reveal">
            <Counter value={1200} suffix="+" />
            <div className="lbl">Kurumsal Müşteri</div>
          </div>
          <div className="stat reveal">
            <Counter value={98} prefix="%" />
            <div className="lbl">Memnuniyet Oranı</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="referanslar">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Referanslar</span>
            <h2>Bizi tercih edenler ne diyor?</h2>
            <p>
              Bireylerden kurumsal müşterilere, binlerce kişi kariyerini bizimle güçlendirdi.
            </p>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testi-card reveal" key={t.name}>
                <div className="testi-quote">"</div>
                <p>{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="iletisim">
        <div className="container">
          <div className="cta-box reveal">
            <div className="cta-content">
              <h2>Sertifikanızı almaya hazır mısınız?</h2>
              <p>
                Kurumsal teklif, bireysel başvuru veya bilgi almak için bize ulaşın. Uzman
                ekibimiz aynı gün içinde sizinle iletişime geçsin.
              </p>
            </div>
            <div className="cta-actions">
              <a href="#" className="btn btn-gold">
                Hemen Başvur
              </a>
              <a href="tel:+902125550444" className="btn btn-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
