import { useEffect, useRef, useState } from 'react'
import { skillsCategories } from '../data'

function SkillCard({ category, icon, items, index }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      ref={ref}
      className={`skill-card ${active ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 50}ms`,
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-card-head">
        <span className="skill-icon">{icon}</span>
        <h3 className="skill-cat">{category}</h3>
      </div>
      <div className="skill-tags">
        {items.map((item) => (
          <span key={item} className="skill-tag">{item}</span>
        ))}
      </div>
      <div className="skill-card-glow" />
    </div>
  )
}

export default function Skills() {
  const headRef = useRef(null)
  const [headVis, setHeadVis] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const el = headRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeadVis(true)
      },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const filteredCategories = skillsCategories.filter((cat) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'core') return cat.category.includes('Languages') || cat.category.includes('Frontend') || cat.category.includes('Backend')
    if (activeFilter === 'systems') return cat.category.includes('Architecture') || cat.category.includes('DevOps') || cat.category.includes('Databases')
    return true
  })

  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <div className={`section-head ${headVis ? 'visible' : ''}`} ref={headRef}>
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">~/skills</span>
          </div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-sub">
            Core technologies and architectures used to build multi-tenant, high-throughput production applications.
          </p>

          <div className="skills-filter-tabs">
            <button
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Domains ({skillsCategories.length})
            </button>
            <button
              className={`filter-tab ${activeFilter === 'core' ? 'active' : ''}`}
              onClick={() => setActiveFilter('core')}
            >
              Fullstack & Languages
            </button>
            <button
              className={`filter-tab ${activeFilter === 'systems' ? 'active' : ''}`}
              onClick={() => setActiveFilter('systems')}
            >
              Systems, Security & DevOps
            </button>
          </div>
        </div>

        <div className="skills-grid">
          {filteredCategories.map((s, i) => (
            <SkillCard key={s.category} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
