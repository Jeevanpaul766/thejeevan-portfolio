# Deployment & CI/CD Pipeline Blueprint — thejeevan.in

**Domain:** `thejeevan.in` / `www.thejeevan.in`  
**Host & Infrastructure:** Vercel (Production Edge Network)  
**Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS  
**CI/CD Pipeline:** GitHub Actions (`.github/workflows/ci-cd.yml`) + Vercel Deployment Hooks

---

## 1. Production Project Identity

- **Vercel Project Name:** `thejeevan-portfolio`
- **Vercel Organization ID:** `team_pHiWuT5f7O4R1JtEkuf6qdYL`
- **Vercel Project ID:** `prj_aYvJqoFHbQv654tVpYmHdwQiDdPL`
- **Default Vercel URL:** `https://thejeevan-portfolio.vercel.app`
- **Primary Custom Domain:** `https://thejeevan.in`
- **Subdomain:** `https://www.thejeevan.in`

---

## 2. GoDaddy DNS Configuration Table

In your GoDaddy DNS Management console for **thejeevan.in** (as shown in your dashboard screenshot), apply these DNS updates:

| Action | Type | Name | Data / Value | TTL | Notes |
|---|---|---|---|---|---|
| **Edit Existing** | `A` | `@` | `76.76.21.21` | 600s / 1/2 Hour | Replace current `Parked` with Vercel Anycast IP |
| **Edit Existing** | `CNAME` | `www` | `cname.vercel-dns.com.` | 1 Hour | Points `www.thejeevan.in` to Vercel's edge network |
| *Keep as is* | `NS` | `@` | `ns19.domaincontrol.com.` / `ns20` | 1 Hour | GoDaddy default nameservers |
| *Keep as is* | `TXT` | `_dmarc` | *Existing DMARC record* | 1 Hour | Email security record |

*(Optional Alternative: If you prefer Vercel to manage all DNS, change GoDaddy Nameservers to `ns1.vercel-dns.com` and `ns2.vercel-dns.com`)*.

---

## 3. GitHub Actions CI/CD Pipeline

The automated CI/CD pipeline is configured in [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml).

### Pipeline Execution Flow
```mermaid
graph LR
    Push([Push to main]) --> TestJob[Verify & Build Job]
    TestJob --> LintCheck[TypeScript Typecheck]
    LintCheck --> NextBuild[Production Next.js Build]
    NextBuild --> DeployJob[Deploy to Vercel Job]
    DeployJob --> Aliased[Aliased to thejeevan.in]
```

### GitHub Repository Secrets Required
When you push this repository to GitHub (`https://github.com/Jeevanpaul766`), add these secrets in **Settings ➔ Secrets and variables ➔ Actions**:

1. **`VERCEL_TOKEN`**: Generate from [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. **`VERCEL_ORG_ID`**: `team_pHiWuT5f7O4R1JtEkuf6qdYL`
3. **`VERCEL_PROJECT_ID`**: `prj_aYvJqoFHbQv654tVpYmHdwQiDdPL`

---

## 4. Manual / Local Deployment Commands

From your terminal inside the project directory:

```bash
# Deploy to preview
npm run deploy:preview

# Deploy directly to live production (thejeevan.in)
npm run deploy
```

---

## 5. Deployment Protection Settings (Vercel Dashboard)

If you see a password/login prompt when visiting `thejeevan.in` after DNS propagation, turn off **Deployment Protection**:
1. Open [vercel.com/trivexatechnologiesdev-7317s-projects/thejeevan-portfolio/settings/deployment-protection](https://vercel.com/trivexatechnologiesdev-7317s-projects/thejeevan-portfolio/settings/deployment-protection)
2. Under **Deployment Protection**, toggle **Vercel Authentication** to **Disabled**.
3. Click **Save**.
