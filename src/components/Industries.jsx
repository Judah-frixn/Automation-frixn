import React from 'react';
import { motion } from 'framer-motion';
import { Target, Briefcase, Home, Heart, ShoppingCart, Rocket } from 'lucide-react';

const industriesData = [
  {
    icon: <Target size={20} />,
    title: "Sales Teams",
    desc: "Automate lead capture, follow-ups, CRM updates, and analytics reporting."
  },
  {
    icon: <Briefcase size={20} />,
    title: "Agencies",
    desc: "Streamline client onboarding, approval checkpoints, communication, and internal operations."
  },
  {
    icon: <Home size={20} />,
    title: "Real Estate",
    desc: "Capture inquiries instantly from listing sites, map criteria, and nurture prospects automatically."
  },
  {
    icon: <Heart size={20} />,
    title: "Healthcare & Clinics",
    desc: "Automate appointments, reminders, patient intake checklists, and secure communication channels."
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "E-commerce",
    desc: "Handle order notifications, custom customer support, inventory updates, and abandoned flows."
  },
  {
    icon: <Rocket size={20} />,
    title: "Startups",
    desc: "Build lean operational frameworks without scaling expensive headcount overhead unnecessarily."
  }
];

export default function Industries() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="industries">
      <div className="container">
        <span className="section-label">Tailored Integrations</span>
        
        <motion.h2 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Built for modern teams that move fast.
        </motion.h2>
        
        <div className="industries-grid">
          {industriesData.map((ind, idx) => (
            <motion.div 
              key={ind.title}
              className="industry-card glow-card"
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="industry-card-icon">
                {ind.icon}
              </div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
