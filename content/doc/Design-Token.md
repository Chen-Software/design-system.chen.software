---
title: Design Tokens
---


Design tokens are the foundational elements of Chen's Design System, representing the visual primitives that define colors, typography, spacing, and other stylistic properties. By using tokens instead of hard-coded values, we ensure consistency across components and enable systematic theming.

Chen's Design System leverages the default PandaCSS theme preset, which provides a robust set of design tokens out of the box. These tokens are defined as CSS custom properties and can be seamlessly integrated into components or extended to meet project-specific needs.

***

## Default Theme Tokens

Below is a comprehensive list of design tokens provided by PandaCSS's default preset. These are categorized for clarity and ready to use in your components:

### Colors

A structured palette of semantic and primitive colors.

// Example usage in a component  
const styles = css({  
  color: \&apos;yellow\.500\&apos;,       // Primary yellow  
  backgroundColor: \&apos;gray.900\&apos; // Dark background  
});  

Token Structure:

* Primitives: white, black, gray, red, orange, yellow, green, blue, purple, pink
* Semantic: text, background, border, primary, secondary, error, warning, success, info
* Scales: Each color has 50–950 shades (e.g., blue.200, red.600).

***

### Typography

Predefined text styles for headings, body text, and more.

// Apply a heading style  
css({ textStyle: \&apos;heading.xl\&apos; });  

Tokens Include:

* Font Families: sans (default system stack), mono (monospace)
* Font Sizes: xs, sm, md, lg, xl, 2xl to 6xl
* Font Weights: thin, extralight, light, normal, medium, semibold, bold, extrabold, black
* Line Heights: none, tight, normal, relaxed, loose
* Letter Spacing: tighter, tight, normal, wide, wider, widest

***

### Spacing & Sizes

Consistent spacing scales for margins, padding, and dimensions.

// Apply a spacing token  
css({ padding: \&apos;spacing.4\&apos;, width: \&apos;sizes.full\&apos; });  

Tokens Include:

* Spacing: 0, 1 (4px), 2 (8px), up to 40 (160px)
* Sizes: xs, sm, md, lg, xl, 2xl to 4xl, plus full (100%), screen (100vh/100vw)

***

### Radii

Border radius tokens for rounded corners.

css({ borderRadius: \&apos;radii.lg\&apos; });  

Tokens: none, sm, md, lg, xl, full (9999px).

***

### Breakpoints

Responsive design tokens for media queries.

// Responsive style example  
css({  
  fontSize: { base: \&apos;md\&apos;, md: \&apos;lg\&apos;, lg: \&apos;xl\&apos; }  
});  

Default Breakpoints:

* sm: 640px
* md: 768px
* lg: 1024px
* xl: 1280px
* 2xl: 1536px

***

### Shadows

Elevation and depth tokens.

css({ boxShadow: \&apos;shadows.xl\&apos; });  

Tokens: xs, sm, md, lg, xl, 2xl.

***

### Z-Index

Layering control for components.

css({ zIndex: \&apos;zIndex.modal\&apos; });  

Tokens: auto, 0, 10, 20, 30, 40, 50 (predefined for common use cases like modals, tooltips).

***

### Durations & Easings

Animation timing tokens.

css({ transition: \&apos;all duration.300 easing.ease-out\&apos; });  

* Durations: fast (150ms), normal (300ms), slow (500ms)
* Easings: default, linear, ease-in, ease-out, ease-in-out.

***

## Customization

While Chen's Design System uses the default tokens for consistency, you can extend or override them in your panda.config.ts to align with brand-specific requirements. Learn more in the [PandaCSS Theme Documentation](https://panda-css.com/docs/customization/theme).

***

Next Up: Learn how to apply these tokens in components using Recipes or customize them for your project.
