import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Calculator() {
  const [minutes, setMinutes] = useState(5);

  const getSliderLabel = () => {
    if (minutes < 1) {
      return "Immediate (< 1m)";
    } else if (minutes === 1) {
      return "1 Minute";
    } else if (minutes >= 60) {
      const hrs = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hrs}h ${mins > 0 ? mins + 'm' : ''}`;
    } else {
      return `${minutes} Minutes`;
    }
  };

  // Perform calculation metrics
  const getMetrics = () => {
    let conversionMultiplier = '1.0x';
    let lossRate = '96%';
    let glowSize = 0.2;
    let desc = 'Maximum lead drop. Workflows require automated speed hooks.';
    let probColor = 'var(--text-secondary)';
    let lossColor = 'var(--error)';

    if (minutes <= 5) {
      const ratio = (minutes - 1) / 4; // 0 to 1
      const multVal = 21 - (ratio * 3);
      conversionMultiplier = `${multVal.toFixed(1)}x`;
      
      const lossVal = Math.round(4 + (ratio * 12));
      lossRate = `${lossVal}%`;
      
      glowSize = 1.3 - (ratio * 0.3);
      desc = 'Optimal respond window. Highly likely to qualify and close.';
      probColor = 'var(--accent-orange)';
      lossColor = 'var(--success)';
    } else if (minutes <= 15) {
      const ratio = (minutes - 5) / 10;
      const multVal = 18 - (ratio * 10);
      conversionMultiplier = `${multVal.toFixed(1)}x`;
      
      const lossVal = Math.round(16 + (ratio * 24));
      lossRate = `${lossVal}%`;
      
      glowSize = 1.0 - (ratio * 0.4);
      desc = 'Interest cooling. Competitors are starting to capture attention.';
      probColor = 'var(--success)';
      lossColor = 'var(--warning)';
    } else if (minutes <= 30) {
      const ratio = (minutes - 15) / 15;
      const multVal = 8 - (ratio * 4);
      conversionMultiplier = `${multVal.toFixed(1)}x`;
      
      const lossVal = Math.round(40 + (ratio * 20));
      lossRate = `${lossVal}%`;
      
      glowSize = 0.6 - (ratio * 0.25);
      desc = 'Cold lead. Drastic drop-off in user engagement.';
      probColor = 'var(--success)';
      lossColor = 'var(--warning)';
    } else if (minutes <= 60) {
      const ratio = (minutes - 30) / 30;
      const multVal = 4 - (ratio * 2.5);
      conversionMultiplier = `${multVal.toFixed(1)}x`;
      
      const lossVal = Math.round(60 + (ratio * 22));
      lossRate = `${lossVal}%`;
      
      glowSize = 0.35 - (ratio * 0.15);
      desc = 'Prospect has likely navigated off-site or closed search.';
      probColor = 'var(--text-secondary)';
      lossColor = 'var(--error)';
    } else {
      const ratio = Math.min((minutes - 60) / 60, 1.0);
      const multVal = 1.5 - (ratio * 0.5);
      conversionMultiplier = `${multVal.toFixed(1)}x`;
      
      const lossVal = Math.round(82 + (ratio * 14));
      lossRate = `${lossVal}%`;
      
      glowSize = 0.2;
      desc = 'Prospect has likely converted to a competitor.';
      probColor = 'var(--text-secondary)';
      lossColor = 'var(--error)';
    }

    return { conversionMultiplier, lossRate, glowSize, desc, probColor, lossColor };
  };

  const { conversionMultiplier, lossRate, glowSize, desc, probColor, lossColor } = getMetrics();

  return (
    <section id="calculator">
      <div className="container">
        <motion.div 
          className="calculator-showcase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="calculator-grid">
            <div className="calculator-left">
              <span className="section-label" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Operational Speed Impact</span>
              <h3 className="text-gradient">How fast do you capture interest?</h3>
              <p>Responding to a prospect within 5 minutes versus 1 hour isn't a minor difference — it changes your entire customer acquisition economics. Move the slider below to see the impact of response times on your team’s metrics.</p>
              
              <div className="slider-container">
                <div className="slider-header">
                  <span>Your Time to Respond</span>
                  <span className="slider-value">{getSliderLabel()}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="120" 
                  value={minutes} 
                  className="slider-element"
                  onChange={(e) => setMinutes(parseInt(e.target.value))}
                />
                <div className="slider-labels">
                  <span>Immediate (&lt; 1m)</span>
                  <span>30m</span>
                  <span>1 Hour</span>
                  <span>2 Hours+</span>
                </div>
              </div>
            </div>
            
            <div className="calculator-right">
              {/* Dynamic glow scaling with spring animation */}
              <motion.div 
                className="calc-radial-glow"
                animate={{ scale: glowSize }}
                transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              />
              
              <div className="calc-outputs">
                <div className="calc-output-card">
                  <div className="calc-output-title">Conversion Probability</div>
                  <motion.div 
                    className="calc-output-value highlight"
                    style={{ color: probColor }}
                    animate={{ scale: [0.95, 1.02, 1] }}
                    key={conversionMultiplier}
                    transition={{ duration: 0.2 }}
                  >
                    {conversionMultiplier}
                  </motion.div>
                  <div className="calc-output-desc">{desc}</div>
                </div>
                <div className="calc-output-card">
                  <div className="calc-output-title">Est. Lead Loss Rate</div>
                  <motion.div 
                    className="calc-output-value"
                    style={{ color: lossColor }}
                    animate={{ scale: [0.95, 1.02, 1] }}
                    key={lossRate}
                    transition={{ duration: 0.2 }}
                  >
                    {lossRate}
                  </motion.div>
                  <div className="calc-output-desc">Minimal abandonment due to delays.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
