import React, { useState } from "react";
import "../styles/Testimonial.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "I wanted to switch from retail to tech but didn't know where to start. The career resources and AI-driven job matching helped me land a junior developer role that fits my goals perfectly.",
    name: "James R",
    title: "Junior Software Developer",
    imageLarge: "https://picsum.photos/400/400?random=1",
    imageSmall: "https://picsum.photos/64/64?random=1",
  },
  {
    quote:
      "The personalized coaching sessions were invaluable. My confidence soared, and I was able to negotiate a 20% higher salary than I initially planned. Highly recommend this platform!",
    name: "Sarah L",
    title: "Product Manager",
    imageLarge: "https://picsum.photos/400/400?random=2",
    imageSmall: "https://picsum.photos/64/64?random=2",
  },
  {
    quote:
      "As a seasoned professional, I appreciated the quality of the networking events. I connected with industry leaders who provided mentorship and opened up new growth opportunities.",
    name: "Michael K",
    title: "Senior UX Designer",
    imageLarge: "https://picsum.photos/400/400?random=3",
    imageSmall: "https://picsum.photos/64/64?random=3",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const nextTestimonial = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-grid">
          {/* Left Content */}
          <div className="testimonial-left">
            <p className="testimonial-eyebrow">Testimonial</p>
            <h2 className="testimonial-heading">Listen To What They Say.</h2>

            <div className="testimonial-controls">
              <div className="testimonial-arrows">
                <button onClick={prevTestimonial} className="arrow-btn prev">
                  <FaChevronLeft />
                </button>
                <button onClick={nextTestimonial} className="arrow-btn next">
                  <FaChevronRight />
                </button>
              </div>

              <div className="testimonial-thumbnails">
                {testimonials.map((t, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`thumbnail ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <img src={t.imageSmall} alt={t.name} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="testimonial-right">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src={current.imageLarge} alt={current.name} />
              </div>

              <div className="testimonial-content">
                <FaQuoteRight className="quote-icon" />
                <p className="testimonial-quote">"{current.quote}"</p>
                <div className="testimonial-author">
                  <h3>{current.name}</h3>
                  <p>{current.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
