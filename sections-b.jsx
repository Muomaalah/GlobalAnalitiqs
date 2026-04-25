/* Industries, FAQ, Contact */

const IndustriesSection = () => {
  const items = [
    { name: "Logistics & shipping",      desc: "Dispatch, routes, fleet, freight." },
    { name: "Factories & plants",        desc: "Floor performance, downtime, quality." },
    { name: "Banks & lenders",           desc: "Lending, KYC, day-to-day back office." },
    { name: "Clinics & hospitals",       desc: "Patient intake, scheduling, records." },
    { name: "Shops & consumer brands",   desc: "Stock, point-of-sale, merchandising." },
    { name: "Power, water & field crews",desc: "Field jobs, assets, meter data." },
    { name: "Consultancies & agencies",  desc: "People, billing, project tracking." },
    { name: "Software companies",        desc: "Internal tools, growth, automation." }
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
              We don't pretend to know every line of business. These are the ones we've shipped in enough times to bring real opinions to the first meeting.
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
    { q: "How quickly can we start?", a: "Most projects start within two weeks of a signed scope. For a quick health check, we can be on a call within days." },
    { q: "How do you charge?", a: "The first two stages — listening and sketching — are fixed-price, so you know exactly what you're paying. The build runs in weekly chunks; you can pause or change direction at the end of any week." },
    { q: "Where is your team based?", a: "Senior people in Accra, Lagos and London. We work in your time zone — most projects share a daily 30-minute call that overlaps with your working hours." },
    { q: "We're an early-stage business — will you still talk to us?", a: "Yes. We work with a small number of early-stage businesses each year on a mix of cash and equity. Get in touch — there's no template, we'll figure out the right shape." },
    { q: "What does a project cost?", a: "A focused tool starts in the low five figures; a multi-team platform runs higher. We'll share an honest range after a 30-minute call — no quote-without-talking." },
    { q: "Who owns the code?", a: "You do, always. We hand over a clean copy of everything, full documentation, and a 30-day fix-it warranty after launch — included by default." }
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
            <a href="https://github.com/maxwelltaprah-prog" target="_blank" rel="noopener" className="btn btn-ghost">See us on GitHub</a>
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
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="https://github.com/maxwelltaprah-prog" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
);

Object.assign(window, { IndustriesSection, FAQSection, ContactSection, Footer });
