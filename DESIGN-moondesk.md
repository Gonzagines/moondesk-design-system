# Design System — Moondesk

## 1. Visual Theme & Atmosphere

Moondesk is a professional, data-forward SaaS platform designed for clarity, focus, and efficiency. The design operates on a foundation of near-white surfaces (`#f7f8ff`, `#f2f5fa`) with a vivid Brand Blue (`#0096fc`) as the singular brand accent. The result is a clean, structured interface where content hierarchy, status signals, and interactive elements do the visual work — designed for productivity, not decoration.

The typography uses **Inter** — a precision-engineered screen font built for interfaces, with excellent legibility at small sizes and a neutral, professional character. The system uses Medium (500) as its workhorse weight for body and UI, Semi Bold (600) for emphasis and labels, and Bold (700) for headings and display. The type scale follows a Material-inspired hierarchy that keeps visual rhythm consistent across all surfaces.

What distinguishes Moondesk is its **semantic token architecture** — a two-layer system (primitive → semantic) that separates raw values from their intended roles. Colors, spacing, radii and shadows are all tokenized, enabling consistent theming across light and dark modes. The semantic color system is built on a Material Design 3 foundation, extended with product-specific roles for brand, blue, orange, green, and violet.

**Key Characteristics:**
- Near-white surfaces (`#f7f8ff`, `#f2f5fa`) with Brand Blue (`#0096fc`) as the primary accent
- Inter — professional screen font, optimized for UI legibility
- Two-layer token system: `primitiveColors` → `semanticColors`
- Full light/dark mode support via semantic color roles
- State layers with 8%, 10%, and 16% opacity for hover, press, and focus
- Border radius scale: 0px sharp to 160px full-pill
- Spacing and gap system built on a base-4 unit scale
- Material Design 3–inspired color roles (primary, secondary, tertiary, surface, etc.)

---

## 2. Color Palette & Roles

### Brand
| Token | Value | Role |
|-------|-------|------|
| `brandBrandPrimary` | `#0096fc` | Primary brand accent, top-level CTAs, key highlights |

### Primary (Blue)
| Token | Value | Role |
|-------|-------|------|
| `primaryPrimary` | `#00497e` | Primary actions, links, interactive elements |
| `primaryOnPrimary` | `#ffffff` | Text/icons on primary backgrounds |
| `primaryPrimaryContainer` | `#eaf1ff` | Tinted containers, chips, selected states |
| `primaryOnPrimaryContainer` | `#0061a6` | Content inside primary containers |
| `primaryInversePrimary` | `#a0caff` | Primary accent on dark surfaces |

### Secondary (Steel Blue)
| Token | Value | Role |
|-------|-------|------|
| `secondarySecondary` | `#4e6078` | Secondary actions, supporting elements |
| `secondaryOnSecondary` | `#ffffff` | Text/icons on secondary backgrounds |
| `secondarySecondaryContainer` | `#ccddf7` | Secondary tinted containers |
| `secondaryOnSecondaryContainer` | `#36485f` | Content inside secondary containers |

### Tertiary (Cyan)
| Token | Value | Role |
|-------|-------|------|
| `tertiaryTertiary` | `#00838f` | Accents, complementary highlights |
| `tertiaryOnTertiary` | `#ffffff` | Text/icons on tertiary backgrounds |
| `tertiaryTertiaryContainer` | `#e0f7fa` | Tertiary tinted containers |
| `tertiaryOnTertiaryContainer` | `#00acc1` | Content inside tertiary containers |

### Semantic Surface & Neutrals
| Token | Value | Role |
|-------|-------|------|
| `surfaceSurface` | `#f7f8ff` | Default page/screen background |
| `surfaceSurfaceVariant` | `#dfe2eb` | Cards, input backgrounds, elevated containers |
| `surfaceOnSurface` | `#181c22` | Primary text on surfaces |
| `surfaceOnSurfaceVariant` | `#43474e` | Secondary text, icons, placeholders |
| `surfaceOutline` | `#73777f` | Input borders, dividers |
| `surfaceOutlineVariant` | `#a8abb3` | Subtle dividers, disabled borders |
| `surfaceInverseSurface` | `#2c3137` | Dark tooltips, snackbars |
| `surfaceInverseOnSurface` | `#edf1f9` | Text on dark/inverse surfaces |

