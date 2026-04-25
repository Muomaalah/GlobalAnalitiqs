# Global Analytiqs

Marketing site for Global Analytiqs — a custom software studio building on the
Microsoft / Power Platform stack (Power Apps, SharePoint, Power Automate,
Azure, Microsoft 365, Power BI, Dataverse, Dynamics 365) with AI-assisted
delivery.

## Live site

Once the `Deploy site to GitHub Pages` workflow completes, the site is served at:

  https://muomaalah.github.io/GlobalAnalitiqs/

## Local preview

The site is plain static files (HTML/CSS + React + Babel from a CDN). Open
`index.html` directly in a browser, or run any static server:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

- `index.html` — entry point, loads React/Babel from CDN and the JSX scripts
- `styles.css` — design tokens, layout, components
- `brand.jsx` — brand mark, nav, hero, marquee
- `sections-a.jsx` — services, process, case studies
- `sections-b.jsx` — industries, testimonials, FAQ, contact, footer
- `app.jsx` — composes the page and wires the tweaks panel
- `tweaks-panel.jsx` — design-time tweaks shell (inert outside Claude Design)

## Deployment

Pushes to `main` or `claude/implement-design-github-hosting-fIz6v` trigger
`.github/workflows/pages.yml`, which uploads the repo root as a Pages artifact
and deploys it. `enablement: true` on `actions/configure-pages` turns Pages on
the first time it runs.
