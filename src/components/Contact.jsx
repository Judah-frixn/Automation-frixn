import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="final-cta" id="contact">
      <div className="container">
        <motion.div 
          className="final-cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="final-cta-content">
            <span className="section-label">Infrastructure Scaling</span>
            <h2 className="text-gradient">The businesses growing fastest today aren’t working harder.<br /><span className="orange-gradient">They’re automating smarter.</span></h2>
            <p>Whether you need lead automation, AI workflows, operational systems, or fully customized automations — we help you build infrastructure that scales.</p>
            
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              style={{ padding: '1.1rem 2.2rem', fontSize: '1.05rem' }}
            >
              Book Your Free Strategy Call
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            
            <ul className="cta-bullets">
              <li>No generic templates.</li>
              <li>No unnecessary complexity.</li>
              <li>Just intelligent systems built around your business.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