### Status Colors
| Role | Token | Value | Use |
|------|-------|-------|-----|
| Error | `errorError` | `#a83445` | Destructive actions, validation errors |
| Error Container | `errorErrorContainer` | `#ffecec` | Error state backgrounds |
| On Error | `errorOnError` | `#ffffff` | Text/icons on error |
| Success | `greenGreen` | `#43a047` | Confirmations, success states |
| Success Container | `greenGreenContainer` | `#e8f5e9` | Success state backgrounds |
| Warning | `orangeOrange` | `#d58b32` | Warnings, cautionary states |
| Warning Container | `orangeOrangeContainer` | `#fdf5eb` | Warning state backgrounds |
| Info | `blueBlue` | `#3e6abd` | Informational elements |
| Info Container | `blueBlueContainer` | `#ecf1fa` | Info state backgrounds |

### Extended Palette
| Role | Token | Value | Use |
|------|-------|-------|-----|
| Violet | `violetViolet` | `#1d0046` | Premium or special-tier accents |
| Violet Container | `violetVioletContainer` | `#f4efff` | Violet tinted backgrounds |

### Primitive Color Reference
The full primitive scale runs from `100` (white) to `0` (black) for each color family. Key values:

**Primary Blue primitives:** `#eaf1ff` (95) → `#d2e4ff` (90) → `#66afff` (70) → `#0194f9` (60) → `#007acf` (50) → `#0061a6` (40) → `#00497e` (30) → `#003259` (20)

**Neutral primitives:** `#f7f8ff` (98) → `#f2f5fa` (96) → `#edf1f9` (95) → `#dfe2eb` (90) → `#c3c6cf` (80) → `#8d9199` (60) → `#43474e` (30) → `#2c3137` (20) → `#181c22` (10)

