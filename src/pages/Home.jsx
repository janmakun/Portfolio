import Hero from '../components/Hero/Hero';
import Reveal from '../components/Layout/Reveal';
import './Home.css';

const highlights = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '6+', label: 'Languages & Frameworks' },
  { value: '3', label: 'Platforms — Web, Desktop, Mobile' },
];

const Home = () => {
  return (
    <>
      <Hero />
      <section className="highlights-strip">
        <div className="highlights-inner">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08} className="highlight-item">
              <span className="highlight-value">{h.value}</span>
              <span className="highlight-label">{h.label}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
