# Figma Build Rules

## Source Of Truth

For any UI/page implementation work, the Figma file is the source of truth.

Do not start building from:

- memory
- PRD-only assumptions
- inferred flows
- screenshots alone

Start from Figma MCP.

## Required Workflow Before Building

Before any new page, section, or flow is implemented:

1. Use Figma MCP to inspect the target frame or node.
2. Capture the exact frame name and node ID.
3. Capture the exact dimensions for the target frame.
4. Record all visible assets used in that frame.
5. Record layout measurements that affect implementation.
6. Record responsive variants if desktop, tablet, or mobile versions exist.
7. Update `docs/FIGMA_INVENTORY.md` before writing implementation code.

## Minimum Inventory Required

For each frame or section, inventory:

- frame name
- node ID
- viewport width and height
- section widths
- gaps and spacing
- padding and margins
- typography sizes, weights, line heights, and letter spacing
- colors
- border radius
- borders and strokes
- shadows and blurs
- asset names
- asset types
- export paths or source references
- interaction notes visible in Figma

## Build Constraints

- If a flow is not present in Figma, do not present it as a Figma-backed build.
- If a detail is missing from Figma, mark it as `Missing from Figma` in the inventory.
- If a frame has multiple variants, note which variant is being implemented.
- Keep implementation aligned to the recorded inventory, not approximation.

## Delivery Rule

Every Figma-backed build should be traceable to:

- a frame
- a node ID
- an inventory entry
- the assets used by that frame

## Current Operating Rule

For this repo, always use Figma MCP before starting UI implementation work.
