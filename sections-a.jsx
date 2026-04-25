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
      title: "Apps your team will actually use",
      desc: "Custom apps that fit how your people already work — replacing the spreadsheet trail, the back-and-forth emails, and the \"we just do it that way\" processes everyone secretly hates.",
      tags: ["Phone", "Tablet", "Desktop"],
      repo: "https://github.com/maxwelltaprah-prog/PowerAppsCodeApps",
      repoLabel: "PowerAppsCodeApps",
      img: "https://raw.githubusercontent.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio/master/media/PowerApps.png"
    },
    {
      n: "02",
      kind: "sharepoint",
      title: "A staff homepage everyone can find",
      desc: "One branded place where your people find news, holidays, HR forms, and the colleagues they need — instead of hunting across email threads and shared drives.",
      tags: ["Branded", "On phones", "Easy to update"],
      repo: "https://github.com/maxwelltaprah-prog/sharepoint-intranet-mockups",
      repoLabel: "sharepoint-intranet-mockups",
      iframe: "mockups/mockup_1.html"
    },
    {
      n: "03",
      kind: "automate",
      title: "Workflows that run themselves",
      desc: "The boring, repeating jobs — approvals, reminders, paperwork shuffling between systems — handled in the background so people can do real work.",
      tags: ["Approvals", "Reminders", "Auto-sync"],
      repo: "https://github.com/maxwelltaprah-prog/PowerApps---RDORRANI",
      repoLabel: "PowerApps---RDORRANI",
      img: "https://raw.githubusercontent.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio/master/media/Microsoft-Flow.png"
    },
    {
      n: "04",
      kind: "azure",
      title: "Joining up the systems you already pay for",
      desc: "Most companies own ten tools that don't talk to each other. We make them talk — so data flows, alerts get sent, and reports update without anyone copying numbers between tabs.",
      tags: ["Connected", "Reliable", "Secure"],
      repo: "https://github.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio",
      repoLabel: "Azure-Stencils-Pack",
      img: "https://raw.githubusercontent.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio/master/media/Microsoft-Azure.png"
    },
    {
      n: "05",
      kind: "powerbi",
      title: "Dashboards leadership will actually open",
      desc: "Numbers from across the business in one screen — sales, costs, people, jobs done — refreshed automatically. Open it Monday morning and you know where you stand.",
      tags: ["Live data", "Easy filters", "Phone-friendly"],
      repo: "https://github.com/maxwelltaprah-prog?tab=repositories",
      repoLabel: "Reporting work",
      img: "https://raw.githubusercontent.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio/master/media/Microsoft-Power-BI.png"
    },
    {
      n: "06",
      kind: "claude",
      title: "AI helpers that let us build faster",
      desc: "We pair our engineers with AI assistants in a careful, reviewed workflow. You get the same quality, sooner — and a more honest scope from day one.",
      tags: ["AI-assisted", "Reviewed", "Faster"],
      repo: "https://github.com/maxwelltaprah-prog/claude-code",
      repoLabel: "claude-code"
    }
  ];
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">What we build</div>
          </div>
          <div>
            <h2 className="h2">Six things we build, all the <em>time.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              We work on the Microsoft tools most companies already own — so you don't end up paying for another platform. Each card below links to real working code on <a href="https://github.com/maxwelltaprah-prog" target="_blank" rel="noopener" style={{color:'var(--accent)'}}>our GitHub</a> so you can see what we ship.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <a className="service-card" key={s.n} href={s.repo} target="_blank" rel="noopener">
              <div className="service-card-visual">
                {s.img ? (
                  <img src={s.img} alt={`${s.title} reference visual from the Microsoft Integration & Azure Stencils Pack`} loading="lazy"/>
                ) : s.iframe ? (
                  <div className="service-card-iframe-wrap">
                    <iframe src={s.iframe} title={s.title} loading="lazy" tabIndex="-1" scrolling="no"/>
                    <div className="service-card-iframe-veil"/>
                  </div>
                ) : (
                  <ServiceVisual kind={s.kind}/>
                )}
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
    { n: "01", title: "Listen",     desc: "We sit with your team for a couple of weeks and find the one thing that, if fixed, would save the most time or money. No 80-page audit, no slide deck.", out: "A clear write-up of what's worth building", dur: "1 — 2 weeks" },
    { n: "02", title: "Sketch",     desc: "We mock up a working version you can click through within days. Your people react to a real screen instead of a slide.", out: "A clickable demo and an honest scope", dur: "2 — 3 weeks" },
    { n: "03", title: "Build",      desc: "A small senior team ships it in weekly chunks. You see the latest version every Friday and can change direction at the end of any week.", out: "A live, working app — every week", dur: "4 — 12 weeks" },
    { n: "04", title: "Hand over",  desc: "We hand over a clean, documented app — or stay on as your retained team — with training, monitoring, and a list of what to do next.", out: "Documentation, training, and a roadmap", dur: "Ongoing if you want" }
  ];
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">How we work</div>
          </div>
          <div>
            <h2 className="h2">Four simple <em>steps.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              No drawn-out discovery, no vague "transformation programme". Each step has a clear thing you walk away with.
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
                <div className="mono" style={{marginBottom:8}}>You walk away with</div>
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
      industry: "For staff at work",
      title: "A SharePoint pattern library — three reusable intranets",
      desc: "An open library of three ready-to-rebrand staff homepages: a corporate page, a maintenance team dashboard, and a leadership briefing. Any business can clone it and replace the logos.",
      stat: "3", statLabel: "Reusable templates",
      repo: "https://github.com/maxwelltaprah-prog/sharepoint-intranet-mockups",
      repoLabel: "sharepoint-intranet-mockups"
    },
    {
      industry: "For architects and consultants",
      title: "A free shape pack for drawing Microsoft systems",
      desc: "The diagrams consultants draw to explain a Microsoft setup — Power Apps, Azure, Office 365, integration patterns. We maintain a free pack used by teams across the industry.",
      stat: "27", statLabel: "Stencil sheets shared",
      repo: "https://github.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio",
      repoLabel: "Azure-Stencils-Pack"
    },
    {
      industry: "For developers building inside Microsoft",
      title: "Power Apps, but built in proper code",
      desc: "Most Power Apps work is drag-and-drop; ours is written in TypeScript so it's easier to test, review and hand over. The starter we use is open for any team.",
      stat: "TypeScript", statLabel: "Type-safe by default",
      repo: "https://github.com/maxwelltaprah-prog/PowerAppsCodeApps",
      repoLabel: "PowerAppsCodeApps"
    },
    {
      industry: "For teams using AI assistants",
      title: "An enterprise-grade rebuild of Claude Code",
      desc: "We rebuilt Anthropic's coding assistant from the ground up in TypeScript with full type-checking — so we and other teams can use it inside enterprise environments with confidence.",
      stat: "0 errors", statLabel: "Type-checked end to end",
      repo: "https://github.com/maxwelltaprah-prog/claude-code",
      repoLabel: "claude-code"
    }
  ];
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Things we've shipped</div>
          </div>
          <div>
            <h2 className="h2">Real projects you can <em>open right now.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              We publish a lot of what we build. Each card below links to working code on GitHub — open it, read it, copy it. No screenshots-of-screenshots, no NDA brochure-ware.
            </p>
          </div>
        </div>
        <div className="cases cases-real">
          {cases.map((c, i) => (
            <a className="case" key={i} href={c.repo} target="_blank" rel="noopener">
              <div className="case-meta">
                <span className="case-industry">{c.industry}</span>
                <span className="case-year">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.16-.89-1.16-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.5-1.07-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82A7.6 7.6 0 0 1 8 3.95c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.83 1.28.83 2.15 0 3.07-1.87 3.74-3.65 3.94.29.25.54.74.54 1.49v2.21c0 .21.15.46.55.38A8 8 0 0 0 8 0z"/>
                  </svg>
                  {c.repoLabel}
                </span>
              </div>
              <h3>{c.title}</h3>
              <p className="case-desc">{c.desc}</p>
              <div style={{marginTop:'auto'}}>
                <div className="case-stat">{c.stat}</div>
                <div className="case-stat-label">{c.statLabel}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolkitSection = () => {
  const base = "https://raw.githubusercontent.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio/master/media";
  const tiles = [
    { name: "Power Apps",            file: "PowerApps.png" },
    { name: "Power Automate",        file: "Microsoft-Flow.png" },
    { name: "Power BI",              file: "Microsoft-Power-BI.png" },
    { name: "Microsoft Azure",       file: "Microsoft-Azure.png" },
    { name: "Office 365",            file: "MIS-Office-365.png" },
    { name: "Integration Patterns",  file: "MIS-Integration-Patterns.png" },
    { name: "Apps & Systems",        file: "MIS-Apps-and-Systems-Logo-Stencils.png" },
    { name: "Security & Governance", file: "MIS-Security-and-governance-stencils.png" }
  ];
  return (
    <section id="toolkit">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Things we've shared</div>
          </div>
          <div>
            <h2 className="h2">Tools we built once and <em>gave away.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              When something's useful for one client, it's usually useful for the next — so we publish it for free. Below is our <a href="https://github.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio" target="_blank" rel="noopener" style={{color:'var(--accent)'}}>shape pack</a> for drawing Microsoft systems, used by teams across the industry.
            </p>
          </div>
        </div>
        <a href="https://github.com/maxwelltaprah-prog/Microsoft-Integration-and-Azure-Stencils-Pack-for-Visio" target="_blank" rel="noopener" className="toolkit-hero">
          <img src={`${base}/BizTalk-Microsoft-Integration-Azure-Stencils-Pack.png`} alt="Cover art for our Microsoft Integration and Azure shape pack — a free library we publish on GitHub" loading="lazy"/>
          <div className="toolkit-hero-meta">
            <span className="mono">Free download</span>
            <span>Shape pack — Microsoft &amp; Azure</span>
          </div>
        </a>
        <div className="toolkit-grid">
          {tiles.map(t => (
            <a className="toolkit-tile" key={t.file}
               href={`${base}/${t.file}`} target="_blank" rel="noopener">
              <div className="toolkit-tile-img">
                <img src={`${base}/${t.file}`} alt={`${t.name} stencil sheet`} loading="lazy"/>
              </div>
              <div className="toolkit-tile-name">{t.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const MockupsSection = () => {
  const items = [
    { file: "mockups/mockup_1.html", label: "Company homepage",            tag: "For everyone",          desc: "News, holidays, HR forms, and the help everyone needs — on one page." },
    { file: "mockups/mockup_2.html", label: "Field operations dashboard",  tag: "For maintenance teams", desc: "Safety records, project updates, warehouse stock, and site contacts in one place." },
    { file: "mockups/mockup_3.html", label: "Leadership briefing",         tag: "For management",        desc: "Quarterly outlook, safety alerts, key dashboards and operational links — at a glance." }
  ];
  return (
    <section id="mockups">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Real examples — click through</div>
          </div>
          <div>
            <h2 className="h2">What a staff homepage <em>looks like</em> in practice.</h2>
            <p className="lede" style={{marginTop:24}}>
              Three working pages from a recent project for an engineering operator — a homepage for everyone, a dashboard for the maintenance team, and a briefing for management. Tap any tile to open the full page.
            </p>
          </div>
        </div>
        <div className="mockups-grid">
          {items.map(m => (
            <a className="mockup" key={m.file} href={m.file} target="_blank" rel="noopener">
              <div className="mockup-frame">
                <iframe src={m.file} title={m.label} loading="lazy" tabIndex="-1" scrolling="no"/>
                <div className="mockup-veil"/>
              </div>
              <div className="mockup-meta">
                <span className="mono">{m.tag}</span>
                <span className="mockup-name">{m.label}</span>
                <span className="mockup-desc">{m.desc}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ServicesSection, ProcessSection, CasesSection, ToolkitSection, MockupsSection });
