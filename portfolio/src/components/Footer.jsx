import { meta } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <span className="footer-logo">MSPK</span>
            <span className="footer-name">{meta.name}</span>
          </div>
          <p className="footer-tagline">
            Building reliable, scalable software & multi-tenant architectures from scratch to production.
          </p>
          <div className="footer-status-pill">
            <span className="status-indicator-live" />
            <span>All Systems Operational (99.9% Uptime)</span>
          </div>
        </div>

        <div className="footer-col nav-col">
          <h4 className="footer-heading">Navigation</h4>
          <div className="footer-links">
            <a href="#hero">Overview</a>
            <a href="#about">Impact & Metrics</a>
            <a href="#skills">Technical Stack</a>
            <a href="#projects">Production Systems</a>
            <a href="#education">Education & Ops</a>
            <a href="#terminal">Interactive Shell</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h4 className="footer-heading">Ecosystem & Platforms</h4>
          <div className="footer-links">
            <a href={meta.appsDomain} target="_blank" rel="noopener noreferrer">
              MSPK Apps Platform ↗
            </a>
            <a href={meta.authDomain} target="_blank" rel="noopener noreferrer">
              MSPK Auth Services ↗
            </a>
            <a href={meta.github} target="_blank" rel="noopener noreferrer">
              GitHub Repository ↗
            </a>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile ↗
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {meta.year} {meta.name}. Designed & built with React 19, Three.js & Modern CSS.
        </p>
        <p className="footer-location">📍 Erode, Tamil Nadu, India</p>
      </div>
    </footer>
  )
}
