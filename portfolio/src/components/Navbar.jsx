import { useState, useEffect } from 'react'
import { meta } from '../data'
import { GithubIcon, LinkedinIcon } from './icons'

const SunIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" onClick={close}>
          <span className="navbar-logo">MSPK</span>
          <span className="navbar-name">{meta.name.split(' ').slice(0, 2).join(' ')}</span>
        </a>

        {/* Desktop links */}
        <div className="navbar-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#terminal" className="nav-link">Terminal</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Right actions */}
        <div className="navbar-actions">
          <div className="nav-socials">
            <a href={meta.github} target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Navigation Menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <a href="#about" className="mobile-link" onClick={close}>About</a>
        <a href="#skills" className="mobile-link" onClick={close}>Skills</a>
        <a href="#projects" className="mobile-link" onClick={close}>Projects</a>
        <a href="#education" className="mobile-link" onClick={close}>Education</a>
        <a href="#terminal" className="mobile-link" onClick={close}>Interactive Terminal</a>
        <a href="#contact" className="mobile-link" onClick={close}>Contact</a>
        <a href={`mailto:${meta.email}`} className="mobile-cta" onClick={close}>Get in Touch →</a>
      </div>
    </nav>
  )
}
