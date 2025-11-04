# Pet Heaven – Technical Documentation (Baseline)

## 1. Purpose
This document provides a comprehensive, **purely descriptive** technical overview of the existing Pet Heaven codebase. It serves as the **baseline documentation** for future automated doc generation on new pull requests.

## 2. Technology Stack
- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Bundler/Runtime:** Create React App

- **Key Libraries:** react-router-dom, axios, @reduxjs/toolkit, tailwindcss, react-icons

## 3. Project Setup (Summary)
- Install dependencies: use the package manager defined in `package.json` (e.g., `npm` or `yarn`).
- Development server: use the script defined in `package.json` (e.g., `dev`, `start`).
- Production build: run the build script (e.g., `build`).
- Lint/format: run available scripts if present.

**Detected Scripts (from `package.json`):**

- `start` – defined in package.json.

- `build` – defined in package.json.

- `test` – defined in package.json.

- `eject` – defined in package.json.

## 4. Repository Structure (Top Level)

- `__MACOSX/`

- `pet-heaven-zee/`


## 5. Configuration & Tooling Files

- `pet-heaven-zee/package.json` – Uses react-router-dom for client-side routing.; Uses Axios for HTTP requests.; Styled using Tailwind utility classes.

- `pet-heaven-zee/tailwind.config.js` – Configuration constants and environment bindings.; Tailwind CSS configuration (theme, plugins, paths).

- `pet-heaven-zee/README.md` – Project resource or configuration file.

- `pet-heaven-zee/.gitignore` – Project resource or configuration file.


## 6. Source Modules (File-by-File Overview)

- `pet-heaven-zee/.github/workflows/trigger-n8n-on-pr.yml` — Project resource or configuration file.

- `pet-heaven-zee/README.md` — Project resource or configuration file.

- `pet-heaven-zee/package-lock.json` — Uses react-router-dom for client-side routing.; Uses Axios for HTTP requests.; Styled using Tailwind utility classes.

- `pet-heaven-zee/package.json` — Uses react-router-dom for client-side routing.; Uses Axios for HTTP requests.; Styled using Tailwind utility classes.

- `pet-heaven-zee/public/index.html` — Project resource or configuration file.

- `pet-heaven-zee/public/manifest.json` — Project resource or configuration file.

- `pet-heaven-zee/src/App.css` — Stylesheet or Tailwind layer overrides.

- `pet-heaven-zee/src/App.test.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/App.tsx` — Application root component that composes global providers and routes.; Uses react-router-dom for client-side routing.

- `pet-heaven-zee/src/Components/Accordion.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Components/Dropdown.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Components/Footer.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Components/Modal.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Components/Navbar/DesktopNavbar.tsx` — Uses react-router-dom for client-side routing.

- `pet-heaven-zee/src/Components/Navbar/MobileNavbar.tsx` — Uses react-router-dom for client-side routing.

- `pet-heaven-zee/src/Components/Navbar/index.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Components/PetCard.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Components/PetCarousel.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Components/Spinner.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/CustomHooks/useAnimationOnce.ts` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Pages/About/index.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Pages/Contact/index.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Pages/Home/BottomBanner.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Pages/Home/PetList.tsx` — Uses react-router-dom for client-side routing.

- `pet-heaven-zee/src/Pages/Home/TopBanner.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Pages/Home/index.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Pages/PetCare/PetCareSection.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Pages/PetCare/index.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Pages/PetDetails/CustomerList.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Pages/PetDetails/MorePetsList.tsx` — Uses react-router-dom for client-side routing.

- `pet-heaven-zee/src/Pages/PetDetails/PetDetail.tsx` — Uses react-router-dom for client-side routing.

- `pet-heaven-zee/src/Pages/PetDetails/index.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Reducers/petReducer.tsx` — Uses Axios for HTTP requests.; Exports one or more named/default React components or utilities.

- `pet-heaven-zee/src/Routes/AppRouter.tsx` — Defines application routes and navigation flow.; Uses react-router-dom for client-side routing.

- `pet-heaven-zee/src/Store/index.ts` — Application source module implemented in React/TypeScript.; Exports one or more named/default React components or utilities.

- `pet-heaven-zee/src/Types/index.ts` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/Utils/constants/index.tsx` — Application source module implemented in React/TypeScript.; Exports one or more named/default React components or utilities.

- `pet-heaven-zee/src/Utils/helperFunctions/index.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/global.d.ts` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/index.tsx` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/input.css` — Stylesheet or Tailwind layer overrides.; Styled using Tailwind utility classes.

- `pet-heaven-zee/src/output.css` — Stylesheet or Tailwind layer overrides.; Styled using Tailwind utility classes.

- `pet-heaven-zee/src/reportWebVitals.ts` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/src/setupTests.ts` — Application source module implemented in React/TypeScript.

- `pet-heaven-zee/tailwind.config.js` — Configuration constants and environment bindings.; Tailwind CSS configuration (theme, plugins, paths).


## 7. Routing & Navigation
If present, files named with `router`, `route`, or similar define the **client-side routes** using `react-router-dom`. Page-level components (`*Page.tsx`) represent navigable screens. Layout components manage shared UI chrome (headers, footers, containers).

## 8. State Management
If a store (e.g., `store.ts`, Zustand, or Redux) is present, it centralizes shared state and exposes selectors/actions. Local component state is handled via React hooks where appropriate.

## 9. Data Access Layer
API utilities (e.g., under `api/` or `services/`) encapsulate HTTP calls (often via Axios), response shaping, and error handling. Components consume these helpers rather than calling endpoints directly.

## 10. Styling Approach
Tailwind utility classes are used for component styling. Global styles and Tailwind layers are configured in `tailwind.config.*` and `postcss.config.*`. Component-level styles are colocated with components when needed.

## 11. Testing (if applicable)
If test files (e.g., `*.test.tsx`) exist, they validate component behavior and integration points. The test runner configuration is defined by project tooling.

## 12. Build & Deployment
Build artifacts are produced via the bundler (`Create React App`). CI/CD integrations are defined under `.github/workflows/`.

## 13. Conventions
- **TypeScript-first:** Prefer explicit types and interfaces for props and API contracts.
- **Components:** Keep components focused; lift state up when multiple children need it.
- **Imports:** Use module aliases if configured in `tsconfig.json`.

## 14. Future Extensions
This baseline can be extended by the automated system to produce **delta documentation** on each PR (e.g., updated routes, new components, modified APIs, and affected pages).
