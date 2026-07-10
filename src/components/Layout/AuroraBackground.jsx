import { motion } from 'framer-motion';
import './AuroraBackground.css';

const AuroraBackground = () => {
  return (
    <div className="aurora-wrap" aria-hidden="true">
      <div className="grid-overlay" />
      <motion.div
        className="blob blob-a"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob-b"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob-c"
        animate={{ x: [0, 30, -40, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="vignette" />
    </div>
  );
};

export default AuroraBackground;
