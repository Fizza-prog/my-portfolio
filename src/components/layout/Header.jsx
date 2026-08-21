import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../../data/site'
import Container from '../ui/Container'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleMenu() {
    setMenuOpen((open) => !open)
  }

  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link to="/" className="site-logo" aria-label={`${site.name} home`}>
            <span className="site-logo__mark" aria-hidden="true">
              F
            </span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
          >
            <span className="nav-toggle__bar" aria-hidden="true" />
            <span className="nav-toggle__bar" aria-hidden="true" />
            <span className="nav-toggle__bar" aria-hidden="true" />
          </button>

          <nav
            id="site-nav"
            className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
            aria-label="Primary"
          >
            <ul className="site-nav__list">
              {site.navLinks.map(({ label, to, end }) => (
                <li key={to} className="site-nav__item">
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
