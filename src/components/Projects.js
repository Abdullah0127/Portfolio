import React, { useState } from "react";
import movieImg from "../assests/pexels-cottonbro-8273630.jpg";
import Julie from "../assests/fictioncover_3D-1-768x1148.png";
import Holy from "../assests/hero.f9aa3583141c55cfc35e.png";
import Visa from "../assests/img_01.jpg";
import Snake from "../assests/pexels-coppertist-wu-313365563-15979599.jpg";
import Mitliv from "../assests/observation-urban-building-business-steel-scaled.jpg";

const projects = [
  {
    id: 1,
    title: "Movie Explorer",
    category: "React JS",
    description:
      "Developed a Movie Explorer project in React where users can search, view, and explore movie details. Focused on component-based architecture and responsive design.",
    image: movieImg,
    liveLink: "https://movie-explorer-olive-three.vercel.app/",
    githubLink: "https://github.com/Abdullah0127/Movie-Explorer",
    tags: ["React", "Bootstrap", "JavaScript"],
  },
  {
    id: 2,
    title: "React-Crud",
    category: "React JS",
    description:
      "Developed a React CRUD application that allows users to create, read, update, and delete data efficiently. Implemented state management and API integration for dynamic data handling.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    liveLink: "https://react-crud-roan-six.vercel.app/",
    githubLink: "https://github.com/Abdullah0127/React-CRUD",
    tags: ["React", "CSS", "Bootstrap"],
  },
  {
    id: 3,
    title: "Julie Ditchburn Patton",
    category: "WordPress",
    description:
      "Developed the Julie Ditchburn Patton website using WordPress with a clean and professional design.",
    image: Julie,
    liveLink: "https://julieditchburnpatton.com/",
    tags: ["WordPress"],
  },
  {
    id: 4,
    title: "Holy Tutor",
    category: "React JS",
    description:
      "Developed Holy Tutor, an educational web application using React.",
    image: Holy,
    liveLink: "https://holy-tutor.vercel.app/",
    githubLink: "https://github.com/Abdullah0127/Holy-Tutor",
    tags: ["React", "Hooks", "LocalStorage", "Nodejs"],
  },
  {
    id: 5,
    title: "WIG Visa Services",
    category: "WordPress",
    description: "Developed the WIG Visa Services website using WordPress.",
    image: Visa,
    liveLink: "https://wig-services.com/",
    tags: ["WordPress"],
  },
  {
    id: 6,
    title: "Snake Game",
    category: "JavaScript",
    description:
      "Developed a classic Snake Game using JavaScript with smooth controls and logic.",
    image: Snake,
    liveLink: "https://github.com/Abdullah0127/Snake-Game",
    githubLink: "https://github.com/Abdullah0127/Snake-Game",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 7,
    title: "Mitliv Accountants",
    category: "WordPress",
    description:
      "Built a WordPress website for Mitliv Accountants with responsive layout.",
    image: Mitliv,
    liveLink: "https://mitlev.co.uk/",
    tags: ["WordPress"],
  },
];

const categories = ["All", "JavaScript", "WordPress", "React JS"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div id="projects" className="projects-section">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <p className="section-subtitle">MY WORK</p>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="row g-4">
          {filtered.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div
                className="project-card"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />

                  {/* Overlay */}
                  <div
                    className={`project-overlay ${
                      hoveredId === project.id ? "show" : ""
                    }`}
                  >
                    <div className="overlay-btns">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="overlay-btn"
                      >
                        🌐 Live Demo
                      </a>

                      {/* GitHub only if exists AND not WordPress */}
                      {project.githubLink &&
                        project.category.toLowerCase() !== "wordpress" && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="overlay-btn outline"
                          >
                            💻 GitHub
                          </a>
                        )}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="project-body">
                  <div className="first-body">
                    <span className="project-category">{project.category}</span>

                    <h5 className="project-title mt-2">{project.title}</h5>

                    <p className="project-desc">{project.description}</p>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-3 mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                    >
                      🌐 Live Demo
                    </a>

                    {project.githubLink &&
                      project.category.toLowerCase() !== "wordpress" && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link-btn outline"
                        >
                          💻 GitHub
                        </a>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
