import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionSymbol from "./icons/SectionSymbol";
import Spaceship from "./icons/Spaceship";
import "../styles/projects.css";

const projects = [
  {
    id: "online-desserts",
    category: "E-Commerce Front-End",
    title: "Online Desserts",
    description:
      "A single-page dessert shop with JSON-driven product loading, a working cart, and an order-confirmation modal — built around the Fetch API for async data handling.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "images/desserts.png",
    link: "https://mennamamdouhh.github.io/Dessert-list-with-json/",
  },
  {
    id: "digital-bank",
    category: "Responsive Web App",
    title: "Digital Bank Landing Page",
    description:
      "A fully responsive landing page for a digital banking product, laid out with CSS Grid and Flexbox across multiple breakpoints.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "images/digital-bank.png",
    link: "https://mennamamdouhh.github.io/digitalbank-landing-page/",
  },
  {
    id: "card-form",
    category: "Real-Time Validation UI",
    title: "Interactive Card Details Form",
    description:
      "A credit card form with live input validation, a real-time card preview, and smooth transitions — mirroring the sanitization logic a backend would enforce.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "images/card-form.png",
    link: "https://mennamamdouhh.github.io/Interactive-card-details-form/",
  }
];

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [lineProgress, setLineProgress] = useState(0);

  const itemRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);

            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index],
            );
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let animationFrame;

    const updateProgress = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.75;
      const end = windowHeight * 0.25;

      const progress =
        ((start - rect.top) / (rect.height - (start - end))) * 100;

      setLineProgress(Math.max(0, Math.min(100, progress)));

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-glow"></div>

      <div className="container projects-container">
        <div className="projects-heading">
          <div className="section-label">
            <SectionSymbol />
            <span>03 / PROJECTS</span>
          </div>

          <div className="projects-heading-row">
            <div>
              <h2>
                THINGS I'VE
                <br />
                <span>BUILT</span>
              </h2>

              <p>
                A few projects that helped me turn ideas into functional
                interfaces and sharpen my development skills.
              </p>
            </div>

            <div className="spaceship-intro">
              <Spaceship />
            </div>
          </div>
        </div>

        <div className="projects-timeline" ref={timelineRef}>
          <div className="timeline-base"></div>

          <div
            className="timeline-progress"
            style={{ height: `${lineProgress}%` }}
          ></div>

          <div
            className="spaceship-scroll"
            style={{
              top: `${lineProgress}%`,
            }}
          >
            <Spaceship />
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <article
                className={`project-item ${
                  index % 2 === 0 ? "project-left" : "project-right"
                } ${visibleItems.includes(index) ? "show" : ""}`}
                key={project.id}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                data-index={index}
              >
                <div className="project-node"></div>

                <div className="project-card">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-image-wrapper"
                  >
                    <img src={`${import.meta.env.BASE_URL}project.image`} alt={project.title} />

                    <div className="project-image-overlay">
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight size={20} />
                    </div>
                  </a>

                  <div className="project-card-content">
                    <div className="project-card-top">
                      <span className="project-number">0{index + 1}</span>

                      <span className="project-category">
                        {project.category}
                      </span>
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="projects-ending">
          <span></span>
          <div>MORE PROJECTS COMING SOON</div>
          <span></span>
        </div>
      </div>
    </section>
  );
}
