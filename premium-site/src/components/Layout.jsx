import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { business } from '../data/siteContent'

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileOpen])

  return (
    <>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a className="mobile-sticky-cta" href={`tel:${business.phoneRaw}`}>
        Call / Text {business.phoneDisplay}
      </a>
    </>
  )
}

export default Layout
