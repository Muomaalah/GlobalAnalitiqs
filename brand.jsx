/* Brand mark + nav + hero + marquee for Global Analytiqs */

const BrandMark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1"/>
    <path d="M3 14 L25 14" stroke="currentColor" strokeWidth="1"/>
    <path d="M14 3 Q21 14 14 25 Q7 14 14 3 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="14" cy="14" r="2.5" fill="var(--accent)"/>
  </svg>
);

const Arrow = ({ size = 14 }) => (
  <svg className="btn-arrow" width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 11 L11 3 M11 3 H5 M11 3 V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
  </svg>
);

const Nav = () => (
  <nav className="nav">
    <div className="wrap nav-inner">
      <a href="#top" className="brand">
        <span className="brand-mark"><BrandMark/></span>
        <span>Global Analytiqs</span>
      </a>
      <div className="nav-links">
        <a href="#services">What we build</a>
        <a href="#solutions">Real apps</a>
        <a href="#clients">Clients</a>
        <a href="#process">How we work</a>
        <a href="#industries">Industries</a>
        <a href="#faq">FAQ</a>
      </div>
      <a href="#contact" className="btn btn-primary">Talk to us <Arrow/></a>
    </div>
  </nav>
);

const Hero = ({ variant }) => {
  return (
    <section className="hero" data-hero={variant} style={{borderTop:0}}>
      <div className="grain"/>
      <div className="wrap" style={{position:'relative'}}>
        <div className="hero-tag">
          <div className="mono" style={{marginBottom:8}}>POWER APPS · WEB APPS · POWER AUTOMATE</div>
          We build the apps your team taps every morning — payslips, leave, machine checks, deliveries.
        </div>

        <div className="eyebrow" style={{marginBottom:32}}>A Microsoft Power Apps & web app studio</div>

        {variant === 'split' ? (
          <div className="hero-content">
            <h1 className="display">
              Power Apps and web apps<br/>
              for the work your team<br/>
              does <em>every day.</em>
            </h1>
            <div className="lede-wrap">
              <p className="lede">
                We build custom Microsoft Power Apps and web apps — for the leave request, the payslip, the machine check, the stock count, the purchase approval — built around how your people already work.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Talk to us <Arrow/></a>
                <a href="#solutions" className="btn btn-ghost">See real apps</a>
              </div>
            </div>
          </div>
        ) : variant === 'centered' ? (
          <div className="hero-content">
            <h1 className="display">
              Power Apps and web apps<br/>
              for the <em>work people</em><br/>
              do every day.
            </h1>
            <p className="lede" style={{marginTop:32}}>
              Custom Microsoft Power Apps and web apps — payslips, leave, machine maintenance, stock counts, approvals — that fit how your people already work.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Talk to us <Arrow/></a>
              <a href="#solutions" className="btn btn-ghost">See real apps</a>
            </div>
          </div>
        ) : (
          <div className="hero-content">
            <h1 className="display">
              Microsoft Power Apps<br/>
              and <em>web apps</em> for the<br/>
              everyday work of a business.
            </h1>
            <p className="lede" style={{marginTop:40}}>
              We build custom Power Apps and web apps — for the leave request, the payslip, the maintenance check, the stock count, the purchase approval. The small everyday things that, done well, make a business run smoother.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Talk to us <Arrow/></a>
              <a href="#solutions" className="btn btn-ghost">See real apps</a>
            </div>
          </div>
        )}

        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="mono">Apps shipped</span>
            <span className="v">12+</span>
          </div>
          <div className="hero-meta-item">
            <span className="mono">Built on</span>
            <span className="v">Power Apps</span>
          </div>
          <div className="hero-meta-item">
            <span className="mono">Typical build</span>
            <span className="v">4 — 12 wks</span>
          </div>
          <div className="hero-meta-item">
            <span className="mono">Cities</span>
            <span className="v">Accra · Lagos · London</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = ["Payslips", "Leave requests", "Machine maintenance", "QR-coded spare parts", "Stock counts", "Purchase approvals", "Incident reports", "IT tickets", "Fleet servicing", "Quality checks", "Staff benefits", "Truck scheduling"];
  const Track = () => (
    <span>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span>{t}</span>
          <span className="dot"/>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Track/><Track/>
      </div>
    </div>
  );
};

Object.assign(window, { BrandMark, Arrow, Nav, Hero, Marquee });
