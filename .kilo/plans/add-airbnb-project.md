# Add Airbnb EDA Project to Website

## Changes

### 1. Create `src/assets/dashboard.svg`
A new SVG icon for the Airbnb EDA project (a dashboard/chart icon). The existing icons are Material-style SVGs — match that style.

### 2. Update `src/sections/Projects.jsx`
- Import the new `dashboard.svg`
- Add a new entry to `projectsData`:

```js
{
  id: 4,
  title: 'Airbnb EDA & Dashboard',
  description: 'Interactive data analysis of ~102K Airbnb listings in NYC with exploratory data analysis, a Streamlit dashboard with 7 tabs of visualizations, and A/B testing for business insights.',
  technologies: ['Python', 'Streamlit', 'Plotly'],
  logo: <img src={dashboard} alt="Airbnb EDA & Dashboard" />,
  githubLink: 'https://github.com/necromet/Airbnb-Opendata-EDA-Visualization',
}
```

No CSS changes needed — the grid already supports up to 6 items (animation delays defined for nth-child 1–6).

## Files
| File | Action |
|------|--------|
| `src/assets/dashboard.svg` | Create (new icon) |
| `src/sections/Projects.jsx` | Edit (add project entry) |
