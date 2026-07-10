import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiSharp,
  SiDotnet,
  SiHtml5,
  SiCss,
  SiAndroid,
  SiOpenjdk,
  SiGit,
  SiGithub,
  SiLinuxmint,
  SiIntellijidea,
} from 'react-icons/si';
import { BsWindows } from 'react-icons/bs';
import { VscCode } from 'react-icons/vsc';
import { TbBrandVisualStudio } from 'react-icons/tb';
import { FiCode } from 'react-icons/fi';
import Reveal from '../Layout/Reveal';
import { skills, tools } from '../../data/skills';
import './Skills.css';

const iconMap = {
  cpp: SiCplusplus,
  java: SiOpenjdk,
  js: SiJavascript,
  react: SiReact,
  mongodb: SiMongodb,
  csharp: SiSharp,
  dotnet: SiDotnet,
  html: SiHtml5,
  css: SiCss,
  android: SiAndroid,
};

const toolIconMap = {
  'Visual Studio Code': VscCode,
  'Visual Studio 2022': TbBrandVisualStudio,
  'IntelliJ IDEA': SiIntellijidea,
  B4A: SiAndroid,
  'Dev-C++': SiCplusplus,
  Git: SiGit,
  GitHub: SiGithub,
  Windows: BsWindows,
  'Linux Mint': SiLinuxmint,
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const Skills = () => {
  return (
    <div className="skills-block">
      <Reveal>
        <p className="eyebrow">Capabilities</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title">Professional Skillset</h2>
      </Reveal>

      <motion.div
        className="skills-grid"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((s) => {
          const Icon = iconMap[s.icon] || FiCode;
          return (
            <motion.div key={s.name} className="skill-card" variants={item} whileHover={{ y: -6 }}>
              <div className="skill-icon">
                <Icon size={26} />
              </div>
              <span>{s.name}</span>
            </motion.div>
          );
        })}
      </motion.div>

      <Reveal delay={0.1} className="tools-heading">
        <h3>Tools I Use</h3>
      </Reveal>

      <motion.div
        className="tools-grid"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {tools.map((t) => {
          const Icon = toolIconMap[t] || FiCode;
          return (
            <motion.div key={t} className="tool-chip" variants={item} whileHover={{ y: -4 }}>
              <Icon size={17} />
              <span>{t}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
