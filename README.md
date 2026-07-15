# CineMatch

A movie recommendation web app built by **The Reggs Limited**, using data from [The Movie Database (TMDB)](https://www.themoviedb.org/).

This project is developed in phases, each landing as its own set of commits on `dev` before being merged into `main` for release.

## Stack

| Concern            | Choice                                  |
|--------------------|------------------------------------------|
| Framework          | React 19 + Vite + TypeScript             |
| Styling            | Tailwind CSS v4 (Reggs Ltd brand theme)  |
| Data fetching/cache| TanStack Query + Axios                  |
| Routing            | React Router                             |
| State management   | Zustand (client/UI state) + TanStack Query (server state) |
| Auth               | Auth0                                    |
| Testing            | Vitest + Testing Library                 |
| Linting            | oxlint                                   |
| CI/CD              | GitHub Actions → GitHub Pages            |

## Project structure

```
src/
  components/ui/   shared, brand-styled UI primitives
  features/movies/ movie list, details, recommendations
  features/search/ search + pagination UI
  features/auth/   Auth0 login/logout/profile UI
  services/        API clients (TMDB) + caching layer
  lib/             cross-cutting setup (React Query client, etc.)
  routes/          route-level components
```

## Getting started

```bash
npm install
cp .env.example .env  
npm run dev
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — type-check + production build
- `npm run lint` — oxlint
- `npm run test` — unit tests (Vitest)
- `npm run test:coverage` — unit tests with coverage

## Build phases

- [x] **Phase 1** — Project scaffolding, brand theme, repo/branch setup
- [x] **Phase 2** — TMDB data-fetching service with caching
- [x] **Phase 3** — Auth0 authentication
- [x] **Phase 4** — Movie list, search, pagination, loaders (UI)
- [ ] **Phase 5** — Movie details view (cast, crew, ratings)
- [ ] **Phase 6** — State management wiring
- [ ] **Phase 7** — CI/CD: lint + test pipeline, auto-deploy to GitHub Pages

## Branching

- `main` — production, deployed automatically on merge
- `dev` — active development; feature work merges here first via PR

## License

Proprietary — © The Reggs Limited.
