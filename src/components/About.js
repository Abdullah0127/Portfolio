import React from "react";
import profileImg from "../assests/Abdullah.png";
import cvFile from "../assests/Abdullah CV.pdf";

function About() {
  return (
    <div id="about" className="about-section">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <p className="section-subtitle">GET TO KNOW ME</p>
          <h2 className="section-title">
            About <span className="hero-highlight">Me</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="row align-items-center g-5">
          {/* Left - Image */}
          <div className="col-lg-5 text-center">
            <div className="about-img-wrapper">
              <img src={profileImg} alt="Abdullah Khan" className="about-img" />
              <div className="about-img-border"></div>

              {/* Experience Badge */}
              <div className="exp-badge">
                <span className="exp-number">1+</span>
                <span className="exp-text">
                  Year of
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="col-lg-7">
            <h3 className="about-heading">
              I'm Abdullah Khan, a{" "}
              <span className="hero-highlight">Front End Developer</span>
            </h3>

            <p className="about-desc">
              I'm a dedicated Front End Developer based in Pakistan,
              specializing in building modern, responsive, and high-performance
              web applications. I focus on creating clean UI/UX and writing
              maintainable, scalable code using the latest web technologies.
            </p>

            <p className="about-desc">
              I have hands-on experience with React and WordPress development,
              including customizing themes, working with plugins, and building
              dynamic user interfaces. I'm always learning new technologies and
              improving my skills to deliver better solutions.
            </p>

            {/* Info Grid */}
            <div className="row mt-4 mb-4">
              <div className="col-sm-6 mb-3">
                <div className="about-info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">Abdullah Khan</span>
                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="about-info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">Pakistan 🇵🇰</span>
                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="about-info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">
                    abdullahiftikhar3355@gmail.com
                  </span>
                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="about-info-item">
                  <span className="info-label">Available</span>
                  <span className="info-value available">✅ Open to Work</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <p className="skills-label">TECH STACK</p>

              <div className="d-flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Bootstrap",
                  "WordPress",
                  "WooCommerce",
                  "Git & GitHub",
                  "PHP (Basic)",
                ].map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <a href={cvFile} download className="btn hero-btn-primary">
              Download CV 📄
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
