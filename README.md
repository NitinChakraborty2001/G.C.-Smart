# G.C. Smart — Jewellery & Fashion Accessories Storefront

A modern, responsive digital storefront and landing page for **G.C. Smart**, an imitation and fashion jewellery boutique situated on Vivekananda Road, Bansberia, Hooghly, West Bengal.

The application serves as an online catalog and digital point-of-contact, enabling customers to explore jewellery collections, festive styles, handcrafted Dokra items, and cosmetics, with direct channels for inquiries and store visits.

---

## ✨ Features

- **Curated Product Showcase**: Browse collections across Gold-Plated Jewellery, Oxidized Jewellery, Imitation Jewellery, Dokra crafts, and Cosmetics.
- **Occasion-Based Styling**: Dedicated style inspirations for everyday wear, festive celebrations (such as Durga Puja), weddings, parties, and gifting.
- **Direct Inquiry Routing**: One-click WhatsApp contact buttons with pre-filled enquiry messages, phone call triggers, and Google Maps location integration.
- **Store Location & Hours**: Detailed store address on Vivekananda Road, Bansberia, with map directions and operating hours.
- **Interactive FAQ**: Accordion-based answers addressing custom orders, bridal styling, visit timings, and jewellery care tips.
- **Rich SEO & Structured Data**: Configured with Open Graph meta tags, canonical links, and Schema.org `JewelryStore` JSON-LD for local search visibility.
- **Responsive Mobile Experience**: Clean mobile navigation with a sticky quick-contact bar for instant calling or messaging.

---

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) with [TanStack Router](https://tanstack.com/router)
- **UI & Components**: [React 19](https://react.dev), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vite.dev)
- **Code Quality**: ESLint, Prettier, Vitest

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd "G.C. Smart"
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Available Scripts

- **Start development server**:

  ```sh
  npm run dev
  ```

  Opens the local development server (typically at `http://localhost:3000`).

- **Build for production**:

  ```sh
  npm run build
  ```

- **Build for Vercel**:

  ```sh
  npm run build:vercel
  ```

  Builds the application targeting Vercel Serverless Functions and static output (`.vercel/output`).

- **Preview production build**:

  ```sh
  npm run preview
  ```

- **Run tests**:

  ```sh
  npm run test
  ```

- **Lint code**:

  ```sh
  npm run lint
  ```

- **Format code**:
  ```sh
  npm run format
  ```

---

## 🌐 Deploying to Vercel

The application uses **TanStack Start** and **Nitro** which are configured for deployment on [Vercel](https://vercel.com):

1. **Connect Repository**: Push your code to GitHub and import the repository into Vercel.
2. **Framework Detection**: Vercel recognizes the framework via `vercel.json` (`tanstack-start`).
3. **Build & Output**:
   - On Vercel, `process.env.VERCEL` is automatically set, directing Nitro to compile using the `vercel` preset into `.vercel/output` (Build Output API v3).
   - Server-side rendering (SSR) is automatically deployed as serverless functions with streaming and Fluid Compute.
4. **Deploy**: Leave the default settings and click **Deploy**.

---

## 📂 Project Structure

```text
├── public/                 # Static assets and icons
├── src/
│   ├── assets/             # Brand campaign and product imagery
│   ├── components/         # Reusable UI components (buttons, accordions, dialogs)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and helpers
│   ├── routes/             # TanStack file-based routes
│   │   ├── __root.tsx      # Root layout, fonts, SEO, and shell
│   │   └── index.tsx       # Main G.C. Smart landing page
│   ├── routeTree.gen.ts    # Auto-generated TanStack router manifest
│   ├── router.tsx          # Router configuration
│   └── styles.css          # Design tokens and Tailwind CSS imports
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 📍 Store Information

- **Store Name**: G.C. Smart
- **Location**: Vivekananda Road, Bansberia, Hooghly, West Bengal, India
- **Contact Numbers**: +91 94331 67181 / +91 87778 23100
- **Direct Chat**: [WhatsApp Enquiries](https://wa.me/919433167181)

---

## 📄 License

Private repository. All rights reserved by G.C. Smart.
