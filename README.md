# Apex Enterprises Website

[![CI/CD](https://github.com/apexenterprises/website/actions/workflows/ci.yml/badge.svg)](https://github.com/apexenterprises/website/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/apexenterprises/website/branch/main/graph/badge.svg)](https://codecov.io/gh/apexenterprises/website)

> India's leading AI-driven workforce solutions provider. Expert staffing, compliance, and payroll services enhanced with cutting-edge AI technology.

## 🚀 Tech Stack

- **Framework**: Next.js 16.2 (App Router)
- **Language**: TypeScript 5.5+
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui + Radix UI
- **State Management**: React Query (TanStack)
- **Testing**: Jest + React Testing Library + Playwright + Cypress
- **CI/CD**: GitHub Actions
- **Deployment**: Netlify

## 📋 Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/apexenterprises/website.git
cd website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🧪 Testing

```bash
# Unit tests
npm run test

# Unit tests with coverage
npm run test:coverage

# E2E tests (Playwright)
npm run test:e2e

# E2E tests (Cypress)
npm run cy:open

# Accessibility tests
npm run test:a11y
```

## 🔒 Security

- Content Security Policy (CSP) headers
- X-Frame-Options: DENY
- Strict Transport Security (HSTS)
- XSS Protection
- Security audit: `npm run audit:security`

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Skip-to-content link
- ARIA labels and roles

## 📦 Build

```bash
# Production build
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Bundle analysis
npm run analyze
```

## 🏗️ Architecture

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   └── ui/          # shadcn/ui components
├── lib/             # Utility functions
├── i18n/            # Internationalization
└── __tests__/       # Test files
```

## 📝 License

Copyright © 2024 Apex Enterprises. All rights reserved.
