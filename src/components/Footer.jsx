import { ArrowUp, ArrowUpRight } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
  const links = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="container">

        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              MENNA<span>.</span>
            </a>

            <p>
              Building beyond the interface — where design,
              functionality, and systems come together.
            </p>
          </div>

          <div className="footer-navigation">
            <span className="footer-label">NAVIGATE</span>

            <nav>
              {links.map((link) => (
                <a href={link.href} key={link.name}>
                  {link.name}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-socials">
            <span className="footer-label">CONNECT</span>

            <a
              href="https://www.linkedin.com/in/menna-mohamed-8b69a3303/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-letter">in</span>
              LINKEDIN
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://github.com/mennamamdouhh"
              target="_blank"
              rel="noreferrer"
            >
              <span className="github-symbol">&lt;/&gt;</span>
              GITHUB
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="footer-line">
          <span></span>
          <div className="footer-star">✦</div>
          <span></span>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MENNA MAMDOUH</span>

          <span className="footer-role">
            FULL-STACK DEVELOPER
          </span>

          <button
            className="back-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            BACK TO TOP
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}