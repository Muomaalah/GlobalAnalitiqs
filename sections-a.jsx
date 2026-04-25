/* Services, Process, Cases */

const ServicesSection = () => {
  const services = [
    {
      n: "01",
      title: "Power Apps & Code Apps",
      desc: "Custom business applications built on the Microsoft Power Platform — from low-code canvas apps to fully-coded TypeScript Code Apps that run inside Power Apps with the governance enterprises require.",
      tags: ["Canvas apps", "Model-driven", "Code Apps"]
    },
    {
      n: "02",
      title: "SharePoint & Microsoft 365 intranets",
      desc: "Modern, on-brand intranets and digital workplaces on SharePoint Online — communications sites, hub architectures, and reusable section mockups your team can actually maintain.",
      tags: ["SharePoint", "M365", "SPFx"]
    },
    {
      n: "03",
      title: "Power Automate & workflow automation",
      desc: "Automate the manual, high-volume work hiding inside operations, HR and finance. Approvals, document flows, notifications, and data sync between the systems you already pay for.",
      tags: ["Power Automate", "Approvals", "RPA"]
    },
    {
      n: "04",
      title: "Microsoft integration & Azure architecture",
      desc: "Integration design across Azure, Power Platform, Microsoft 365 and Dynamics — using the same enterprise stencil libraries, patterns and reference architectures we publish back to the community.",
      tags: ["Azure", "API Mgmt", "Logic Apps"]
    },
    {
      n: "05",
      title: "Power BI & data analytics",
      desc: "Dataverse and Power BI models that turn operational data from Dynamics, SharePoint and line-of-business systems into the dashboards leadership actually opens every Monday.",
      tags: ["Power BI", "Dataverse", "Fabric"]
    },
    {
      n: "06",
      title: "AI-assisted delivery with Claude Code",
      desc: "We ship faster by pairing senior engineers with Claude Code and Copilot in a controlled delivery workflow — type-safe, reviewed, and locked to enterprise reliability standards.",
      tags: ["Claude Code", "Copilot", "TypeScript"]
    }
  ];
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">What we do</div>
          </div>
          <div>
            <h2 className="h2">Microsoft-stack delivery, built around how your <em>business</em> actually runs.</h2>
            <p className="lede" style={{marginTop:24}}>
              We design, build and integrate on Power Platform, SharePoint, Microsoft 365 and Azure — the systems most enterprises already own. Six core capabilities, paired with senior engineers and an AI-assisted delivery workflow.
            </p>
          </div>
        </div>
        <div className="services">
          {services.map(s => (
            <div className="service" key={s.n}>
              <div className="service-num">{s.n} /</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(t => <span className="service-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { n: "01", title: "Discover", desc: "We sit with your team, map the workflow, and find the bottleneck that actually costs you money. No 80-page audit deck.", out: "Diagnostic + ROI model", dur: "1 — 2 weeks" },
    { n: "02", title: "Design", desc: "A working prototype in days, not months. Stakeholders click through it before we write production code.", out: "Clickable prototype + scope", dur: "2 — 3 weeks" },
    { n: "03", title: "Build", desc: "A senior squad ships in tight weekly increments. You see progress every Friday and shape direction in real time.", out: "Live application, weekly", dur: "4 — 12 weeks" },
    { n: "04", title: "Operate", desc: "We hand off cleanly — or stay on as your retained engineering partner — with monitoring, training, and a roadmap of next moves.", out: "Handover + retainer (optional)", dur: "Ongoing" }
  ];
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">How we work</div>
          </div>
          <div>
            <h2 className="h2">A four-step <em>operating rhythm.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              No theatre, no inflated discovery phases. Each step has a deliverable you can defend to your CFO.
            </p>
          </div>
        </div>
        <div className="process-list">
          {steps.map(s => (
            <div className="process-step" key={s.n}>
              <div className="num">{s.n}</div>
              <div>
                <h3>{s.title}</h3>
                <p style={{marginTop:12}}>{s.desc}</p>
              </div>
              <div className="col-3">
                <div className="mono" style={{marginBottom:8}}>Deliverable</div>
                <p style={{fontSize:14, color:'var(--ink-2)'}}>{s.out}</p>
              </div>
              <div className="duration">{s.dur}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CasesSection = () => {
  const cases = [
    {
      industry: "Logistics", year: "2025",
      title: "Routing engine for a 4PL with 280 drivers",
      desc: "Replaced a manual dispatch process with a routing tool that learns from historical loads.",
      stat: "−34%", statLabel: "Operating cost / delivery"
    },
    {
      industry: "Manufacturing", year: "2025",
      title: "Production-floor command centre",
      desc: "Real-time view of OEE, downtime and quality across three plants and four shifts.",
      stat: "+22%", statLabel: "Throughput, line 2"
    },
    {
      industry: "Financial Services", year: "2024",
      title: "Underwriting workbench for an SME lender",
      desc: "Cut decisioning from five days to under twenty minutes using a workflow + ML score.",
      stat: "5d → 18m", statLabel: "Time-to-decision"
    },
    {
      industry: "Healthcare", year: "2024",
      title: "Patient-intake portal for a network of clinics",
      desc: "A single intake flow replacing six paper forms; integrated with the existing EHR.",
      stat: "+41%", statLabel: "Bookings completed"
    },
    {
      industry: "Retail", year: "2024",
      title: "Replenishment dashboard for a 60-store chain",
      desc: "Forecasting + reorder rules cut stock-outs and freed up working capital.",
      stat: "−27%", statLabel: "Stock-outs / month"
    },
    {
      industry: "Energy", year: "2023",
      title: "Field-services app for a utility provider",
      desc: "Offline-first mobile app for technicians; replaced paper job sheets and SMS dispatch.",
      stat: "+3.2", statLabel: "Jobs / tech / day"
    }
  ];
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Selected work</div>
          </div>
          <div>
            <h2 className="h2">Numbers our clients can <em>defend in a board room.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              A small, deliberate sample. Every project below has a measurable line on the P&amp;L behind it.
            </p>
          </div>
        </div>
        <div className="cases">
          {cases.map((c, i) => (
            <div className="case" key={i}>
              <div className="case-meta">
                <span className="case-industry">{c.industry}</span>
                <span className="case-year">{c.year}</span>
              </div>
              <h3>{c.title}</h3>
              <p className="case-desc">{c.desc}</p>
              <div style={{marginTop:'auto'}}>
                <div className="case-stat">{c.stat}</div>
                <div className="case-stat-label">{c.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ServicesSection, ProcessSection, CasesSection });
