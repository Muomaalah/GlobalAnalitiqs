/* Industries, FAQ, Contact, Footer */

const IndustriesSection = () => {
  const items = [
    { name: "Factories & plants",         desc: "Floor checks, downtime, quality." },
    { name: "Warehouses & logistics",     desc: "Stock counts, dispatch, fleet." },
    { name: "Field & maintenance teams",  desc: "Job sheets, spare parts, safety." },
    { name: "Agribusiness & milling",     desc: "Procurement, traceability, ops." },
    { name: "Banks & lenders",            desc: "KYC, approvals, day-to-day ops." },
    { name: "Clinics & hospitals",        desc: "Intake, scheduling, records." },
    { name: "Shops & consumer brands",    desc: "Stock, point-of-sale, staff sales." },
    { name: "Office-based businesses",    desc: "HR, IT helpdesks, internal tools." }
  ];
  return (
    <section id="industries">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Where we work</div>
          </div>
          <div>
            <h2 className="h2">Industries we know <em>well.</em></h2>
            <p className="lede" style={{marginTop:24}}>
              We've shipped Power Apps in factories, warehouses, fields and offices. These are the ones we've done enough times to bring real opinions to the first meeting.
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

const FAQSection = () => {
  const faqs = [
    { q: "Why Microsoft Power Apps?", a: "Because most businesses already pay for Microsoft 365. Power Apps lets us build mobile and desktop apps on top of that, joined up to your existing data — without buying yet another platform." },
    { q: "How quickly can we start?", a: "Most projects start within two weeks of a signed scope. For a quick health-check or a small one-screen app, we can be on a call within days." },
    { q: "How do you charge?", a: "The first two stages — listening and sketching — are fixed-price, so you know exactly what you're paying. The build runs in weekly chunks; you can pause or change direction at the end of any week." },
    { q: "Will it work on phones?", a: "Yes. Every app we build is designed for phones first — your warehouse staff, drivers and engineers shouldn't need a laptop to use it." },
    { q: "Where is your team based?", a: "Senior people in Accra, Lagos and London. We work in your time zone — most projects share a daily 30-minute call that overlaps with your working hours." },
    { q: "Who owns the code and the data?", a: "You do, always. We hand over a clean copy of everything, full documentation, and a 30-day fix-it warranty after launch — included by default." }
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
            <h2 className="h2">Things people always ask <em>before</em> we start.</h2>
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
      <div className="eyebrow" style={{color:'rgba(245,241,234,0.6)'}}>Start a conversation</div>
      <div className="contact-grid" style={{marginTop:32}}>
        <h2 className="display" style={{fontSize:'clamp(56px, 7vw, 110px)'}}>
          Tell us what's<br/>slow, broken, or<br/><em>eating your day.</em>
        </h2>
        <div>
          <p className="lede">
            We'll come back within one working day with an honest read on whether we're the right team for it — and a rough idea of what it would take to fix.
          </p>
          <div className="hero-cta" style={{marginTop:24}}>
            <a href="mailto:hello@globalanalytiqs.com" className="btn btn-primary">Send us an email <Arrow/></a>
            <a href="#solutions" className="btn btn-ghost">See real apps</a>
          </div>
        </div>
      </div>
      <div className="contact-channels">
        <div className="contact-channel">
          <span className="mono">General</span>
          <span className="v">hello@globalanalytiqs.com</span>
        </div>
        <div className="contact-channel">
          <span className="mono">New work</span>
          <span className="v">projects@globalanalytiqs.com</span>
        </div>
        <div className="contact-channel">
          <span className="mono">Cities</span>
          <span className="v">Accra · Lagos · London</span>
        </div>
        <div className="contact-channel">
          <span className="mono">Reply within</span>
          <span className="v">1 working day</span>
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
        <a href="#services">What we build</a>
        <a href="#solutions">Real apps</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </footer>
);

Object.assign(window, { IndustriesSection, FAQSection, ContactSection, Footer });
