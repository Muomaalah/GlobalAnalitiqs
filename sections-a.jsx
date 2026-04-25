/* Services, Process, Cases */

const ServiceVisual = ({ kind }) => {
  const stroke = "currentColor";
  const accent = "var(--accent)";
  switch (kind) {
    case "powerapps":
      return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="20" y="20" width="280" height="140" rx="6" stroke={stroke} strokeWidth="1"/>
          <line x1="20" y1="44" x2="300" y2="44" stroke={stroke} strokeWidth="1"/>
          <circle cx="34" cy="32" r="2.5" fill={stroke}/>
          <circle cx="44" cy="32" r="2.5" fill={stroke}/>
          <circle cx="54" cy="32" r="2.5" fill={stroke}/>
          {[0,1,2,3].map(i => (
            <rect key={`c${i}`} x={36 + i*64} y="60" width="52" height="36" rx="3" stroke={stroke} strokeWidth="1"/>
          ))}
          {[0,1,2,3].map(i => (
            <rect key={`r${i}`} x={36 + i*64} y="108" width="52" height="36" rx="3" stroke={stroke} strokeWidth="1" fill={i === 1 ? accent : "none"} opacity={i === 1 ? 0.9 : 1}/>
          ))}
          <text x="36" y="158" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={stroke} opacity="0.6" letterSpacing="1.2">CANVAS · MODEL-DRIVEN · CODE APPS</text>
        </svg>
      );
    case "sharepoint":
      return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="20" y="20" width="280" height="140" rx="6" stroke={stroke} strokeWidth="1"/>
          <line x1="20" y1="42" x2="300" y2="42" stroke={stroke} strokeWidth="1"/>
          <line x1="84" y1="42" x2="84" y2="160" stroke={stroke} strokeWidth="1"/>
          <circle cx="34" cy="31" r="2.5" fill={stroke}/>
          <circle cx="44" cy="31" r="2.5" fill={stroke}/>
          <circle cx="54" cy="31" r="2.5" fill={stroke}/>
          {[0,1,2,3].map(i => (
            <line key={i} x1="32" y1={60 + i*22} x2="72" y2={60 + i*22} stroke={stroke} strokeWidth="1" opacity="0.4"/>
          ))}
          <line x1="32" y1="60" x2="72" y2="60" stroke={accent} strokeWidth="2"/>
          <rect x="100" y="58" width="184" height="42" rx="3" stroke={stroke} strokeWidth="1"/>
          <line x1="110" y1="72" x2="190" y2="72" stroke={stroke} strokeWidth="1"/>
          <line x1="110" y1="82" x2="240" y2="82" stroke={stroke} strokeWidth="1" opacity="0.4"/>
          <line x1="110" y1="90" x2="220" y2="90" stroke={stroke} strokeWidth="1" opacity="0.4"/>
          <rect x="100" y="112" width="86" height="40" rx="3" stroke={stroke} strokeWidth="1"/>
          <rect x="198" y="112" width="86" height="40" rx="3" stroke={stroke} strokeWidth="1"/>
        </svg>
      );
    case "automate":
      return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="50" cy="40" r="14" stroke={stroke} strokeWidth="1"/>
          <circle cx="50" cy="90" r="14" stroke={stroke} strokeWidth="1"/>
          <circle cx="160" cy="65" r="14" stroke={stroke} strokeWidth="1" fill={accent} fillOpacity="0.9"/>
          <circle cx="270" cy="40" r="14" stroke={stroke} strokeWidth="1"/>
          <circle cx="270" cy="90" r="14" stroke={stroke} strokeWidth="1"/>
          <circle cx="160" cy="140" r="14" stroke={stroke} strokeWidth="1"/>
          <path d="M64 40 Q110 40 146 60" stroke={stroke} strokeWidth="1" fill="none"/>
          <path d="M64 90 Q110 90 146 70" stroke={stroke} strokeWidth="1" fill="none"/>
          <path d="M174 60 Q210 40 256 40" stroke={stroke} strokeWidth="1" fill="none"/>
          <path d="M174 70 Q210 90 256 90" stroke={stroke} strokeWidth="1" fill="none"/>
          <path d="M160 79 L160 126" stroke={stroke} strokeWidth="1" fill="none"/>
          <text x="44" y="44" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={stroke}>IN</text>
          <text x="42" y="94" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={stroke}>IN</text>
          <text x="263" y="44" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={stroke}>OK</text>
          <text x="261" y="94" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={stroke}>OUT</text>
        </svg>
      );
    case "azure":
      return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M70 110 Q40 110 40 84 Q40 60 64 56 Q70 28 102 28 Q132 28 138 54 Q166 50 170 78 Q200 76 206 96 Q236 96 236 118 Q236 132 222 132 L82 132 Q70 132 70 110 Z" stroke={stroke} strokeWidth="1" fill="none"/>
          <rect x="92" y="78" width="36" height="22" stroke={stroke} strokeWidth="1"/>
          <rect x="142" y="78" width="36" height="22" stroke={stroke} strokeWidth="1" fill={accent} fillOpacity="0.85"/>
          <rect x="192" y="78" width="36" height="22" stroke={stroke} strokeWidth="1"/>
          <line x1="128" y1="89" x2="142" y2="89" stroke={stroke} strokeWidth="1"/>
          <line x1="178" y1="89" x2="192" y2="89" stroke={stroke} strokeWidth="1"/>
          <line x1="160" y1="100" x2="160" y2="148" stroke={stroke} strokeWidth="1" strokeDasharray="2 3"/>
          <rect x="120" y="148" width="80" height="14" stroke={stroke} strokeWidth="1"/>
          <text x="128" y="158" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={stroke}>ON-PREM</text>
        </svg>
      );
    case "powerbi":
      return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="40" y1="150" x2="280" y2="150" stroke={stroke} strokeWidth="1"/>
          <line x1="40" y1="30" x2="40" y2="150" stroke={stroke} strokeWidth="1"/>
          {[60, 90, 120].map(y => (
            <line key={y} x1="40" y1={y} x2="280" y2={y} stroke={stroke} strokeWidth="1" opacity="0.15"/>
          ))}
          <rect x="60" y="100" width="22" height="50" stroke={stroke} strokeWidth="1"/>
          <rect x="92" y="80" width="22" height="70" stroke={stroke} strokeWidth="1"/>
          <rect x="124" y="110" width="22" height="40" stroke={stroke} strokeWidth="1"/>
          <rect x="156" y="50" width="22" height="100" stroke={stroke} strokeWidth="1" fill={accent} fillOpacity="0.9"/>
          <rect x="188" y="90" width="22" height="60" stroke={stroke} strokeWidth="1"/>
          <rect x="220" y="70" width="22" height="80" stroke={stroke} strokeWidth="1"/>
          <path d="M71 110 L103 90 L135 120 L167 60 L199 100 L231 80" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>
      );
    case "claude":
      return (
        <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="20" y="20" width="280" height="140" rx="6" stroke={stroke} strokeWidth="1"/>
          <line x1="20" y1="42" x2="300" y2="42" stroke={stroke} strokeWidth="1"/>
          <circle cx="34" cy="31" r="2.5" fill={stroke}/>
          <circle cx="44" cy="31" r="2.5" fill={stroke}/>
          <circle cx="54" cy="31" r="2.5" fill={stroke}/>
          <text x="36" y="68" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={stroke}>$ claude code review</text>
          <text x="36" y="86" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={stroke} opacity="0.55">  reading 14 files…</text>
          <text x="36" y="104" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={accent}>  ✓ 0 type errors</text>
          <text x="36" y="122" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={stroke} opacity="0.55">  3 suggestions →</text>
          <text x="36" y="146" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={stroke}>$ <tspan fill={accent}>▍</tspan></text>
        </svg>
      );
    default:
      return null;
  }
};

