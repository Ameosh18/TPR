import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Nav.module.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle, t } = useLanguage()

  // Set <html lang> for Devanagari font switching
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const links = [
    { to: '/',           label: t.nav.home },
    { to: '/about',      label: t.nav.about },
    { to: '/services',   label: t.nav.services },
    { to: '/conditions', label: t.nav.conditions },
    { to: '/process',    label: t.nav.process },
    { to: '/blog',       label: t.nav.blog },
  ]

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="The Physio Room" height="36" />
        </NavLink>

        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={toggle} aria-label="Switch language">
            <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
            <span className={styles.langDivider}>|</span>
            <span className={lang === 'mr' ? styles.langActive : styles.langInactive}>मर</span>
          </button>
          <Button href="https://wa.link/bddr6y" variant="primary" className={styles.cta}>
            {t.nav.bookAppointment}
          </Button>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.overlay}>
          <ul>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `${styles.overlayLink} ${isActive ? styles.overlayActive : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Button href="https://wa.link/bddr6y" variant="primary" className={styles.overlayBtn} onClick={() => setMenuOpen(false)}>
                {t.nav.bookAppointment}
              </Button>
            </li>
            <li>
              <button className={styles.overlayLangToggle} onClick={toggle}>
                <span className={lang === 'en' ? styles.langActive : styles.langInactive}>English</span>
                <span className={styles.langDivider}> / </span>
                <span className={lang === 'mr' ? styles.langActive : styles.langInactive}>मराठी</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
