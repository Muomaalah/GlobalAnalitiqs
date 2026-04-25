/* What we build (services), Real apps (solutions), How we work (process) */

/* ---------- shared icon helpers ---------- */

const SvgIcon = ({ children, viewBox = "0 0 64 64" }) => (
  <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5"
       strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {children}
  </svg>
);

/* Service category icons (large, ~64x64) */
const ServiceArt = ({ kind }) => {
  switch (kind) {
    case "hr":
      return (
        <SvgIcon>
          <rect x="8" y="14" width="48" height="36" rx="4"/>
          <circle cx="22" cy="28" r="5"/>
          <path d="M14 42c0-5 4-8 8-8s8 3 8 8"/>
          <line x1="36" y1="26" x2="50" y2="26"/>
          <line x1="36" y1="33" x2="48" y2="33"/>
          <line x1="36" y1="40" x2="50" y2="40"/>
        </SvgIcon>
      );
    case "maintenance":
      return (
        <SvgIcon>
          <path d="M20 44 L40 24 M16 48 L20 44 M40 24 L36 20"/>
          <path d="M14 50 Q10 50 10 46 Q10 42 14 42 L18 46 Q18 50 14 50 Z"/>
          <circle cx="44" cy="20" r="6"/>
          <path d="M44 14 L44 16 M44 24 L44 26 M38 20 L40 20 M48 20 L50 20"/>
          <rect x="46" y="40" width="12" height="12" rx="1"/>
          <line x1="49" y1="43" x2="51" y2="43"/>
          <line x1="53" y1="43" x2="55" y2="43"/>
          <line x1="49" y1="46" x2="55" y2="46"/>
          <line x1="49" y1="49" x2="51" y2="49"/>
        </SvgIcon>
      );
    case "inventory":
      return (
        <SvgIcon>
          <rect x="10" y="22" width="18" height="14" rx="1"/>
          <rect x="36" y="22" width="18" height="14" rx="1"/>
          <rect x="23" y="38" width="18" height="14" rx="1"/>
          <line x1="19" y1="22" x2="19" y2="36"/>
          <line x1="45" y1="22" x2="45" y2="36"/>
          <line x1="32" y1="38" x2="32" y2="52"/>
          <path d="M12 18 L26 12 L40 18"/>
        </SvgIcon>
      );
    case "approvals":
      return (
        <SvgIcon>
          <rect x="14" y="10" width="32" height="44" rx="2"/>
          <line x1="20" y1="20" x2="40" y2="20"/>
          <line x1="20" y1="26" x2="36" y2="26"/>
          <line x1="20" y1="32" x2="40" y2="32"/>
          <path d="M22 42 L28 48 L42 34"/>
        </SvgIcon>
      );
    case "safety":
      return (
        <SvgIcon>
          <path d="M32 8 L52 16 V32 Q52 46 32 56 Q12 46 12 32 V16 Z"/>
          <line x1="32" y1="22" x2="32" y2="36"/>
          <circle cx="32" cy="42" r="1.5" fill="currentColor"/>
        </SvgIcon>
      );
    case "ops":
      return (
        <SvgIcon>
          <rect x="6" y="26" width="34" height="20" rx="2"/>
          <path d="M40 32 L52 32 L58 38 V46 H40 Z"/>
          <circle cx="16" cy="48" r="4"/>
          <circle cx="48" cy="48" r="4"/>
          <line x1="6" y1="34" x2="40" y2="34"/>
        </SvgIcon>
      );
    default: return null;
  }
};

