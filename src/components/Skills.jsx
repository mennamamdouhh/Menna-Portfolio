import { useEffect, useRef, useState } from "react";
import GlowStar from "./icons/GlowStar";
import Crosshair from "./icons/Crosshair";
import ProcessSparkle from "./icons/ProcessSparkle";
import SectionSymbol from "./icons/SectionSymbol";
import "../styles/skills.css";

export default function Skills() {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemsRef = useRef([]);

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
        threshold: 0.2,
      }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      title: "FRONTEND",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "BACKEND",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    },
    {
      title: "FULL STACK",
      skills: ["C#", ".NET Core", "MVC", "SQL Server", "JWT"],
    },
    {
      title: "TOOLS",
      skills: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
    },
  ];

  const workStyle = [
    {
      number: "01",
      title: "RESEARCH",
      text: "I explore different explanations and resources until I understand how something actually works.",
    },
    {
      number: "02",
      title: "INVESTIGATE",
      text: "When something breaks, I look for the reason behind the problem instead of only applying a quick fix.",
    },
    {
      number: "03",
      title: "THINK IN SYSTEMS",
      text: "I like understanding how technologies and different parts of a product connect together.",
    },
    {
      number: "04",
      title: "KEEP LEARNING",
      text: "I prefer going beyond the basics and understanding the tools I work with deeply.",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-blue-light"></div>
      <div className="skills-image"></div>

      <div className="container skills-container">
        <div className="skills-heading">
          <div className="section-label">
            <SectionSymbol />
            <span>02 / SKILLS</span>
          </div>

          <div className="skills-title-row">
            <h2>
              WHAT I
              <br />
              WORK WITH
            </h2>

            <GlowStar className="skills-star" />
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <div
              className={`skill-group ${
                visibleItems.includes(index) ? "show" : ""
              }`}
              key={group.title}
              ref={(element) => (itemsRef.current[index] = element)}
              data-index={index}
            >
              <div className="skill-group-top">
                <span>0{index + 1}</span>
                <Crosshair />
              </div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="work-section">
          <div className="work-heading">
            <div>
              <span className="small-label">MORE THAN TOOLS</span>
              <h2>HOW I WORK</h2>
            </div>

            <GlowStar />
          </div>

          <div className="work-grid">
            {workStyle.map((item) => (
              <div className="work-item" key={item.number}>
                <div className="work-number">{item.number}</div>

                <ProcessSparkle />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}