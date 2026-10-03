import { useEffect, useRef, useState } from 'react'
import { education, languages } from '../data'

export default function Education() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true)
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section education-section" id="education" ref={ref}>
      <div className="section-container">
        <div className={`section-head ${vis ? 'visible' : ''}`}>
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">~/education & background</span>
          </div>
          <h2 className="section-title">Academic & Background</h2>
          <p className="section-sub">
            Formal foundation in AI & Data Science combined with self-directed production engineering.
          </p>
        </div>

        <div className="edu-grid">
          {/* Degree Card */}
          <div className={`edu-card primary-edu ${vis ? 'visible' : ''}`}>
            <div className="edu-card-top">
              <span className="edu-icon">🎓</span>
              <span className="edu-badge">{education.graduationYear}</span>
            </div>
            <h3 className="edu-degree">{education.degree}</h3>
            <p className="edu-institution">{education.institution}</p>
            <p className="edu-location">📍 {education.location}</p>

            <div className="edu-score-box">
              <span className="score-label">Cumulative GPA</span>
              <span className="score-value">{education.cgpa}</span>
            </div>

            <div className="edu-highlights">
              {education.highlights.map((h, i) => (
                <div key={i} className="highlight-item">
                  <span className="highlight-arrow">▹</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Production Mindset */}
          <div className={`edu-card side-edu ${vis ? 'visible' : ''}`}>
            <div className="edu-card-top">
              <span className="edu-icon">🌐</span>
              <span className="edu-badge">Communication & Ops</span>
            </div>
            <h3 className="edu-degree">Languages & Systems Mindset</h3>
            
            <div className="lang-list">
              {languages.map((l) => (
                <div key={l.name} className="lang-item">
                  <div className="lang-info">
                    <span className="lang-name">{l.name}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                  <div className="lang-bar-track">
                    <div className="lang-bar-fill" style={{ width: `${l.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="edu-pillars">
              <div className="pillar-item">
                <span className="pillar-icon">🔒</span>
                <div>
                  <strong>Security First</strong>
                  <p>RBAC, ACL, AES-256-CTR, JWT, and OAuth 2.0 baked in by default.</p>
                </div>
              </div>
              <div className="pillar-item">
                <span className="pillar-icon">⚡</span>
                <div>
                  <strong>High Throughput</strong>
                  <p>Handling 128K+ daily API transactions with automated CI/CD releases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
