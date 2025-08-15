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
