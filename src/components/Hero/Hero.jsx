import { motion } from 'framer-motion';
import { HiOutlineDownload, HiOutlineArrowRight } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useTypewriter from './useTypewriter';
import './Hero.css';

const roles = [
  'C++',
  'Java',
  'Game Developer',
  'ASP.NET MVC Developer',
  'JavaScript Developer',
  'Mobile Developer',
];

const codeLines = [
  { indent: 0, text: 'const engineer = {' },
  { indent: 1, text: "name: 'John Mark Manlapaz'," },
  { indent: 1, text: "role: 'Full Stack Developer'," },
  { indent: 1, text: "stack: ['C++', 'C#', 'Java']," },
  { indent: 1, text: 'loveForCode: Infinity,' },
  { indent: 0, text: '};' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const typed = useTypewriter(roles);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <motion.p className="eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            Available for internships &amp; opportunities
          </motion.p>

          <motion.h1 className="hero-name" variants={fadeUp} initial="hidden" animate="show" custom={1}>
            Hi, I'm <span className="gradient-text">John Mark Manlapaz</span>
          </motion.h1>

          <motion.div className="hero-roles" variants={fadeUp} initial="hidden" animate="show" custom={2}>
            <span>Software Engineer</span>
            <span className="dot">•</span>
            <span>Full Stack Developer</span>
          </motion.div>

          <motion.div className="hero-typing" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <span className="typing-bracket">&lt;/&gt;</span>
            <span className="typing-text">{typed}</span>
            <span className="typing-cursor" />
          </motion.div>

          <motion.p className="hero-intro" variants={fadeUp} initial="hidden" animate="show" custom={4}>
            I build modern web applications, desktop software, and game projects
            focused on solving real-world problems.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={5}>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="btn btn-primary">
              <HiOutlineDownload size={18} /> Download Resume
            </a>
            <Link to="/projects" className="btn btn-outline">
              View Projects <HiOutlineArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div className="hero-socials" variants={fadeUp} initial="hidden" animate="show" custom={6}>
            <a href="https://github.com/janmakun" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            {/* <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a> */}
            <a href="https://www.instagram.com/jo_0hnnyy/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
            <a href="https://www.facebook.com/jo.0hnnyyy" target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook /></a>
          </motion.div>
        </div>

        <motion.div
          className="hero-illustration"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="code-panel"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="code-panel-header">
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
              <span className="code-panel-title">portfolio.jsx</span>
            </div>
            <div className="code-panel-body">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  className="code-line"
                  style={{ paddingLeft: line.indent * 18 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                >
                  <span className="line-number">{i + 1}</span>
                  <span className="line-text">{line.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="floating-badge badge-1"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            C++
          </motion.div>
          <motion.div
            className="floating-badge badge-2"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            C#
          </motion.div>
          <motion.div
            className="floating-badge badge-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            Java
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="scroll-mouse"><div className="scroll-dot" /></div>
      </motion.div>
    </section>
  );
};

export default Hero;
