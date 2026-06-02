import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useScrollHeader from '../../hooks/useScrollHeader'
import Button from '../Button/Button'
import styles from './Nav.module.css'

const links = [
  { to: '/about', label: 'About' },
  { to: '/conditions', label: 'Conditions' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav({ forceSolid = false }) {
  const scrolled = useScrollHeader(60)
  const [menuOpen, setMenuOpen] = useState(false)
  const solid = forceSolid || scrolled

  return (
    <nav className={`${styles.nav} ${solid ? styles.solid : styles.transparent}`}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="The Physio Room" height="36" />
        </NavLink>

        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Button href="https://wa.link/bddr6y" variant={solid ? 'primary' : 'cream'} className={styles.cta}>
          Book Now
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
                <NavLink to={to} className={styles.overlayLink} onClick={() => setMenuOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Button href="https://wa.link/bddr6y" variant="cream" className={styles.overlayBtn}>
                Book Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