---

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`
- **Weights in use**: Medium (500), Semi Bold (600), Bold (700)

### Type Scale

| Role | Size | Line Height | Weight | Use |
|------|------|-------------|--------|-----|
| `displaySmall` | 36px | 44px | Medium | Hero text, marketing headlines |
| `headlineLarge` | 32px | 40px | Medium | Page-level headings |
| `headlineMedium` | 28px | 36px | Medium | Section headings |
| `headlineSmall` | 24px | 32px | Medium | Card headings, modal titles |
| `titleLarge` | 22px | 28px | Medium | Panel titles, major labels |
| `titleLargeBold` | 22px | 28px | Bold | Emphasized panel titles |
| `titleMedium` | 16px | 24px | Medium | Sub-section titles, list headers |
| `titleSmall` | 14px | 20px | Medium | Compact titles, table headers |
| `bodyLarge` | 16px | 24px | Medium | Primary body text |
| `bodyLargeBold` | 16px | 24px | Bold | Emphasized body content |
| `bodyMedium` | 14px | 20px | Medium | Standard body, descriptions |
| `bodyMediumSbold` | 14px | 20px | Semi Bold | Emphasized body, field values |
| `bodySmall` | 12px | 16px | Medium | Secondary text, metadata |
| `bodySmallSbold` | 12px | 16px | Semi Bold | Emphasized small text |
| `labelLarge` | 14px | 20px | Medium | Button labels, form labels |
| `labelMedium` | 12px | 16px | Medium | Chips, tags, badges |
| `labelMediumSbold` | 12px | 16px | Semi Bold | Prominent chips, status badges |
| `labelSmall` | 11px | 16px | Medium | Micro labels, timestamps |

### Principles
- **Inter as the single typeface** — no mixing of font families. Consistency is the priority.
- **Medium (500) is the default weight** — Moondesk's UI does not use Regular (400). Every text element starts at Medium and steps up for emphasis.
- **Semi Bold (600) for interactive labels** — buttons, form labels, navigation items, and badges use Semi Bold to assert affordance.
- **Bold (700) only for headings** — `displaySmall`, major headings, and `bodyLargeBold` / `titleLargeBold` variants only.
- **No decorative type** — no italics, no letter-spacing manipulation, no uppercase transforms in the base system.

---

## 4. Spacing & Layout Tokens

### Base Unit
All spacing is derived from a **4px base unit**, expressed as `size` tokens.

### Size Primitives
| Token | Value | Common Use |
|-------|-------|------------|
| `size0` | 0px | Reset |
| `size1` | 2px | Hairline gaps |
| `size2` | 4px | Micro padding, icon gaps |
| `size3` | 8px | Compact padding, small gaps |
| `size4` | 12px | Form element internal padding |
| `size5` | 16px | Standard padding, card internal spacing |
| `size6` | 24px | Section gaps, generous padding |
| `size7` | 32px | Large gaps, panel spacing |
| `size8` | 40px | Section separators |
| `size9` | 48px | Large section padding |
| `size10` | 56px | XL spacing |
| `size11` | 64px | Page-level gaps |
| `size12` | 72px | — |
| `size13` | 80px | — |
| `size14` | 96px | — |
| `size15` | 160px | Maximum spacing / full-pill radius |

### Semantic Spacing Tokens

**Gap** (space between sibling elements):
`gap0` 0px · `gap1` 2px · `gap2` 4px · `gap3` 8px · `gap4` 12px · `gap5` 16px · `gap6` 24px · `gap7` 32px · `gap8` 40px · `gap9` 48px · `gap10` 56px · `gap11` 64px

**Padding** (internal element padding):
`padding0` 0px · `padding1` 2px · `padding2` 4px · `padding3` 8px · `padding4` 12px · `padding5` 16px · `padding6` 24px · `padding7` 32px · `padding8` 40px · `padding9` 48px · `padding10` 56px · `padding11` 64px

---

## 5. Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `radius0` | 0px | Sharp-cornered elements, table cells |
| `radius1` | 2px | Subtle rounding, tags |
| `radius2` | 4px | Small chips, tooltips |
| `radius3` | 8px | Buttons, inputs, small cards |
| `radius4` | 12px | Standard cards, dropdowns |
| `radius5` | 16px | Panels, modal surfaces |
| `radius6` | 24px | Large cards, bottom sheets |
| `radius7` | 32px | Pill buttons, large panels |
| `radius8` | 40px | Extra-large containers |
| `radius9` | 48px | — |
| `radius10` | 56px | — |
| `radius11` | 64px | — |
| `radius15` | 160px | Full pill / circle (avatars, FABs) |

**Most common values in use:** 8px (buttons, inputs), 12px (cards), 16px (panels), 160px (avatars, full-pill badges).

---

## 6. Elevation & Shadows

Moondesk's shadow system uses parametric tokens for `x`, `y`, `blur`, `spread`, and `opacity`. Shadows use black at low opacity to create depth without visual heaviness.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page backgrounds, inline text blocks |
| Subtle (1) | `0px 2px 4px rgba(0,0,0,0.08)` | Input fields, flat cards |
| Card (2) | `0px 4px 8px rgba(0,0,0,0.10)` | Default elevated cards, dropdowns |
| Raised (3) | `0px 8px 16px rgba(0,0,0,0.12)` | Modals, popovers, floating panels |
| High (4) | `0px 16px 32px rgba(0,0,0,0.16)` | Drawers, full-screen overlays |

**Shadow philosophy:** Single-layer shadows at low opacity — clean and functional. Avoid stacked multi-layer shadows. Depth is communicated through surface color difference (`surfaceSurface` vs `surfaceSurfaceVariant`) as much as shadow.

---

## 7. Component Stylings

### Buttons

**Primary**
- Background: `primaryPrimary` (`#00497e`)
- Text: `primaryOnPrimary` (`#ffffff`)
- Padding: `padding5` (16px) horizontal, `padding3` (8px) vertical
- Radius: `radius3` (8px)
- Font: `labelLarge` — Inter 14px Semi Bold
- Hover: `stateLayersPrimaryOpacity08` overlay
- Pressed: `stateLayersPrimaryOpacity16` overlay
- Disabled: `surfaceOnSurface` at 38% opacity on `surfaceSurface`

**Secondary / Outlined**
- Background: transparent
- Border: 1px `surfaceOutline` (`#73777f`)
- Text: `primaryPrimary` (`#00497e`)
- Hover: `stateLayersPrimaryOpacity08` overlay
- Radius: `radius3` (8px)

**Brand CTA**
- Background: `brandBrandPrimary` (`#0096fc`)
- Text: `#ffffff`
- Use: top-level calls-to-action only — sign up, primary onboarding steps

**Tonal**
- Background: `primaryPrimaryContainer` (`#eaf1ff`)
- Text: `primaryOnPrimaryContainer` (`#0061a6`)
- Radius: `radius3` (8px)
- Use: secondary-priority actions, filter chips

