# Biccas

[![Demo](https://img.shields.io/badge/demo-live-success)](https://landing-biccas.netlify.app/)

**Live Demo:** https://landing-biccas.netlify.app/

Адаптивный SaaS landing page **Biccas**, созданный по макету из Figma с использованием чистого HTML, CSS и Vanilla JavaScript.

Проект реализован без фреймворков и сборщиков. Основное внимание уделено responsive design, accessibility, fluid typography и производительности.

## ✨ Features

* Fully responsive layout
* Mobile burger menu
* Fullscreen mobile navigation
* Monthly / Yearly pricing switcher
* Responsive pricing cards
* Fluid typography with `clamp()`
* CSS Grid & Flexbox
* `:focus-visible` support
* `aria-expanded` support
* `prefers-reduced-motion` support
* Lazy loading images
* Async image decoding
* Explicit image dimensions
* No JavaScript frameworks or libraries

## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* CSS Custom Properties
* CSS Grid
* Flexbox
* Media Queries
* Responsive Design

## 📋 Project Overview

Biccas is a modern SaaS landing page focused on productivity and business management.

The project was implemented from a Figma design using only HTML, CSS and Vanilla JavaScript.

The main goal was to reproduce the original design while maintaining responsive behavior, accessibility and good loading performance across different screen sizes.

## 🧩 Main Sections

### Navigation

Desktop navigation switches to a fullscreen mobile menu on smaller screens.

The mobile navigation includes:

* burger button;
* fullscreen overlay;
* animated menu state;
* `aria-expanded` support.

### Pricing

The pricing section includes a billing period switcher:

```text
Monthly
Yearly
```

Pricing cards automatically adapt to smaller screens.

## ♿ Accessibility

The project includes several accessibility practices:

* semantic HTML;
* `aria-expanded`;
* `:focus-visible`;
* `prefers-reduced-motion`;
* keyboard-friendly navigation;
* appropriate interactive states.

## ⚡ Performance

Images below the initial viewport use:

```html
loading="lazy"
```

and:

```html
decoding="async"
```

Images also have explicit `width` and `height` attributes to reduce layout shifts.

Fonts use `preconnect` for improved loading performance.

## 📱 Responsive Design

The layout adapts to different screen sizes.

| Breakpoint   | Behavior                           |
| ------------ | ---------------------------------- |
| `> 1240px`   | Desktop layout                     |
| `960–1240px` | Layout compression and wrapping    |
| `≤ 960px`    | Sections switch to a column layout |
| `≤ 860px`    | Mobile navigation                  |
| `≤ 700px`    | Pricing cards become a column      |
| `≤ 420px`    | Additional mobile adjustments      |

## 📁 Project Structure

```text
landing-biccas/
├── index.html
├── css/
│   ├── reset.css
│   └── main.css
├── javascript/
│   └── main.js
├── assets/
│   └── images/
└── Design.png
```

## 🚀 Getting Started

No dependencies are required.

Simply open:

```text
index.html
```

in your browser.

Or start a local server:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## 🎨 Design

The project was implemented based on a Figma design.

The original design reference is included in:

```text
Design.png
```

## 🎯 Purpose

This project was created to practice:

* responsive web development;
* semantic HTML;
* modern CSS;
* Vanilla JavaScript;
* accessibility;
* performance optimization;
* fluid typography;
* Figma-to-code implementation.

## 📄 License

This project is intended for educational and portfolio purposes.
