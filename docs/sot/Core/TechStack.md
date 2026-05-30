# MS5 Technology Stack & Tools

This document outlines the complete technical stack used to build, run, and manage the MetaScape-5 (MS5) Engine.

## 🛠️ Development Environment

- **GitHub:** Hosts the source code repository and manages version control (Git).
- **VS Code (or Project IDX):** The primary Integrated Development Environment (IDE) for writing and editing code.
- **Google Assistant / Gemini Code Assist:** AI-powered coding partner integrated into the IDE for context-aware suggestions and refactoring.
- **Gemini (Browser):** The external "Expert Coding Partner" providing architectural guidance, complex logic generation, and project management.

## 🧪 Testing & Quality Assurance

- **Vitest:** The primary testing framework used for unit testing logic contracts in `turbo/lib/` such as `turbo/lib/die.ts` and `turbo/lib/game_math.ts`. It is natively integrated with Vite for high-performance execution. Vitest remains a Turbo devDependency; the root workspace test script currently delegates to the Turbo workspace.
- **Zod:** Runtime type checking and schema validation for all server/client communication, serving as the "Gatekeeper" for data integrity.

## 🖥️ Frontend (Client-Side)

- **Vite:** The modern build tool and development server used to compile the frontend assets.
- **TypeScript (v5.x):** The primary language for client-side logic, ensuring type safety and shared interfaces with the backend.
- **React (v18.x):** The UI library used for the Application Shell and all features.
- **React Application Shell:** Turbo remains a true React SPA rooted in `turbo/src/client/react/App.tsx`, now hosted behind the root master entry at `/turbo`. Flex now ships as an isolated React runtime at `/flex`, with a Turbo-style Google sign-in flow that lands on a full Flex-local copy of the Turbo app shell, providers, primary tabs, and dynamic gameplay domains.
- **Modern React-native Architecture:** The application has successfully transitioned from a jQuery/EJS hybrid to a fully modern, native React architecture. All legacy "Bridge Components" and jQuery DOM manipulations have been removed.
- **HTML5:** The semantic structure of the modern React components.
- **CSS3:** Custom styling for the application, using Flexbox for layouts.
- **Tailwind CSS (v3.4.x):** Utility-first CSS framework configured with the Nord theme. Used for new component development alongside existing CSS.
- **shadcn/ui:** A collection of reusable, accessible UI components built on Radix primitives and styled with Tailwind CSS. Components live in `src/client/react/ui/`.
- **Architecture:**
  - **Root workspace:** `package.json` defines npm workspaces for `turbo/` and `flex/`; `masterServer.js` owns `/`, `/turbo/*`, and `/flex/*`, spawns both child runtimes, polls each child health route, and tracks `starting` / `ready` / `failed` state before proxying traffic. The master uses **http-proxy-3** for the proxy layer (replacing the former http-proxy to avoid Node DEP0060 deprecation).
  - **Turbo UI:** `turbo/src/client/react/` (the full current game UI, GlobalContext, and feature modules).
  - **Turbo source:** `turbo/src/client/` and `turbo/src/shared/`.
  - **Turbo build output:** `turbo/public/dist/` (compiled bundles served by the Turbo runtime).
  - **Flex UI:** `flex/src/client/react/` now owns a Flex-local copy of the Turbo React runtime, including `App.tsx`, `GlobalContext.tsx`, `features/session/SessionProvider.tsx`, the copied feature domains, and compatibility `Flex*` wrappers for older local entrypoints.
  - **Flex source:** `flex/src/client/`, `flex/src/server/`, and `flex/src/shared/`.
  - **Flex build output:** `flex/public/dist/` serves the isolated Flex runtime bundle and generated `style.css` consumed by the Flex-local Turbo clone.
  - **Flex auth bootstrap:** Flex loads the GIS script from `flex/public/index.html`, injects runtime config, and initializes Google Identity through `flex/src/client/react/features/auth/googleIdentityClient.ts` so the login screen can remount safely while the Flex-local global context stack owns auth/reauth state.
  - **Flex browser env handling:** `flex/vite.flex.config.ts` is the authority for replacing `process.env.NODE_ENV` during client builds so React and ReactDOM do not leave Node-style `process` checks in the browser bundle.
  - **Flex copied shell styling:** Flex now ships a Flex-local copy of the Turbo shell and feature CSS chain via `flex/public/css/*.css`, `flex/src/client/styles/globals.css`, `flex/tailwind.config.js`, `flex/postcss.config.js`, and `flex/src/client/lib/flexUtils.ts` so the cloned runtime can render with Turbo-matching structure without importing Turbo runtime UI files directly.
  - **Google Identity client bootstrap:** Turbo loads the GIS script from `turbo/public/index.html`, then gates `google.accounts.id.initialize()` through `turbo/src/client/react/features/auth/googleIdentityClient.ts` so initialization happens once per page lifetime while `LoginScreen.tsx` remains free to re-render the button after logout or other unauthenticated remounts.
  - **Browser runtime env shim:** `turbo/src/client/process_polyfill.ts` now exists only as a minimal fallback for dependencies that probe `process.env` in the browser. `turbo/vite.config.ts` is the authority for client-side `process.env.NODE_ENV` replacement, and normal client builds must resolve that value to `production` unless a developer explicitly opts into dev mode.
  - **Console-noise triage:** A browser-extension `web-client-content-script.js` MutationObserver error and GIS popup `Cross-Origin-Opener-Policy` warnings are not treated as Turbo app bugs when login succeeds; they are external/browser noise unless future evidence shows a functional failure.

