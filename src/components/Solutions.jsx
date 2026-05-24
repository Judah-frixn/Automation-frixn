import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const workflowData = {
  'lead-gen': {
    title: "Lead Capture Automation",
    desc: "Instantly hook into your acquisition channels, process input triggers in fractions of a second, and dispatch customer engagements immediately without human lag.",
    features: [
      "Sub-second listeners intercept incoming webhooks.",
      "Contextual filtering separates real inquiries from noise.",
      "Instant dispatch pipelines route data to destination APIs."
    ],
    nodes: [
      { title: "Instagram Lead", triggerStatus: "TRIGGERED", doneStatus: "DONE" },
      { title: "AI Intent Qualifier", triggerStatus: "ANALYZING...", doneStatus: "PROCESSED" },
      { title: "WhatsApp Send", triggerStatus: "SENDING...", doneStatus: "COMPLETED" },
      { title: "HubSpot CRM", triggerStatus: "SYNCING...", doneStatus: "SYNCHRONIZED" }
    ]
  },
  'ai-follow': {
    title: "AI Follow-Up Systems",
    desc: "Deploy conversational models to read prospect queries, search local databases for accurate FAQs, compose replies, and schedule client meetings automatically.",
    features: [
      "Vector database lookup pulls custom business context.",
      "LLM evaluates schedules and suggests optimal slots.",
      "Polite, human-like follow-ups ensure leads don't go cold."
    ],
    nodes: [
      { title: "Inbound Email", triggerStatus: "RECEIVED", doneStatus: "DONE" },
      { title: "AI Reply Synthesizer", triggerStatus: "DRAFTING...", doneStatus: "PROCESSED" },
      { title: "Calendar Booker", triggerStatus: "CHECKING SLOTS", doneStatus: "COMPLETED" },
      { title: "Notion Project Hub", triggerStatus: "CREATING TASK", doneStatus: "SYNCHRONIZED" }
    ]
  },
  'internal-ops': {
    title: "AI Internal Operations",
    desc: "Automate manual data sorting, parse complex documents, cross-reference invoices, and alert team members via collaboration apps without any human typing.",
    features: [
      "OCR text extraction identifies pricing variables.",
      "Boolean approvals gate transactions based on pricing.",
      "Structured Slack digests notify channels of tasks."
    ],
    nodes: [
      { title: "Inbound Invoice", triggerStatus: "CAPTURED", doneStatus: "DONE" },
      { title: "AI OCR Parser", triggerStatus: "EXTRACTING...", doneStatus: "PROCESSED" },
      { title: "Slack Alert Engine", triggerStatus: "NOTIFYING...", doneStatus: "COMPLETED" },
      { title: "Airtable Ledger", triggerStatus: "LOGGING...", doneStatus: "SYNCHRONIZED" }
    ]
  }
};

const solutionsGrid = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    title: "Lead Ingestion",
    desc: "Capture inquiries from advertising and social platforms directly into your CRM within seconds. Zero manual entry, zero delayed responses.",
    points: [
      "API listeners catch webhooks instantly",
      "Duplicate check and contact verification",
      "Automatic lead routing and representative assignments"
    ],
    target: "Target: Ingest and assign leads under 5s"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    ),
    title: "Intelligent Response",
    desc: "Qualify inbound prospects, answer repetitive operational FAQs, and coordinate meetings automatically using custom-trained AI agents.",
    points: [
      "Semantic database query extracts accurate context",
      "LLM agents parse calendar grids for open slots",
      "Contextual email and WhatsApp drafts composed dynamically"
    ],
    target: "Target: 24/7 sub-2m first response coverage"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    title: "Direct Communication",
    desc: "Automate client onboarding, status updates, invoice dispatches, and notifications directly using WhatsApp Cloud API and email servers.",
    points: [
      "Onboarding documents dispatched upon webhook trigger",
      "Live WhatsApp notifications for project state changes",
      "Standardized transactional email templates and relays"
    ],
    target: "Target: Complete elimination of manual alerts"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 16V12"/><path d="M12 8h.01"/></svg>
    ),
    title: "Database Syncing",
    desc: "Keep your stack aligned. Link HubSpot, Airtable, Notion, and local database systems to prevent information silos.",
    points: [
      "Real-time records synchronization across channels",
      "Unified tracking dashboards for management overview",
      "Bi-directional field maps between relational tables"
    ],
    target: "Target: Zero human data reconciliation errors"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
    ),
    title: "Operational Routing",
    desc: "Parse incoming attachments, extract transactional data, coordinate team hand-offs, and automate internal approvals.",
    points: [
      "PDF document scanning using optical text recognition",
      "Approval routing based on custom spending limits",
      "Summary logs and approval prompts posted to Slack"
    ],
    target: "Target: Automated routing pathways for support"
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
    ),
    title: "Context-Aware Agents",
    desc: "Deploy digital assistants trained on your internal documentation hubs to retrieve records and process standard tasks.",
    points: [
      "Vector embeddings index internal knowledge systems",
      "Contextual search retrieves specifications in 500ms",
      "Dynamic escalation pathways route complex cases to staff"
    ],
    target: "Target: Safe, verified retrieval of complex data"
  }
];

