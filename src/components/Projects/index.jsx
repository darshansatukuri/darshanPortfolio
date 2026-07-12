import { motion } from 'framer-motion'

export default function Projects({ projects }) {
  return (
    <motion.section
      className="section"
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            transformPerspective={1200}
            whileHover={{ y: -8, scale: 1.02, rotateX: 6, rotateY: -6 }}
          >
            <div className="project-preview">
              
              <img src={project.image} alt="project-image" className="projectImageDsn"/>
              
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="project-stack">{project.stack}</p>
              <p>{project.description}</p>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="link-row">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