## 🎨 Visual Identity (The Nord Palette)

- **Authoritative SoT:** `turbo/Prompts/SoT/UI/NordPalette.md` (colors, semantic mapping to `global.css` and Tailwind, implementation contract).
- **Standard:** The MetaScape Turbo utilizes the **Nord Palette** as its centralized visual identity, focusing on an "Arctic-inspired" and "Lean Professional" aesthetic.
- **Browser Tab Identity:** The browser tab identity is a sparkles favicon (SVG data-URI) plus title **MetaScape Turbo** (sparkle from favicon only; no emoji in title). This contract should be preserved for consistency.
- **Polar Night (Backgrounds & Text):** \* `#2e3440` (Darkest - Headers/Text)
  - `#3b4252` (Main Text)
  - `#4c566a` (Muted Text)
- **Snow Storm (Surfaces & Grays):** \* `#eceff4` (Lightest surface)
  - `#e5e9f0` (Medium surface)
  - `#d8dee9` (Darkest gray/Borders)
- **Frost (Primary Accents):** \* `#5e81ac` (`--primary-main` - Links/Primary actions)
  - `#81a1c1` (`--primary-light` - Hovers)
  - `#88c0d0` (`--primary-dim` - Soft highlights)
- **Aurora (Semantic Feedback):** \* `#a3be8c` (Success)
  - `#ebcb8b` (Warning)
  - `#bf616a` (Error)

See NordPalette.md for full palette, swatches, and MS5 implementation mapping.

## ⚡ Real-Time Communication Layer

- **Socket.IO (v4.8.1):** Turbo's real-time channel remains the "nervous system" of the engine. It now runs behind the master entry using the path-prefixed socket route `/turbo/socket.io`. Flex also uses an isolated Socket.IO channel at `/flex/socket.io`, now backed by a Flex-local copy of Turbo's broader socket/event surface rather than an auth-only subset. The root master only upgrades those socket paths after the corresponding child runtime has reached ready state.
- **socket.io-client:** The client-side library used within both the Turbo and Flex Vite bundles to communicate with their isolated runtimes.

## ⚙️ Backend (Server-Side)

- **Node.js (v20.0.0+):** The JavaScript runtime environment that executes the server code.
- **Express (v5.1.0):** The web framework handling HTTP requests, routing, and middleware.
- **TypeScript (v5.x):** The strict syntactical superset of JavaScript used for Turbo server logic (`turbo/server.ts`, handlers, utilities) and the Flex isolated runtime clone (`flex/flexServer.ts`, `flex/src/server/`, `flex/src/shared/`).
- **ts-node:** A TypeScript execution engine for Node.js, allowing us to run TS files directly during development/debugging.

## 💾 Data Layer

- **MongoDB Atlas:** The cloud-hosted NoSQL database storing all persistent game data (Users, Characters, Clubs, Adventure Templates).
- **Prisma (v6.0.0+):** The Object-Relational Mapper (ORM).
- **Injected Architecture:** Prisma is managed via runtime-level initialization. Turbo and Flex currently share one generated Prisma client/schema authority, but each runtime now requires its own app-specific datasource URL at startup and caches its Prisma client under an app-specific dev-global slot so Turbo and Flex cannot silently reuse the same database selection.
- **Zod (v4.1.13):** The **Gatekeeper**. A TypeScript-first schema declaration and validation library used to validate incoming socket payloads and AI responses.

## ☁️ External Services & APIs

