import React from 'react';
import { motion } from 'framer-motion';

export default function WhyUs() {
  return (
    <section id="why-us">
      <div className="container">
        <div className="why-us-layout">
          <motion.div 
            className="why-us-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Operational philosophy</span>
            <h2 className="text-gradient">We don’t sell templates.<br /><span className="orange-gradient">We build systems.</span></h2>
            <p>Generic, single-trigger integrations fail under real-world conditions. We build custom operational systems designed around process rules, data validations, and edge-case exceptions.</p>
            
            <div className="why-us-points">
              <div className="why-us-point">
                <div className="why-us-point-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div className="why-us-point-text">
                  <h4>Technical Process Audit</h4>
                  <p>We analyze and document your existing manual workflows before structuring any automations.</p>
                </div>
              </div>
              <div className="why-us-point">
                <div className="why-us-point-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div className="why-us-point-text">
                  <h4>Structured Exception Handling</h4>
                  <p>Every workflow is built with validation schemas to catch and log errors without failing silently.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="why-us-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <table className="why-us-comparison-table">
              <thead>
                <tr>
                  <th className="feature-col">Approach</th>
                  <th className="competitor-col">Standard Setup</th>
                  <th className="our-col">AutomateLabs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-col">Pipeline Logic</td>
                  <td className="competitor-col">Single-step Zap recipes</td>
                  <td className="our-col">Multi-branched API orchestrations</td>
                </tr>
                <tr>
                  <td className="feature-col">Error Tolerance</td>
                  <td className="competitor-col">Silent execution breaks</td>
                  <td className="our-col">Active error catching & retry rules</td>
                </tr>
                <tr>
                  <td className="feature-col">Context Delivery</td>
                  <td className="competitor-col">Static prompt templates</td>
                  <td className="our-col">Vector Database / RAG systems</td>
                </tr>
                <tr>
                  <td className="feature-col">Code Extensibility</td>
                  <td className="competitor-col">No custom scripting</td>
                  <td className="our-col">Custom NodeJS/Python logic blocks</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
