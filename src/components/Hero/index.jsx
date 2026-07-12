import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      className="hero section"
      id="home"
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="hero-copy">
        <p className="eyebrow">Hi, I&apos;m</p>
        <h1>Darshan Satukuri</h1>
        <div className="typing-line">Mern Full Stack Developer</div>
        <p className="hero-text">
          I design and build responsive web applications using React, Node.js,
          Express.js, MongoDB, and REST APIs. I&apos;m especially interested in
          AI-powered products, clean architecture, and real-world problem solving.
        </p>

        <div className="cta-row">
          <a className="btn primary" href="/darshanSatukuri_Resume_2026.pdf" download>
            📄 Download Resume
          </a>
          <a className="btn secondary" href="#contact">
            📨 Contact Me
          </a>
        </div>
      </div>

      <motion.aside
        className="hero-card"
        initial={{ opacity: 0, x: 28, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
        transformPerspective={1200}
        whileHover={{ rotateX: 6, rotateY: -6, y: -4 }}
      >
        
        <div className="mini-panel">
          <span>Phone</span>
          <strong>+91 8309451991</strong>
        </div>
        <div className="mini-panel">
          <span>Email</span>
          <a href="https://darshan.satukuri@gmail.com" target="_blank"><strong>darshan.satukuri@gmail.com</strong></a>
        </div>
        <div className="mini-panel highlight-panel">
          <span>Target Role</span>
          <strong>MERN Full Stack Developer</strong>
        </div>
        <div className="mini-grid">
          <div className="mini-metric">
            <strong>4+</strong>
            <span>Project snapshots</span>
          </div>
          <div className="mini-metric">
            <strong>React</strong>
            <span>Frontend depth</span>
          </div>
          <div className="mini-metric">
            <strong>Node</strong>
            <span>API & backend focus</span>
          </div>
        </div>
      </motion.aside>
    </motion.section>
  )
}
