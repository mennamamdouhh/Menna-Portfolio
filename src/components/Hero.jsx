import "../styles/hero.css";
import GlowStar from "./icons/GlowStar";

const Hero = () => {
  return (
    <section className="hero" id="#">
      {/* Background decoration */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <GlowStar className="hero-star hero-star-1" />
      <GlowStar className="hero-star hero-star-2" />
      <GlowStar className="hero-star hero-star-3" />

      <div className="hero-container">
        {/* Left Column - Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span>FULL STACK DEVELOPER</span>
          </div>

          <h1 className="hero-title">
            <span>DESIGNING</span>
            <span>INTERFACES.</span>
            <span className="hero-title-gradient">ENGINEERING</span>
            <span className="hero-title-gradient">SYSTEMS.</span>
          </h1>

          <div className="hero-intro">
            <h2>Menna Mamdouh</h2>
            <p>
              Building polished digital products from the interface to the
              systems behind it.
            </p>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">
              <span>VIEW MY WORK</span>
              <span className="hero-btn-arrow">→</span>
            </a>

            <a href="#contact" className="hero-btn hero-btn-secondary">
              <span>LET’S TALK</span>
              <span className="hero-btn-arrow">↗</span>
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/menna-mohamed-8b69a3303/" target="_blank" rel="noreferrer">
              <span className="social-icon">in</span>
              <span>LINKEDIN</span>
            </a>

            <span className="social-divider" />

            <a href="https://github.com/mennamamdouhh" target="_blank" rel="noreferrer">
              <span className="github-icon">&lt;/&gt;</span>
              <span>GITHUB</span>
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="hero-visual">
          <div className="hero-image-glow" />

          <div className="hero-image-frame">
            <img
              src={`${import.meta.env.BASE_URL}images/menna.png`}
              alt="Menna Mamdouh"
              className="hero-image"
            />
            <div className="hero-image-overlay" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll">
        <span className="hero-scroll-icon">↓</span>
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
};

export default Hero;