export default function Solutions() {
  const [activeFlow, setActiveFlow] = useState('lead-gen');
  const [flowStep, setFlowStep] = useState(0);

  // Workflow steps cycling loop
  useEffect(() => {
    setFlowStep(0);
    const interval = setInterval(() => {
      setFlowStep(prev => (prev + 1) % 6);
    }, 2200);

    return () => clearInterval(interval);
  }, [activeFlow]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const getIconForNode = (idx) => {
    if (idx === 0) {
      // Zap Icon
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    } else if (idx === 1) {
      // Sparkles Icon
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>;
    } else if (idx === 2) {
      // Message Icon
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
    } else {
      // Database Icon
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>;
    }
  };

  const getNodeStatus = (idx) => {
    const data = workflowData[activeFlow].nodes[idx];
    if (flowStep === 4 || flowStep === 5) {
      return { text: data.doneStatus, active: true, done: true };
    }
    if (flowStep === idx) {
      return { text: data.triggerStatus, active: true, done: false };
    }
    if (flowStep > idx) {
      return { text: idx === 0 ? "DONE" : idx === 1 ? "PROCESSED" : "COMPLETED", active: true, done: true };
    }
    return { text: "WAITING", active: false, done: false };
  };

  return (
    <section id="solutions">
      <div className="container">
        <span className="section-label">Engineered Workflows</span>
        <motion.h2 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Custom automations built around<br />
          <span className="orange-gradient">how your business actually works.</span>
        </motion.h2>

        {/* Interactive Workflow Builder */}
        <div className="interactive-showcase">
          <motion.div 
            className="workspace-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="workspace-header">
              <span className="dashboard-title">INTERACTIVE WORKFLOW SIMULATOR</span>
              <div className="workspace-tabs">
                <button 
                  className={`workspace-tab ${activeFlow === 'lead-gen' ? 'active' : ''}`}
                  onClick={() => setActiveFlow('lead-gen')}
                >
                  Lead Capture
                </button>
                <button 
                  className={`workspace-tab ${activeFlow === 'ai-follow' ? 'active' : ''}`}
                  onClick={() => setActiveFlow('ai-follow')}
                >
                  AI Follow-Up
                </button>
                <button 
                  className={`workspace-tab ${activeFlow === 'internal-ops' ? 'active' : ''}`}
                  onClick={() => setActiveFlow('internal-ops')}
                >
                  Internal Ops
                </button>
              </div>
            </div>
            
            <div className="canvas-area">
              <svg className="connector-svg" id="workflow-connectors">
                {/* Connector Lines */}
                <path className="connector-line" d="M 180, 190 L 320, 190" />
                <path className={`connector-line-active ${flowStep >= 1 ? 'active' : ''}`} d="M 180, 190 L 320, 190" />
                
                <path className="connector-line" d="M 500, 190 L 640, 190" />
                <path className={`connector-line-active ${flowStep >= 2 ? 'active' : ''}`} d="M 500, 190 L 640, 190" />
                
                <path className="connector-line" d="M 820, 190 L 960, 190" />
                <path className={`connector-line-active ${flowStep >= 3 ? 'active' : ''}`} d="M 820, 190 L 960, 190" />
              </svg>
              
              <div className="workflow-nodes-container">
                {workflowData[activeFlow].nodes.map((node, idx) => {
                  const status = getNodeStatus(idx);
                  return (
                    <div 
                      key={node.title} 
                      className={`workflow-node ${status.active ? 'active' : ''}`}
                    >
                      <div className="node-icon-wrapper">
                        {getIconForNode(idx)}
                      </div>
                      <div className="node-title">{node.title}</div>
                      <div 
                        className="node-status"
                        style={{ 
                          color: status.done 
                            ? 'var(--success)' 
                            : status.active 
                            ? 'var(--accent-orange)' 
                            : 'var(--text-muted)' 
                        }}
                      >
                        {status.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="workspace-sidebar-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlow}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-gradient">{workflowData[activeFlow].title}</h3>
                <p>{workflowData[activeFlow].desc}</p>
                
                <ul className="info-feature-list">
                  {workflowData[activeFlow].features.map((feature, idx) => (
                    <li className="info-feature-item" key={idx}>
                      <span className="info-feature-item-num">{idx + 1}</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Solutions Cards Grid */}
        <div className="build-grid">
          {solutionsGrid.map((card, idx) => (
            <motion.div 
              key={card.title}
              className="glow-card build-card"
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="build-card-icon">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <ul className="build-card-list">
                {card.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
              <div className="build-card-result">
                <span className="metric-highlight">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  {card.target}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
