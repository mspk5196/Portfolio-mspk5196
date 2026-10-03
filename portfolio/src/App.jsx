import { useState, useEffect } from 'react'
import './App.css'
import Navbar              from './components/Navbar'
import Hero                from './components/Hero'
import StatsBar            from './components/StatsBar'
import SkillsTicker        from './components/SkillsTicker'
import Skills              from './components/Skills'
import Projects            from './components/Projects'
import Education           from './components/Education'
import InteractiveTerminal from './components/InteractiveTerminal'
import Contact             from './components/Contact'
import Footer              from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div id="portfolio">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <StatsBar />
      <SkillsTicker />
      <Skills />
      <Projects />
      <Education />
      <InteractiveTerminal />
      <Contact />
      <Footer />
    </div>
  )
}
