import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SECTION_LINKS = [
  { id: 'anasayfa', label: 'Anasayfa' },
  { id: 'sertifikalar', label: 'Sertifikalar' },
  { id: 'hakkimizda', label: 'Hakkımızda' },
  { id: 'surec', label: 'Süreç' },
  { id: 'referanslar', label: 'Referanslar' },
]

const SCROLL_SECTIONS = [...SECTION_LINKS.map((s) => s.id), 'iletisim']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('anasayfa')
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (!isHome) return
      let current = ''
      SCROLL_SECTIONS.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) current = id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={close}>
          <div className="logo-mark">
            <img src="/logo.jpg" alt="Akredite Sertifika Kurumu" />
          </div>
          <div>
            Akredite Sertifika
            <small>Yetkinlik Belgelendirme</small>
          </div>
        </Link>

        <ul className={`nav-menu ${open ? 'open' : ''}`}>
          {SECTION_LINKS.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={`/#${id}`}
                onClick={close}
                className={isHome && active === id ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/dogrulama"
              onClick={close}
              className={`nav-verify ${pathname === '/dogrulama' ? 'active' : ''}`}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm-1.2 15.4l5.7-5.7-1.4-1.4-4.3 4.3-2.1-2.1-1.4 1.4 3.5 3.5z" />
              </svg>
              Belge Doğrulama
            </Link>
          </li>
          <li>
            <Link
              to="/#iletisim"
              onClick={close}
              className={isHome && active === 'iletisim' ? 'active' : ''}
            >
              İletişim
            </Link>
          </li>
        </ul>

        <Link to="/#iletisim" className="btn btn-primary" onClick={close}>
          Hemen Başvur
        </Link>

        <button
          className={`mobile-toggle ${open ? 'active' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