- **OpenAI API (GPT-4o):** The LLM powering the AI content generation features (Room Generation, Plot Summaries, Monster Creation).
- **Google OAuth 2.0:** Secure authentication service allowing users to log in with their Google Accounts.
- **Google Sheets API:** Standard integration via `googleapis` library to authenticate and Read/Write operations on spreadsheets for content management. Turbo and Flex now resolve independent spreadsheet IDs, avoid shared env fallback, and export to app-local `Prompts/sheet_data/` folders.

## 📦 Core Dependencies

The root workspace uses npm workspaces with a minimal master dependency set. Turbo and Flex each declare their own package-level dependencies. Turbo and Flex now both own full runtime dependency stacks for their isolated child apps, while the root master owns the routing/proxy layer.

| Package                    | Version  | Purpose                            |
| -------------------------- | -------- | ---------------------------------- |
| `vite`                     | ^5.0.0   | Frontend Build Tool                |
| `react`                    | ^18.2.0  | UI Library                         |
| `react-dom`                | ^18.2.0  | React DOM Renderer                 |
| `@vitejs/plugin-react`     | ^4.2.0   | Vite React Support                 |
| `express`                  | ^5.1.0   | Web Server Framework               |
| `socket.io`                | ^4.8.1   | Real-time Server                   |
| `socket.io-client`         | ^4.8.1   | Real-time Client                   |
| `prisma`                   | ^6.0.0   | ORM & Database Toolkit             |
| `@prisma/client`           | ^6.0.0   | Auto-generated Database Client     |
| `zod`                      | ^4.1.13  | Data Validation Schema             |
| `openai`                   | ^6.7.0   | AI Integration                     |
| `google-auth-library`      | ^9.10.0  | Google Login Verification          |
| `dotenv`                   | ^16.4.5  | Environment Variable Management    |
| `ejs`                      | ^3.1.10  | HTML Templating                    |
| `typescript`               | ^5.3.0   | Type Safety                         |
| `vitest`                   | ^2.0.0   | Unit Testing Framework             |
| `tailwindcss`              | ^3.4.17  | Utility-First CSS Framework        |
| `postcss`                  | ^8.4.49  | CSS Processing Pipeline            |
| `autoprefixer`             | ^10.4.20 | CSS Vendor Prefixing               |
| `class-variance-authority` | ^0.7.1   | Component Variant Management       |
| `clsx`                     | ^2.1.1   | Conditional Class Names            |
| `tailwind-merge`           | ^2.6.0   | Tailwind Class Conflict Resolution |

## Build and cold-start

The standard pre-test command remains **`npm run cold-start`**, but it now runs from the **root workspace** via `scripts/masterColdStart.mjs`. The root cold-start clears workspace build output, performs Windows pre-build cleanup for stale MS5 dev ports when needed, runs the root build, retries the build once if Prisma hits the Windows DLL rename `EPERM`, runs the root test script (currently Turbo Vitest), then starts the master server. Cold-start streams subprocess output so rimraf, build, test, and dev output appears in real time rather than being buffered until each step completes.

- **Root build:** `npm run build` builds `metascape-turbo` and `metascape-flex` in order.
- **Turbo build:** `turbo/package.json` still runs `prisma generate`, `tsc`, and the Vite wrapper `turbo/scripts/buildClient.mjs`.
- **Flex build:** `flex/package.json` compiles `flex/flexServer.ts` plus `flex/src/server/` and `flex/src/shared/`, then builds the full Flex-local Turbo clone client via `flex/scripts/flexBuildClient.mjs`.
- **Master start:** `npm start` launches `masterServer.js`, which serves `/` and proxies `/turbo/*` and `/flex/*` to child runtimes.
- **Master readiness contract:** `masterServer.js` now waits for each child health route (`/turbo/health`, `/flex/health`) before considering that child routable. Until then, the root landing page reports child status and child routes return a runtime-specific unavailable page rather than an opaque `502`.
- **Windows dev startup note:** `masterServer.js` launches child `npm run dev` commands through `cmd.exe`/`%ComSpec%` on Windows so local root startup works correctly on modern Node versions.
- **Render:** the recommended build command remains `npm install --include=dev ; npm run build`; the start command remains `npm start`.

On Windows, if Prisma fails with **EPERM** while Turbo builds, root cold-start now first performs targeted cleanup of the workspace dev ports (`3000`, `3101`, `3102`) and retries the build once automatically. The root helper `npm run kill-node` still exists as a broader manual fallback and runs `scripts/masterKillNodeWindows.js`.
