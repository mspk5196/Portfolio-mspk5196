import { useState } from 'react'
import { meta } from '../data'
import { GithubIcon, LinkedinIcon, WebsiteIcon, MailIcon } from './icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(meta.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="contact-section" id="contact">
      {/* Background glowing blobs */}
      <div className="contact-blob blob-l" aria-hidden="true" />
      <div className="contact-blob blob-r" aria-hidden="true" />

      <div className="contact-inner">
        <span className="contact-eyebrow">~/contact & collaborations</span>
        <h2 className="contact-title">Let&apos;s Build Something Resilient</h2>
        <p className="contact-desc">
          I&apos;m actively seeking Software Engineering roles, production system design opportunities, and high-impact fullstack/DevOps challenges.
        </p>

        <div className="contact-action-box">
          <button className="contact-cta-copy" onClick={copyEmail}>
            <span className="copy-label">{copied ? '✓ Copied to clipboard!' : meta.email}</span>
            <span className="copy-hint">{copied ? 'Ready to paste' : 'Click to copy'}</span>
          </button>
          <a href={`mailto:${meta.email}`} className="contact-cta-send">
            <span>Send Email</span>
            <span className="contact-cta-arrow">→</span>
          </a>
        </div>

        <div className="contact-meta-cards">
          <div className="contact-meta-card">
            <span className="meta-card-icon">📞</span>
            <div>
              <span className="meta-card-label">Direct Phone</span>
              <a href={`tel:${meta.phone.replace(/\s+/g, '')}`} className="meta-card-value">
                {meta.phone}
              </a>
            </div>
          </div>
          <div className="contact-meta-card">
            <span className="meta-card-icon">📍</span>
            <div>
              <span className="meta-card-label">Location</span>
              <span className="meta-card-value">{meta.location}</span>
            </div>
          </div>
          <div className="contact-meta-card">
            <span className="meta-card-icon">🌐</span>
            <div>
              <span className="meta-card-label">Production Portal</span>
              <a href={meta.appsDomain} target="_blank" rel="noopener noreferrer" className="meta-card-value">
                mspkapps.in
              </a>
            </div>
          </div>
        </div>

        <div className="contact-socials">
          <a href={meta.github} target="_blank" rel="noopener noreferrer" className="c-social" aria-label="GitHub">
            <GithubIcon size={20} />
            <span>GitHub</span>
          </a>
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="c-social" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
            <span>LinkedIn</span>
          </a>
          <a href={meta.website} target="_blank" rel="noopener noreferrer" className="c-social" aria-label="Website">
            <WebsiteIcon size={20} />
            <span>mspk.in</span>
          </a>
          <a href={`mailto:${meta.email}`} className="c-social" aria-label="Email">
            <MailIcon size={20} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
