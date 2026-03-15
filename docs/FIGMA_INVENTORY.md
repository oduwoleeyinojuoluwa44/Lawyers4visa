# Figma Inventory

## Source

- Figma file: `lawyerfor-visa-website`
- Canvas: `Design`
- Inventory status: active

## Page Inventory

| Page / Flow | Figma Frame | Node ID | Breakpoint | Width | Height | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home | `Home` | `128:716` | Desktop | `1440` | `11166.34765625` | In progress | Dimensions from Figma MCP metadata |
| About us | `About us` | `267:1736` | Desktop | `1440` | `4240` | Implemented | Built as `/about-us` from Figma MCP metadata and design export `design/svg/desktop/About us.svg` |
| How We Work | `How we work` | `TBD via MCP` | Desktop | `1440` | `6795` | Not started | Confirmed by design export `design/svg/desktop/How we work.svg`; exact frame node still needs MCP capture |
| Immigration Insights | `IMMIGRATION INSIGHTS` | `457:2214` | Desktop | `1440` | `4090` | Not started | Page artifact confirmed by design export and Figma MCP |
| Home | `TBD via MCP` | `TBD via MCP` | Mobile | `TBD via MCP` | `TBD via MCP` | In progress | Record mobile frame separately from desktop |
| How We Work | `TBD via MCP` | `TBD via MCP` | Mobile | `TBD via MCP` | `TBD via MCP` | Not started | Record mobile variant separately if present |
| Immigration Insights | `TBD via MCP` | `TBD via MCP` | Mobile | `TBD via MCP` | `TBD via MCP` | Not started | Record mobile variant separately if present |

## Section Inventory

| Page | Section | Figma Node | Width | Height | Padding | Gap | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Header | `TBD via MCP` | `TBD` | `TBD` | `TBD` | `TBD` | |
| Home | Hero | `TBD via MCP` | `TBD` | `TBD` | `TBD` | `TBD` | |
| Home | Services | `TBD via MCP` | `TBD` | `TBD` | `TBD` | `TBD` | |
| Home | FAQ | `TBD via MCP` | `TBD` | `TBD` | `TBD` | `TBD` | |
| Home | Consultations | `TBD via MCP` | `TBD` | `TBD` | `TBD` | `TBD` | |
| Home | Footer | `TBD via MCP` | `TBD` | `TBD` | `TBD` | `TBD` | |
| About us | Header | `267:2099` | `1440` | `74` | `~120 horizontal` | `~18` | Top nav with wordmark, page links, and CTA instance |
| About us | Firm overview hero | `270:2113` | `1440` | `767` | `120` | `64` | Two-column intro with image panel and overview copy |
| About us | Professional values | `272:2145` | `1440` | `716` | `120` | `64` | Text block plus overlapping image-card composition |
| About us | Tribunal / government experience | `270:2127` | `1440` | `767` | `120` | `64` | Text-left, image-right section |
| About us | Scope of practice | `270:2138` | `1440` | `767` | `120` | `64` | Image-left, text-right section |
| About us | Consultation CTA | `275:2320` | `1440` | `607` | `120 top / centered container` | `16` | Centered headline, body copy, and `Book Consultation` button |
| About us | Footer | `267:1954` | `1440` | `482` | `120` | `24-90` | Copyright, social icons, and office-address block |

## Typography Inventory

| Page | Section | Element | Font | Size | Weight | Line Height | Letter Spacing | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `TBD` | `TBD` | `TBD` | `TBD via MCP` | `TBD` | `TBD` | `TBD` | `TBD` | |

## Color Inventory

| Token / Usage | Value | Source Node | Notes |
| --- | --- | --- | --- |
| `TBD via MCP` | `TBD` | `TBD` | |

## Asset Inventory

| Asset Name | Type | Source Node | Export / Source Path | Used In | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `TBD via MCP` | `TBD` | `TBD` | `TBD` | `TBD` | `Pending capture` | |
| `About us hero image panel` | `Image placeholder / rectangle` | `270:2120` | `design/png/assets/about-hero.jpg` | `About us` hero | `Downloaded and used` | `452 x 527` portrait panel on the left side of the hero |
| `Professional values card A` | `Image placeholder / rectangle` | `272:2158` | `design/png/assets/about-values-top.jpg` | `About us` values section | `Downloaded and used` | `300 x 330` top image card in the staggered stack |
| `Professional values card B` | `Image placeholder / rectangle` | `272:2159` | `design/png/assets/hr-manager-applicant-meeting-job-interview 1.png` | `About us` values section | `Fallback local export used` | `280 x 308` overlapping lower image card; direct Figma asset export rendered malformed in local preview |
| `Experience section image panel` | `Image placeholder / rectangle` | `270:2133` | `design/png/assets/about-experience-b.jpg` | `About us` tribunal experience section | `Downloaded and used` | `452 x 527` right-column visual |
| `Scope section image panel` | `Image placeholder / rectangle` | `270:2144` | `design/png/assets/about-scope.jpg` | `About us` scope section | `Downloaded and used` | `452 x 527` left-column visual |
| `Primary consultation CTA` | `Component instance` | `458:2854` | `Pending component mapping` | `About us` header | `Ready` | `216 x 42` reusable CTA in top navigation |
| `Secondary consultation CTA` | `Button frame` | `275:2325` | `Inline page asset` | `About us` consultation CTA section | `Ready` | `165 x 44` centered page-level call to action |
| `Footer social icon row` | `Icon group` | `538:384` | `Inline page asset` | `About us` footer | `Ready` | `192 x 24` social icons row |

## Interaction Inventory

| Page | Element | Interaction | Source Node | Notes |
| --- | --- | --- | --- | --- |
| `TBD` | `TBD` | `TBD via MCP` | `TBD` | |

## Missing From Figma

Use this section to explicitly log anything requested in product discussions that is not yet confirmed in the Figma file.

| Item | Requested By | Present In Figma | Notes |
| --- | --- | --- | --- |
| Dedicated `/book` page | PRD | `Unknown` | Do not build as a Figma-backed page until confirmed via MCP |
