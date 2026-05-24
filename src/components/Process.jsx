import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const stepsData = [
  {
    num: "01",
    step: 1,
    title: "Discovery",
    desc: "We trace your manual processes, mapping data schemas, API entry points, database logic, and operational edge cases."
  },
  {
    num: "02",
    step: 2,
    title: "System Architecture",
    desc: "We design structural system blueprints, defining API logic paths, data flow bounds, relational mappings, and security parameters."
  },
  {
    num: "03",
    step: 3,
    title: "Engineering",
    desc: "We build custom script runtimes, configure authentication relays, construct logic branch gates, and deploy vector search indices."
  },
  {
    num: "04",
    step: 4,
    title: "Telemetry & Uptime",
    desc: "We perform load testing, implement exception handlers, configure runtime alerts, and monitor database sync parity logs."
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
      rootMargin: '0px 0px -150px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepNum = parseInt(entry.target.getAttribute('data-step'));
          setActiveStep(stepNum);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Copy current refs to keep stable binding
    const currentRefs = stepRefs.current;
    currentRefs.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const progressPercent = ((activeStep - 1) / (stepsData.length - 1)) * 100;

  return (
    <section id="process">
      <div className="container">
        <span className="section-label">Proven Methodology</span>
        <motion.h2 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Simple systems. Real operational impact.
        </motion.h2>
        
        <div className="stepper-container">
          <div className="stepper-line"></div>
          {/* Active progress tracker with spring physics for height transition */}
          <motion.div 
            className="stepper-progress" 
            id="step-progress-bar"
            animate={{ height: `${progressPercent}%` }}
            transition={{ type: 'spring', stiffness: 50, damping: 12 }}
          />
          
          {stepsData.map((item, idx) => {
            const isActive = idx < activeStep;
            return (
              <div 
                key={item.title}
                ref={el => stepRefs.current[idx] = el}
                className={`step-item ${isActive ? 'active' : ''}`}
                data-step={item.step}
              >
                <div className="step-marker">{item.num}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
