import { stats } from '../data'

export default function StatsBar() {
  return (
    <section className="stats-bar" id="about">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="stats-divider" />
    </section>
  )
}
