# Dark Mode Implementation

## Overview
Your portfolio now includes a fully functional dark mode toggle with smooth transitions and localStorage persistence.

## Features

✅ **Theme Toggle Button** - Located in the navigation bar
✅ **Smooth Transitions** - All colors transition smoothly between themes
✅ **LocalStorage Persistence** - Theme preference is saved and restored
✅ **System Preference Detection** - Automatically detects OS dark mode preference
✅ **Accessible** - Proper ARIA labels and keyboard navigation

## How It Works

### 1. Theme Context (`src/context/ThemeContext.jsx`)
- Manages global theme state using React Context
- Saves theme preference to localStorage
- Detects system color scheme preference on first load
- Applies theme by setting `data-theme` attribute on document root

### 2. Theme Toggle Component (`src/components/ThemeToggle.jsx`)
- Toggle button with sun/moon icons
- Located in navigation bar
- Smooth rotation animation on hover

### 3. CSS Variables (`src/index.css`)
All colors are defined as CSS variables with light and dark variants:

```css
:root {
  /* Light mode */
  --primary-color: #4a90e2;
  --text-primary: #1a1a1a;
  --bg-primary: #ffffff;
  /* ... */
}

[data-theme='dark'] {
  /* Dark mode */
  --primary-color: #5ba3ff;
  --text-primary: #e9ecef;
  --bg-primary: #0f1419;
  /* ... */
}
```

## File Structure

```
src/
├── context/
│   └── ThemeContext.jsx      # Theme state management
├── components/
│   ├── ThemeToggle.jsx        # Toggle button component
│   └── ThemeToggle.css        # Toggle button styles
├── index.css                  # Global CSS variables for both themes
└── pages/                     # All page styles use CSS variables
```

## Customizing Colors

To customize the color scheme, edit the CSS variables in `src/index.css`:

### Light Mode Colors
```css
:root {
  --primary-color: #4a90e2;      /* Primary brand color */
  --text-primary: #1a1a1a;       /* Main text color */
  --bg-primary: #ffffff;          /* Background color */
  --bg-secondary: #f8f9fa;        /* Secondary background */
  /* ... */
}
```

### Dark Mode Colors
```css
[data-theme='dark'] {
  --primary-color: #5ba3ff;      /* Brighter primary for dark bg */
  --text-primary: #e9ecef;       /* Light text for dark bg */
  --bg-primary: #0f1419;          /* Dark background */
  --bg-secondary: #1a1f26;        /* Slightly lighter dark bg */
  /* ... */
}
```

## Usage

The theme toggle is automatically included in the navigation bar. Users can:

1. **Click the toggle** - Sun/moon icon in the navigation bar
2. **Automatic save** - Theme preference is saved to localStorage
3. **Persistent** - Theme is restored on page reload
4. **System preference** - Detects OS dark mode on first visit

## Browser Support

- Modern browsers with CSS Custom Properties support
- localStorage for persistence
- Graceful fallback to light mode

## Accessibility

- ✅ ARIA labels for screen readers
- ✅ Keyboard accessible (Tab + Enter)
- ✅ Focus visible indicators
- ✅ Respects `prefers-color-scheme` media query
- ✅ Smooth transitions (respects `prefers-reduced-motion`)

## Tips

1. **Test both themes** - Always check your content looks good in both modes
2. **Contrast ratios** - Ensure text meets WCAG contrast requirements
3. **Images** - Consider using different images/logos for dark mode if needed
4. **Third-party components** - Make sure any external libraries support dark mode

## Future Enhancements

Consider adding:
- System preference follow option (auto mode)
- Additional themes (e.g., high contrast)
- Per-page theme overrides
- Custom color picker for users
