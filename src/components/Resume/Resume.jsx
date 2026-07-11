import { HiOutlineDownload } from 'react-icons/hi';
import { FiBriefcase, FiAward, FiGlobe, FiTool } from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import Reveal from '../Layout/Reveal';
import { education, experience, coreSkills, languages, awards } from '../../data/resume';
import './Resume.css';

const Resume = () => {
  return (
    <section className="section">
      <Reveal>
        <p className="eyebrow">Resume</p>
      </Reveal>
      <div className="resume-head">
        <Reveal delay={0.05}>
          <h1 className="section-title" style={{ marginBottom: 8 }}>My Resume</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="btn btn-primary">
            <HiOutlineDownload size={18} /> Download Resume
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="resume-summary glass">
        <p>
          Passionate Information Technology student with experience in software
          development, web development, mobile applications, and game development.
          Skilled in designing practical systems that solve real-world problems using
          modern programming languages and frameworks. Continuously learning new
          technologies and committed to writing clean, maintainable, and efficient code.
        </p>
      </Reveal>

      <div className="resume-grid">
        <div className="resume-col">
          <Reveal className="resume-card">
            <div className="resume-card-head">
              <HiOutlineAcademicCap size={20} />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((e) => (
                <div className="timeline-item" key={e.school}>
                  <span className="timeline-dot" />
                  <div>
                    <h4>{e.school}</h4>
                    <p>{e.degree}</p>
                    <span className="timeline-period">{e.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="resume-card">
            <div className="resume-card-head">
              <FiBriefcase size={19} />
              <h3>Experience</h3>
            </div>
            <div className="timeline">
              {experience.map((e) => (
                <div className="timeline-item" key={e.role + e.company}>
                  <span className="timeline-dot" />
                  <div>
                    <h4>{e.role}</h4>
                    <p>{e.company}</p>
                    <span className="timeline-period">{e.period}</span>
                    <ul className="timeline-points">
                      {e.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="resume-col">
          <Reveal delay={0.05} className="resume-card">
            <div className="resume-card-head">
              <FiTool size={18} />
              <h3>Skills</h3>
            </div>
            <div className="pill-group">
              {coreSkills.map((s) => (
                <span className="pill" key={s}>{s}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="resume-card">
            <div className="resume-card-head">
              <FiGlobe size={18} />
              <h3>Languages</h3>
            </div>
            <div className="pill-group">
              {languages.map((l) => (
                <span className="pill" key={l}>{l}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="resume-card">
            <div className="resume-card-head">
              <FiAward size={18} />
              <h3>Awards</h3>
            </div>
            {awards.map((a) => (
              <div className="award-item" key={a.title}>
                <h4>{a.title}</h4>
                <p>{a.org}</p>
                <span className="timeline-period">{a.period}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Resume;