/* Real-app icons (smaller, 64x64 viewBox, line drawings) */
const SolutionArt = ({ kind }) => {
  switch (kind) {
    case "hr-employee":
      return (
        <SvgIcon>
          <rect x="14" y="8" width="36" height="48" rx="3"/>
          <circle cx="32" cy="22" r="5"/>
          <path d="M22 36c0-5 4-8 10-8s10 3 10 8"/>
          <line x1="22" y1="44" x2="42" y2="44"/>
          <line x1="22" y1="50" x2="36" y2="50"/>
        </SvgIcon>
      );
    case "benefits":
      return (
        <SvgIcon>
          <path d="M32 12 L50 18 V32 Q50 44 32 52 Q14 44 14 32 V18 Z"/>
          <path d="M26 30 Q26 24 32 24 Q38 24 38 30 Q38 34 32 40 Q26 34 26 30 Z"/>
        </SvgIcon>
      );
    case "machine":
      return (
        <SvgIcon>
          <path d="M14 38 L34 18 M10 42 L14 38 M34 18 L30 14"/>
          <path d="M8 44 Q4 44 4 40 Q4 36 8 36 L12 40 Q12 44 8 44 Z"/>
          <circle cx="38" cy="14" r="5"/>
          <rect x="40" y="34" width="20" height="20" rx="1"/>
          <rect x="44" y="38" width="4" height="4" fill="currentColor"/>
          <rect x="52" y="38" width="4" height="4" fill="currentColor"/>
          <rect x="44" y="46" width="4" height="4" fill="currentColor"/>
          <rect x="50" y="46" width="2" height="2" fill="currentColor"/>
          <rect x="54" y="46" width="2" height="2" fill="currentColor"/>
        </SvgIcon>
      );
    case "qa":
      return (
        <SvgIcon>
          <rect x="14" y="10" width="36" height="48" rx="3"/>
          <rect x="24" y="6" width="16" height="8" rx="2"/>
          <path d="M20 24 L24 28 L30 22" />
          <line x1="34" y1="26" x2="44" y2="26"/>
          <path d="M20 36 L24 40 L30 34"/>
          <line x1="34" y1="38" x2="44" y2="38"/>
          <path d="M20 48 L24 52 L30 46"/>
          <line x1="34" y1="50" x2="42" y2="50"/>
        </SvgIcon>
      );
    case "ticketing":
      return (
        <SvgIcon>
          <path d="M8 22 V42 Q8 44 10 44 H54 Q56 44 56 42 V22 Q56 20 54 20 H10 Q8 20 8 22 Z"/>
          <path d="M22 20 V44 M22 24 V28 M22 32 V36 M22 40 V42"/>
          <circle cx="38" cy="32" r="4"/>
          <line x1="44" y1="32" x2="50" y2="32"/>
          <line x1="30" y1="32" x2="34" y2="32"/>
        </SvgIcon>
      );
    case "assets":
      return (
        <SvgIcon>
          <rect x="10" y="14" width="44" height="28" rx="2"/>
          <line x1="6" y1="48" x2="58" y2="48"/>
          <rect x="40" y="22" width="16" height="10" rx="1" fill="currentColor" fillOpacity="0.15"/>
          <line x1="14" y1="22" x2="34" y2="22"/>
          <line x1="14" y1="28" x2="34" y2="28"/>
          <line x1="14" y1="34" x2="28" y2="34"/>
        </SvgIcon>
      );
    case "sales":
      return (
        <SvgIcon>
          <path d="M14 22 L18 12 H46 L50 22 Z"/>
          <path d="M14 22 V52 H50 V22"/>
          <path d="M24 22 V18 Q24 12 32 12 Q40 12 40 18 V22"/>
        </SvgIcon>
      );
    case "truck":
      return (
        <SvgIcon>
          <rect x="6" y="22" width="32" height="20" rx="1"/>
          <path d="M38 28 L52 28 L58 34 V42 H38 Z"/>
          <circle cx="16" cy="46" r="4"/>
          <circle cx="46" cy="46" r="4"/>
          <line x1="6" y1="42" x2="38" y2="42"/>
        </SvgIcon>
      );
    case "purchase":
      return (
        <SvgIcon>
          <rect x="14" y="10" width="36" height="48" rx="3"/>
          <line x1="22" y1="22" x2="42" y2="22"/>
          <line x1="22" y1="30" x2="42" y2="30"/>
          <line x1="22" y1="38" x2="36" y2="38"/>
          <circle cx="44" cy="46" r="8"/>
          <path d="M40 46 L43 49 L48 43"/>
        </SvgIcon>
      );
    case "stock":
      return (
        <SvgIcon>
          <rect x="8" y="14" width="22" height="16" rx="1"/>
          <rect x="34" y="14" width="22" height="16" rx="1"/>
          <rect x="8" y="34" width="22" height="16" rx="1"/>
          <rect x="34" y="34" width="22" height="16" rx="1"/>
          <line x1="19" y1="14" x2="19" y2="30"/>
          <line x1="45" y1="14" x2="45" y2="30"/>
          <line x1="19" y1="34" x2="19" y2="50"/>
          <line x1="45" y1="34" x2="45" y2="50"/>
        </SvgIcon>
      );
    case "incident":
      return (
        <SvgIcon>
          <path d="M32 8 L58 52 H6 Z"/>
          <line x1="32" y1="24" x2="32" y2="38"/>
          <circle cx="32" cy="44" r="1.6" fill="currentColor"/>
        </SvgIcon>
      );
    case "fleet":
      return (
        <SvgIcon>
          <rect x="10" y="22" width="40" height="16" rx="3"/>
          <path d="M14 22 L18 12 H42 L46 22"/>
          <circle cx="20" cy="42" r="4"/>
          <circle cx="40" cy="42" r="4"/>
          <line x1="14" y1="30" x2="22" y2="30"/>
          <line x1="38" y1="30" x2="46" y2="30"/>
          <path d="M50 50 Q56 50 56 44" strokeDasharray="2 3"/>
        </SvgIcon>
      );
    default: return null;
  }
};

