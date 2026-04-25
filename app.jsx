/* App entry — assembles the full marketing page */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "#C2410C",
  "hero": "editorial"
}/*EDITMODE-END*/;

const ACCENTS = [
  { v: "#C2410C", label: "Rust" },
  { v: "#1E40AF", label: "Cobalt" },
  { v: "#0F766E", label: "Pine" },
  { v: "#7C2D12", label: "Mahogany" },
  { v: "#0A0A0A", label: "Ink" },
  { v: "#B45309", label: "Amber" }
];

const App = () => {
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
    document.documentElement.style.setProperty('--accent', tweaks.accent);
  }, [tweaks.theme, tweaks.accent]);

  // Reveal-on-scroll
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav/>
      <main id="top">
        <Hero variant={tweaks.hero}/>
        <Marquee/>
        <ServicesSection/>
        <ProcessSection/>
        <CasesSection/>
        <IndustriesSection/>
        <TestimonialsSection/>
        <FAQSection/>
        <ContactSection/>
        <Footer/>
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio
            label="Mode"
            value={tweaks.theme}
            options={[{value:'light', label:'Light'},{value:'dark', label:'Dark'}]}
            onChange={v => setTweaks({theme: v})}
          />
        </TweakSection>
        <TweakSection title="Accent color">
          <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:8}}>
            {ACCENTS.map(a => (
              <button
                key={a.v}
                onClick={() => setTweaks({accent: a.v})}
                title={a.label}
                style={{
                  width:'100%', aspectRatio:'1',
                  background: a.v,
                  border: tweaks.accent === a.v ? '2px solid var(--ink)' : '1px solid var(--rule-strong)',
                  borderRadius: 8, cursor:'pointer'
                }}
              />
            ))}
          </div>
          <TweakColor label="Custom" value={tweaks.accent} onChange={v => setTweaks({accent: v})}/>
        </TweakSection>
        <TweakSection title="Hero layout">
          <TweakRadio
            label="Variant"
            value={tweaks.hero}
            options={[
              {value:'editorial', label:'Editorial'},
              {value:'split', label:'Split'},
              {value:'centered', label:'Centered'}
            ]}
            onChange={v => setTweaks({hero: v})}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
