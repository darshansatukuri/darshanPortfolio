import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <motion.section
      className="section"
      id="resume"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="eyebrow">Resume</p>
      </div>

      <div className="resume-card">
        <motion.a
          className="btn primary wide"
          href="/darshanSatukuri_Resume_2026.pdf"
          download
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          📄 Download Resume (PDF)
        </motion.a>
      </div>
    </motion.section>
  )
}
