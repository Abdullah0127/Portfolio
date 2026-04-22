import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Row */}
        <div className="row align-items-center py-4 footer-top">
          {/* Left - Name & Tagline */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 className="footer-name">
              Abdullah <span className="highlight">Khan</span>
            </h5>
            <p className="footer-tagline">Front End Developer 🚀</p>
          </div>

          {/* Center - Nav Links */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <a href="#home" className="footer-link">
                Home
              </a>
              <a href="#about" className="footer-link">
                About
              </a>
              <a href="#skills" className="footer-link">
                Skills
              </a>
              <a href="#projects" className="footer-link">
                Projects
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </div>
          </div>

          {/* Right - Social */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://github.com/Abdullah0127"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-khan-2638a626b"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/923120505335"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Row */}
        <div className="row align-items-center py-3">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="footer-copy">
              © {currentYear} <span className="highlight">Abdullah Khan</span>.
              All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="footer-made">
              Made with ❤️ using <span className="highlight">React</span> &{" "}
              <span className="highlight">Bootstrap</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
