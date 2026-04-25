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
          <div className="mono" style={{marginBottom:8}}>EST. 2019 — ACCRA / LAGOS / LONDON</div>
          A small, senior team building custom software for ambitious operators.
        </div>

        <div className="eyebrow" style={{marginBottom:32}}>Custom software studio</div>

        {variant === 'split' ? (
          <div className="hero-content">
            <h1 className="display">
              We build software<br/>
              that <em>moves</em><br/>
              the numbers.
            </h1>
            <div className="lede-wrap">
              <p className="lede">
                Global Analytiqs designs and ships custom applications for operators who need to cut cost, lift revenue, and run a tighter business — without the bloat of off-the-shelf platforms.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Book a call <Arrow/></a>
                <a href="#work" className="btn btn-ghost">See our work</a>
              </div>
            </div>
          </div>
        ) : variant === 'centered' ? (
          <div className="hero-content">
            <h1 className="display">
              Software,<br/>built to <em>move numbers.</em>
            </h1>
            <p className="lede" style={{marginTop:32}}>
              We design and ship custom applications that cut operating cost, lift revenue, and let teams focus on the work that matters.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Book a call <Arrow/></a>
              <a href="#work" className="btn btn-ghost">See our work</a>
            </div>
          </div>
        ) : (
          <div className="hero-content">
            <h1 className="display">
              Custom software<br/>
              for operators who<br/>
              <em>measure everything.</em>
            </h1>
            <p className="lede" style={{marginTop:40}}>
              We design and ship applications that cut operating cost, lift revenue, and give your team back the hours they used to lose to spreadsheets and stitched-together SaaS.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Book a call <Arrow/></a>
              <a href="#work" className="btn btn-ghost">See our work</a>
            </div>
          </div>
        )}

        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="mono">Engagements</span>
            <span className="v">40+</span>
          </div>
          <div className="hero-meta-item">
            <span className="mono">Avg. cost reduction</span>
            <span className="v">31%</span>
          </div>
          <div className="hero-meta-item">
            <span className="mono">Time-to-launch</span>
            <span className="v">8 wks</span>
          </div>
          <div className="hero-meta-item">
            <span className="mono">Client retention</span>
            <span className="v">94%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = ["Power Apps", "SharePoint", "Power Automate", "Azure", "Microsoft 365", "Power BI", "Dataverse", "Dynamics 365", "Claude Code"];
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
