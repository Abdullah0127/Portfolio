import React, { useState } from "react";

const skillCategories = [
  {
    id: 1,
    category: "WordPress",
    icon: "🌐",
    color: "#00d4ff",
    skills: [
      { name: "WordPress", level: 85 },
      { name: "Elementor", level: 85 },
      { name: "WooCommerce", level: 78 },
      { name: "Theme Customization", level: 75 },
      { name: "Plugin Customization", level: 70 },
      { name: "SEO & Performance", level: 70 },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    icon: "🎨",
    color: "#c792ea",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 75 },
      { name: "Bootstrap", level: 82 },
      { name: "React JS", level: 70 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    id: 3,
    category: "MERN Stack",
    icon: "⚡",
    color: "#28ca41",
    skills: [
      { name: "MongoDB (Basic)", level: 55 },
      { name: "Express JS", level: 50 },
      { name: "React JS", level: 70 },
      { name: "Node JS", level: 55 },
      { name: "REST API", level: 60 },
      { name: "Git & GitHub", level: 75 },
    ],
  },
];

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "WordPress", icon: "🌐" },
  { name: "Elementor", icon: "🎨" },
  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
  { name: "Figma", icon: "✏️" },
  { name: "Chrome DevTools", icon: "🔍" },
  { name: "Postman", icon: "📮" },
];

function Skills() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div id="skills" className="skills-section">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <p className="section-subtitle">WHAT I KNOW</p>
          <h2 className="section-title">
            My <span className="highlight">Skills</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeTab === cat.id ? "active" : ""}`}
              style={
                activeTab === cat.id
                  ? { borderColor: cat.color, color: cat.color }
                  : {}
              }
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon} {cat.category}
            </button>
          ))}
        </div>

        {/* Content */}
        {skillCategories
          .filter((c) => c.id === activeTab)
          .map((cat) => (
            <div
              key={cat.id}
              className="row g-4 align-items-center skill-content"
            >
              {/* Left */}
              <div className="col-lg-7">
                <div className="skills-card">
                  <h4 className="skills-card-title">
                    {cat.icon} {cat.category} Skills
                  </h4>

                  <div className="skills-list">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="skill-item">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="skill-name">{skill.name}</span>
                          <span
                            className="skill-percent"
                            style={{ color: cat.color }}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        <div className="skill-bar-bg">
                          <div
                            className="skill-bar-fill"
                            style={{
                              width: `${skill.level}%`,
                              background: cat.color,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="col-lg-5">
                <div
                  className="skill-info-card"
                  style={{ borderColor: cat.color }}
                >
                  <div className="skill-info-icon">{cat.icon}</div>
                  <h4 className="skill-info-title" style={{ color: cat.color }}>
                    {cat.category}
                  </h4>

                  {cat.id === 1 && (
                    <>
                      <p className="skill-info-desc">
                        I build and customize professional WordPress websites,
                        including business sites, booking systems, and
                        WooCommerce stores.
                      </p>
                      <ul className="skill-info-list">
                        <li>✅ Custom Theme & Layout Customization</li>
                        <li>✅ WooCommerce Setup & Customization</li>
                        <li>✅ Elementor Page Building</li>
                        <li>✅ Plugin Customization & Fixes</li>
                        <li>✅ Performance Optimization & SEO</li>
                      </ul>
                    </>
                  )}

                  {cat.id === 2 && (
                    <>
                      <p className="skill-info-desc">
                        I create modern, responsive and interactive user
                        interfaces using React and clean frontend development
                        practices.
                      </p>
                      <ul className="skill-info-list">
                        <li>✅ Responsive & Mobile-First Design</li>
                        <li>✅ Reusable React Components</li>
                        <li>✅ Clean & Maintainable Code</li>
                        <li>✅ UI Animations & Effects</li>
                        <li>✅ Cross-Browser Compatibility</li>
                      </ul>
                    </>
                  )}

                  {cat.id === 3 && (
                    <>
                      <p className="skill-info-desc">
                        Currently learning and building full-stack applications
                        using MERN stack. Focused on APIs, backend logic, and
                        database integration.
                      </p>
                      <ul className="skill-info-list">
                        <li>🔄 MongoDB Database Basics</li>
                        <li>🔄 Express API Development</li>
                        <li>🔄 Node.js Backend Logic</li>
                        <li>🔄 REST API Integration</li>
                        <li>✅ Git & GitHub Workflow</li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

        {/* Tools */}
        <div className="mt-5 pt-4">
          <h4 className="text-center tools-heading mb-4">🛠️ Tools I Use</h4>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            {tools.map((tool) => (
              <div key={tool.name} className="tool-badge">
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
