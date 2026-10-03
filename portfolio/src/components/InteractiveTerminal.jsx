import { useState, useRef, useEffect } from 'react'
import { meta, stats, projects, skillsCategories } from '../data'

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'MSPK Systems Shell [Version 2.4.0]' },
    { type: 'system', text: 'Type "help" or click one of the quick commands below.' },
  ])
  const [inputVal, setInputVal] = useState('')
  const terminalEndRef = useRef(null)

  const handleCommand = (cmd) => {
    const clean = cmd.trim().toLowerCase()
    if (!clean) return

    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }]

    switch (clean) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available commands:\n  • whoami     - Display developer background summary\n  • stats      - Production system metrics\n  • projects   - List live production systems\n  • skills     - Technical stack overview\n  • contact    - Contact info & links\n  • clear      - Clear terminal output',
        })
        break
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `${meta.name} - ${meta.role}\n${meta.location}\n\n${meta.summary}`,
        })
        break
      case 'stats':
        newHistory.push({
          type: 'output',
          text: stats.map((s) => `[METRIC] ${s.value.padEnd(12)} -> ${s.label}`).join('\n'),
        })
        break
      case 'projects':
        newHistory.push({
          type: 'output',
          text: projects.map((p) => `[#${p.id}] ${p.title} (${p.status})\n    Stack: ${p.tags.slice(0, 4).join(', ')}`).join('\n\n'),
        })
        break
      case 'skills':
        newHistory.push({
          type: 'output',
          text: skillsCategories.map((c) => `[${c.category}]:\n  ${c.items.join(' · ')}`).join('\n\n'),
        })
        break
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    ${meta.email}\nPhone:    ${meta.phone}\nLinkedIn: ${meta.linkedin}\nGitHub:   ${meta.github}\nWeb:      ${meta.website}`,
        })
        break
      case 'clear':
        setHistory([])
        return
      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of available commands.`,
        })
    }

    setHistory(newHistory)
    setInputVal('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCommand(inputVal)
  }

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  return (
    <section className="section terminal-section" id="terminal">
      <div className="section-container">
        <div className="section-head">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">~/interactive-cli</span>
          </div>
          <h2 className="section-title">Interactive Terminal</h2>
          <p className="section-sub">Query production metrics, system details, and stack info via command line.</p>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="terminal-title">pranesh@mspk-prod:~ (zsh)</div>
            <button className="terminal-clear-btn" onClick={() => setHistory([])}>clear</button>
          </div>

          <div className="terminal-body">
            {history.map((item, i) => (
              <div key={i} className={`terminal-line ${item.type}`}>
                {item.type === 'user' ? (
                  <span className="line-prompt">{item.text}</span>
                ) : (
                  <pre className="line-content">{item.text}</pre>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          <form className="terminal-input-row" onSubmit={handleSubmit}>
            <span className="prompt-label">mspk:~$</span>
            <input
              type="text"
              className="terminal-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'stats', 'projects'..."
              aria-label="Terminal input"
            />
            <button type="submit" className="terminal-send-btn">Enter</button>
          </form>

          <div className="terminal-presets">
            <span className="presets-label">Quick Commands:</span>
            {['whoami', 'stats', 'projects', 'skills', 'contact', 'clear'].map((cmd) => (
              <button key={cmd} className="preset-chip" onClick={() => handleCommand(cmd)}>
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
