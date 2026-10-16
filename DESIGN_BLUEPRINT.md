# Personal Portfolio Website — Design & Experience Blueprint

**Project:** Jeevan Paul — Personal Portfolio  
**Design direction:** Old-money editorial luxury × modern AI engineering  
**Primary goal:** Present a polished, memorable portfolio that makes recruiters, founders, and potential clients understand my technical strengths quickly and want to contact me.

---

## 1. Creative direction

Build a calm, premium, editorial experience inspired by heritage magazines, luxury stationery, and understated architecture—not a flashy crypto landing page.

The site should feel:
- **Quietly confident:** generous whitespace, restrained decoration, precise typography.
- **Warm and tactile:** parchment backgrounds, deep forest green, antique gold, ink-like text.
- **Technically sharp:** refined transitions, interactive project details, clear evidence of engineering work.
- **Human:** a direct introduction, practical project stories, and an obvious contact path.

**Avoid:** neon gradients, glassmorphism everywhere, excessive glowing effects, huge animated cursors, constant motion, fake metrics, and overly long paragraphs.

### Design principle
**Luxury in the surface; engineering clarity underneath.** Every animation should guide attention or explain hierarchy—not exist only to show off.

---

## 2. Colour system

Use these as design tokens throughout the site.

| Token | Hex | Usage |
|---|---|---|
| `--paper` | `#F4F0E6` | Main page background |
| `--ivory` | `#FBF8F1` | Cards and light panels |
| `--forest` | `#183D32` | Primary brand colour, buttons, key sections |
| `--deep-forest` | `#102A23` | Footer and dark feature sections |
| `--ink` | `#242820` | Main text |
| `--muted-ink` | `#6F7166` | Supporting copy |
| `--antique-gold` | `#B08D57` | Fine borders, labels, small highlights |
| `--sage` | `#A7B2A0` | Secondary accent |
| `--line` | `#D9D1C2` | Dividers and card outlines |
| `--white` | `#FFFFFF` | Text on dark backgrounds |

### Colour rules
- Use paper/ivory for about 70% of the page.
- Use forest/deep forest for roughly 20%.
- Reserve gold and sage for the remaining accents.
- Gold is a detail colour, not a paragraph colour.
- Check contrast for body text and controls; never sacrifice readability for the aesthetic.

---

## 3. Typography

Use a two-font editorial system.

- **Display / headlines:** `Cormorant Garamond` (or `DM Serif Display`) — elegant, high-contrast serif.
- **Body / UI:** `DM Sans` (or `Manrope`) — clean, highly readable sans-serif.
- **Optional technical labels:** use the body font in uppercase with letter spacing.

### Type scale
- Hero headline: `clamp(3.2rem, 8vw, 7.5rem)`, line-height around `0.92`.
- Section title: `clamp(2.4rem, 5vw, 4.5rem)`.
- Project title: `1.5–2.25rem`.
- Body: `1rem–1.125rem`, line-height `1.65`.
- Eyebrow labels: `0.7rem–0.8rem`, uppercase, letter spacing `0.14em`.

Use sentence case for most headings. Avoid making every label uppercase.

---

## 4. Layout and art direction

- Desktop content width: approximately `1240px`, with generous outer margins.
- Main grid: 12 columns on desktop, 6 on tablet, 4 on mobile.
- Section spacing: `120–160px` desktop, `76–100px` mobile.
- Cards: subtle 1px border, minimal shadow, square-ish corners (`4–10px`), no excessive pill shapes.
- Buttons: restrained rectangular shapes with clear hover/focus states.
- Add a fine grain texture only if it remains subtle and does not reduce text clarity.
- Use original project screenshots, architecture diagrams, and carefully selected abstract textures instead of generic stock photos.
- A portrait is optional. If used, choose a natural, well-lit photograph with a neutral background.

---

## 5. Full website flow

### Primary navigation
**JEEVAN PAUL** wordmark on the left. On the right: `Work`, `About`, `Approach`, `Writing`, and a `Contact` button.

- Header starts transparent or paper-coloured over the hero.
- After scrolling, it becomes a lightly opaque paper panel with a fine bottom border.
- Mobile navigation opens as a simple full-screen paper menu.
- The active section can receive a small gold marker.
- Keep the navigation short; don't add links to empty pages.

### Page journey

`Opening → Hero → Selected Work → Capabilities → How I Think → About → Notes / Writing → Contact → Footer`

The user should understand who I am and what I build within the first 5–8 seconds.

---

## 6. Section-by-section design

### A. Opening / intro transition
**Purpose:** Establish the premium tone immediately.

