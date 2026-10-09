# RecruitYa – website

React (Vite) website for **RecruitYa**, the company of a freelance senior recruiter. The design combines two reference sites: energievoortransitie.nl and infratalenten.nl.

Live: https://edrees.github.io/recruitya/

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173/recruitya/
npm run build     # production build in dist/
npm run preview   # preview the build
```

## Structure

```
src/
  App.jsx                 Page layout; shares contact-form prefill between sections
  components/             One component per section (Header, Hero, Vacancies, Contact, …)
  data/vacancies.js       Vacancy data – edit to add/change vacancies
  lib/submitContact.js    Sends the contact form to the form service
  hooks/useReveal.js      Scroll fade-in
  styles.css              All styles
public/                   Static files (favicon, later images/logos)
.github/workflows/        Automatic deploy to GitHub Pages
```

## Contact form

GitHub Pages only hosts static files, so the form posts to [Formspree](https://formspree.io) (free tier: 50 messages/month), which emails each message.

1. Create a form at formspree.io with the recruiter's email address and copy the endpoint (`https://formspree.io/f/xxxxxxx`).
2. **Local:** copy `.env.example` to `.env.local` and paste the endpoint.
3. **Live site:** GitHub repo → Settings → Secrets and variables → Actions → *Variables* → New variable `VITE_CONTACT_ENDPOINT` with the endpoint. Then re-run the deploy (Actions → Deploy to GitHub Pages → Run workflow).

Without an endpoint the form runs in **demo mode**: it validates and shows the thank-you message, but sends nothing, and shows a small "Demo-modus" note.

Includes validation, a spam honeypot, a sending state and error handling.

## Deployment

Every push to `main` builds the site and publishes it via GitHub Actions.
One-time setup: repo → Settings → Pages → Source: **GitHub Actions**.

The site runs under `/recruitya/` (see `base` in `vite.config.js`). For a custom domain like recruitya.nl, set `base: '/'` and add the domain under Settings → Pages.

## Still to do

- Replace every `[placeholder]` (name, photos, years of experience, vacancies, logos, testimonials, contact details, KvK number)
- Connect Formspree (see above)
- Confirm the three services with the owner
- Possible next features: separate vacancy pages with routing, a CMS for vacancies, CV upload, analytics/cookie banner
