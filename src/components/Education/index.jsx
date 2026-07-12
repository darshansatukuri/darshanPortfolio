import { motion } from 'framer-motion'

export default function Education() {
  return (
    <motion.section
      className="section split-layout"
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div>
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>B.Tech – Computer Science Engineering</h2>
        </div>
        <div className="content-card">
          <p>Visvesvaraya College of Engineering Technology</p>
          <p className="info-pill">CGPA: 6.8</p>
        </div>
      </div>

      <div>
        <div className="section-heading">
          <p className="eyebrow">Certifications</p>
          <h2>Learning milestones</h2>
        </div>
        <div className="content-card">
          <ul className="plain-list">
            <li>Python Using AI – AI For Techies  <a href=" http://app.aifortechies.in/certificate/SpNKH5jTJT1D9Nl" target="_blank" className="linkdsn">  Link  </a></li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
