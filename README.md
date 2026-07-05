# AURUM — Luxury Jewelry E-commerce Frontend

AURUM is a high-end, immersive Next.js jewelry e-commerce frontend designed as a portfolio showcase. It features smooth scrolling, multi-layer parallax, responsive 3D card tilt effects with dynamic cursor-tracking light reflections, and pinned scroll storytelling. 

It is designed to feel premium, featuring a dark luxury palette, elegant serif typography, and micro-animations to mimic high-jewelry salons.

---

## 🛠 Technology Stack & Rationale

| Technology | Role | Rationale |
| :--- | :--- | :--- |
| **Next.js 15+ (App Router)** | Framework | Next.js's App Router provides layout nested routing, built-in image optimization, and static exports suited for high-fidelity e-commerce sites. |
| **Tailwind CSS v4** | Styling | Offers a utility-first styling workflow. Under Tailwind v4, custom theme parameters (luxury colors, fonts) are loaded directly in `globals.css` with `@theme` configurations, reducing stylesheet footprint. |
| **GSAP + ScrollTrigger** | Scroll Animations | Chosen for timeline animation control, high-performance scroll triggers, and pinning mechanics (used for the brand story wipes on the About page). |
| **Lenis** | Smooth Scrolling | Provides smooth inertia scrolling across platforms. We link Lenis frames directly into GSAP's ticker to prevent rendering jitter or scroll lag. |
| **Framer Motion** | Micro-interactions | Handles fast layout-based transitions (e.g. tab switches, cart slide drawer entries, and page transitions) where spring-physics makes interactions feel cohesive. |
| **Lucide Icons** | Icons | Provides clean, light-weight outline icons suitable for minimalist designs. |

---

## 💎 Key Architectural Features

### 1. High-Performance 3D Tilt Wrapper (`TiltWrapper.tsx`)
Rather than pulling in heavy third-party tilt modules, we implemented a custom component:
* **Cursor-Following Glare:** Multi-layered radial gradients simulate light shifting across jewelry faces or gem facets as the cursor moves.
* **Direct DOM updates:** Mouse coordinate listeners adjust style transforms directly on the target element using `requestAnimationFrame`, bypassing React component re-renders to maintain 60 FPS.
* **Accessibility & Device Detection:** Tilt calculations auto-disable on touch screen interfaces and respect `prefers-reduced-motion` settings.

### 2. Synced Smooth Scroll (`LenisProvider.tsx`)
Smooth wheel scrolls are processed by Lenis and fed directly into GSAP's scroll controller:
```javascript
lenis.on("scroll", () => ScrollTrigger.update());
gsap.ticker.add((time) => lenis.raf(time * 1000));
```
This guarantees that parallax offsets and pinned panel triggers line up frame-for-frame with the user's scroll speed without layout stuttering.

### 3. Chapter-Pinned Scroll Wipes (`/about`)
Under the Brand Story page, the viewport pins in place using GSAP ScrollTrigger. As the user continues scrolling, successive panels slide upwards from off-screen, creating a modern storytelling narrative that transitions at the user's reading pace.

---

## 📂 Folder Structure

```
src/
├── app/
│   ├── layout.tsx                # App Root Layout (Lenis setup, Header/Footer, global state)
│   ├── page.tsx                  # Home Page (Hero parallax, featured collections, animated headline)
│   ├── collections/
│   │   └── [slug]/
│   │       └── page.tsx          # Collection detail grid (Filter/Sort, staggered entrance, tilt cards)
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx          # Product detail page (3D-tilt image, thumb gallery, sticky CTA, detail tabs)
│   ├── about/
│   │   └── page.tsx              # About/Brand story (Pinned scroll slides, GSAP ScrollTrigger transitions)
│   └── template.tsx              # Route transition page wrapper using Framer Motion
├── components/
│   ├── ui/
│   │   ├── Header.tsx            # Global Navigation with micro-interactions and cart indicator
│   │   ├── Footer.tsx            # Premium footer layout
│   │   ├── ProductCard.tsx       # Hover image-swap card with custom 3D Tilt Wrapper
│   │   ├── TiltWrapper.tsx       # Reusable custom component with throttled 3D rotation & cursor-chasing glare
│   │   ├── ScrollReveal.tsx      # Reusable GSAP ScrollTrigger intersection reveal component
│   │   ├── ParallaxHero.tsx      # Multi-layer parallax scroll banner
│   │   └── CartDrawer.tsx        # Slide-out shopping bag panel using Framer Motion
│   └── context/
│       └── CartContext.tsx       # Simple client-side cart context
├── data/
│   └── products.ts               # Mock JSON database containing 12 high-end jewelry items
└── styles/
    └── globals.css               # Base Tailwind, custom utilities, and scrollbar customization
```

---

## 🚀 Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Dev Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

3. **Production Build Compilation:**
   ```bash
   npm run build
   ```
   This generates an optimized static production package ready to be deployed directly to Vercel, Netlify, or AWS Amplify.
