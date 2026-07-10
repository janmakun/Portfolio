import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import Reveal from '../Layout/Reveal';
import './Contact.css';

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: FiFacebook, label: 'Facebook', href: 'https://facebook.com/' },
  { icon: FiMail, label: 'Email', href: 'mailto:johnmanlapaz64@gmail.com' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section">
      <Reveal>
        <p className="eyebrow">Get In Touch</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="section-title">Let's Build Something Great</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="section-subtitle">
          Have an opportunity, internship, or a project in mind? I'd love to hear
          from you — my inbox is always open.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal delay={0.1} className="contact-info glass">
          <div className="contact-info-item">
            <FiMapPin size={20} />
            <div>
              <span className="contact-label">Location</span>
              <span className="contact-value">Apalit, Pampanga, Philippines</span>
            </div>
          </div>
          <div className="contact-info-item">
            <FiMail size={20} />
            <div>
              <span className="contact-label">Email</span>
              <span className="contact-value">johnmanlapaz64@gmail.com</span>
            </div>
          </div>

          <div className="contact-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn">
                <s.icon size={19} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="contact-form-wrap glass">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <motion.button type="submit" className="btn btn-primary" whileTap={{ scale: 0.97 }}>
              <FiSend size={16} /> {sent ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
