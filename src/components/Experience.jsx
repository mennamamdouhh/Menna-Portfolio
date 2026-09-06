import { useEffect, useRef, useState } from "react";
import SectionSymbol from "./icons/SectionSymbol";
import Crosshair from "./icons/Crosshair";
import "../styles/experience.css";

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [lineProgress, setLineProgress] = useState(0);
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);

  const experiences = [
    {
      date: "2026",
      title: "FULL-STACK (.NET) TRACK",
      company: "DEPI",
      type: "TRAINING",
      text: "Building RESTful web APIs and developing full-stack applications through practical training and a capstone project.",
      technologies: "C# · .NET Core · MVC · SQL Server · Docker · Git",
    },
    {
      date: "2025 — 2026",
      title: "FULL-STACK REACT & NODE.JS",
      company: "TECHTREK",
      type: "120 HOURS",
      text: "Developed and deployed a complete full-stack capstone project covering frontend, backend, authentication, database integration, and file storage.",
      technologies:
        "React · JavaScript · Node.js · Express · MongoDB · JWT · AWS S3",
    },
    {
      date: "2025",
      title: "OPEN SOURCE WEB TRAINING",
      company: "ITI · ALEXANDRIA UNIVERSITY",
      type: "TRAINING",
      text: "Hands-on training covering core open-source web development fundamentals and practical web application development.",
      technologies: "PHP · MySQL · JavaScript · HTML · CSS · Apache",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);

            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.75;
      const end = windowHeight * 0.25;

      const progress =
        ((start - rect.top) / (rect.height - (start - end))) * 100;

      setLineProgress(Math.max(0, Math.min(100, progress)));
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-blue-light"></div>

      <div className="container">
        <div className="experience-heading">
          <div className="section-label">
            <SectionSymbol />
            <span>03 / EXPERIENCE</span>
          </div>

          <h2>
            TRAINING &
            <br />
            EXPERIENCE
          </h2>
        </div>

        <div className="experience-timeline" ref={timelineRef}>
          <div className="timeline-line"></div>

          <div
            className="timeline-line-progress"
            style={{ height: `${lineProgress}%` }}
          ></div>

          {experiences.map((item, index) => (
            <div
              className={`experience-item ${
                visibleItems.includes(index) ? "show" : ""
              }`}
              key={item.title}
              ref={(element) => (itemRefs.current[index] = element)}
              data-index={index}
            >
              <div className="experience-date">
                {item.date}
              </div>

              <div className="timeline-node">
                <Crosshair />
              </div>

              <div className="experience-content">
                <div className="experience-meta">
                  <span>{item.company}</span>
                  <span>{item.type}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="experience-tech">
                  {item.technologies}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}