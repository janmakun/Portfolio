import { motion } from 'framer-motion';
import Reveal from '../Layout/Reveal';
import Skills from '../Skills/Skills';
import './About.css';

const About = () => {
  return (
    <section className="section about">
      <Reveal>
        <p className="eyebrow">About Me</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="section-title">Know Who I'M</h1>
      </Reveal>

      <div className="about-grid">
        <Reveal delay={0.1} className="about-text">
          <p>
            Hello! I'm <strong>John Mark Manlapaz</strong>, a Bachelor of Science in
            Information Technology student from Pampanga State University.
          </p>
          <p>
            I enjoy building web applications, mobile systems, desktop software, and
            Java game projects. My interests include software engineering, backend
            development, database management, UI/UX design, and hardware
            troubleshooting.
          </p>
          <p>
            I love learning new technologies and continuously improving my
            programming skills by developing practical projects.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="about-card glass">
          <div className="about-card-row">
            <span className="about-card-label">Location</span>
            <span className="about-card-value">Apalit, Pampanga, PH</span>
          </div>
          <div className="about-card-row">
            <span className="about-card-label">Education</span>
            <span className="about-card-value">BS Information Technology</span>
          </div>
          <div className="about-card-row">
            <span className="about-card-label">University</span>
            <span className="about-card-value">Pampanga State University</span>
          </div>
          <div className="about-card-row">
            <span className="about-card-label">Focus</span>
            <span className="about-card-value">Full Stack Web Development </span>
          </div>
        </Reveal>
      </div>

      <Skills />
    </section>
  );
};

export default About;