- Background: warm paper.
- Show a small monogram or typographic mark.
- Briefly reveal the name and a small line such as `Independent AI & Backend Engineering`.
- Transition into the hero using a gentle opacity and vertical movement.
- Keep this transition short (about 500–900ms). Do not force visitors to wait through a long splash screen.
- Respect reduced-motion settings and avoid blocking content if JavaScript is delayed.

### B. Hero — “The first impression”
**Layout:** Two-column editorial composition on desktop; stacked on mobile.

**Left side**
- Eyebrow: `AI ENGINEERING · BACKEND SYSTEMS · AGENTIC WORKFLOWS`
- Main headline option:  
  **“Building intelligent systems with a clear sense of purpose.”**
- Supporting copy:  
  “I’m Jeevan Paul, an AI and backend engineer focused on practical LLM applications, retrieval systems, agent workflows, and dependable APIs.”
- Primary CTA: `Explore selected work`
- Secondary CTA: `Get in touch`
- Small availability note only if it is accurate and current.

**Right side**
- An abstract architectural composition: fine-line geometry, a forest-green panel, a small gold rule, and a softly moving orbit or diagram.
- Alternative: a high-quality portrait with a restrained editorial crop.
- The visual should support the story, not compete with the headline.

**Hero motion**
1. Eyebrow fades in.
2. Headline reveals by line with a small upward movement.
3. Supporting copy fades in.
4. CTAs appear last.
5. The right-side composition drifts very subtly as the page scrolls.

Do not use aggressive parallax that makes text hard to read.

### C. Selected work — “Proof over claims”
Use three to five strong projects, not a wall of every experiment. Each project card should show:
- Project name and category.
- One-sentence problem statement.
- What I built and why it matters.
- Stack tags.
- A real screenshot, architecture graphic, or product visual.
- Links only when the destination is public and safe to share.

**Recommended portfolio projects (verify details before publishing):**

1. **Anveshan — Local Deep Research OS**  
   A local-first research workflow using small language models for extraction, planning, gap analysis, critique, and synthesis.  
   Possible tags: `Python`, `LLMs`, `Local Inference`, `Research Workflows`.

2. **NiveshIQ — Multi-Agent Investment Research Prototype**  
   A multi-agent research and review workflow with evidence verification, adversarial critique, a PostgreSQL intelligence store, and drift alerts. Clearly label it as a prototype/educational system and include appropriate financial disclaimers.

3. **NyayaPath — Agentic Legal Guidance Prototype**  
   A legal-information prototype using local retrieval, regime classification, fallback search, and safety-oriented handling. Clearly state that it is not a substitute for a qualified lawyer.

4. **TamizhCoin — Web3 Ecosystem**  
   A token ecosystem website and related application components. Describe only verified, deployed functionality and avoid implying investment returns or endorsements.

5. **Udhavi — Voice-First Community Support App**  
   A concept/prototype focused on accessible requests and volunteer coordination. Clearly distinguish implemented features from planned features.

**Project-card interaction**
- On hover: image shifts by a few pixels, border changes to antique gold, and a small arrow moves.
- On click: open a detailed case study or project page.
- Do not hide essential project information behind hover; mobile visitors must get the same content.

### D. Capabilities — “What I work with”
Present capability groups rather than a giant logo cloud.

**AI applications**
- LLM application development
- Retrieval-Augmented Generation (RAG)
- Tool-using and multi-agent workflows
- Prompt design and caching strategies
- Evaluation, tracing, and observability

**Backend engineering**
- Python and FastAPI
- REST API design and integration
- PostgreSQL and data modelling
- Authentication, validation, and error handling
- Docker, Git, and deployment workflows

**Web3 and product engineering**
- Solidity and Polygon concepts
- Smart-contract integration
- Next.js / React application work
- Connecting product interfaces to backend services

Only list technologies that I can discuss confidently in an interview. Use proficiency labels only if they are honest and meaningful.

**Visual:** three editorial columns with thin vertical dividers. Reveal each column as it enters the viewport.

### E. Approach — “How I think”
Show a simple four-step process:

1. **Understand** — define the user problem and constraints.
2. **Design** — map the architecture, data flow, and failure cases.
3. **Build** — implement small, testable components.
4. **Verify** — evaluate behaviour, trace failures, and document limitations.

Use a horizontal sequence on desktop and a vertical timeline on mobile. Each step gets a numbered marker and a fine gold connector line.

### F. About — “The person behind the systems”
Use a two-column layout with a short personal statement and a compact principles list.

Suggested copy:
“I’m an engineer interested in the space where AI capabilities meet dependable software. I enjoy turning broad ideas into systems with clear boundaries, useful evaluation, and practical user value. My work spans LLM applications, backend services, agentic workflows, and selected Web3 projects.”

