<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Context & Production Deployment Knowledge

- **Owner:** Jeevan Bandanadham
- **Primary Domain:** `https://thejeevan.in` (and `https://www.thejeevan.in`)
- **Hosting Platform:** Vercel (Project: `thejeevan-portfolio`, Org: `team_pHiWuT5f7O4R1JtEkuf6qdYL`, Project ID: `prj_aYvJqoFHbQv654tVpYmHdwQiDdPL`)
- **DNS Registrar:** GoDaddy (`thejeevan.in`)
  - A Record `@` points to `76.76.21.21`
  - CNAME `www` points to `cname.vercel-dns.com.`
- **CI/CD Pipeline:** `.github/workflows/ci-cd.yml` handles automated lint, typecheck, build, and production deployment on pushes to `main`.
- **Deployment Guide:** Refer to `DEPLOYMENT.md` for complete DNS tables, secrets, and manual deploy commands (`npm run deploy`).

