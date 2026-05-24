import React from 'react';
import { motion } from 'framer-motion';

export default function Problem() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="problem">
      <div className="container">
        <span className="section-label">Operational Friction vs. Leverage</span>
        
        <motion.h2 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Most businesses don't have an execution problem.<br />
          <span className="orange-gradient">They have a workflow problem.</span>
        </motion.h2>
        
        <div className="problem-solution-grid">
          {/* WITHOUT US (Before) */}
          <motion.div 
            className="comparison-column before glow-card"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="comparison-badge">How Operations Run Today</span>
            <ul className="comparison-list">
              <li className="comparison-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>Teams chase updates manually</span>
              </li>
              <li className="comparison-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>Work gets stuck between tools</span>
              </li>
              <li className="comparison-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>Repetitive tasks waste hours</span>
              </li>
              <li className="comparison-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>Growth creates operational chaos</span>
              </li>
            </ul>
            <div className="comparison-footer">
              <strong>Result:</strong> More work. Less visibility.
            </div>
          </motion.div>
          
          {/* WITH US (After) */}
          <motion.div 
            className="comparison-column after glow-card"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="comparison-badge">How We Rebuild Them</span>
            <ul className="comparison-list">
              <li className="comparison-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Systems stay connected automatically</span>
              </li>
              <li className="comparison-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Workflows move without follow-ups</span>
              </li>
              <li className="comparison-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Repetitive operations run themselves</span>
              </li>
              <li className="comparison-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Operations scale without extra overhead</span>
              </li>
            </ul>
            <div className="comparison-footer">
              <strong>Result:</strong> Faster execution. Predictable growth.
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bold-quote-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="bold-quote">
            “The modern enterprise is built on systems, not memory. We design operational pipelines so your team can focus on leverage, not data transfer.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
