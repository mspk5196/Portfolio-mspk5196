import { tickerItems } from '../data'

export default function SkillsTicker() {
  // duplicate for seamless loop
  const items = [...tickerItems, ...tickerItems]
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
