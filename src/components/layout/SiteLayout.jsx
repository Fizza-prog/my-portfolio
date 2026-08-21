import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
