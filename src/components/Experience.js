import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    role: "Front End Developer",
    company: "Freelance",
    duration: "2024 - Present",
    location: "Remote",
    type: "Freelance",
    description:
      "Developing responsive and user-friendly web applications using React and modern frontend technologies. Focused on creating clean UI, reusable components, and delivering pixel-perfect designs based on client requirements.",
    skills: ["React", "JavaScript", "Bootstrap", "CSS"],
    icon: "💻",
  },
  {
    id: 2,
    role: "WordPress Developer",
    company: "Orbitors",
    duration: "2024 - Present",
    location: "Pakistan",
    type: "Job",
    description:
      "Working on real-world WordPress projects, including website customization, plugin integration, and performance optimization. Collaborating with team members to deliver high-quality websites and improve user experience.",
    skills: ["WordPress", "Elementor", "WooCommerce", "CSS"],
    icon: "🚀",
  },
  {
    id: 3,
    role: "React JS Developer (Intern)",
    company: "Code Crush Technology",
    duration: "2025",
    location: "Pakistan",
    type: "Internship",
    description:
      "Completed a hands-on internship focused on frontend development using HTML, CSS, JavaScript, and React. Built multiple projects to strengthen practical skills and understanding of component-based development.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    icon: "📚",
  },
];

function Experience() {
  const [active, setActive] = useState(1);

  return (
    <div id="experience" className="experience-section">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <p className="section-subtitle">MY JOURNEY</p>
          <h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="row g-4">
          {/* Timeline */}
          <div className="col-lg-5">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`timeline-item ${active === exp.id ? "active" : ""}`}
                  onClick={() => setActive(exp.id)}
                >
                  <div className="timeline-icon">{exp.icon}</div>

                  <div className="timeline-info">
                    <span
                      className={`exp-type-badge ${exp.type.toLowerCase()}`}
                    >
                      {exp.type}
                    </span>

                    <h5 className="timeline-role">{exp.role}</h5>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-duration">📅 {exp.duration}</p>
                  </div>

                  {index < experiences.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Detail Card */}
          <div className="col-lg-7">
            {experiences
              .filter((e) => e.id === active)
              .map((exp) => (
                <div key={exp.id} className="exp-detail-card">
                  {/* Header */}
                  <div className="exp-card-header">
                    <div>
                      <span
                        className={`exp-type-badge ${exp.type.toLowerCase()} mb-2 d-inline-block`}
                      >
                        {exp.type}
                      </span>

                      <h3 className="exp-card-role">{exp.role}</h3>
                      <p className="exp-card-company">{exp.company}</p>
                    </div>

                    <div className="exp-icon-big">{exp.icon}</div>
                  </div>

                  {/* Meta */}
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <span className="exp-meta">📅 {exp.duration}</span>
                    <span className="exp-meta">📍 {exp.location}</span>
                  </div>

                  <div className="exp-divider mb-4"></div>

                  {/* Description */}
                  <p className="exp-description">{exp.description}</p>

                  {/* Skills */}
                  <div className="mt-4">
                    <p className="skills-used-label">TECHNOLOGIES USED</p>

                    <div className="d-flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 mt-5">
          {[
            { number: "2+", label: "Years Experience", icon: "🗓️" },
            { number: "20+", label: "Projects Completed", icon: "🚀" },
            { number: "10+", label: "Happy Clients", icon: "😊" },
            { number: "6+", label: "Technologies", icon: "⚡" },
          ].map((stat, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="stat-card text-center">
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
