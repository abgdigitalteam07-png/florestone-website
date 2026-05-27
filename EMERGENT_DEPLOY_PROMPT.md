# Emergent Deploy Prompt

Once you have the GitHub repo pushed, paste the following message into a **new Emergent project chat**. Replace `<YOUR-GITHUB-URL>` with your repo URL.

---

## Paste this into Emergent

> Import this existing GitHub repo and deploy it as-is — do not regenerate or rewrite anything:
>
> **Repo:** `<YOUR-GITHUB-URL>`
>
> **Stack:** Next.js 16.2.6 (App Router), React 19.2.4, Tailwind CSS v4, TypeScript strict. No backend database. The only API route is `app/api/contact/route.ts` which sends an email via Resend if `RESEND_API_KEY` is set, otherwise just returns success.
>
> **Build commands:**
> - Install: `npm install`
> - Build: `npm run build`
> - Start: `npm run start`
> - Dev: `npm run dev` (port 3000)
>
> **Pages to verify after deploy:**
> - `/` (homepage)
> - `/products` (catalog)
> - `/s-series`, `/f-series`, `/t-series`, `/barrier-free` (product series detail)
> - `/why-florestone`, `/find-a-dealer`, `/resources`, `/contact`
>
> **Environment variables (optional):**
> - `RESEND_API_KEY` — enables real email sending from contact form
> - `CONTACT_TO_EMAIL` — destination for inquiries (default `sales@florestone.com`)
> - `NEXT_PUBLIC_SITE_URL` — used for SEO canonical URLs
>
> **Notes:**
> - The site loads one external image from HubSpot (`24202603.fs1.hubspotusercontent-na1.net`) which is already allow-listed in `next.config.ts`.
> - The site builds clean — `npm run build` should pass with zero TypeScript errors and 13 prerendered routes.
> - Please do not modify any code; just install dependencies, run the production build, and deploy. If you must make a change (e.g. to fit Emergent's runtime), open a chat message explaining what you changed before committing.

---

## If Emergent can't import directly

If Emergent's chat refuses or fails to pull from GitHub, fall back to this:

1. In your local terminal: `cd /Users/mali/projects/florestone && zip -r florestone.zip . -x "node_modules/*" -x ".next/*"` — creates a clean zip
2. Upload that zip to Emergent and ask "deploy this Next.js project as-is"

---

## After deploy

Emergent will give you a public URL. Send that to your manager. Iterations are free — every time we update the code, you push to GitHub and Emergent picks it up automatically on the next deploy (no extra credits).
