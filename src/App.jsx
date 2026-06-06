import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Conditions from './pages/Conditions/Conditions'
import Services from './pages/Services/Services'
import Process from './pages/Process/Process'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import styles from './App.module.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={styles.pageWrap}>
      <div className={styles.appCard}>
        <ScrollToTop />
        <Nav forceSolid={!isHome} />
        <main style={isHome ? undefined : { paddingTop: '72px' }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </LanguageProvider>
  )
}
