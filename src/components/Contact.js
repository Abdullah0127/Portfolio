import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "abdullah@email.com",
    link: "mailto:abdullahiftikhar3355@gmail.com",
  },
  {
    icon: "📱",
    label: "WhatsApp",
    value: "03120505335",
    link: "tel:03120505335",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Pakistan 🇵🇰",
    link: null,
  },
  {
    icon: "💼",
    label: "Freelance",
    value: "Available for Work",
    link: null,
  },
];

const socialLinks = [
  { icon: "🐙", label: "GitHub", link: "https://github.com/Abdullah0127" },
  {
    icon: "💼",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/abdullah-khan-2638a626b",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_2mnusel", // replace
        "template_5hp6rjm", // replace
        templateParams,
        "C9PU9En3ELJCHVOaj", // replace
      )
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Email error:", error);
        alert(error.text || "Error Occured");
      });
  };

  return (
    <div id="contact" className="contact-section">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h2 className="section-title">
            Contact <span className="highlight">Me</span>
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="contact-intro">
            Have a project in mind or want to work together? Feel free to reach
            out! I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="row g-5">
          {/* Left Side */}
          <div className="col-lg-5">
            {/* Info Cards */}
            <div className="row g-3 mb-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="col-sm-6">
                  <div className="contact-info-card">
                    <div className="contact-info-icon">{info.icon}</div>
                    <p className="contact-info-label">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="contact-info-value link">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Card */}
            <div className="contact-message-card">
              <h5 className="contact-msg-title">
                Let's build something <span className="highlight">amazing</span>{" "}
                together!
              </h5>
              <p className="contact-msg-desc">
                Whether you need a WordPress website, a React app, or a full
                MERN stack project — I'm here to help bring your vision to life.
              </p>
              <div className="availability-badge">
                <span className="availability-dot"></span>
                Available for Freelance Work
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4">
              <p className="social-label">FIND ME ON</p>
              <div className="d-flex gap-3 flex-wrap">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              {submitted ? (
                <div className="success-message text-center">
                  <div className="success-icon">🎉</div>
                  <h4 className="success-title">Message Sent Successfully!</h4>
                  <p className="success-desc">
                    Thank you for reaching out! I'll get back to you within 24
                    hours.
                  </p>
                  <button
                    className="btn hero-btn-primary mt-3"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h4 className="form-heading">Send Me a Message 💬</h4>
                  <p className="form-subheading">
                    Fill out the form below and I'll respond as soon as
                    possible.
                  </p>

                  {/* ✅ FORM START */}
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-sm-6">
                        <label className="form-label-custom">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Abdullah Khan"
                          required
                        />
                      </div>

                      <div className="col-sm-6">
                        <label className="form-label-custom">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="you@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label-custom">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Project Discussion / Hire Me / Collaboration"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label-custom">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Tell me about your project..."
                        rows="6"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn hero-btn-primary w-100"
                      disabled={
                        loading ||
                        !formData.name ||
                        !formData.email ||
                        !formData.subject ||
                        !formData.message
                      }
                    >
                      {loading ? (
                        <span>⏳ Sending...</span>
                      ) : (
                        <span>🚀 Send Message</span>
                      )}
                    </button>
                  </form>
                  {/* ✅ FORM END */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
