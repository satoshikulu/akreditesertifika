import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <div className="logo-mark">
                <img src="/logo.jpg" alt="Akredite Sertifika Kurumu" />
              </div>
              <div>
                Akredite Sertifika
                <small>Yetkinlik Belgelendirme</small>
              </div>
            </Link>
            <p>
              Türkiye'nin güvenilir akredite belgelendirme kurumu. 28 yıldır bireylere ve
              kurumlara uluslararası geçerliliğe sahip sertifikalar sunuyoruz.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34V10.1H5.66v8.24h2.68zM7 8.9a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zm11.34 9.44v-4.52c0-2.41-1.29-3.53-3-3.53a2.6 2.6 0 00-2.36 1.3v-1.11H10.3c.04.79 0 8.24 0 8.24h2.68v-4.6c0-.24.02-.48.09-.66a1.48 1.48 0 011.38-1c.97 0 1.36.74 1.36 1.83v4.43h2.53z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24">
                  <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 00-6.8 3.7A11.4 11.4 0 013 4.8a4 4 0 001.2 5.4c-.6 0-1.2-.2-1.8-.5a4 4 0 003.2 4 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8.1 8.1 0 012 18.4a11.4 11.4 0 006.2 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.2-2.2z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Sertifikalar</h5>
            <ul>
              <li>
                <Link to="/#sertifikalar">Kurumsal Sertifika</Link>
              </li>
              <li>
                <Link to="/#sertifikalar">Ön Muhasebe</Link>
              </li>
              <li>
                <Link to="/#sertifikalar">İnşaat Ustalığı</Link>
              </li>
              <li>
                <Link to="/#sertifikalar">İSG</Link>
              </li>
              <li>
                <Link to="/#sertifikalar">Dijital Pazarlama</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Kurumsal</h5>
            <ul>
              <li>
                <Link to="/#hakkimizda">Hakkımızda</Link>
              </li>
              <li>
                <a href="#">Akreditasyonlarımız</a>
              </li>
              <li>
                <Link to="/dogrulama">Sertifika Sorgula</Link>
              </li>
              <li>
                <a href="#">Kariyer</a>
              </li>
              <li>
                <Link to="/#iletisim">İletişim</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>İletişim</h5>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                </svg>
                Levent Mah. İş Kulesi No:42
                <br />
                Beşiktaş / İstanbul
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                +90 (212) 555 0 444
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                info@akreditesertifika.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Akredite Sertifika Kurumu. Tüm hakları saklıdır.</span>
          <div className="footer-bottom-links">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">KVKK Aydınlatma Metni</a>
            <a href="#">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