**Destructive**
- Background: `errorError` (`#a83445`)
- Text: `errorOnError` (`#ffffff`)
- Use: delete, remove, irreversible actions only

### Cards & Containers
- Background: `#ffffff` (white) on `surfaceSurface` (`#f7f8ff`) page
- Radius: `radius4` (12px) default, `radius5` (16px) for larger panels
- Border: 1px `surfaceOutlineVariant` (`#a8abb3`) — or no border if elevated
- Elevation: Card (2) shadow for default cards
- Internal padding: `padding5` (16px) or `padding6` (24px)

### Inputs & Forms
- Background: `#ffffff`
- Border: 1px `surfaceOutline` (`#73777f`)
- Border (focus): 2px `primaryPrimary` (`#00497e`)
- Border (error): 2px `errorError` (`#a83445`)
- Text: `surfaceOnSurface` (`#181c22`)
- Placeholder: `surfaceOnSurfaceVariant` (`#43474e`)
- Radius: `radius3` (8px)
- Font: `bodyMedium` — Inter 14px Medium
- Label: `labelLarge` — Inter 14px Semi Bold, `surfaceOnSurfaceVariant`

### Chips & Badges
- Background: `primaryPrimaryContainer` (`#eaf1ff`) for selected, `surfaceSurfaceVariant` for default
- Text: `primaryOnPrimaryContainer` (`#0061a6`) selected, `surfaceOnSurfaceVariant` default
- Radius: `radius3` (8px) for rectangular chips, `radius15` (160px) for pill badges
- Font: `labelMediumSbold` — Inter 12px Semi Bold

### Navigation
- Background: `#ffffff`
- Active item: `primaryPrimary` text + `primaryPrimaryContainer` background
- Inactive item: `surfaceOnSurfaceVariant` (`#43474e`)
- Divider: `surfaceOutlineVariant` (`#a8abb3`) at 1px

### Status Indicators
- **Success**: background `greenGreenContainer` (`#e8f5e9`), text `greenGreen` (`#43a047`)
- **Error**: background `errorErrorContainer` (`#ffecec`), text `errorError` (`#a83445`)
- **Warning**: background `orangeOrangeContainer` (`#fdf5eb`), text `orangeOrange` (`#d58b32`)
- **Info**: background `blueBlueContainer` (`#ecf1fa`), text `blueBlue` (`#3e6abd`)

---

## 8. State Layers

State layers communicate interactive feedback. Every interactive element applies a semi-transparent overlay using the element's role color at a defined opacity.

| State | Opacity Token | Alpha |
|-------|--------------|-------|
| Hover | `Opacity08` | 8% |
| Pressed / Active | `Opacity10` | 10% |
| Focused / Selected | `Opacity16` | 16% |

State layer tokens follow the pattern: `stateLayers{Role}Opacity{Level}`. Examples:
- Hover on primary button: `stateLayersPrimaryOpacity08` (`#00497e14`)
- Pressed on surface: `stateLayersOnSurfaceOpacity10` (`#181c2219`)
- Focused error input: `stateLayersErrorOpacity16` (`#a8344528`)

Every semantic color role has a corresponding state layer set (primary, secondary, tertiary, error, surface, green, blue, orange, violet).

---

## 9. Light & Dark Mode

The semantic color system fully supports light and dark mode via two modes: `light` and `dark`. All component and layout implementations must reference **semantic tokens only** — never primitive hex values directly — so that theme switching works automatically.

**Light mode surfaces:** `#f7f8ff` (surface), `#ffffff` (cards), `#dfe2eb` (surface variant)
**Dark mode surfaces:** `#181c22` (surface), `#2c3137` (cards), `#43474e` (surface variant)

When building screens, always specify colors using semantic token names, not raw hex values.

---

## 10. Do's and Don'ts

### Do
- Use `surfaceOnSurface` (`#181c22`) for primary text — never pure `#000000`
- Apply `brandBrandPrimary` (`#0096fc`) only for top-level CTAs and brand moments
- Use Inter at weight 500 (Medium) as the floor — never Regular (400) in the UI
- Reference semantic tokens (`primaryPrimary`, `surfaceSurface`, etc.), not primitive hex values
- Apply `radius3` (8px) for buttons and inputs, `radius4` (12px) for cards
- Use semantic status colors (green/error/orange/blue containers) for all status states
- Apply state layers at 8% hover, 10% press, 16% focus — consistently