Principles:
- Start with the problem, not the framework.
- Make system behaviour observable.
- Prefer evidence over impressive-sounding claims.
- Design for failure and recovery.
- Keep learning through projects and experiments.

Keep this section personal but professional. Do not publish private contact details or personal history that isn't relevant to the work.

### G. Notes / writing
Use this section only if there are real posts, notes, or technical write-ups to link.

Possible topics:
- Tracing agent workflows with LangSmith.
- Designing a simple RAG pipeline.
- Lessons from running local language models.
- Building resilient API workflows.
- Evaluating multi-agent systems beyond a successful demo.

If there are no published articles yet, label the section `Field Notes` and show one or two genuine short notes—or hide it until there is content. Never invent article titles, publication dates, or readership metrics.

### H. Contact — “Let’s make something useful”
- Deep forest background.
- Large ivory serif heading.
- Short message: “Have a problem worth solving? I’m open to thoughtful conversations about AI applications, backend systems, and product engineering.”
- Contact email: add the actual public professional email before launch.
- Buttons/links: email, LinkedIn, GitHub.
- Use only verified profile URLs and working contact destinations.
- Optional contact form should include labels, validation, success/error states, spam protection, and a privacy note.

### I. Footer
- Wordmark and a short descriptor.
- Small links to Work, About, GitHub, LinkedIn, Email.
- Copyright year generated automatically.
- Small “Back to top” link.
- Keep the footer quiet and compact.

---

## 7. Scroll animation system

Use **Framer Motion** with `whileInView` / `useInView`, or **GSAP + ScrollTrigger** if the project truly needs pinned storytelling. For a personal portfolio, Framer Motion is the simpler default. Use CSS for basic hover states.

| Element | Motion | Approximate duration | Notes |
|---|---|---:|---|
| Hero eyebrow | Opacity 0 → 1, Y 12 → 0 | 450ms | First |
| Hero headline | Line-by-line reveal, slight Y shift | 650–900ms | Stagger lines gently |
| Hero copy and CTAs | Opacity 0 → 1, Y 14 → 0 | 450ms | After headline |
| Section headings | Opacity 0 → 1, Y 22 → 0 | 500ms | Trigger once |
| Project cards | Opacity 0 → 1, Y 28 → 0 | 550ms | Stagger 80–120ms |
| Capability columns | Opacity 0 → 1, Y 18 → 0 | 450ms | Stagger slightly |
| Process timeline | Draw/reveal connector | 700ms | Keep understandable |
| Project image hover | Scale 1 → 1.025 | 350ms | No dramatic zoom |
| Header on scroll | Background/border transition | 200ms | No layout jump |
| Contact panel | Gentle reveal | 500ms | No pinning needed |

### Motion rules
- Default to `transform` and `opacity` for smooth performance.
- Avoid animating large blur filters, layout dimensions, or expensive shadows on every scroll frame.
- Trigger most reveals once; do not repeatedly animate when the visitor scrolls up and down.
- Do not make the entire page a pinned scroll sequence.
- Keep the site fully usable with keyboard navigation and without animation.
- Use `prefers-reduced-motion: reduce` to remove or simplify motion.
- Ensure content is visible if animation code fails.
- Test on a mid-range phone, not only a high-powered laptop.

### Reduced-motion behaviour
When reduced motion is enabled:
- Disable parallax and pinned scenes.
- Replace line-by-line reveals with immediate visibility.
- Keep all content and navigation available.
- Preserve meaningful state changes and focus indicators.

---

## 8. Recommended technical stack

**Default stack**
- Next.js (App Router) + TypeScript
- Tailwind CSS for design tokens and responsive layout
- Framer Motion for scroll reveals and micro-interactions
- Lucide icons, used sparingly
- Vercel or another suitable host for deployment
- A contact form provider or a small server-side endpoint, if a form is required

**Keep it lightweight**
- Avoid a database unless the portfolio needs dynamic content.
- Store project data in typed local objects/MDX.
- Use optimized local images with `next/image`.
- Use semantic HTML and accessible labels.
- Keep dependencies limited; don't add GSAP, Three.js, and multiple animation libraries unless there is a real need.

### Suggested routes
- `/` — single-page portfolio
- `/work/[slug]` — optional detailed case studies
- `/notes/[slug]` — optional technical writing
- `/privacy` — only if a form or analytics setup requires it

A single-page portfolio is enough for the first release. Add case-study routes when the content is ready.

---

## 9. Component map

