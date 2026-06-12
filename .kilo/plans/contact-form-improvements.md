# Contact Section Improvements

## 1. Reduce boldness of "Get In Touch" and "Connect With Me"

Both headings currently use `font-weight: 700`.

### Changes:
- **`src/sections/Projects.css:16`** — `.page-title` font-weight: `700` → `500`
- **`src/sections/About.css:55`** — `.section-heading` font-weight: `700` → `500`

User confirmed: change globally across all pages.

## 2. Integrate Formspree for the contact form

Replace the current frontend-only `handleSubmit` with a Formspree form action.

### Changes in `src/sections/Contact.jsx`:
- Remove `useState` for `formData` and `handleChange`/`handleSubmit` logic
- Add `useForm` hook from `@formspree/react` (or use plain form `action` attribute)
- Set form `action` to `https://formspree.io/f/<FORM_ID>` targeting `edwardrenaldi219@gmail.com`
- The user needs to create a Formspree form at https://formspree.io and get their form ID
- Update the form to use Formspree's success/error states

**Approach**: Use the `@formspree/react` package (`useForm` hook) for a clean React integration.

### Install dependency:
```
npm install @formspree/react
```

### Updated form logic:
- Import `useForm` from `@formspree/react`
- Call `useForm("FORM_ID_PLACEHOLDER")` — user will replace with real Formspree form ID
- Use `state.succeeded` for success message
- Use `state.errors` for error handling
- Form fields: `name`, `email`, `subject`, `message` (keep same field names)
- Remove manual `formData` state, `handleChange`, and `handleSubmit`

## 3. Add Business Inquiry email

### Changes in `src/sections/Contact.jsx`:
- Add a new info item in the `quick-info` div for business inquiries:
  ```jsx
  <div className="info-item">
    <h3 className="info-title">Business Inquiries</h3>
    <p className="info-text">
      <a href="mailto:eraicode@gmail.com">eraicode@gmail.com</a>
    </p>
  </div>
  ```

## Files to modify:
1. `src/sections/Contact.jsx` — Formspree integration + business inquiry email
2. `src/sections/Contact.css` — Reduce heading boldness (scoped to contact page)
3. `package.json` — Add `@formspree/react` dependency

## Note:
The user must create a Formspree form at https://formspree.io linked to `edwardrenaldi219@gmail.com` and replace the placeholder form ID in the code.
