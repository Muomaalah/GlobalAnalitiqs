/* Industries, Testimonials, FAQ, Contact */

const IndustriesSection = () => {
  const items = [
    { name: "Logistics & 4PL", desc: "Dispatch, routing, fleet, freight ops." },
    { name: "Manufacturing", desc: "OEE, MES, quality, plant floor." },
    { name: "Financial Services", desc: "Underwriting, KYC, ledgers, ops." },
    { name: "Healthcare", desc: "Intake, scheduling, EHR adjacency." },
    { name: "Retail & FMCG", desc: "Replenishment, POS, merchandising." },
    { name: "Energy & Utilities", desc: "Field ops, asset & meter data." },
    { name: "Professional Services", desc: "Resourcing, billing, project ops." },
    { name: "B2B SaaS", desc: "Internal tooling, growth, automation." }
  ];
  return (
    <section id="industries">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Where we work</div>
          </div>
          <div>
            <h2 className="h2">Industries we know <em>cold.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              We don't pretend to know every domain. These are the ones we've shipped in often enough to bring real opinions to a kickoff.
            </p>
          </div>
        </div>
        <div className="industries-grid" style={{borderTop:'1px solid var(--rule)', borderLeft:'1px solid var(--rule)'}}>
          {items.map((it, i) => (
            <div className="industry" key={i}>
              <div className="industry-num">{String(i+1).padStart(2,'0')} —</div>
              <div className="industry-name">{it.name}</div>
              <div className="industry-desc">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const quotes = [
    {
      quote: "They diagnosed a problem our internal team had been circling for a year, and shipped the fix in six weeks.",
      name: "Adwoa Mensah",
      role: "COO, Tier-1 logistics operator"
    },
    {
      quote: "Senior engineers who actually understood our P&L. Felt like an extension of the leadership team, not a vendor.",
      name: "Ibrahim Okafor",
      role: "CFO, regional manufacturer"
    },
    {
      quote: "We replaced four SaaS tools and a hundred spreadsheets with one application. Payback was inside a quarter.",
      name: "Lillian Boateng",
      role: "Head of Operations, retail group"
    },
    {
      quote: "The clearest scoping I've seen from any partner. Every conversation tied back to a number on the dashboard.",
      name: "Marcus Adeyemi",
      role: "VP Engineering, B2B SaaS"
    }
  ];
  const [active, setActive] = React.useState(0);
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">In their words</div>
          </div>
          <div>
            <h2 className="h2">What clients say <em>after</em> the launch.</h2>
          </div>
        </div>
        <div className="testimonial-block">
          <div>
            <div className="testimonial-quote">{quotes[active].quote}</div>
            <div className="testimonial-author">
              <div className="name">{quotes[active].name}</div>
              <div>{quotes[active].role}</div>
            </div>
          </div>
          <div className="testimonial-list">
            {quotes.map((q, i) => (
              <div className={`testimonial-mini ${i === active ? 'active' : ''}`} key={i} onClick={() => setActive(i)}>
                <div className="name">{q.name}</div>
                <div className="role">{q.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "How quickly can we start?", a: "Most engagements kick off within two weeks of a signed scope. For smaller diagnostics, we can be on the ground in days." },
    { q: "Do you work fixed-price or time-and-materials?", a: "Both. Discovery and prototype phases are fixed-price by default. Build phases run as weekly sprints with a transparent burn-rate; you can pause or change direction at the end of any sprint." },
    { q: "Where is your team based?", a: "Senior engineering and design out of Accra, Lagos and London. We work in client time zones — most engagements have a daily standup overlapping at least four hours of your working day." },
    { q: "Do you take equity engagements?", a: "Selectively. For early-stage operators with a clear path to revenue, we'll consider a blended cash + equity structure on a multi-quarter engagement." },
    { q: "What does a typical engagement cost?", a: "Discovery phases start at $12k. Build engagements run from $40k for a focused tool to $400k+ for a multi-quarter platform build. We share an indicative range after a 30-minute call." },
    { q: "Who owns the code?", a: "You do. Always. We hand over a clean repo, full documentation, and a 30-day post-launch warranty by default." }
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Common questions</div>
          </div>
          <div>
            <h2 className="h2">Things operators always ask <em>before</em> we start.</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item ${i === open ? 'open' : ''}`} key={i}>
              <div className="faq-q" onClick={() => setOpen(i === open ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-toggle"/>
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="contact">
    <div className="wrap">
      <div className="eyebrow" style={{color:'rgba(245,241,234,0.6)'}}>Start a project</div>
      <div className="contact-grid" style={{marginTop:32}}>
        <h2 className="display" style={{fontSize:'clamp(56px, 7vw, 110px)'}}>
          Let's find the<br/>number worth <em>moving.</em>
        </h2>
        <div>
          <p className="lede">
            Tell us about the bottleneck. We'll come back within a working day with an honest read on whether we're the right team for it — and what it would take to fix.
          </p>
          <div className="hero-cta" style={{marginTop:24}}>
            <a href="mailto:hello@globalanalytiqs.com" className="btn btn-primary">Email us <Arrow/></a>
            <a href="#" className="btn btn-ghost">Book a 30-min call</a>
          </div>
        </div>
      </div>
      <div className="contact-channels">
        <div className="contact-channel">
          <span className="mono">General</span>
          <span className="v">hello@globalanalytiqs.com</span>
        </div>
        <div className="contact-channel">
          <span className="mono">New business</span>
          <span className="v">projects@globalanalytiqs.com</span>
        </div>
        <div className="contact-channel">
          <span className="mono">Accra HQ</span>
          <span className="v">2 Independence Ave, Accra</span>
        </div>
        <div className="contact-channel">
          <span className="mono">London</span>
          <span className="v">14 Bonhill St, London EC2A</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="wrap footer">
      <div>© 2026 GLOBAL ANALYTIQS LTD.</div>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  </footer>
);

Object.assign(window, { IndustriesSection, TestimonialsSection, FAQSection, ContactSection, Footer });