```text
app/
  layout.tsx
  page.tsx
  globals.css
  work/
    [slug]/
      page.tsx
  notes/
    [slug]/
      page.tsx
components/
  site-header.tsx
  mobile-navigation.tsx
  hero-section.tsx
  editorial-heading.tsx
  selected-work.tsx
  project-card.tsx
  capabilities-section.tsx
  process-timeline.tsx
  about-section.tsx
  notes-section.tsx
  contact-section.tsx
  site-footer.tsx
  motion-reveal.tsx
data/
  projects.ts
  notes.ts
public/
  images/
  projects/
```

---

## 10. Responsive behaviour

### Desktop (1200px and wider)
- Editorial two-column hero.
- Three-column project grid or alternating feature cards.
- Horizontal process timeline.
- Large serif headings and generous whitespace.

### Tablet (768–1199px)
- Keep the hero split only if text remains readable; otherwise stack.
- Two-column project grid.
- Reduce section spacing and display type.
- Avoid sticky elements that consume too much vertical space.

### Mobile (under 768px)
- Stack all content in one column.
- Hero headline should wrap naturally; no forced line breaks that cause awkward words.
- Project cards become full-width.
- Process timeline becomes vertical.
- Touch targets should be at least about 44px high.
- Navigation opens with a clear close control and closes after selecting a section.
- Avoid horizontal scrolling, hover-only content, and heavy parallax.

---

## 11. Accessibility, performance, and quality checklist

- [ ] Semantic headings in a logical order.
- [ ] Every interactive element works by keyboard.
- [ ] Visible focus states use a clear contrast.
- [ ] Images have useful alt text; decorative images use empty alt text.
- [ ] Colour contrast meets WCAG AA where practical.
- [ ] Reduced-motion preference is respected.
- [ ] No important text appears only on hover.
- [ ] All external links work and have clear labels.
- [ ] Contact form has loading, success, and error states if present.
- [ ] No fake statistics, client logos, endorsements, or unsupported claims.
- [ ] No exposed API keys, private repositories, or secrets.
- [ ] Images are optimized and sized appropriately.
- [ ] No console errors or broken routes.
- [ ] Test mobile layout, slow network, keyboard navigation, and a screen reader.
- [ ] Aim for strong Lighthouse accessibility, best practices, and performance scores.

---

## 12. Content and credibility rules

- Clearly separate **built**, **in progress**, and **planned** features.
- Describe each project using: problem → approach → implementation → evidence → lessons.
- Add measurable results only when I can verify how they were measured.
- Use public demos and repositories only when they are safe and ready to share.
- For legal and financial prototypes, state the scope and limitations clearly.
- Do not publish personal phone numbers, home addresses, secrets, or internal client data.
- Make the resume/CV link optional and point it to the latest reviewed version.

### Case-study template
1. **Context:** What problem was being solved?
2. **Role:** What did I personally build?
3. **Architecture:** What components and data flows were involved?
4. **Hard part:** What technical trade-off or failure case mattered?
5. **Validation:** What tests, traces, or observations support the result?
6. **Outcome:** What is working now, and what remains incomplete?
7. **Links:** Demo, repository, or technical write-up if public.

---

## 13. Build sequence

### Phase 1 — Foundation
- Create the Next.js + TypeScript project.
- Add the colour and typography tokens.
- Set up the page shell, global spacing, header, and footer.
- Make the site responsive before adding complex motion.

### Phase 2 — Content
- Write and review the hero copy.
- Select three strong projects.
- Create project summaries and original visuals.
- Verify every external link and claim.

### Phase 3 — Motion
- Add the hero entrance sequence.
- Add viewport-based section reveals.
- Add project-card hover states.
- Add reduced-motion fallbacks and check that content never disappears.

### Phase 4 — Contact and polish
- Add verified social links and email.
- Add a form only if needed.
- Tune mobile typography and spacing.
- Optimize images and remove unused packages.

### Phase 5 — Launch
- Test keyboard, mobile, reduced motion, links, and form behaviour.
- Run a production build.
- Review page metadata, favicon, social preview image, and sitemap.
- Deploy and check the real production URL.
- Revisit the portfolio whenever a project changes status.

---

## 14. Final visual target

Imagine a warm ivory editorial page with oversized dark-green serif headlines, restrained antique-gold rules, finely bordered project cards, and beautifully paced scroll reveals. The page should feel like a premium printed journal that happens to showcase modern engineering—not a template packed with effects.

**The defining moment:** the hero headline arrives with calm precision; as the visitor scrolls, each project appears with a measured reveal and tells a clear technical story. By the time they reach the deep-green contact section, they understand what I build, how I think, and how to reach me.
