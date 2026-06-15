# Fix Header Navigation Routes

## Issues Found

1. **Hash links break from `/contact` page**: Home, About, Experience, Projects use plain `<a href="#sectionId">` tags. When on `/contact`, clicking "About" tries `href="#about"` on the Contact page which has no `#about` section — navigation fails.

2. **Mixed navigation types**: Hash sections use `<a>` tags while Contact uses React Router `<Link>`. All should use React Router `<Link>` for consistent SPA behavior.

3. **"Home" has no active state on initial load**: When the page first loads (no hash in URL), no nav link is active. `location.hash` is empty, so none of the `===` checks match.

4. **No smooth scroll on hash navigation**: Clicking hash links doesn't trigger smooth scrolling to the target section.

## Plan

### Step 1: Update `Navigation.jsx` — Replace `<a>` with `<Link>` for hash links

Change all hash-based `<a>` tags to React Router `<Link>` components pointing to `/#sectionId`. This ensures navigating from `/contact` correctly routes back to the home page with the hash.

```jsx
// Before
<a href="#about" className={...}>About</a>

// After
<Link to="/#about" className={...}>About</Link>
```

Apply to: Home (`/#intro`), About (`/#about`), Experience (`/#experience`), Projects (`/#projects`).

### Step 2: Fix active state logic in `Navigation.jsx`

Update the active detection so:
- When on `/` with no hash or hash `#intro`, the "Home" link is active
- When on `/` with a specific hash, that section's link is active
- When on `/contact`, the "Contact" link is active

```jsx
const isActiveSection = (hash) => {
  if (location.pathname !== '/') return false;
  if (hash === '#intro') return location.hash === '' || location.hash === '#intro';
  return location.hash === hash;
};
```

### Step 3: Add scroll-to-section utility in `Home.jsx`

Add a `useEffect` that reads `location.hash` on mount/navigation and smooth-scrolls to the matching section element. This ensures that navigating to `/#about` from `/contact` actually scrolls to the About section after the Home page renders.

```jsx
useEffect(() => {
  if (location.hash) {
    const el = document.getElementById(location.hash.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, [location]);
```

## Files to Modify

| File | Change |
|------|--------|
| `src/components/Navigation.jsx` | Replace `<a>` with `<Link>`, fix active state logic |
| `src/sections/Home.jsx` | Add scroll-to-hash effect |
