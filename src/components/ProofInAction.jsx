import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    image: 'assets/testimonial_1.png',
    quote: "“AutomateLabs transformed our lead handling. We respond in seconds now.”",
    name: "Rohit Sharma",
    role: "CEO, Nexora",
    initials: "RS",
    glowColor: "rgba(59, 130, 246, 0.4)" // Blue
  },
  {
    image: 'assets/testimonial_2.png',
    quote: "“Their automation saved us 20+ hours every week. Absolute game changer.”",
    name: "Anita Verma",
    role: "Operations Head, Ojas",
    initials: "AV",
    glowColor: "rgba(139, 92, 246, 0.4)" // Violet
  },
  {
    image: 'assets/testimonial_3.png',
    quote: "“Everything runs in the background now. Our team can focus on what matters.”",
    name: "Karan Mehta",
    role: "Founder, Momentum",
    initials: "KM",
    glowColor: "rgba(59, 130, 246, 0.4)" // Blue
  }
];

export default function ProofInAction() {
  return (
    <section id="proof-in-action" className="proof-section">
      <div className="container">
        <span className="section-label">Proof in Action</span>
        <motion.h2 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Real automations. Real results.
        </motion.h2>

        <div className="proof-grid">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={t.name}
              className="proof-card glow-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="proof-image-wrapper">
                <img 
                  src={t.image} 
                  alt={`${t.name}'s Dashboard Mockup`} 
                  className="proof-image"
                  loading="lazy"
                />
                <div className="proof-image-overlay"></div>
              </div>
              
              <div className="proof-content">
                <p className="proof-quote">{t.quote}</p>
                
                <div className="proof-profile">
                  <div 
                    className="proof-avatar" 
                    style={{ 
                      boxShadow: `0 0 15px ${t.glowColor}`,
                      border: `1px solid ${t.glowColor}`
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="proof-meta">
                    <div className="proof-name">{t.name}</div>
                    <div className="proof-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
