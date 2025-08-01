**Add your own guidelines here**
<!--

# Design System Guidelines

Use this file to provide the AI with rules and guidelines for creating components and layouts that follow the 21st.dev × Apple inspired design philosophy.

## General Guidelines

* Prioritize clean, minimal aesthetics over decorative elements
* Use the 8pt spacing grid system for all measurements and positioning
* Implement mobile-first responsive design approach
* Maintain consistent component behavior across all screen sizes
* Always include proper accessibility attributes and keyboard navigation
* Use semantic HTML elements and maintain proper heading hierarchy
* Keep animations subtle and functional - avoid unnecessary motion
* Ensure minimum 4.5:1 color contrast ratio for all text
* Use system fonts (SF Pro Display preferred, Inter as fallback)

## Visual Foundation

### Color System
* Primary: #007AFF (Apple System Blue) - for main actions and links
* Success: #34C759 (Apple System Green) - for positive feedback
* Warning: #FF9500 (Apple System Orange) - for cautions
* Error: #FF3B30 (Apple System Red) - for errors and destructive actions
* Neutral scale: White (#FFFFFF) to Gray 900 (#171717) in 9 steps
* Use semantic colors consistently across all components
* Never use pure black (#000000) - use Gray 900 instead

### Typography Scale
* Base font size: 16px (1rem)
* Heading scale: 32px, 28px, 24px, 20px, 18px, 16px
* Body text: 18px (large), 16px (base), 14px (small), 12px (caption)
* Line height: 1.5 for all body text, 1.2 for headings
* Font weights: Regular (400), Medium (500), Semibold (600), Bold (700)
* Letter spacing: -0.02em for large text, 0em for body text

### Spacing System
* Use 8pt base unit: 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px
* Component internal padding: 16px minimum
* Section spacing: 80px vertical between major sections
* Element spacing: 24px between related components
* Inline spacing: 8px between related inline elements

## Component Guidelines

### Button System
* Border radius: 8px for all buttons
* Minimum height: 44px for touch targets
* Padding: 12px vertical, 24px horizontal for standard buttons
* Font weight: Semibold (600) for all button text
* Hover state: 90% opacity
* Active state: 98% scale transform
* Transition: 200ms ease for all state changes

#### Primary Button
* Background: #007AFF
* Text color: White (#FFFFFF)
* Use for main actions only - one per section maximum
* Full width on mobile, auto width on desktop

#### Secondary Button
* Background: Gray 100 (#F5F5F5)
* Text color: Gray 900 (#171717)
* Border: 1px solid Gray 200 (#E5E5E5)
* Use for supporting actions

#### Ghost Button
* Background: Transparent
* Text color: #007AFF
* Border: 1px solid #007AFF
* Use for tertiary actions

### Card Components
* Border radius: 12px
* Background: White (#FFFFFF)
* Border: 1px solid Gray 100 (#F5F5F5)
* Shadow: 0 1px 3px rgba(0,0,0,0.1)
* Padding: 24px
* Hover effect: Increase shadow to 0 4px 6px rgba(0,0,0,0.1)

### Input Fields
* Border radius: 8px
* Border: 1px solid Gray 200 (#E5E5E5)
* Padding: 12px horizontal, 12px vertical
* Font size: 16px (prevents zoom on iOS)
* Placeholder color: Gray 500 (#737373)
* Focus state: Blue border (#007AFF) with 3px blue shadow at 10% opacity
* Error state: Red border (#FF3B30)

### Navigation
* Header height: 64px minimum
* Logo: Left-aligned, maximum height 40px
* Navigation links: Center-aligned on desktop
* CTA button: Right-aligned
* Mobile: Hamburger menu with slide-out drawer
* Background: White with subtle shadow on scroll

## Layout Guidelines

### Container Sizes
* Mobile: 100% width with 16px side padding
* Tablet: 768px max-width with 24px side padding
* Desktop: 1200px max-width with 32px side padding
* Wide screens: 1440px max-width with 40px side padding

### Grid System
* Use 12-column grid with 24px gutters
* Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (1024-1440px), Wide (>1440px)
* Stack columns vertically on mobile
* Maintain consistent gutters across all breakpoints

### Responsive Behavior
* Typography: Scale down 1-2 steps on mobile
* Spacing: Reduce by 25-50% on mobile
* Buttons: Full width on mobile for primary actions
* Cards: Stack vertically on mobile with 16px spacing

## Content Guidelines

### Landing Page Sections
* Hero section: Full viewport height with centered content
* Feature sections: 3-column grid on desktop, stack on mobile
* Pricing: Card-based layout with highlighted popular option
* Testimonials: Quote + author + company pattern
* Footer: Dark background with organized link groups

### Microcopy
* Button labels: Action-oriented verbs (Get Started, Learn More, Sign Up)
* Error messages: Helpful and specific guidance
* Loading states: Clear progress indication
* Empty states: Encouraging and actionable messaging

## Animation Guidelines

### Timing Functions
* Standard ease: cubic-bezier(0.16, 1, 0.3, 1)
* Micro-interactions: 200ms duration
* Component transitions: 300ms duration
* Page transitions: 500ms duration

### Interactive States
* Hover: 90% opacity or subtle shadow increase
* Active: 98% scale transform
* Focus: Clear outline or shadow indication
* Loading: Subtle pulse or skeleton animation

## Accessibility Requirements

### Color and Contrast
* Text contrast ratio: Minimum 4.5:1
* Interactive elements: Minimum 3:1
* Never rely on color alone to convey information
* Provide alternative indicators (icons, text, patterns)

### Keyboard Navigation
* All interactive elements must be keyboard accessible
* Visible focus indicators required
* Logical tab order throughout components
* Escape key closes modals and dropdowns

### Screen Reader Support
* Use semantic HTML elements
* Provide descriptive alt text for images
* Include ARIA labels for complex interactions
* Maintain proper heading hierarchy (h1 → h2 → h3)

## Code Implementation

### CSS Classes (Tailwind)
* Use consistent class naming: btn-primary, card-base, input-field
* Implement hover and focus states with appropriate modifiers
* Use responsive prefixes for breakpoint-specific styles
* Group utility classes logically (layout, spacing, colors, typography)

### Component Structure
* Keep components small and focused on single responsibility
* Use TypeScript for prop definitions and type safety
* Implement proper error boundaries and loading states
* Follow React best practices for state management

---

*These guidelines ensure consistency with the 21st.dev modern aesthetic and Apple's refined design principles. Adapt specific values as needed for your brand while maintaining the core philosophy.*
-->