### Don't
- Don't use raw primitive hex values in component code — always use semantic tokens
- Don't apply `brandBrandPrimary` to text, large surfaces, or backgrounds — accent only
- Don't mix radius values arbitrarily — follow the token scale
- Don't use Regular (400) weight for any UI text element — Medium (500) is minimum
- Don't introduce new colors outside the token system
- Don't hardcode shadows — build them from the `semanticShadows` parameter tokens
- Don't use the same semantic token for both light and dark surfaces — let the mode system do it

---

## 11. Agent Prompt Guide

This section gives Claude the exact values needed to generate accurate Moondesk UI screens for developer handoff.

### Quick Color Reference
```
Page background:     #f7f8ff  (surfaceSurface)
Card background:     #ffffff
Card border:         #a8abb3  (surfaceOutlineVariant) — 1px
Primary text:        #181c22  (surfaceOnSurface)
Secondary text:      #43474e  (surfaceOnSurfaceVariant)
Brand accent:        #0096fc  (brandBrandPrimary)
Primary action:      #00497e  (primaryPrimary)
Primary container:   #eaf1ff  (primaryPrimaryContainer)
Input border:        #73777f  (surfaceOutline)
Input border focus:  #00497e  (primaryPrimary) — 2px
Divider:             #a8abb3  (surfaceOutlineVariant)
Success:             #43a047 on #e8f5e9
Error:               #a83445 on #ffecec
Warning:             #d58b32 on #fdf5eb
Info:                #3e6abd on #ecf1fa
```

### Quick Typography Reference
```
Font: Inter
Headline:     32px / 40px / Medium
Section title: 24px / 32px / Medium
Card title:    22px / 28px / Medium
Body:          14px / 20px / Medium
Label/Button:  14px / 20px / Semi Bold
Small/Meta:    12px / 16px / Medium
Micro:         11px / 16px / Medium
```

### Quick Spacing & Radius Reference
```
Gap (tight):    8px   (gap3)
Gap (standard): 16px  (gap5)
Gap (loose):    24px  (gap6)
Padding (card): 16–24px (padding5–padding6)
Radius (input/button): 8px  (radius3)
Radius (card):         12px (radius4)
Radius (panel):        16px (radius5)
Radius (pill):         160px (radius15)
```

### Example Component Prompts
- **Card:** "White background (#ffffff), 12px radius, 1px border #a8abb3, 16px internal padding. Title: Inter 22px Medium #181c22. Body: Inter 14px Medium #43474e. Shadow: 0px 4px 8px rgba(0,0,0,0.10)."
- **Primary button:** "Background #00497e, white text, 8px radius, 16px horizontal padding, 8px vertical padding. Font: Inter 14px Semi Bold. Hover: #00497e + 8% overlay."
- **Brand CTA button:** "Background #0096fc, white text, 8px radius. Font: Inter 14px Semi Bold. Use only for primary onboarding/signup actions."
- **Text input:** "White background, 1px #73777f border, 8px radius, 8px padding. Label: Inter 14px Semi Bold #43474e. Value: Inter 14px Medium #181c22. Focus: 2px #00497e border."
- **Status badge (success):** "Background #e8f5e9, text #43a047, Inter 12px Semi Bold, 160px radius (pill), 4px vertical / 8px horizontal padding."
- **Navigation item (active):** "Background #eaf1ff, text #00497e, Inter 14px Semi Bold, 8px radius."
- **Data table row:** "Background #ffffff, bottom border 1px #dfe2eb. Cell text: Inter 14px Medium #181c22. Hover row: #f2f5fa background."

### Iteration Guide
1. Start with `#f7f8ff` page background — not pure white
2. Cards live on `#ffffff` — the one-step elevation from the surface
3. `#0096fc` brand blue is accent only — primary interactive color is `#00497e`
4. Inter at Medium (500) for everything — step up to Semi Bold for labels, Bold for headings
5. 8px radius for inputs/buttons, 12px for cards — be consistent
6. Status colors always use their container pair (e.g. success text `#43a047` always on `#e8f5e9`)
7. State layers communicate interaction — 8% hover, 10% pressed, 16% focused
