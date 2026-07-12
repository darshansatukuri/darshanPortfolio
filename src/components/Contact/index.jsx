import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      className="section"
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
      </div>

      <div className="contact-grid">
        <motion.a
          className="contact-card"
          href="mailto:darshan.satukuri@gmail.com"
          whileHover={{ y: -4, rotateX: 5, rotateY: -4 }}
          transformPerspective={1200}
        >
          <span>✉️ Email</span>
          <strong>darshan.satukuri@gmail.com</strong>
        </motion.a>
        <motion.a
          className="contact-card"
          href="tel:+918309451991"
          whileHover={{ y: -4, rotateX: 5, rotateY: -4 }}
          transformPerspective={1200}
        >
          <span>📞 Phone</span>
          <strong>+91 8309451991</strong>
        </motion.a>
        <motion.a
          className="contact-card"
          href="https://www.linkedin.com/in/darshan-satukuri"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, rotateX: 5, rotateY: -4 }}
          transformPerspective={1200}
        >
          <span>💼 LinkedIn</span>
          <strong>linkedin.com/in/darshan-satukuri</strong>
        </motion.a>
        <motion.a
          className="contact-card"
          href="https://github.com/darshansatukuri"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, rotateX: 5, rotateY: -4 }}
          transformPerspective={1200}
        >
          <span>💻 GitHub</span>
          <strong>github.com/darshansatukuri</strong>
        </motion.a>
      </div>
    </motion.section>
  )
}
