/* Brand mark + nav for Global Analytiqs */

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
        <a href="#services">Services</a>
        <a href="#toolkit">Toolkit</a>
        <a href="#mockups">Mockups</a>
        <a href="#work">Work</a>
        <a href="#faq">FAQ</a>
      </div>
      <a href="#contact" className="btn btn-primary">Start a project <Arrow/></a>
    </div>
  </nav>
);

const Hero = ({ variant }) => {
  // variant: "editorial" | "split" | "centered"
  return (
    <section className="hero" data-hero={variant} style={{borderTop:0}}>
      <div className="grain"/>
      <div className="wrap" style={{position:'relative'}}>
        <div className="hero-tag">
          <div className="mono" style={{marginBottom:8}}>ACCRA · LAGOS · LONDON</div>
          A small senior team that builds the apps and dashboards your team uses every day.
        </div>

        <div className="eyebrow" style={{marginBottom:32}}>A small software studio</div>

        {variant === 'split' ? (
          <div className="hero-content">
            <h1 className="display">
              We build the apps<br/>
              your team will <em>actually use.</em>
            </h1>
            <div className="lede-wrap">
              <p className="lede">
                The everyday tools that quietly run a business — the staff homepage, the booking form, the dashboard the boss opens on Monday — built around how your people already work.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Talk to us <Arrow/></a>
                <a href="#mockups" className="btn btn-ghost">See real examples</a>
              </div>
            </div>
          </div>
        ) : variant === 'centered' ? (
          <div className="hero-content">
            <h1 className="display">
              Software that does<br/>
              the <em>heavy lifting.</em>
            </h1>
            <p className="lede" style={{marginTop:32}}>
              We build the apps, dashboards and automatic workflows that quietly run a business — the things people use every day to do their jobs better, without thinking about it.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Talk to us <Arrow/></a>
              <a href="#mockups" className="btn btn-ghost">See real examples</a>
            </div>
          </div>
        ) : (
          <div className="hero-content">
            <h1 className="display">
              We build software<br/>
              <em>so your team doesn't<br/>
              have to.</em>
            </h1>
            <p className="lede" style={{marginTop:40}}>
              The everyday tools that quietly run a business — the staff homepage, the booking form, the report your CFO opens on Monday — built around how your people already work, instead of forcing them to change.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Talk to us <Arrow/></a>
              <a href="#mockups" className="btn btn-ghost">See real examples</a>
            </div>
          </div>
        )}

        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="mono">On GitHub</span>
            <span className="v">6 repos</span>
          </div>
          <div className="hero-meta-item">
            <span className="mono">Shared back</span>
            <span className="v">27 sheets</span>
          </div>
          <div className="hero-meta-item">
            <span className="mono">Typical build</span>
            <span className="v">4 — 12 wks</span>
          </div>
          <div className="hero-meta-item">
            <span className="mono">Cities</span>
            <span className="v">3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = ["Staff homepages", "Booking forms", "Mobile apps", "Approval flows", "Live dashboards", "Joining up systems", "Reporting", "Automation", "AI helpers"];
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
