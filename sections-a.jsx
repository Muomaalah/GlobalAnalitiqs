/* What we build (services), Real apps (solutions), How we work (process) */

/* ---------- Services: six categories of work ---------- */

const ServicesSection = () => {
  const base = "https://images.unsplash.com/photo-";
  const fmt  = "?auto=format&fit=crop&w=900&q=70";
  const services = [
    {
      n: "01",
      title: "HR & people apps",
      desc: "The everyday tools your staff use to do the people-stuff: payslips, leave requests, benefits, employee directories, and idea boards.",
      examples: ["Payslips", "Leave", "Benefits", "Idea portal"],
      img: `${base}1497366754035-f200968a6e72${fmt}`,
      alt: "Office workspace photo representing HR and staff tools"
    },
    {
      n: "02",
      title: "Maintenance & quality checks",
      desc: "Apps for the people on the floor — machine inspections, work orders, GMP checklists, and QR-coded spare parts so the right part is one scan away.",
      examples: ["Machine checks", "QR spare parts", "GMP checklist"],
      img: `${base}1581092160562-40aa08e78837${fmt}`,
      alt: "Engineer with a tablet next to industrial machinery"
    },
    {
      n: "03",
      title: "Inventory, stock & assets",
      desc: "Stock counts that match what's actually on the shelf, and a clean register of every laptop, vehicle and piece of kit — who has it, when it's due back, and what it's worth.",
      examples: ["Stock count", "Asset register", "Allocation"],
      img: `${base}1553413077-190dd305871c${fmt}`,
      alt: "Warehouse aisle full of stacked boxes"
    },
    {
      n: "04",
      title: "Approvals & paperwork",
      desc: "Purchase requests, approval chains, and any other form-and-signature trail — digitised so things move in hours, not days, with a clear audit trail.",
      examples: ["Purchase requests", "Approvals", "Audit trail"],
      img: `${base}1450101499163-c8848c66ca85${fmt}`,
      alt: "Hands signing a document on a desk"
    },
    {
      n: "05",
      title: "Safety & incidents",
      desc: "A simple way to log incidents and near-misses, prioritise the serious ones, and spot patterns before someone gets hurt.",
      examples: ["Incident log", "Near-miss", "Safety dashboard"],
      img: `${base}1581092918056-0c4c3acd3789${fmt}`,
      alt: "Worker in safety helmet on a construction site"
    },
    {
      n: "06",
      title: "Operations & logistics",
      desc: "The day-to-day movement-of-things layer: truck scheduling, fleet servicing, IT helpdesks, internal sales — joined up to the systems you already use.",
      examples: ["Truck scheduling", "Fleet service", "IT helpdesk"],
      img: `${base}1586528116311-ad8dd3c8310d${fmt}`,
      alt: "Articulated lorry on the road at golden hour"
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
              We're a Microsoft Power Apps and custom-web-apps studio. We design, build and roll out the everyday tools that quietly run a business — from the staff payslip on a phone to the dashboard your CFO opens on a laptop.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div className="service-card" key={s.n}>
              <div className="service-card-visual">
                <img src={s.img} alt={s.alt} loading="lazy"/>
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

/* ---------- Solutions: twelve real apps from the project list ---------- */

const SolutionsSection = () => {
  const base = "https://images.unsplash.com/photo-";
  const fmt  = "?auto=format&fit=crop&w=900&q=70";
  const solutions = [
    {
      tag: "Power App · Mobile",
      title: "HR Employee App",
      desc: "Payslips, company policies and leave requests in one tap. Staff log in from their phone and find everything they used to chase from HR by email.",
      img: `${base}1554224155-8d04cb21cd6c${fmt}`,
      alt: "Calculator and payroll paperwork on a desk"
    },
    {
      tag: "Power App · Mobile",
      title: "Employee Benefits App",
      desc: "A personalised view of every benefit a staff member is entitled to — health cover, retirement, time off — plus claim submission and reminders before deadlines pass.",
      img: `${base}1576091160399-112ba8d25d1d${fmt}`,
      alt: "Healthcare professional with a tablet and patient"
    },
    {
      tag: "Power App · Mobile",
      title: "Machine Maintenance App",
      desc: "Scan the QR code on a machine, see its history, the right spare part and how to fit it. Engineers log faults, request parts and close jobs without paperwork.",
      img: `${base}1581092160562-40aa08e78837${fmt}`,
      alt: "Engineer with tablet next to industrial machinery"
    },
    {
      tag: "Power App · Mobile",
      title: "QA / GMP Checklist App",
      desc: "Factory-floor quality checks that follow your own rules. Workers tick off the steps, snap photos as evidence, and managers see the results live on a dashboard.",
      img: `${base}1556761175-5973dc0f32e7${fmt}`,
      alt: "Quality inspector with a clipboard at a production line"
    },
    {
      tag: "Web app",
      title: "IT Ticketing & Incident App",
      desc: "Staff raise IT problems from their desk or their phone. Tickets are sorted by urgency, routed to the right team, and tracked all the way to resolution.",
      img: `${base}1551434678-e076c223a692${fmt}`,
      alt: "IT support specialist working at a screen"
    },
    {
      tag: "Web portal",
      title: "IT Assets Portal",
      desc: "A clean register of every laptop, phone, printer and software licence — who has it, when it's due back, and when it'll need replacing.",
      img: `${base}1517336714731-489689fd1ca8${fmt}`,
      alt: "Open laptop on a wooden desk"
    },
    {
      tag: "Power App · Mobile",
      title: "Staff Sales App",
      desc: "An in-house shop where staff can browse, buy and reorder company products from their phone — with employee discounts and order history built in.",
      img: `${base}1607082348824-0a96f2a4b9da${fmt}`,
      alt: "Person shopping on a mobile phone with shopping bags"
    },
    {
      tag: "Web + WhatsApp",
      title: "Truck Scheduling App",
      desc: "Send truck-detail requests to vendors over WhatsApp; once they confirm, the data flows straight back into the dashboard so the warehouse can plan loading.",
      img: `${base}1586528116311-ad8dd3c8310d${fmt}`,
      alt: "Articulated lorry on the road at sunset"
    },
    {
      tag: "Web portal",
      title: "Purchase Requisition Portal",
      desc: "Staff raise a purchase request, it routes to the right approver based on cost, the approver sees the live budget, and every step is logged for audit.",
      img: `${base}1450101499163-c8848c66ca85${fmt}`,
      alt: "Hands signing paperwork at a desk"
    },
    {
      tag: "Power App · Mobile",
      title: "Stock Count App",
      desc: "Warehouse staff count stock from their phones and reconcile against the system in real time. Anything that doesn't match flags up immediately.",
      img: `${base}1553413077-190dd305871c${fmt}`,
      alt: "Warehouse aisle of stacked boxes"
    },
    {
      tag: "Power App · Mobile",
      title: "Workplace Incident App",
      desc: "Anyone can log an incident or near-miss in seconds. Severity is colour-coded, owners are assigned, and managers see what's still open at a glance.",
      img: `${base}1473445730015-841f29a9490b${fmt}`,
      alt: "Workers in PPE on an industrial site"
    },
    {
      tag: "Web portal",
      title: "Fleet Management Portal",
      desc: "Every company vehicle in one place — service requests, approvals, cost history, and alerts when the next service is due.",
      img: `${base}1573497019940-1c28c88b4f3e${fmt}`,
      alt: "Fleet of cars in a parking lot from above"
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
            <h2 className="h2">Twelve apps already <em>in people's hands.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              A mix of Power Apps that live on people's phones and web apps that live in their browser tabs — each one solves a small everyday job, and between them they save thousands of hours a year. Photos are illustrative.
            </p>
          </div>
        </div>
        <div className="solutions-grid">
          {solutions.map(s => (
            <div className="solution-card" key={s.title}>
              <div className="solution-photo">
                <img src={s.img} alt={s.alt} loading="lazy"/>
              </div>
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

/* ---------- Clients we've worked with ---------- */

const ClientsSection = () => {
  const clients = [
    {
      name: "Ankor Maintenance & Inspection",
      sector: "Asset integrity · Ghana",
      img: "clients/ankor.png"
    },
    {
      name: "Ciotek",
      sector: "Technology",
      wordmark: true
    }
  ];
  return (
    <section id="clients" className="clients-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Companies we've worked with</div>
          </div>
          <div>
            <h2 className="h2">Trusted by teams on the <em>factory floor and in the office.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              A handful of the businesses we've shipped Power Apps and web apps for. Each project starts with a real bottleneck and ends with something their people use every day.
            </p>
          </div>
        </div>
        <div className="clients-grid">
          {clients.map(c => (
            <div className="client-tile" key={c.name}>
              <div className="client-logo">
                {c.img
                  ? <img src={c.img} alt={`${c.name} logo`} loading="lazy"/>
                  : <span className="client-wordmark">{c.name}</span>}
              </div>
              <div className="client-meta">
                <div className="client-name">{c.name}</div>
                <div className="client-sector">{c.sector}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ServicesSection, SolutionsSection, ProcessSection, ClientsSection });
