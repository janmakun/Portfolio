import Reveal from '../Layout/Reveal';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section">
      <Reveal>
        <p className="eyebrow">My Work</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="section-title">Projects I've Built</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="section-subtitle">
          A collection of web, desktop, and game development projects spanning
          multiple languages and frameworks — each one built to solve a real problem.
        </p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
