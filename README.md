# Origin Monorepo

A full-stack application with Next.js frontend and NestJS backend in a single monorepo.

## 📁 Project Structure

```
origin/
├── frontend/          # Next.js application (React + TypeScript + Tailwind)
├── backend/           # NestJS API (Node.js + TypeScript)
├── package.json       # Root workspace configuration
└── .env.example       # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

Install all dependencies for both frontend and backend:

```bash
npm install
```

### Development

Run both frontend and backend concurrently:

```bash
npm run dev
```

Or run them separately:

```bash
# Frontend only (http://localhost:3000)
npm run dev:frontend

# Backend only (http://localhost:4000)
npm run dev:backend
```

### Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the values as needed

## 📦 Available Scripts

- `npm run dev` - Run both frontend and backend in development mode
- `npm run dev:frontend` - Run only frontend dev server
- `npm run dev:backend` - Run only backend dev server
- `npm run build` - Build both projects
- `npm run build:frontend` - Build frontend only
- `npm run build:backend` - Build backend only
- `npm run lint` - Lint both projects

## 🔧 Tech Stack

### Frontend
- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5

### Backend
- **Framework**: NestJS 11
- **Runtime**: Node.js
- **Language**: TypeScript 5

## 📝 API Endpoints

The backend API runs on `http://localhost:4000`

Default endpoint:
- `GET /` - Returns "Hello World!"

## 🤝 Contributing

This is a monorepo managed with npm workspaces. When adding dependencies:

```bash
# Add to frontend
npm install <package> --workspace=frontend

# Add to backend
npm install <package> --workspace=backend

# Add to root (dev tools like concurrently)
npm install <package> -D
```

## 📄 License

Private
