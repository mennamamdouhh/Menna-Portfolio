import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import GlowStar from "./icons/GlowStar";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-blue-glow"></div>

      <div className="container hero-container">

        {/* Top */}
        <div className="hero-top">
          <div className="hero-role">
            <GlowStar />
            <span>FULL STACK DEVELOPER</span>
          </div>

          <span className="hero-index">01 / 07</span>
        </div>

        {/* Main */}
        <div className="hero-main">

          {/* Text */}
          <div className="hero-copy">

            <h1 className="hero-title">
              DESIGNING
              <br />
              <span>INTERFACES.</span>
              <br />
              ENGINEERING
              <br />
              <span>SYSTEMS.</span>
            </h1>

            <div className="hero-title-line"></div>

            <div className="hero-details">

              <div className="hero-name">
                <span>MY NAME IS</span>
                <h2>MENNA MAMDOUH</h2>
              </div>

              <p className="hero-description">
                I build interfaces that look good and systems
                that make them work.
              </p>

              <div className="hero-actions">

                <a href="#projects" className="hero-primary">
                  VIEW MY WORK
                  <ArrowRight size={18} />
                </a>

                <a href="#contact" className="hero-secondary">
                  <Mail size={16} />
                  LET'S TALK
                </a>

              </div>

              <div className="hero-socials">

                <a
                  href="https://www.linkedin.com/in/menna-mohamed-8b69a3303/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-icon">in</span>
                  LINKEDIN
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="https://github.com/mennamamdouhh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-icon">&lt;/&gt;</span>
                  GITHUB
                  <ArrowUpRight size={13} />
                </a>

              </div>

            </div>
          </div>

          {/* Photo ONLY */}
          <div className="hero-visual">
            <img
              src={`${import.meta.env.BASE_URL}/images/menna.png`}
              alt="Menna Mamdouh"
              className="hero-image"
            />
          </div>

        </div>

        {/* Bottom */}
        <div className="hero-bottom">

          <div className="hero-scroll">
            <span className="scroll-line"></span>
            <span>SCROLL TO EXPLORE</span>
          </div>

          <span className="hero-location">
            ALEXANDRIA · EGYPT
          </span>

        </div>

      </div>
    </section>
  );
}