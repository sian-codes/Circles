# Circles Social — Starter Repo

Monorepo with **client (React + Vite + TS)**, **server (FastAPI + SQLite + SQLAlchemy)**, and **ui-kit**.
Includes **sample data** and a **seed script** to populate a local SQLite DB.

## Quick start

### 1) Server
```bash
cd server
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python seed.py                                     # creates dev.db and inserts sample data
uvicorn app.main:app --reload                      # http://127.0.0.1:8000 (Swagger at /docs)
```

### 2) Client
```bash
cd client
npm install
npm run dev                                        # http://127.0.0.1:5173
```

### 3) UI Kit (optional local build)
```bash
cd ui-kit
npm install
npm run build
```

## Structure
- `client/` — Vite React TS app wired to the API
- `server/` — FastAPI app with SQLite dev DB, SQLAlchemy models, pydantic schemas
- `ui-kit/` — shared tokens + basic components (Button, Card, Chip, Composer, Post)


# Circles Social — Project Overview & Testing Best Practices

## Project Structure

- `client/` — Vite React TypeScript app wired to the API  
  _Responsible for the frontend: user interface, user interactions, and communicating with the backend API._

- `server/` — FastAPI app with SQLite dev DB, SQLAlchemy models, pydantic schemas  
  _Responsible for backend logic: API endpoints, data processing, authentication, and database management._

- `ui-kit/` — Shared tokens + basic components (Button, Card, Chip, Composer, Post)  
  _Responsible for reusable UI elements and consistent styling across the app._

## How to Maintain and Build

- Add new features to `client/` for UI, and to `server/` for backend logic.
- Update or add shared components in `ui-kit/` for consistent design.
- Use the provided seed script in `server/` to populate the database for development.
- Each section has its own dependencies and build/start commands.

## Best Practices for Testing

### 1. `client/` (React + Vite + TypeScript)
- **Unit Tests:** Test individual React components and utility functions (Jest or Vitest).
- **Integration Tests:** Test component interactions and API calls (React Testing Library).
- **End-to-End (E2E) Tests:** Test user flows (Cypress or Playwright).
- **Mocking:** Mock API calls to isolate frontend behavior.
- **Type Safety:** Use TypeScript to catch type-related issues.

### 2. `server/` (FastAPI + SQLite + SQLAlchemy)
- **Unit Tests:** Test functions, models, and utilities (`unittest` or `pytest`).
- **Integration Tests:** Test API endpoints with FastAPI's `TestClient`.
- **Database Tests:** Use an in-memory SQLite DB or test DB for ORM validation.
- **Mocking:** Mock external services to isolate backend logic.
- **Fixtures:** Use `pytest` fixtures for reusable test data.

### 3. `ui-kit/` (Shared Components)
- **Unit Tests:** Test each component in isolation (Jest or Vitest).
- **Snapshot Tests:** Ensure UI components render consistently.
- **Accessibility Tests:** Use tools like Axe or React Testing Library.
- **Storybook:** Visually test components and their states.

### General Best Practices
- **Test Coverage:** Aim for high coverage, focus on critical paths.
- **Automation:** Run tests in CI/CD pipelines.
- **Mocking and Isolation:** Mock dependencies to isolate units.
- **Documentation:** Document test cases and scenarios.
- **Error Handling:** Test edge cases and error scenarios.
