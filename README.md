# Datacolab — System Builders

> We build systems, not just websites.

## 📁 Project Structure

```
datacolab/
├── frontend/          # Next.js 14 + TypeScript + Tailwind
└── backend/           # Node.js + Express + TypeScript
```

## 🚀 Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill in your values
npm run dev        # http://localhost:4000
```

## 🌐 Languages
- 🇦🇿 Azerbaijani (AZ)
- 🇷🇺 Russian (RU)  
- 🇬🇧 English (EN)

## 🛠 Tech Stack

| Layer     | Tech                                      |
|-----------|-------------------------------------------|
| Frontend  | Next.js 14, TypeScript, Tailwind, next-intl |
| Backend   | Node.js, Express, TypeScript              |
| Email     | Nodemailer (Resend/Gmail)                 |
| Deploy    | Vercel (FE) + Railway (BE)                |

## 📦 Deploy

- **Frontend** → Push to GitHub → Connect to Vercel
- **Backend** → Push to GitHub → Connect to Railway
