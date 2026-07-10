import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      {/* <div className="project-thumb">
        <span className="project-initials">{initials}</span>
        <div className="project-thumb-grid" />
      </div> */}
     <div className="project-thumb">
      <img src={project.image} alt={project.title} loading="lazy" />
    </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline project-btn">
            <FiGithub size={16} /> GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary project-btn">
              <FiExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
