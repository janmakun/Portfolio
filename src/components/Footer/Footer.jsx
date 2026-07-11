import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">JieM</span>
          <div>
            <p className="footer-name">John Mark Manlapaz</p>
            <p className="footer-tag">Student</p>
          </div>
        </div>

        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-socials">
          <a href="https://github.com/janmakun" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          {/* <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a> */}
          <a href="https://www.instagram.com/jo_0hnnyy/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
          <a href="https://www.facebook.com/jo.0hnnyyy" target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook /></a>
          <a href="mailto:johnmanlapaz64@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} John Mark Manlapaz. Built with React &amp; Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
