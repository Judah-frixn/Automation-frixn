import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import TickerBar from './components/TickerBar.jsx';
import Problem from './components/Problem.jsx';
import Solutions from './components/Solutions.jsx';
import Calculator from './components/Calculator.jsx';
import Industries from './components/Industries.jsx';
import Process from './components/Process.jsx';
import Impact from './components/Impact.jsx';
import ProofInAction from './components/ProofInAction.jsx';
import WhyUs from './components/WhyUs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Cinematic scroll reveal variants
const cinematicReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

const SectionWrapper = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={cinematicReveal}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <>
      {/* Large Ambient Glow Elements */}
      <div className="glow-wrapper" aria-hidden="true">
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>
        <div className="ambient-glow glow-3"></div>
        <div className="ambient-glow glow-4"></div>
      </div>

      {/* Cinematic Overlays */}
      <div className="film-grain" aria-hidden="true"></div>
      <div className="vignette-overlay" aria-hidden="true"></div>

      <CustomCursor />
      <Header />
      
      <main>
        <Hero />
        <TickerBar />
        <SectionWrapper><Problem /></SectionWrapper>
        <SectionWrapper><Solutions /></SectionWrapper>
        <SectionWrapper><Calculator /></SectionWrapper>
        <SectionWrapper><Industries /></SectionWrapper>
        <SectionWrapper><Process /></SectionWrapper>
        <SectionWrapper><Impact /></SectionWrapper>
        <SectionWrapper><ProofInAction /></SectionWrapper>
        <SectionWrapper><WhyUs /></SectionWrapper>
        <SectionWrapper><Contact /></SectionWrapper>
      </main>

      <Footer />
    </>
  );
}
