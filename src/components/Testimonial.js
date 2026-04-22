import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Business Owner",
    company: "Hassan Traders",
    country: "🇵🇰 Pakistan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Abdullah did an amazing job building our WordPress website. Very professional, delivered on time and the design was exactly what we wanted. Highly recommended!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    company: "Digital Agency",
    country: "🇺🇸 USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Working with Abdullah was a great experience. He built our company website using React and it looks stunning. Very responsive and easy to communicate with.",
  },

  {
    id: 3,
    name: "Emily Clark",
    role: "Startup Founder",
    company: "TechStart",
    country: "🇬🇧 UK",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Abdullah redesigned our outdated website into a modern, fast and responsive one. The attention to detail and clean code was impressive. Will definitely work again!",
  },
  {
    id: 4,
    name: "Bilal Khan",
    role: "Restaurant Owner",
    company: "Khan's Kitchen",
    country: "🇵🇰 Pakistan",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    text: "Got my restaurant website built by Abdullah. Beautiful design, mobile friendly and very fast. Our customers love it and we get more online orders now. Great work!",
  },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="star">
          ⭐
        </span>
      ))}
    </div>
  );
}

function Testimonial() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () =>
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <div id="testimonials" className="testimonial-section">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <p className="section-subtitle">CLIENT FEEDBACK</p>
          <h2 className="section-title">
            What Clients <span className="highlight">Say</span>
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* Main Featured Testimonial */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="featured-testimonial">
              {/* Quote Icon */}
              <div className="quote-icon">"</div>

              {/* Text */}
              <p className="featured-text">{testimonials[active].text}</p>

              {/* Stars */}
              <Stars count={testimonials[active].rating} />

              {/* Author */}
              <div className="featured-author">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="author-img"
                />
                <div className="author-info">
                  <h5 className="author-name">{testimonials[active].name}</h5>
                  <p className="author-role">
                    {testimonials[active].role} — {testimonials[active].company}
                  </p>
                  <p className="author-country">
                    {testimonials[active].country}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <button className="nav-btn" onClick={prev}>
                  ← Prev
                </button>
                <div className="dots">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${active === i ? "active" : ""}`}
                      onClick={() => setActive(i)}
                    ></span>
                  ))}
                </div>
                <button className="nav-btn" onClick={next}>
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={t.id} className="col-lg-4 col-md-6">
              <div
                className={`testimonial-card ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {/* Header */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src={t.image} alt={t.name} className="card-img" />
                  <div>
                    <h6 className="card-name">{t.name}</h6>
                    <p className="card-role">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <Stars count={t.rating} />

                {/* Text */}
                <p className="card-text">"{t.text.substring(0, 100)}..."</p>

                {/* Country */}
                <p className="card-country">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
