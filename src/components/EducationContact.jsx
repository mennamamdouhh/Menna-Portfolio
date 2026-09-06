import { ArrowUpRight, Mail, GraduationCap, GitBranch } from "lucide-react";
import SectionSymbol from "./icons/SectionSymbol";
import "../styles/educationContact.css";

export default function EducationContact() {
  return (
    <section className="education-contact-section">
      <div className="education-glow"></div>

      <div className="container">
        <div className="education-contact-grid">
          <div className="education-side">
            <div className="section-label">
              <SectionSymbol />
              <span>05 / EDUCATION</span>
            </div>

            <div className="education-intro">
              <GraduationCap size={32} />
              <span>ACADEMIC BACKGROUND</span>
            </div>

            <h2>
              LEARNING
              <br />
              THE SYSTEM
            </h2>

            <div className="education-details">
              <div className="education-main">
                <span className="education-year">2023 — 2027</span>

                <h3>Alexandria University</h3>

                <p>Bachelor's Degree in Computer and Data Science</p>

                <span className="education-major">Major: Data Science</span>
              </div>

              <div className="coursework">
                <span className="coursework-label">RELEVANT COURSEWORK</span>

                <div className="course-list">
                  <span>Programming 1</span>
                  <span>OOP</span>
                  <span>Data Structures</span>
                  <span>Computer Networks</span>
                  <span>Machine Learning</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-side" id="contact">
            <div className="section-label">
              <SectionSymbol />
              <span>06 / CONTACT</span>
            </div>

            <div className="contact-content">
              <span className="contact-small-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                LET'S
                <br />
                BUILD IT.
              </h2>

              <p>
                I enjoy turning ideas into functional, well-designed systems —
                from the interface users see to the logic running behind it.
              </p>

              <a
                href="mailto:menna.2moh.mamdouh@gmail.com"
                className="email-link"
              >
                <span>menna.2moh.mamdouh@gmail.com</span>
                <ArrowUpRight size={22} />
              </a>

              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/menna-mohamed-8b69a3303/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-letter">in</span>
                  <span>LINKEDIN</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://github.com/mennamamdouhh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={18} />
                  <span>GITHUB</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="contact-decoration">
              <Mail size={18} />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
