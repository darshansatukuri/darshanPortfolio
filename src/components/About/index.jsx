import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      className="section"
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h2>Computer Science graduate with a product-building mindset</h2>
      </div>

      <div className="content-card about-card">
        <p>
          I&apos;m a Computer Science graduate with hands-on experience building
          full-stack web applications using React.js, Node.js, Express.js,
          MongoDB, and SQL.
        </p>
        <p>
          I enjoy creating scalable user experiences, integrating REST APIs, and
          exploring AI technologies such as Gemini API. I&apos;m actively seeking
          opportunities as a MERN Full Stack Developer.
        </p>
      </div>
    </motion.section>
  )
}