const ServicesSection = () => {
  const services = [
    {
      n: "01",
      kind: "powerapps",
      title: "Power Apps & Code Apps",
      desc: "Custom business applications built on the Microsoft Power Platform — from low-code canvas apps to fully-coded TypeScript Code Apps that run inside Power Apps with the governance enterprises require.",
      tags: ["Canvas apps", "Model-driven", "Code Apps"],
      repo: "https://github.com/maxwelltaprah-prog/PowerAppsCodeApps",
      repoLabel: "PowerAppsCodeApps"
    },
    {
      n: "02",
      kind: "sharepoint",
      title: "SharePoint & Microsoft 365 intranets",
      desc: "Modern, on-brand intranets and digital workplaces on SharePoint Online — communications sites, hub architectures, and reusable section mockups your team can actually maintain.",
      tags: ["SharePoint", "M365", "SPFx"],
      repo: "https://github.com/maxwelltaprah-prog/sharepoint-intranet-mockups",
      repoLabel: "sharepoint-intranet-mockups"
    },
    {
      n: "03",
      kind: "automate",
      title: "Power Automate & workflow automation",
      desc: "Automate the manual, high-volume work hiding inside operations, HR and finance. Approvals, document flows, notifications, and data sync between the systems you already pay for.",
      tags: ["Power Automate", "Approvals", "RPA"],
      repo: "https://github.com/maxwelltaprah-prog/PowerApps---RDORRANI",
      repoLabel: "PowerApps---RDORRANI"
    },
    {
      n: "04",
      kind: "azure",
      title: "Microsoft integration & Azure architecture",
      desc: "Integration design across Azure, Power Platform, Microsoft 365 and Dynamics — using the same enterprise stencil libraries, patterns and reference architectures we publish back to the community.",
      tags: ["Azure", "API Mgmt", "Logic Apps"],
      repo: "https://github.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio",
      repoLabel: "Azure-Stencils-Pack"
    },
    {
      n: "05",
      kind: "powerbi",
      title: "Power BI & data analytics",
      desc: "Dataverse and Power BI models that turn operational data from Dynamics, SharePoint and line-of-business systems into the dashboards leadership actually opens every Monday.",
      tags: ["Power BI", "Dataverse", "Fabric"],
      repo: "https://github.com/maxwelltaprah-prog?tab=repositories",
      repoLabel: "Reporting work"
    },
    {
      n: "06",
      kind: "claude",
      title: "AI-assisted delivery with Claude Code",
      desc: "We ship faster by pairing senior engineers with Claude Code and Copilot in a controlled delivery workflow — type-safe, reviewed, and locked to enterprise reliability standards.",
      tags: ["Claude Code", "Copilot", "TypeScript"],
      repo: "https://github.com/maxwelltaprah-prog/claude-code",
      repoLabel: "claude-code"
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
              We design, build and integrate on Power Platform, SharePoint, Microsoft 365 and Azure — the systems most enterprises already own. Six core capabilities, each backed by working code on <a href="https://github.com/maxwelltaprah-prog" target="_blank" rel="noopener" style={{color:'var(--accent)'}}>our GitHub</a>.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <a className="service-card" key={s.n} href={s.repo} target="_blank" rel="noopener">
              <div className="service-card-visual">
                <ServiceVisual kind={s.kind}/>
              </div>
              <div className="service-card-body">
                <div className="service-card-meta">
                  <span className="service-num">{s.n} /</span>
                  <span className="service-card-repo">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.16-.89-1.16-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.5-1.07-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82A7.6 7.6 0 0 1 8 3.95c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.83 1.28.83 2.15 0 3.07-1.87 3.74-3.65 3.94.29.25.54.74.54 1.49v2.21c0 .21.15.46.55.38A8 8 0 0 0 8 0z"/>
                    </svg>
                    {s.repoLabel}
                  </span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(t => <span className="service-tag" key={t}>{t}</span>)}
                </div>
                <span className="service-card-cta">
                  View repository
                  <Arrow/>
                </span>
              </div>
            </a>
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
