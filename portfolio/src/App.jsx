import { useState, useEffect } from 'react'
import './App.css'
import profileImg from './assets/MSPK_APPS_LOGO.png'

const skills = {
  "Languages": ["JavaScript", "Java", "C/C++", "Python"],
  "Frontend / Mobile": ["React", "React Native", "Zustand"],
  "Backend": ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth"],
  "Databases & Caching": ["PostgreSQL", "MySQL", "Firebase", "Redis"],
  "DevOps & Cloud": ["Docker", "Linux", "Nginx", "Cloudflare Tunnel", "Jenkins", "Grafana"],
  "Integrations": ["Razorpay", "SMTP Email"],
}

const projects = [
  {
    title: "Authentication-as-a-Service",
    link: "https://authservices.mspkapps.in/",
    tags: ["Node.js", "PostgreSQL", "Redis", "Docker", "Jenkins", "Grafana"],
    bullets: [
      "Centralized auth platform similar to Firebase Auth for third-party apps",
      "JWT-based auth, Google OAuth SSO, developer dashboard",
      "Razorpay subscriptions & SMTP email workflows",
      "CI/CD pipeline with Jenkins, monitored via Grafana",
    ],
  },
  {
    title: "Academic Management System",
    link: null,
    tags: ["React", "Node.js", "Express", "MySQL"],
    bullets: [
      "Role-based platform for students, mentors, and coordinators",
      "REST APIs for attendance, performance & workflow tracking",
      "React dashboards for academic & admin operations",
      "Deployed on cloud infrastructure",
    ],
  },
  {
    title: "Customer Care Mobile App",
    link: "https://play.google.com/store/apps/dev?id=5913381804494964279",
    tags: ["React Native", "Node.js", "Firebase"],
    bullets: [
      "Cross-platform mobile app with authentication flows",
      "Service request workflows with backend integration",
      "Published on Google Play Store",
    ],
  },
]

// SVG Icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const WebsiteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div id="portfolio">

      {/* ── NAVBAR ── */}
      <nav id="navbar">
        <div className="nav-inner">
          <a href="#hero" className="nav-brand" onClick={closeMenu}>
            <span className="nav-brand-initials">MS</span>
            <span className="nav-brand-name">Pranesh Karthi</span>
          </a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="mailto:mspk@mspk.in" className="nav-cta" onClick={closeMenu}>Let&apos;s Talk</a>
          </div>
          <button
            className="nav-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-bg-glow glow-1" aria-hidden="true" />
        <div className="hero-bg-glow glow-2" aria-hidden="true" />
        <div className="hero-content">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-left">
                <span className="terminal-prompt">$ whoami</span>
                <h1 className="hero-name">Pranesh Karthi M S</h1>
                <p className="hero-title">Fullstack + DevOps Engineer</p>
                <p className="hero-title">Aspiring to build real products that is ready for the world..,</p>
                <p className="hero-desc">
                  Building scalable, high-performance software — from backend
                  services to mobile apps and cloud deployments.
                </p>
                <div className="hero-socials">
                  <a href="https://github.com/mspk5196" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <GithubIcon /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/mspk5196" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <LinkedinIcon /> LinkedIn
                  </a>
                  <a href="https://mspkapps.in/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <WebsiteIcon /> Website
                  </a>
                  <a href="mailto:mspk@mspk.in" className="social-btn">
                    <MailIcon /> Email
                  </a>
                </div>
                <span className="scroll-hint">↓ scroll to explore</span>
              </div>
              <div className="hero-right">
                <div className="avatar-wrapper">
                  <div className="avatar-ring" aria-hidden="true" />
                  <div className="avatar-ring-inner" aria-hidden="true" />
                  <div className="avatar-frame">
                    <img
                      src={profileImg}
                      alt="Pranesh Karthi M S"
                      className="avatar"
                    />
                  </div>
                  <span className="avatar-status" aria-label="Available for work" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="container">
          <span className="section-label">~/skills</span>
          <h2 className="section-title">Tech Stack</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-name">{category.toUpperCase()}</h3>
                <div className="skill-tags">
                  {items.map(item => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="container">
          <span className="section-label">~/projects</span>
          <h2 className="section-title">Featured Work</h2>
          <div className="projects-list">
            {projects.map((project, i) => (
              <div key={project.title} className="project-card">
                <div className="project-number">0{i + 1}</div>
                <div className="project-header">
                  <div className="project-title-row">
                    <h3 className="project-title">{project.title}</h3>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Open project">
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-body">
                  <ul className="project-bullets">
                    {project.bullets.map((bullet, j) => (
                      <li key={j}><span className="bullet-arrow">▸</span>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="footer">
        <div className="footer-inner">
          <span className="footer-cmd">$ echo &quot;Let&apos;s connect&quot;</span>
          <div className="footer-socials">
            <a href="https://github.com/mspk5196" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href="https://linkedin.com/in/mspk5196" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="https://mspkapps.in/" target="_blank" rel="noopener noreferrer" aria-label="Website"><WebsiteIcon /></a>
            <a href="mailto:mspk@mspk.in" aria-label="Email"><MailIcon /></a>
          </div>
          <p className="footer-location">Erode, India · mspk@mspk.in</p>
          <p className="footer-copy">© 2026 Pranesh Karthi M S</p>
        </div>
      </footer>

    </div>
  )
}

export default App
