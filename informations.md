# ARTIST PROMO MUSIC - Project Information

This document provides an overview of the ARTIST PROMO MUSIC web application project, including its structure, key files, dependencies, and how it works.

## 1. Project Overview

*   **Objective:** Develop a Next.js web application enabling artists to browse and learn about music promotion packages offered by curator Eight Mike. (Currently focuses on UI; payment/submission deferred).
*   **Framework:** Next.js (v15+) with App Router
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** Shadcn UI
*   **Animations:** Framer Motion

## 2. Key Dependencies Installed

*   `next`: Core Next.js framework.
*   `react`, `react-dom`: React library.
*   `typescript`: Language support.
*   `tailwindcss`, `postcss`, `autoprefixer`: Styling engine and processors.
*   `shadcn-ui` (via `npx shadcn@latest`): UI component library CLI. Installs Radix UI primitives and other dependencies as needed.
    *   Added Components: `button`, `card`, `badge`, `sheet`.
*   `lucide-react`: Icon library used by Shadcn UI.
*   `framer-motion`: Library for animations.

*(Run `pnpm install` to install all dependencies listed in `package.json`)*

## 3. Folder Structure Overview

```
.
├── public/             # Static assets (images, fonts, etc.)
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   │   ├── layout.tsx  # Root layout (applies header, footer, global styles)
│   │   ├── page.tsx    # Homepage component
│   │   ├── globals.css # Global styles (Tailwind directives, base styles)
│   │   ├── about/
│   │   │   └── page.tsx # About page component
│   │   └── packages/
│   │       └── page.tsx # Packages page component
│   ├── components/     # Reusable React components
│   │   ├── animations/ # Animation-specific components
│   │   │   └── fade-in-up.tsx
│   │   ├── layout/     # Layout components (header, footer)
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   ├── packages/   # Components related to packages
│   │   │   └── package-card.tsx
│   │   ├── sections/   # Larger page sections (composed of smaller components)
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-preview-section.tsx
│   │   │   ├── package-preview-section.tsx
│   │   │   └── stats-showcase.tsx
│   │   └── ui/         # Shadcn UI components (auto-generated)
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── sheet.tsx
│   ├── lib/            # Utility functions, constants, data
│   │   ├── placeholder-data.ts # Sample data for packages
│   │   └── utils.ts    # Utility functions (e.g., `cn` from Shadcn)
│   └── types/          # TypeScript type definitions
│       └── index.ts    # Shared types (e.g., `Package` interface)
├── components.json     # Shadcn UI configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── plan.md             # Development plan document
├── postcss.config.mjs  # PostCSS configuration (for Tailwind)
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project README (standard)
└── rules.txt           # Initial project requirements
└── informations.md     # This file
```

## 4. File Breakdown & Purpose

*   **`src/app/layout.tsx`**: Defines the root HTML structure, includes global styles (`globals.css`), sets up fonts, applies the dark theme (`<html className="dark">`), and renders the shared `Header` and `Footer`. Wraps page content (`children`) in a `main` tag.
*   **`src/app/page.tsx`**: The main homepage. Imports and arranges section components (`HeroSection`, `AboutPreviewSection`, etc.) using the `FadeInUp` animation wrapper.
*   **`src/app/packages/page.tsx`**: Displays all promotion packages. Fetches data from `placeholder-data.ts` and maps over it, rendering a `PackageCard` for each, wrapped in `FadeInUp` for staggered animation.
*   **`src/app/about/page.tsx`**: Static page containing information about Eight Mike (currently placeholder text). Uses Tailwind Typography (`prose`) for basic text styling.
*   **`src/components/layout/header.tsx`**: Renders the site header. Includes desktop navigation, a mobile navigation drawer (`Sheet`), and logic for centering the title on mobile. Uses `useState` for sheet state. Marked `"use client"`.
*   **`src/components/layout/footer.tsx`**: Renders the site footer with copyright information.
*   **`src/components/packages/package-card.tsx`**: Displays a single package's details (name, description, price, features). Uses Shadcn `Card`, `Button`, `Badge` components and `lucide-react` icons. Includes a `framer-motion` hover effect. Marked `"use client"`.
*   **`src/components/sections/*`**: Components representing distinct sections of a page (e.g., `HeroSection`, `StatsShowcase`). These assemble smaller UI elements and structure content. `HeroSection` includes text animations.
*   **`src/components/animations/fade-in-up.tsx`**: A reusable `framer-motion` component that animates its children (fading in and moving up slightly) when they scroll into view. Marked `"use client"`.
*   **`src/components/ui/*`**: UI primitive components generated by the Shadcn CLI (`button.tsx`, `card.tsx`, etc.).
*   **`src/lib/placeholder-data.ts`**: Contains an array of sample `Package` objects used for displaying content before real data/API is available.
*   **`src/lib/utils.ts`**: Contains utility functions, notably the `cn` function from Shadcn for merging Tailwind classes.
*   **`src/types/index.ts`**: Defines shared TypeScript interfaces, like the `Package` interface.
*   **`tailwind.config.ts`**: Configures Tailwind CSS, including theme settings (colors, fonts) and content paths. Updated by Shadcn init.
*   **`postcss.config.mjs`**: Configures PostCSS, primarily to include Tailwind CSS and Autoprefixer plugins. Renamed to `.mjs` to support ES Module syntax.
*   **`components.json`**: Configures Shadcn UI settings (component paths, style, etc.).

## 5. How It Works

1.  **Layout:** The root `layout.tsx` sets the overall page structure, theme, and includes the `Header` and `Footer`.
2.  **Routing:** Next.js App Router maps URL paths (e.g., `/`, `/packages`) to corresponding `page.tsx` files within the `src/app` directory.
3.  **Page Composition:** Each `page.tsx` file imports and arranges necessary section components (`src/components/sections/*`).
4.  **Component Reusability:** Sections use reusable components like `PackageCard` (`src/components/packages/*`) and UI primitives from Shadcn (`src/components/ui/*`).
5.  **Data:** Currently, package data is hardcoded in `src/lib/placeholder-data.ts` and imported directly into components that need it (`PackagePreviewSection`, `PackagesPage`).
6.  **Styling:** Tailwind CSS utility classes are used directly in components for styling. Global styles and Tailwind directives are in `src/app/globals.css`. Shadcn UI components come pre-styled with Tailwind.
7.  **Animations:**
    *   `framer-motion` is used for animations.
    *   The `FadeInUp` component wraps major sections/elements to animate them on scroll.
    *   `PackageCard` uses `motion.div` for hover effects.
    *   `HeroSection` uses `motion` components for entry animations on text elements.

## 6. How to Run

1.  **Install Dependencies:** `pnpm install`
2.  **Run Development Server:** `pnpm run dev`
3.  Open `http://localhost:3000` (or the port indicated in the terminal) in your browser.

This document should provide a good starting point for understanding and modifying the project.
