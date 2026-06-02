import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Nav.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/conditions', label: 'Conditions' },
  { to: '/process', label: 'Process' },
  { to: '/blog', label: 'Blog' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

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

        <Button href="https://wa.link/bddr6y" variant="primary" className={styles.cta}>
          Book Appointment
        </Button>

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
                Contact Us
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