/* ---------- Services: six categories of work ---------- */

const ServicesSection = () => {
  const services = [
    {
      n: "01",
      kind: "hr",
      title: "HR & people apps",
      desc: "The everyday tools your staff use to do the people-stuff: payslips, leave requests, benefits, employee directories, and idea boards.",
      examples: ["Payslips", "Leave", "Benefits", "Idea portal"]
    },
    {
      n: "02",
      kind: "maintenance",
      title: "Maintenance & quality checks",
      desc: "Apps for the people on the floor — machine inspections, work orders, GMP checklists, and QR-coded spare parts so the right part is one scan away.",
      examples: ["Machine checks", "QR spare parts", "GMP checklist"]
    },
    {
      n: "03",
      kind: "inventory",
      title: "Inventory, stock & assets",
      desc: "Stock counts that match what's actually on the shelf, and a clean register of every laptop, vehicle and piece of kit — who has it, when it's due back, and what it's worth.",
      examples: ["Stock count", "Asset register", "Allocation"]
    },
    {
      n: "04",
      kind: "approvals",
      title: "Approvals & paperwork",
      desc: "Purchase requests, approval chains, and any other form-and-signature trail — digitised so things move in hours, not days, with a clear audit trail.",
      examples: ["Purchase requests", "Approvals", "Audit trail"]
    },
    {
      n: "05",
      kind: "safety",
      title: "Safety & incidents",
      desc: "A simple way to log incidents and near-misses, prioritise the serious ones, and spot patterns before someone gets hurt.",
      examples: ["Incident log", "Near-miss", "Safety dashboard"]
    },
    {
      n: "06",
      kind: "ops",
      title: "Operations & logistics",
      desc: "The day-to-day movement-of-things layer: truck scheduling, fleet servicing, IT helpdesks, internal sales — joined up to the systems you already use.",
      examples: ["Truck scheduling", "Fleet service", "IT helpdesk"]
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
            <h2 className="h2">Six kinds of apps, all <em>day, every day.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              We're a Microsoft Power Apps studio. We design, build and roll out the everyday tools that quietly run a business — from the staff payslip screen on someone's phone to the maintenance check on the factory floor.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div className="service-card" key={s.n}>
              <div className="service-card-visual">
                <ServiceArt kind={s.kind}/>
              </div>
              <div className="service-card-body">
                <div className="service-card-meta">
                  <span className="service-num">{s.n} /</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.examples.map(t => <span className="service-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Solutions: real apps from the project list ---------- */

const SolutionsSection = () => {
  const solutions = [
    {
      kind: "hr-employee",
      tag: "HR · Power Apps",
      title: "HR Employee App",
      desc: "Payslips, company policies and leave requests in one tap. Staff log in from their phone and find everything they used to chase from HR by email."
    },
    {
      kind: "benefits",
      tag: "HR · Power Apps",
      title: "Employee Benefits App",
      desc: "A personalised view of every benefit a staff member is entitled to — health cover, retirement, time off — plus claim submission and reminders before deadlines pass."
    },
    {
      kind: "machine",
      tag: "Maintenance · Power Apps",
      title: "Machine Maintenance App",
      desc: "Scan the QR code on a machine, see its history, the right spare part and how to fit it. Engineers log faults, request parts and close jobs without paperwork."
    },
    {
      kind: "qa",
      tag: "Quality · Power Apps",
      title: "QA / GMP Checklist App",
      desc: "Factory-floor quality checks that follow your own rules. Workers tick off the steps, snap photos as evidence, and managers see the results live on a dashboard."
    },
    {
      kind: "ticketing",
      tag: "IT · Power Apps",
      title: "IT Ticketing & Incident App",
      desc: "Staff raise IT problems from their desk or their phone. Tickets are sorted by urgency, routed to the right team, and tracked to resolution."
    },
    {
      kind: "assets",
      tag: "IT · Power Apps",
      title: "IT Assets Management Portal",
      desc: "A clean register of every laptop, phone, printer and software licence — who has it, when it's due back, and when it'll need replacing."
    },
    {
      kind: "sales",
      tag: "Staff · Power Apps",
      title: "Staff Sales App",
      desc: "An in-house shop where staff can browse, buy and reorder company products from their phone — with employee discounts and order history built in."
    },
    {
      kind: "truck",
      tag: "Logistics · Power Apps",
      title: "Truck Scheduling App",
      desc: "Send truck-detail requests to vendors over WhatsApp; once they confirm, the data flows straight back into the dashboard so the warehouse can plan loading."
    },
    {
      kind: "purchase",
      tag: "Procurement · Power Apps",
      title: "Purchase Requisition Portal",
      desc: "Staff raise a purchase request, it routes to the right approver based on cost, the approver sees the live budget, and every step is logged for audit."
    },
    {
      kind: "stock",
      tag: "Warehouse · Power Apps",
      title: "Stock Count App",
      desc: "Warehouse staff count stock from their phones and reconcile against the system in real time. Anything that doesn't match flags up immediately."
    },
    {
      kind: "incident",
      tag: "Safety · Power Apps",
      title: "Workplace Incident App",
      desc: "Anyone can log an incident or near-miss in seconds. Severity is colour-coded, owners are assigned, and managers can see what's open at a glance."
    },
    {
      kind: "fleet",
      tag: "Fleet · Power Apps",
      title: "Fleet Management Portal",
      desc: "Every company vehicle in one place — service requests, approvals, cost history, and alerts when the next service is due."
    }
  ];
  return (
    <section id="solutions">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Real apps we've built</div>
          </div>
          <div>
            <h2 className="h2">Twelve apps already <em>in people's pockets.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              Each card below is a real Microsoft Power App we've delivered for a business — the kind of small everyday tools that, between them, save thousands of hours a year.
            </p>
          </div>
        </div>
        <div className="solutions-grid">
          {solutions.map(s => (
            <div className="solution-card" key={s.title}>
              <div className="solution-icon"><SolutionArt kind={s.kind}/></div>
              <div className="solution-body">
                <div className="solution-tag">{s.tag}</div>
                <h3 className="solution-title">{s.title}</h3>
                <p className="solution-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Process ---------- */

const ProcessSection = () => {
  const steps = [
    { n: "01", title: "Listen",     desc: "We sit with your team for a couple of weeks and find the one thing that, if fixed, would save the most time. No 80-page audit, no slide deck.", out: "A clear write-up of what's worth building", dur: "1 — 2 weeks" },
    { n: "02", title: "Sketch",     desc: "We mock up a working version you can click through within days. Your people react to a real screen — not a slide.", out: "A clickable demo and an honest scope", dur: "2 — 3 weeks" },
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

Object.assign(window, { ServicesSection, SolutionsSection, ProcessSection });
