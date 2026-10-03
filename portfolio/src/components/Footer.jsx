import profileImg from '../assets/MSPK_APPS_LOGO.png'
import { meta } from '../data'
import { GithubIcon, LinkedinIcon, WebsiteIcon, MailIcon } from './icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand & Overview Column */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img src={profileImg} alt={meta.name} className="footer-logo-img" />
            </div>
            <div className="footer-brand-info">
              <span className="footer-name">{meta.name}</span>
              <span className="footer-role">{meta.role}</span>
            </div>
          </div>

          <p className="footer-tagline">
            Building scalable software, multi-tenant architectures, and self-hosted cloud platforms from scratch to production.
          </p>

          <div className="footer-status-pill">
            <span className="status-indicator-live" />
            <span>All Systems Operational (99.9% Uptime)</span>
          </div>

          <div className="footer-social-row">
            <a href={meta.github} target="_blank" rel="noopener noreferrer" className="f-social-btn" aria-label="GitHub" title="GitHub">
              <GithubIcon size={17} />
            </a>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="f-social-btn" aria-label="LinkedIn" title="LinkedIn">
              <LinkedinIcon size={17} />
            </a>
            <a href={meta.website} target="_blank" rel="noopener noreferrer" className="f-social-btn" aria-label="Website" title="Website">
              <WebsiteIcon size={17} />
            </a>
            <a href={`mailto:${meta.email}`} className="f-social-btn" aria-label="Email" title="Email">
              <MailIcon size={17} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col nav-col">
          <h4 className="footer-heading">Navigation</h4>
          <div className="footer-links">
            <a href="#hero" className="f-link">
              <span className="f-bullet">›</span>
              <span>Overview</span>
            </a>
            <a href="#about" className="f-link">
              <span className="f-bullet">›</span>
              <span>Impact & Metrics</span>
            </a>
            <a href="#skills" className="f-link">
              <span className="f-bullet">›</span>
              <span>Technical Stack</span>
            </a>
            <a href="#projects" className="f-link">
              <span className="f-bullet">›</span>
              <span>Production Systems</span>
            </a>
            <a href="#education" className="f-link">
              <span className="f-bullet">›</span>
              <span>Education & Ops</span>
            </a>
            <a href="#terminal" className="f-link">
              <span className="f-bullet">›</span>
              <span>Interactive Terminal</span>
            </a>
            <a href="#contact" className="f-link">
              <span className="f-bullet">›</span>
              <span>Contact</span>
            </a>
          </div>
        </div>

        {/* Ecosystem & Platforms */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Ecosystem & Platforms</h4>
          <div className="footer-links">
            <a href={meta.appsDomain} target="_blank" rel="noopener noreferrer" className="f-link ext">
              <span>MSPK Apps Platform</span>
              <span className="f-ext-arrow">↗</span>
            </a>
            <a href={meta.authDomain} target="_blank" rel="noopener noreferrer" className="f-link ext">
              <span>MSPK Auth Services</span>
              <span className="f-ext-arrow">↗</span>
            </a>
            <a href={meta.github} target="_blank" rel="noopener noreferrer" className="f-link ext">
              <span>GitHub Repository</span>
              <span className="f-ext-arrow">↗</span>
            </a>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="f-link ext">
              <span>LinkedIn Profile</span>
              <span className="f-ext-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">
            © {meta.year} {meta.name}. Built with React 19, Three.js & Modern CSS.
          </p>
          <p className="footer-location">📍 {meta.location}</p>
        </div>
      </div>
    </footer>
  )
}
