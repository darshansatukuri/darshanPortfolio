import { motion } from 'framer-motion'

export default function Skills({ skillGroups }) {
  return (
    <motion.section
      className="section"
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technologies I use to ship quality web apps</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            transformPerspective={1200}
            whileHover={{ rotateX: 5, rotateY: -5, y: -4 }}
          >
            <h3>{group.title}</h3>
            <div className="badge-row">
              {group.items.map((item) => (
                <span className="skill-badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
