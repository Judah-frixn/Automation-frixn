import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 1.5, ease: 'easeOut' });
      return controls.stop;
    }
  }, [isInView, target, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const statsData = [
  {
    target: 68,
    suffix: "%",
    desc: "of enterprise team members report spending over 10 hours weekly on manual data coordination."
  },
  {
    target: 30,
    suffix: "%+",
    desc: "increase in operational output per team member following workflow implementation."
  },
  {
    target: 80,
    suffix: "%",
    desc: "reduction in response lag times for inbound customer and prospect inquiries."
  },
  {
    target: 90,
    suffix: "%+",
    desc: "decrease in unassigned or dropped records in customer management databases."
  },
  {
    target: 30,
    suffix: "h",
    desc: "administrative labor hours automated per department monthly on average."
  },
  {
    target: 24,
    suffix: "/7",
    desc: "continuous execution of background triggers outside standard office hours.",
    isTime: true
  }
];

export default function Impact() {
  return (
    <section id="impact">
      <div className="container">
        <span className="section-label">Measurable Outcomes</span>
        <motion.h2 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          What automation actually changes.
        </motion.h2>
        
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <motion.div 
              key={idx}
              className="stat-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="stat-number">
                {stat.isTime ? (
                  <span>24/7</span>
                ) : (
                  <Counter target={stat.target} suffix={stat.suffix} />
                )}
              </div>
              <p>{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
