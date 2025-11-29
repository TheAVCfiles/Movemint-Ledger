# MoveMint™ Ledger

A professional studio management and ledger solution by Stageport Technologies.

## 🌿 Overview

MoveMint™ is the ultimate ledger and management solution for dance studios, performing arts centers, and creative education facilities. This repository contains the main landing page and API endpoints for the MoveMint platform.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/app
  /movemint
    page.tsx           # MoveMint landing page (server component)
    demo.tsx           # Live ledger demo (client component)
  /api
    /ledger
      route.ts         # Ledger API endpoint (App Router)
  layout.tsx           # Root layout with metadata
  globals.css          # Global styles
  page.tsx             # Root redirect to /movemint

/styles
  theme.css            # StagePort + MoveMint theme tokens
  movemint.css         # MoveMint page styles

/public
  /assets
    /branding
      logo-stageport.svg
      logo-movemint.svg
```

## 🔥 Features

- **Real-Time Ledger**: Track every class, student, and transaction
- **Smart Scheduling**: Manage class schedules and instructor availability
- **Payment Processing**: Accept payments and manage subscriptions
- **Student Management**: Comprehensive student profiles and attendance tracking
- **Mobile Ready**: Responsive design for all devices
- **Secure & Reliable**: Enterprise-grade security

## 📡 API Endpoints

### POST /api/ledger

Log a new action to the ledger.

**Request Body:**
```json
{
  "action": "ATTENDANCE",
  "details": "Student checked in for Ballet 101"
}
```

**Response:**
```json
{
  "success": true,
  "entry": {
    "id": "ledger_1234567890_abc123",
    "timestamp": "2025-01-15T10:30:00.000Z",
    "action": "ATTENDANCE",
    "details": "Student checked in for Ballet 101"
  }
}
```

### GET /api/ledger

Retrieve recent ledger entries.

**Response:**
```json
{
  "success": true,
  "entries": [...]
}
```

## ☁️ Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TheAVCfiles/Movemint-Ledger)

This project is Vercel-ready and can be deployed automatically:

1. Push to the main branch
2. Vercel will automatically build and deploy

### Manual Deployment

```bash
npm run build
```

The `.next` folder contains the production build.

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables + Theme Tokens
- **Deployment**: Vercel

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🏢 About Stageport

Stageport Technologies is dedicated to empowering creative education, one studio at a time. MoveMint™ is our flagship product designed specifically for the unique needs of performing arts centers and dance studios.

---

© 2025 Stageport Technologies. All rights reserved. MoveMint™ is a trademark of Stageport Technologies.