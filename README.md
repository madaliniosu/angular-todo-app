# Angular Todo App

A clean, responsive todo application built with Angular 21 and Angular Material, using modern Angular Signals for state management.

## Features

- **Add, complete, and delete** todos via a Material dialog and table
- **Filter** by All / Open / Completed with live badge counts
- **Drag-and-drop reordering** powered by Angular CDK
- **Dark/light theme** toggle
- **Persistent storage** — todos survive page refreshes via localStorage
- **Responsive layout** — collapsible sidenav that auto-closes on mobile (≤800px)

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Angular 21 (standalone components) |
| UI | Angular Material 21 |
| Drag & drop | Angular CDK |
| State | Angular Signals + `computed()` |
| Persistence | localStorage |
| Tests | Vitest + jsdom |

## Getting Started

```bash
npm install
npm start         # dev server at http://localhost:4200
```

```bash
npm run build     # production build
npm test          # unit tests
```

## Project Structure

```
src/app/
├── components/
│   ├── toolbar/          # Top bar: theme toggle, sidenav toggle
│   ├── sidenav/          # Layout shell with responsive sidenav
│   ├── nav-buttons/      # Filter buttons with badge counts
│   ├── todo-table/       # Main table with drag-drop rows
│   └── add-todo/         # Modal dialog for new todos
└── services/
    ├── todo-store.service.ts     # All todo state (signals)
    ├── theme.service.ts          # Dark/light mode
    └── sidenav-toggle.service.ts # Sidebar open/close state
```

## State Management

All todo state lives in `TodoStore`, a single injectable service using Angular Signals. There is no NgRx or other external state library — `signal()`, `computed()`, and `effect()` handle reactivity and localStorage sync natively.
