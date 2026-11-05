HubLab is Australia's regulatory intelligence layer. It puts definitive AI into the regulated work of Australian enterprise and government. Labrynth is the engine (built in the United States, exclusive to HubLab in Australia); HubLab is the local layer; Hubify (ASX: HFY) is the strategic investor and operational partner. CERTAiNTY is the first product and has its own brand (paper/coral, Cardo): never mix the two.

## Content fundamentals

Voice: clear, grounded, specific, measured, quietly confident. Evidence first. Say what we have done, not what we will do.

- Write sentence case everywhere, including headlines, eyebrows and buttons. No all-caps labels.
- Use short declaratives and specific numbers. Australian spelling. Address the reader as "you"; speak as "we".
- No em dashes or en dashes; hyphens in compound words only. No exclamation marks, no emoji, no italics for emphasis.
- No superlatives: never "revolutionary", "seamless", "cutting-edge", "AI-powered".
- Say "definitive AI" (not generative), "deterministic", "clause-level traceability", "a person signs off every finding".
- Never name a customer without written approval. Use sector descriptors: "a national facilities services group", "a state government". Describe Labrynth's provenance; do not name its US customers.
- Spell the partner Labrynth and the product CERTAiNTY, exactly. The legal entity stays Certainty AI Pty Ltd.
- Keep headlines under about 14 words.

Register lines, verbatim:

> From rules to action. In weeks, not months.
> Local team. Global engine.
> Not a roadmap. A record.
> Same input, same answer, every time.
> The system tells you what arrived. It cannot tell you what it means.

Proof numbers in circulation, and only these: 80,000+ shifts validated, 4,000+ employees, 120+ Modern Awards ingested, 188 days to 8 (planning permits, Lancaster, California). Full register: see the Language register section.

Legal line: HubLab Pty Ltd · ABN 11 682 982 592 · Camberwell VIC 3124.

## Visual foundations

**Grounds.** One dark ground, one light ground, nothing else. Set pages on `hl-navy` with `hl-text-on-navy` ink (the Navy theme). Use `hl-cream` with navy ink for record bands and content slides (the Cream theme, or `.on-cream` on a section). Semantic tokens (`color-bg`, `color-text`, `color-text-muted`, `color-divider`, `color-bg-alt`) switch between the two with the theme.

**Text steps.** On navy: `hl-text-on-navy` for headlines, `hl-text-body` for paragraphs, `hl-text-muted` for secondary, `hl-text-faint` for eyebrows and footers. On cream: `hl-text-on-cream`, `hl-text-body-on-cream`, `hl-text-muted-on-cream`, `hl-text-faint-on-cream`. All clear 4.5:1 on their ground except `hl-text-faint-on-cream` (4.36:1): keep it to short 13px+ eyebrows.

**Gold.** `hl-gold` is a line colour and the single primary button fill. Use it for rules, link underlines, the ghost outline and the focus ring. Never gold text on cream or white; never gold as a background field. Hover lightens to `hl-gold-hover`, pressed darkens to `hl-gold-pressed`; link text hovers to `hl-link-hover` on navy.

**Slate.** `hl-slate` is for graphic elements only (engine rings, unlit arcs). Never text.

**Type.** Archivo (variable) for headlines, labels, figures and buttons; Source Serif 4 for all paragraph copy. Set headlines at width 104% (`headline-stretch`), card titles and h3 at 102% (`lead-stretch`), UI at 100%. Styles: `display`, `h1`, `h2`, `h3`, `figure` (Archivo 600); `lead`, `body`, `small` (Source Serif 4); `label`, `button`, `micro` (Archivo). Use lining figures (`font-feature-settings: "lnum" 1`) for numbers. Body paragraphs max `measure-body` (62ch); leads max `measure-lead` (34em).

**Rules, borders, shadows.** Rules are 2px gold (`rule-w`) for emphasis: `rule-long` (88px) under headlines, `rule-short` (48px) above list items. Structure is a 1px hairline: `hl-rule` on navy, `hl-rule-on-cream` on cream. No drop shadows anywhere.

**Corners.** `radius` is 0 on everything. The only rounded shape is the favicon or app badge (`radius-badge`).

**Layout.** Left-aligned, generous whitespace. Max page width `page-max` (1200px), side padding `page-pad` (64px). Sections pad `space-9` to `space-10` vertically; columns gap `space-8`. The record band runs full width.

**Imagery.** No stock photography. The hero is the engine graphic: concentric rings (`hl-ring-unlit`, one lit in `hl-slate`) on `hl-surface-core`, with a lit core. Logos appear only in navy or cream contexts.

**Motion and states.** Minimal. Opacity and 200ms ease on hover; no bounces, no parallax. Focus is a 2px solid `hl-gold` outline offset 2px (8.6:1 on navy). Disabled controls drop to 45% opacity.

## Components

Load `components/bundle.css` (it pulls Archivo and Source Serif 4 from Google Fonts and applies the base styles) and `components/bundle.js` (`window.HubLab`). `Button`, `Eyebrow`, `Rule`, `Card`, `RecordBand`. The Templates group holds a website page starter and two 1920 by 1080 slides (deck cover on navy, content slide on cream) to copy from.

## Iconography

No icon set on brand surfaces: structure comes from rules and type. If an icon is unavoidable, use Lucide at 1.5px stroke in `hl-text-on-navy` or `hl-slate`; never in gold.

## Logo

The symbol is three horizontal bars: the gold (`hl-gold`) middle bar leads and sits slightly right; the two outer bars are the ground's contrast colour at reduced opacity (cream at 40% on navy, navy at 45% on cream), so they recede. It stands for HubLab as the active layer between regulation and operational systems. Never redraw, recolour or re-space it; use the files in the Logos group.

- Use `lockup-on-navy.svg` (primary) or `lockup-on-cream.svg`: symbol left, wordmark right. The wordmark is outlined, so it renders without the font installed. Never put the symbol to the right of the wordmark, except as a deliberate footer layout.
- Use the symbol alone (`symbol-on-navy.svg`, `symbol-on-cream.svg`) for favicons, avatars, stamps and anywhere the wordmark would be too small to read. Use `symbol-gold-mono.svg` only on difficult or single-ink backgrounds.
- Keep clear space of at least one bar's height around the lockup. Minimum symbol size is 16px; below that do not shrink further.
- Logos appear only on `hl-navy` or `hl-cream` grounds.
- Favicons and the app badge (`radius-badge`) are in the Favicons group.
