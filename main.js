document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // Mobile Navigation Hamburger Toggle
  // ==========================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close menu when links are clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // ==========================================
  // Mouse Hover Glow Effect (Premium Card lighting)
  // ==========================================
  const cards = document.querySelectorAll('.glow-card, .industry-card, .comparison-column');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ==========================================
  // Scroll Reveal Observer
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal-element');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // Animated Counters
  // ==========================================
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const countUp = (element) => {
    const target = parseFloat(element.getAttribute('data-target'));
    const isPercent = element.innerText.includes('%');
    const isPlus = element.innerText.includes('+');
    const isHours = element.innerText.includes('h');
    
    let current = 0;
    const duration = 1500; // ms
    const stepTime = 15;
    const steps = duration / stepTime;
    const increment = target / steps;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      let suffix = '';
      if (isPercent) suffix = '%';
      if (isPlus) suffix = '%+';
      if (isHours) suffix = 'h';
      
      // Formatting specific metrics
      if (element.innerText.includes('hrs/week')) {
        element.innerText = `${Math.round(current)}–30 hrs/week`;
      } else {
        element.innerText = `${Math.round(current)}${suffix}`;
      }
    }, stepTime);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => counterObserver.observe(num));

  // ==========================================
  // Live Dashboard Simulator (Hero Section)
  // ==========================================
  let automationCount = 142840;
  let currentMode = 'operations';
  const counterVal = document.getElementById('counter-automations');
  const consoleLog = document.getElementById('live-console-log');
  const runtimeStatusLabel = document.getElementById('runtime-status-label');

  // Widgets elements
  const widget1Title = document.getElementById('widget-1-title');
  const widget1Val = document.getElementById('widget-1-val');
  const widget1Sub = document.getElementById('widget-1-sub');
  
  const widget2Title = document.getElementById('widget-2-title');
  const widget2Sub = document.getElementById('widget-2-sub');
  
  const widget3Title = document.getElementById('widget-3-title');
  const widget3Val = document.getElementById('widget-3-val');
  const widget3Sub = document.getElementById('widget-3-sub');

  // Mode configurations
  const dashboardModes = {
    operations: {
      widgets: {
        w1: { title: "Active Pipelines", val: "14", sub: `<span class="logo-dot" style="position:relative; display:inline-block; margin-right:4px;"></span> Running (24/7)` },
        w2: { title: "Automations Ran", val: "142,840", sub: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg> +18.4% this week` },
        w3: { title: "Time Reclaimed", val: "348 Hrs", sub: "This month's tally" }
      },
      status: "● STATUS: OPTIMAL",
      statusColor: "var(--accent-orange)",
      initialLogs: [
        { type: 'info', msg: 'System initialising...' },
        { type: 'success', msg: 'Connected to HubSpot CRM, WhatsApp Cloud API, and Stripe successfully.' },
        { type: 'info', msg: 'Listening for active business events...' }
      ],
      logs: [
        { type: 'info', msg: 'Intercepted trigger: WhatsApp inbound query from lead "Marcus T."' },
        { type: 'ai', msg: 'Routing prompt context to Claude-3.5-Sonnet. Verifying intent...' },
        { type: 'success', msg: 'AI qualified Marcus T. Intent: Premium Plan onboarding request.' },
        { type: 'crm', msg: 'Syncing details to HubSpot. HubSpot ID: hs_839521.' },
        { type: 'action', msg: 'Dispatching meeting slot selections via WhatsApp.' },
        { type: 'info', msg: 'New form capture from Meta Ads Campaign: "Venture Capital Ops"' },
        { type: 'crm', msg: 'Airtable operational log appended. Column status updated to [Dispatched]' },
        { type: 'ai', msg: 'AI Agent drafted custom proposal reply for "Innovate Corp".' },
        { type: 'success', msg: 'Proposal approved & auto-sent. Stripe invoice draft queued.' }
      ]
    },
    integrations: {
      widgets: {
        w1: { title: "API Endpoints", val: "42", sub: "Connected & active" },
        w2: { title: "Sync Rate", val: "99.98%", sub: "No dropped packets" },
        w3: { title: "Channels Linked", val: "8 APIs", sub: "HubSpot, Stripe, Slack, etc." }
      },
      status: "● STATUS: LIVE_SYNC",
      statusColor: "var(--success)",
      initialLogs: [
        { type: 'info', msg: 'Establishing OAuth handshakes across 8 active SaaS channels...' },
        { type: 'success', msg: 'Auth status: OK for Stripe API, Salesforce API, Slack API, Google API.' }
      ],
      logs: [
        { type: 'info', msg: 'Polling Stripe webhook events... webhook signature verified.' },
        { type: 'success', msg: 'Event invoice.payment_succeeded captured. Amount: $4,200.00' },
        { type: 'crm', msg: 'Syncing billing status to HubSpot CRM contact record hs_381920.' },
        { type: 'info', msg: 'Slack API notification routed to channel #operations-feed.' },
        { type: 'success', msg: 'Cal.com booking webhook resolved. Calendar slot reserved for prospect.' },
        { type: 'info', msg: 'Checking Gmail inbox via SMTP relay for unrouted support tickets.' },
        { type: 'crm', msg: 'Database query: Updated contact HubSpot ID with custom billing tag.' }
      ]
    },
    agents: {
      widgets: {
        w1: { title: "Active Agents", val: "6 Clusters", sub: "Language model pools" },
        w2: { title: "Avg Latency", val: "1.2s", sub: "Sub-second response target" },
        w3: { title: "Token Efficiency", val: "94.6%", sub: "Context caching active" }
      },
      status: "● STATUS: AGENTS_IDLE",
      statusColor: "var(--text-secondary)",
      initialLogs: [
        { type: 'info', msg: 'LLM agents warmed up. Embeddings database index optimized.' },
        { type: 'success', msg: 'Semantic search indices live. Connection latency: 28ms.' }
      ],
      logs: [
        { type: 'ai', msg: 'Inbound WhatsApp text: "Can you send the contract pricing?"' },
        { type: 'ai', msg: 'Retrieving context from semantic database. Vector similarity: 0.92.' },
        { type: 'success', msg: 'Drafted contextual FAQ answer with custom catalog links.' },
        { type: 'ai', msg: 'Analyzing customer email intent... Detected classification: [High Priority Escalation]' },
        { type: 'success', msg: 'Assigned case to client success manager and drafted pre-response.' },
        { type: 'ai', msg: 'Processing document input... Parsed invoice PDF with 99.8% field confidence.' }
      ]
    },
    logic: {
      widgets: {
        w1: { title: "Active Rules", val: "187 Gates", sub: "Conditional routers" },
        w2: { title: "Execution Safety", val: "100.0%", sub: "Sandbox validators active" },
        w3: { title: "Logical Branches", val: "12 Flows", sub: "Multi-path pipelines" }
      },
      status: "● STATUS: ACTIVE_ENGINES",
      statusColor: "var(--accent-orange)",
      initialLogs: [
        { type: 'info', msg: 'Loading custom logic nodes from schema config...' },
        { type: 'success', msg: '187 logical gate conditions compiled successfully. Sandbox active.' }
      ],
      logs: [
        { type: 'info', msg: 'Lead incoming: Annual Revenue: $500k. Evaluating priority rule.' },
        { type: 'success', msg: 'Branch matched: Revenue > $250k. Route to Premium VIP Sequence.' },
        { type: 'info', msg: 'Evaluating timezone gate. Client local time: 10:14 PM (UTC -5).' },
        { type: 'success', msg: 'TimeZone Check: Delayed SMS dispatch until 9:00 AM local time.' },
        { type: 'info', msg: 'Error check trigger: API endpoint returned 502 Bad Gateway.' },
        { type: 'ai', msg: 'Fallback rule initiated: Rerouted payload to backup queue DB.' },
        { type: 'success', msg: 'Backup queue processed successfully. Data saved to secondary storage.' }
      ]
    }
  };

  function renderWidget(elementVal, elementSub, value, subtext) {
    if (elementVal) elementVal.innerText = value;
    if (elementSub) elementSub.innerHTML = subtext;
  }

  function renderLogs(logsArray) {
    if (!consoleLog) return;
    consoleLog.innerHTML = '';
    logsArray.forEach(log => {
      const p = document.createElement('p');
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      p.innerText = `[${timeStr}] ${log.msg}`;
      if (log.type === 'success') {
        p.style.color = 'var(--success)';
      } else if (log.type === 'ai') {
        p.style.color = 'var(--accent-orange)';
      } else if (log.type === 'info') {
        p.style.color = 'var(--text-muted)';
      }
      consoleLog.appendChild(p);
    });
    consoleLog.scrollTop = consoleLog.scrollHeight;
  }

  // Sidebar navigation click handlers
  const sidebarItems = document.querySelectorAll('.sidebar-nav-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-dash-tab');
      if (!targetTab || !dashboardModes[targetTab]) return;
      
      // Update sidebar active classes
      sidebarItems.forEach(sib => sib.classList.remove('active'));
      item.classList.add('active');
      
      // Switch mode
      currentMode = targetTab;
      const config = dashboardModes[currentMode];
      
      // Update runtime labels
      if (runtimeStatusLabel) {
        runtimeStatusLabel.innerText = config.status;
        runtimeStatusLabel.style.color = config.statusColor;
      }
      
      // Update widgets
      if (widget1Title) widget1Title.innerText = config.widgets.w1.title;
      renderWidget(widget1Val, widget1Sub, config.widgets.w1.val, config.widgets.w1.sub);
      
      if (widget2Title) widget2Title.innerText = config.widgets.w2.title;
      // For widget 2, if we are in operations mode, use our live ticking automationCount counter
      if (currentMode === 'operations') {
        renderWidget(counterVal, widget2Sub, automationCount.toLocaleString(), config.widgets.w2.sub);
      } else {
        renderWidget(counterVal, widget2Sub, config.widgets.w2.val, config.widgets.w2.sub);
      }
      
      if (widget3Title) widget3Title.innerText = config.widgets.w3.title;
      renderWidget(widget3Val, widget3Sub, config.widgets.w3.val, config.widgets.w3.sub);
      
      // Load initial logs
      renderLogs(config.initialLogs);
    });
  });

  function updateDashboard() {
    // 1. Tick up total automation runs
    const add = Math.floor(Math.random() * 3) + 1;
    automationCount += add;
    
    // Only update live counter value on widget if active tab is operations
    if (currentMode === 'operations' && counterVal) {
      counterVal.innerText = automationCount.toLocaleString();
    }

    // 2. Append simulated logs
    if (consoleLog) {
      const modeConfig = dashboardModes[currentMode];
      const templates = modeConfig.logs;
      const template = templates[Math.floor(Math.random() * templates.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      
      const logLine = document.createElement('p');
      if (template.type === 'success') {
        logLine.style.color = 'var(--success)';
      } else if (template.type === 'ai') {
        logLine.style.color = 'var(--accent-orange)';
      } else if (template.type === 'info') {
        logLine.style.color = 'var(--text-muted)';
      }
      
      logLine.innerText = `[${timeStr}] ${template.msg}`;
      consoleLog.appendChild(logLine);
      
      // Keep only last 8 logs to prevent overflow
      while (consoleLog.children.length > 7) {
        consoleLog.removeChild(consoleLog.firstChild);
      }
      consoleLog.scrollTop = consoleLog.scrollHeight;
    }
  }

  // Run initial iterations
  setInterval(updateDashboard, 3000);

  // ==========================================
  // Interactive Workflow Builder logic
  // ==========================================
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
        { title: "Instagram Lead", status: "TRIGGERED" },
        { title: "AI Intent Qualifier", status: "ANALYZING..." },
        { title: "WhatsApp Send", status: "SENDING..." },
        { title: "HubSpot CRM", status: "SYNCING..." }
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
        { title: "Inbound Email", status: "RECEIVED" },
        { title: "AI Reply Synthesizer", status: "DRAFTING..." },
        { title: "Calendar Booker", status: "CHECKING SLOTS" },
        { title: "Notion Project Hub", status: "CREATING TASK" }
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
        { title: "Inbound Invoice", status: "CAPTURED" },
        { title: "AI OCR Parser", status: "EXTRACTING..." },
        { title: "Slack Alert Engine", status: "NOTIFYING..." },
        { title: "Airtable Ledger", status: "LOGGING..." }
      ]
    }
  };

  const tabs = document.querySelectorAll('.workspace-tab');
  const nodeTrigger = document.getElementById('node-trigger');
  const nodeAI = document.getElementById('node-ai');
  const nodeAction = document.getElementById('node-action');
  const nodeCRM = document.getElementById('node-crm');
  
  const nodeTriggerTitle = document.getElementById('node-trigger-title');
  const nodeTriggerStatus = document.getElementById('node-trigger-status');
  const nodeAITitle = document.getElementById('node-ai-title');
  const nodeAIStatus = document.getElementById('node-ai-status');
  const nodeActionTitle = document.getElementById('node-action-title');
  const nodeActionStatus = document.getElementById('node-action-status');
  const nodeCRMTitle = document.getElementById('node-crm-title');
  const nodeCRMStatus = document.getElementById('node-crm-status');

  const line1Active = document.getElementById('line-1-active');
  const line2Active = document.getElementById('line-2-active');
  const line3Active = document.getElementById('line-3-active');

  const flowTitle = document.getElementById('flow-info-title');
  const flowDesc = document.getElementById('flow-info-desc');
  const flowList = document.getElementById('flow-info-list');

  let activeFlow = 'lead-gen';
  let flowStep = 0;
  let workflowTimer = null;

  function setWorkflowTab(flowKey) {
    activeFlow = flowKey;
    const data = workflowData[flowKey];

    // Update Text Content
    flowTitle.innerText = data.title;
    flowDesc.innerText = data.desc;
    
    // Clear list and recreate
    flowList.innerHTML = '';
    data.features.forEach((feature, idx) => {
      const li = document.createElement('li');
      li.className = 'info-feature-item';
      li.innerHTML = `<span class="info-feature-item-num">${idx + 1}</span><span>${feature}</span>`;
      flowList.appendChild(li);
    });

    // Reset Nodes
    nodeTriggerTitle.innerText = data.nodes[0].title;
    nodeAITitle.innerText = data.nodes[1].title;
    nodeActionTitle.innerText = data.nodes[2].title;
    nodeCRMTitle.innerText = data.nodes[3].title;

    // Reset animation
    clearInterval(workflowTimer);
    flowStep = 0;
    runWorkflowAnimation();
    workflowTimer = setInterval(runWorkflowAnimation, 2200);
  }

  function runWorkflowAnimation() {
    const data = workflowData[activeFlow];
    
    // Reset all states
    const nodes = [nodeTrigger, nodeAI, nodeAction, nodeCRM];
    const statuses = [nodeTriggerStatus, nodeAIStatus, nodeActionStatus, nodeCRMStatus];
    const lines = [line1Active, line2Active, line3Active];

    nodes.forEach(n => n.classList.remove('active'));
    statuses.forEach((s, idx) => {
      s.innerText = 'WAITING';
      s.style.color = 'var(--text-muted)';
    });
    lines.forEach(l => l.classList.remove('active'));

    // Apply active frames
    if (flowStep === 0) {
      nodeTrigger.classList.add('active');
      nodeTriggerStatus.innerText = data.nodes[0].status;
      nodeTriggerStatus.style.color = 'var(--accent-orange)';
    } else if (flowStep === 1) {
      nodeTrigger.classList.add('active');
      nodeTriggerStatus.innerText = "DONE";
      nodeTriggerStatus.style.color = 'var(--success)';
      
      line1Active.classList.add('active');
      nodeAI.classList.add('active');
      nodeAIStatus.innerText = data.nodes[1].status;
      nodeAIStatus.style.color = 'var(--accent-orange)';
    } else if (flowStep === 2) {
      nodeTrigger.classList.add('active');
      nodeTriggerStatus.innerText = "DONE";
      nodeTriggerStatus.style.color = 'var(--success)';
      
      nodeAI.classList.add('active');
      nodeAIStatus.innerText = "PROCESSED";
      nodeAIStatus.style.color = 'var(--success)';
      
      line1Active.classList.add('active');
      line2Active.classList.add('active');
      nodeAction.classList.add('active');
      nodeActionStatus.innerText = data.nodes[2].status;
      nodeActionStatus.style.color = 'var(--accent-orange)';
    } else if (flowStep === 3) {
      nodeTrigger.classList.add('active');
      nodeTriggerStatus.innerText = "DONE";
      nodeTriggerStatus.style.color = 'var(--success)';
      
      nodeAI.classList.add('active');
      nodeAIStatus.innerText = "PROCESSED";
      nodeAIStatus.style.color = 'var(--success)';
      
      nodeAction.classList.add('active');
      nodeActionStatus.innerText = "COMPLETED";
      nodeActionStatus.style.color = 'var(--success)';
      
      line1Active.classList.add('active');
      line2Active.classList.add('active');
      line3Active.classList.add('active');
      nodeCRM.classList.add('active');
      nodeCRMStatus.innerText = data.nodes[3].status;
      nodeCRMStatus.style.color = 'var(--accent-orange)';
    } else if (flowStep === 4) {
      // Complete state
      nodes.forEach(n => n.classList.add('active'));
      lines.forEach(l => l.classList.add('active'));
      
      nodeTriggerStatus.innerText = "DONE";
      nodeAIStatus.innerText = "PROCESSED";
      nodeActionStatus.innerText = "COMPLETED";
      nodeCRMStatus.innerText = "SYNCHRONIZED";
      
      statuses.forEach(s => s.style.color = 'var(--success)');
    }

    flowStep = (flowStep + 1) % 6; // 6 frames includes a pause frame at the end
  }

  // Click listeners on Tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      setWorkflowTab(tab.getAttribute('data-flow'));
    });
  });

  // Start initial workflow animation loop
  setWorkflowTab('lead-gen');


  // ==========================================
  // Interactive Lead Speed Calculator logic
  // ==========================================
  const slider = document.getElementById('response-time-slider');
  const sliderValLabel = document.getElementById('response-time-val');
  const calcProbVal = document.getElementById('calc-prob-val');
  const calcProbDesc = document.getElementById('calc-prob-desc');
  const calcLossVal = document.getElementById('calc-loss-val');
  const calcGlow = document.getElementById('calculator-glow');

  if (slider) {
    slider.addEventListener('input', () => {
      const minutes = parseInt(slider.value);
      
      // Update label
      if (minutes < 1) {
        sliderValLabel.innerText = "Immediate (< 1m)";
      } else if (minutes === 1) {
        sliderValLabel.innerText = "1 Minute";
      } else if (minutes >= 60) {
        const hrs = Math.floor(minutes / 60);
        const mins = minutes % 60;
        sliderValLabel.innerText = `${hrs}h ${mins > 0 ? mins + 'm' : ''}`;
      } else {
        sliderValLabel.innerText = `${minutes} Minutes`;
      }

      // Calculations and UI transitions
      let conversionMultiplier = '1x';
      let lossRate = '95%';
      let glowSize = 0.5; // Scale multiplier
      let desc = 'Lead has likely converted to a competitor.';

      if (minutes <= 5) {
        // High impact conversion
        // Scale 21x down to 18x
        const ratio = (minutes - 1) / 4; // 0 to 1
        const multVal = 21 - (ratio * 3);
        conversionMultiplier = `${multVal.toFixed(1)}x`;
        
        const lossVal = Math.round(4 + (ratio * 12));
        lossRate = `${lossVal}%`;
        
        glowSize = 1.3 - (ratio * 0.3);
        desc = 'Optimal respond window. Highly likely to qualify and close.';
      } else if (minutes <= 15) {
        // Mid impact
        const ratio = (minutes - 5) / 10;
        const multVal = 18 - (ratio * 10); // 18x to 8x
        conversionMultiplier = `${multVal.toFixed(1)}x`;
        
        const lossVal = Math.round(16 + (ratio * 24));
        lossRate = `${lossVal}%`;
        
        glowSize = 1.0 - (ratio * 0.4);
        desc = 'Interest cooling. Competitors are starting to capture attention.';
      } else if (minutes <= 30) {
        const ratio = (minutes - 15) / 15;
        const multVal = 8 - (ratio * 4); // 8x to 4x
        conversionMultiplier = `${multVal.toFixed(1)}x`;
        
        const lossVal = Math.round(40 + (ratio * 20));
        lossRate = `${lossVal}%`;
        
        glowSize = 0.6 - (ratio * 0.25);
        desc = 'Cold lead. Drastic drop-off in user engagement.';
      } else if (minutes <= 60) {
        const ratio = (minutes - 30) / 30;
        const multVal = 4 - (ratio * 2.5); // 4x to 1.5x
        conversionMultiplier = `${multVal.toFixed(1)}x`;
        
        const lossVal = Math.round(60 + (ratio * 22));
        lossRate = `${lossVal}%`;
        
        glowSize = 0.35 - (ratio * 0.15);
        desc = 'Prospect has likely navigated off-site or closed search.';
      } else {
        const ratio = Math.min((minutes - 60) / 60, 1.0);
        const multVal = 1.5 - (ratio * 0.5); // 1.5x to 1x
        conversionMultiplier = `${multVal.toFixed(1)}x`;
        
        const lossVal = Math.round(82 + (ratio * 14));
        lossRate = `${lossVal}%`;
        
        glowSize = 0.2;
        desc = 'Maximum lead drop. Workflows require automated speed hooks.';
      }

      // Update HTML Elements
      calcProbVal.innerText = conversionMultiplier;
      calcLossVal.innerText = lossRate;
      calcProbDesc.innerText = desc;
      
      // Update visual indicators
      if (calcGlow) {
        calcGlow.style.transform = `translate(-50%, -50%) scale(${glowSize})`;
      }
      
      // Color coding for visual emphasis
      if (minutes <= 5) {
        calcProbVal.style.color = 'var(--accent-orange)';
        calcLossVal.style.color = 'var(--success)';
      } else if (minutes <= 30) {
        calcProbVal.style.color = 'var(--success)';
        calcLossVal.style.color = 'var(--warning)';
      } else {
        calcProbVal.style.color = 'var(--text-secondary)';
        calcLossVal.style.color = 'var(--error)';
      }
    });

    // Fire input event once on mount to establish base styles
    slider.dispatchEvent(new Event('input'));
  }


  // ==========================================
  // Stepper Active Step Progress Tracking
  // ==========================================
  const stepItems = document.querySelectorAll('.step-item');
  const progressBar = document.getElementById('step-progress-bar');
  const stepperContainer = document.querySelector('.stepper-container');

  if (stepperContainer && stepItems.length > 0) {
    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepNum = parseInt(entry.target.getAttribute('data-step'));
          
          // Toggle active classes on steps
          stepItems.forEach((item, idx) => {
            if (idx < stepNum) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });

          // Calculate height fill percent
          const percent = ((stepNum - 1) / (stepItems.length - 1)) * 100;
          if (progressBar) {
            progressBar.style.height = `${percent}%`;
          }
        }
      });
    }, {
      threshold: 0.6,
      rootMargin: '0px 0px -150px 0px'
    });

    stepItems.forEach(item => stepObserver.observe(item));
  }

});
