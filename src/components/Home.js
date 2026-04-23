import React, { useEffect, useState } from "react";

// ✅ Move roles outside (fix for dependency issue)
const roles = ["React Developer", "WordPress Developer"];

function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1),
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]); // ✅ no roles here

  return (
    <div
      id="home"
      className="hero-section d-flex align-items-center justify-content-center"
    >
      {/* Left Container */}
      <div className="left-container text-center text-lg-start">
        <p className="hero-greeting">👋 Hello, I'm</p>

        <h1 className="hero-name">
          Abdullah <span className="hero-highlight">Khan</span>
        </h1>

        <h2 className="hero-title">
          {text}
          <span className="cursor">|</span>
        </h2>

        <p className="hero-desc">
          I help businesses and individuals build fast, modern and user-friendly
          web applications using
          <span className="hero-highlight"> React</span>,
          <span className="hero-highlight"> JavaScript</span>, and scalable
          WordPress solutions.
        </p>

        <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap mt-4">
          <a href="#projects" className="btn hero-btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn hero-btn-outline">
            Contact Me
          </a>
        </div>

        <div className="d-flex justify-content-center justify-content-lg-start gap-4 mt-5">
          <a
            href="https://github.com/Abdullah0127"
            target="_blank"
            rel="noreferrer"
            className="hero-social"
          >
            GitHub
          </a>

          <span className="hero-divider">|</span>

          <a
            href="https://www.linkedin.com/in/abdullah-khan-2638a626b"
            target="_blank"
            rel="noreferrer"
            className="hero-social"
          >
            LinkedIn
          </a>

          <span className="hero-divider">|</span>

          <a
            href="mailto:abdullahiftikhar3355@gmail.com"
            className="hero-social"
          >
            Email
          </a>
        </div>
      </div>

      {/* Right Container */}
      <div className="right-container">
        <div className="code-window">
          <div className="code-topbar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="code-filename">abdullah.js</span>
          </div>

          <div className="code-body">
            <div className="code-line">
              <span className="code-keyword">const </span>
              <span className="code-var">developer</span>{" "}
              <span className="code-white">= </span>
              <span className="code-brace">{"{"}</span>
            </div>

            <div className="code-line pl">
              <span className="code-key">name</span>
              <span className="code-white">: </span>
              <span className="code-string">"Abdullah Khan"</span>,
            </div>

            <div className="code-line pl">
              <span className="code-key">role</span>
              <span className="code-white">: </span>
              <span className="code-string">"Front End Developer"</span>,
            </div>

            <div className="code-line pl">
              <span className="code-key">skills</span>
              <span className="code-white">: </span>[
              <span className="code-string">"React"</span>,{" "}
              <span className="code-string">"JavaScript"</span>,{" "}
              <span className="code-string">"Bootstrap"</span>],
            </div>

            <div className="code-line pl">
              <span className="code-key">hardWorking</span>:{" "}
              <span className="code-keyword">true</span>,
            </div>

            <div className="code-line pl">
              <span className="code-key">problemSolver</span>:{" "}
              <span className="code-keyword">true</span>,
            </div>

            <div className="code-line pl">
              <span className="code-key">passion</span>:{" "}
              <span className="code-string">"Building great UI"</span>
            </div>

            <div className="code-line">
              <span className="code-brace">{"}"}</span>
            </div>

            <br />

            <div className="code-line">
              <span className="code-keyword">function </span>
              <span className="code-fn">hire</span>(
              <span className="code-var">developer</span>) {"{"}
            </div>

            <div className="code-line pl">
              <span className="code-keyword">return </span>
              <span className="code-string">"Best Decision Ever! 🚀"</span>;
            </div>

            <div className="code-line">{"}"}</div>

            <br />

            <div className="code-line typing-line">
              <span className="code-fn">hire</span>(
              <span className="code-var">developer</span>)
              <span className="cursor">▌</span>
            </div>
          </div>
        </div>

        <div className="badge-react floating-badge badge1">⚛️ React</div>
        <div className="badge-react floating-badge badge2">🟨 JavaScript</div>
        <div className="badge-react floating-badge badge3">🎨 CSS</div>
      </div>
    </div>
  );
}

export default Home;
