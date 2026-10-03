import { useEffect, useRef, useState } from 'react'
import { projects } from '../data'
import { ExternalLinkIcon } from './icons'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [expanded, setExpanded] = useState(project.featured)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2)
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2)
    setTilt({ x: dy * -5, y: dx * 5 })
  }

  const onLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <article
      ref={ref}
      className={`project-card ${project.featured ? 'featured' : ''} ${vis ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 80}ms`,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="proj-card-top">
        <div className="proj-badge-row">
          <span className="proj-number">0{project.id}</span>
          <span className="proj-status-badge">{project.status}</span>
        </div>
        {project.period && <span className="proj-period">{project.period}</span>}
      </div>

      <div className="proj-head">
        <div className="proj-title-row">
          <h3 className="proj-title">{project.title}</h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
              aria-label={`Open ${project.title}`}
            >
              <ExternalLinkIcon size={15} />
            </a>
          )}
        </div>
        <p className="proj-subtitle">{project.subtitle}</p>
        
        {project.metrics && project.metrics.length > 0 && (
          <div className="proj-metrics-wrap">
            {project.metrics.map((m, i) => (
              <span key={i} className="proj-metric-chip">⚡ {m}</span>
            ))}
          </div>
        )}

        <div className="proj-tags">
          {project.tags.map((t) => (
            <span key={t} className="proj-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Bullets */}
      <ul className={`proj-bullets ${expanded ? 'expanded' : ''}`}>
        {project.bullets.map((b, i) => (
          <li key={i}>
            <span className="proj-arrow">▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {project.bullets.length > 2 && (
        <button
          className="proj-expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show Less ▴' : `Show Architecture Details (${project.bullets.length}) ▾`}
        </button>
      )}

      <div className="proj-glow-line" />
    </article>
  )
}

export default function Projects() {
  const headRef = useRef(null)
  const [headVis, setHeadVis] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const el = headRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeadVis(true)
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'featured') return p.featured
    if (filter === 'enterprise') return p.key === 'school-erp' || p.key === 'task-app' || p.key === 'academic-mgmt'
    if (filter === 'cloud') return p.key === 'mspk-cloud' || p.key === 'auth-service'
    if (filter === 'mobile-ai') return p.key === 'cctv-ai' || p.key === 'dialcare'
    return true
  })

  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <div className={`section-head ${headVis ? 'visible' : ''}`} ref={headRef}>
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">~/projects</span>
          </div>
          <h2 className="section-title">Production Systems & Projects</h2>
          <p className="section-sub">
            Independently built and deployed platforms handling production traffic, automated payments, and multi-tenant workloads.
          </p>

          <div className="proj-filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Systems ({projects.length})
            </button>
            <button
              className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
              onClick={() => setFilter('featured')}
            >
              Primary Production (3)
            </button>
            <button
              className={`filter-btn ${filter === 'enterprise' ? 'active' : ''}`}
              onClick={() => setFilter('enterprise')}
            >
              Multi-Tenant & ERP
            </button>
            <button
              className={`filter-btn ${filter === 'cloud' ? 'active' : ''}`}
              onClick={() => setFilter('cloud')}
            >
              Cloud & Auth Platform
            </button>
            <button
              className={`filter-btn ${filter === 'mobile-ai' ? 'active' : ''}`}
              onClick={() => setFilter('mobile-ai')}
            >
              AI & Mobile
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
