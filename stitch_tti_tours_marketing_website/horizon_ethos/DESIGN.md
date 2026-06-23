---
name: Horizon Ethos
colors:
  surface: '#f5fafd'
  surface-dim: '#d6dbde'
  surface-bright: '#f5fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4f7'
  surface-container: '#eaeff2'
  surface-container-high: '#e4e9ec'
  surface-container-highest: '#dee3e6'
  on-surface: '#171c1f'
  on-surface-variant: '#42474f'
  inverse-surface: '#2c3134'
  inverse-on-surface: '#ecf1f4'
  outline: '#727780'
  outline-variant: '#c2c7d0'
  surface-tint: '#336190'
  primary: '#002e53'
  on-primary: '#ffffff'
  primary-container: '#0e4573'
  on-primary-container: '#87b3e7'
  inverse-primary: '#9fcaff'
  secondary: '#0d6686'
  on-secondary: '#ffffff'
  secondary-container: '#95dbff'
  on-secondary-container: '#006181'
  tertiary: '#003335'
  on-tertiary: '#ffffff'
  tertiary-container: '#094b4e'
  on-tertiary-container: '#82babd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#9fcaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#154977'
  secondary-fixed: '#c1e8ff'
  secondary-fixed-dim: '#8acff3'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d66'
  tertiary-fixed: '#b4edf0'
  tertiary-fixed-dim: '#98d0d3'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#104f52'
  background: '#f5fafd'
  on-background: '#171c1f'
  surface-variant: '#dee3e6'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
---

## Brand & Style
The design system is anchored in a "Premium Expedition" aesthetic—a blend of high-end boutique travel and rugged, adventurous reliability. It targets discerning global travelers seeking authentic, life-changing experiences in Rwanda and beyond. The visual language balances institutional trust with the organic textures of East African landscapes.

The style is **Modern Corporate with Tactile Accents**, utilizing heavy whitespace, structured grid systems, and subtle gradients to evoke a sense of professional precision and natural beauty. It avoids "cluttered" safari tropes in favor of a clean, editorial layout that lets high-impact photography of volcanoes, gorillas, and lakes act as the primary storyteller.

## Colors
The palette is rooted in the "Deep Blue" of the Great Lakes and the "Misty Sage" of the volcanic forests. 

- **Primary Navy (#0E4573):** Used for all high-level hierarchy elements including headings, primary navigation, and main action buttons. It represents stability and professional heritage.
- **Secondary Teal (#186B8B):** A bridge color used for interactive elements and iconography.
- **Tertiary Sage (#4C8386):** An organic accent used for secondary labels, environmental callouts, and subtle dividers.
- **Backgrounds:** The primary canvas is **Off-white (#F3F8FB)**, providing a cool, breathable atmosphere. **Pure White (#FFFFFF)** is reserved for elevated cards and section containers to create a "floating" paper effect.
- **Gradients:** Use the navy-to-sage transition only for hover state transitions on buttons or as a 2px top-border on featured cards to signify premium status.

## Typography
The typography strategy pairings high-confidence geometry with technical legibility.

- **Headlines:** Sora provides a "blocky" and confident geometric structure. Use it for all major impact statements. Keep tracking tight for large displays.
- **Body:** Hanken Grotesk is chosen for its sharp, contemporary feel and excellent readability at smaller sizes. It feels modern and precise.
- **Dignified Content:** For memorial-related content or historical narratives, increase line-height to `32px` on `body-lg` to ensure a respectful, slowed-down reading pace. 
- **Hierarchy:** Always use the `label-caps` style in Sage Teal for category tags (e.g., "ECO-TOURISM") above main headlines to establish context immediately.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for desktop and a **single-column stack** for mobile.

- **Expansive Margins:** Sections should be separated by `stack-lg` (64px+) to maintain the premium, "un-crowded" feel of a boutique agency.
- **Mobile Reflow:** On mobile, margins reduce to 16px, but vertical spacing between tour cards remains generous to prevent accidental taps.
- **Service Grids:** Value propositions and "Why TTI" icons should follow a 3 or 4-column distribution on desktop, collapsing to 2-columns on tablet.

## Elevation & Depth
Depth is created through **Tonal Layering** and soft, ambient shadows.

- **Surface Levels:** The base background is `#F3F8FB`. Cards and active UI elements sit on `#FFFFFF`.
- **Shadows:** Use a single, very soft "Natural Light" shadow for cards: `0px 4px 20px rgba(14, 69, 115, 0.08)`. This uses a Navy tint rather than pure black to keep the palette cohesive.
- **Interactive Depth:** On hover, cards should lift slightly (translate -4px) and the shadow should expand and soften (`0px 12px 30px rgba(14, 69, 115, 0.12)`).

## Shapes
The shape language is **Professional and Controlled**. 

- **Corners:** A subtle `0.25rem` (4px) radius is applied to buttons and small inputs to keep them from feeling "sharp," but the overall impression remains architectural.
- **Featured Cards:** Larger tour package cards may use `0.5rem` (8px) for a slightly softer, more inviting container for landscape photography.
- **Iconography:** Use thick-stroke (2px) linear icons with slightly rounded terminals to match the Hanken Grotesk typeface.

## Components
- **Sticky Header:** A semi-transparent White (`rgba(255,255,255,0.95)`) background with a backdrop-blur. The CTA button is the only element using the Primary Navy background to ensure it stands out.
- **Tour Cards:** Full-width image at the top, followed by a padded content area. The price point should be in Primary Navy, while the duration/location uses Sage Teal.
- **Primary Buttons:** Solid Primary Navy with white text. Hover state transitions to the Navy-Teal-Sage gradient.
- **Accordions (Regional Tours):** Use a 1px border of `#186B8B` (Teal) with a subtle Sage background for the active state header.
- **Value Proposition Icons:** Enclose icons in a soft Teal circle with 10% opacity to provide a "landing pad" for the graphic.
- **Memorial Styling:** Use the `Source Serif` (or similar) font variant for these specific sections if possible, or stick to Hanken Grotesk with wider margins and a Sage-tinted background to denote a shift in tone.