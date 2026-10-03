import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import profileImg from '../assets/MSPK_APPS_LOGO.png'
import { meta } from '../data'
import { GithubIcon, LinkedinIcon, WebsiteIcon, MailIcon } from './icons'

export default function Hero() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    /* ── Three.js Scene ── */
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setClearColor(0x000000, 0)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 200)
    camera.position.z = 18

    /* ── Materials ── */
    const matPurple = new THREE.MeshBasicMaterial({ color: 0xc084fc, wireframe: true })
    const matCyan   = new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true })
    const matViolet = new THREE.MeshBasicMaterial({ color: 0x7c3aed, wireframe: true })

    /* ── Floating Shapes ── */
    const shapes = []
    const config = [
      { geo: new THREE.IcosahedronGeometry(1.4, 1),   mat: matPurple, pos: [-8,  3, -5] },
      { geo: new THREE.OctahedronGeometry(1.1, 0),    mat: matCyan,   pos: [ 9,  4, -8] },
      { geo: new THREE.TorusGeometry(1.2, 0.35, 8,16),mat: matViolet, pos: [-6, -4, -6] },
      { geo: new THREE.IcosahedronGeometry(0.8, 1),   mat: matCyan,   pos: [ 7, -3, -4] },
      { geo: new THREE.TetrahedronGeometry(0.9, 0),   mat: matPurple, pos: [-3,  6, -9] },
      { geo: new THREE.OctahedronGeometry(0.6, 0),    mat: matCyan,   pos: [ 4,  6, -7] },
      { geo: new THREE.TorusGeometry(0.7, 0.25, 6,12),mat: matPurple, pos: [-9, -1, -10] },
      { geo: new THREE.IcosahedronGeometry(0.5, 0),   mat: matViolet, pos: [ 2, -6, -6] },
      { geo: new THREE.TetrahedronGeometry(0.6, 0),   mat: matCyan,   pos: [-5,  1, -12] },
      { geo: new THREE.OctahedronGeometry(0.45, 0),   mat: matPurple, pos: [ 11, -5, -12] },
    ]

    config.forEach(({ geo, mat, pos }) => {
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(...pos)
      mesh.userData.speed = { x: (Math.random() - 0.5) * 0.008, y: (Math.random() - 0.5) * 0.008, z: (Math.random() - 0.5) * 0.005 }
      mesh.userData.floatSpeed = 0.3 + Math.random() * 0.5
      mesh.userData.floatPhase = Math.random() * Math.PI * 2
      scene.add(mesh)
      shapes.push(mesh)
    })

    /* ── Particles ── */
    const particleCount = 180
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16 - 6
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({ color: 0xc084fc, size: 0.06, transparent: true, opacity: 0.6 })
    const particles   = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    /* ── Mouse tracking ── */
    const handleMouse = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouse)

    /* ── Resize ── */
    const handleResize = () => {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    /* ── Animation Loop ── */
    let animId
    const clock = new THREE.Clock()
    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      shapes.forEach((mesh, i) => {
        mesh.rotation.x += mesh.userData.speed.x
        mesh.rotation.y += mesh.userData.speed.y
        mesh.rotation.z += mesh.userData.speed.z
        mesh.position.y += Math.sin(t * mesh.userData.floatSpeed + mesh.userData.floatPhase) * 0.003
      })

      particles.rotation.y = t * 0.02

      // Smooth camera follow mouse
      camera.position.x += (mouseRef.current.x * 2  - camera.position.x) * 0.04
      camera.position.y += (-mouseRef.current.y * 1.5 - camera.position.y) * 0.04
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <section className="hero" id="hero">
      {/* Three.js canvas */}
      <canvas className="hero-canvas" ref={canvasRef} />

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      <div className="hero-body">
        {/* Left — text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for work
          </div>
          <h1 className="hero-name">
            <span className="hero-name-line">Pranesh</span>
            <span className="hero-name-line accent-gradient">Karthi M S</span>
          </h1>
          <p className="hero-role">{meta.tagline}</p>
          <p className="hero-role sub">{meta.tagline2}</p>
          <p className="hero-desc">{meta.desc}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href={`mailto:${meta.email}`} className="btn-ghost">Get In Touch</a>
          </div>

          <div className="hero-socials">
            <a href={meta.github}   target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="GitHub">
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a href={meta.website}  target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="Website">
              <WebsiteIcon size={18} />
              <span>Website</span>
            </a>
            <a href={`mailto:${meta.email}`} className="hero-social" aria-label="Email">
              <MailIcon size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right — avatar */}
        <div className="hero-avatar-wrap">
          {/* Outer orbit ring */}
          <div className="orbit-ring orbit-1" />
          <div className="orbit-ring orbit-2" />
          {/* Avatar */}
          <div className="hero-avatar-frame">
            <img src={profileImg} alt={meta.name} className="hero-avatar-img" />
          </div>
          {/* Status dot */}
          <span className="hero-status" aria-label="Available for work" />
          {/* Floating skill badges */}
          <div className="hero-float-badge badge-1">React</div>
          <div className="hero-float-badge badge-2">Node.js</div>
          <div className="hero-float-badge badge-3">Docker</div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>scroll</span>
      </div>
    </section>
  )
}
