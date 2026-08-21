import { NavLink } from 'react-router-dom'
import Container from '../ui/Container'
import { site } from '../../data/site'

export default function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="header-inner">
          <NavLink to="/" className="logo" aria-label={`${site.name} home`}>
            F
          </NavLink>

          <nav className="main-nav" aria-label="Main navigation">
            {site.navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}