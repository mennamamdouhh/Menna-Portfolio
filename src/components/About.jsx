import "../styles/about.css";
import GlowStar from "./icons/GlowStar";
import download from "./icons/arrow-down-to-line.svg"

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-5">
            <div className="about-image">
              <img
                src={`${import.meta.env.BASE_URL}/images/aboutPhoto.jpg`}
                alt="Abstract blue technology visual"
              />

              <div className="about-image-corner top-left">+</div>
              <div className="about-image-corner bottom-right">+</div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-content">

              <div className="section-label">
                <span>ABOUT ME</span>
                <GlowStar size={20} />
              </div>

              <h2>
                I LIKE UNDERSTANDING
                <span> THE WHOLE PICTURE.</span>
              </h2>

              <p>
                I started my journey in Data Science, but I soon realized
                that I didn't just want to work with data. I wanted to
                understand and build the systems around it.
              </p>

              <p>
                That's what led me into Full Stack development. I started
                with web development, learned React, and then moved toward
                backend development with Node.js. I'm also currently
                exploring .NET and discovering where different technologies
                fit best in the products I want to build.
              </p>

              <p>
                I enjoy going beyond one part of a project. I like
                understanding how everything connects — from the interface
                and user experience to the logic and data behind it.
              </p>

              <div className="about-highlight">
                <span>01</span>
                <p>
                  Building things that look good, work well, and have a
                  solid foundation underneath.
                </p>
              </div>

              <a href="#" className="cv-button">
                DOWNLOAD CV
                <img src={download} alt="Lucidchart download" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;