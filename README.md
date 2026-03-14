# EKO International Trade Expo 2026 - Official Website

![EKO Trade Expo](https://img.shields.io/badge/Event-September%202026-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-cyan)
![Vite](https://img.shields.io/badge/Vite-6.3-purple)

> West Africa's premier trade and investment exposition connecting businesses, entrepreneurs, and investors across diverse industries.

## 📅 Event Information

- **Dates**: Tuesday, September 22 - Saturday, September 26, 2026
- **Time**: 8:00 AM Daily
- **Venue**: Police College, Ikeja, Lagos State, Nigeria
- **Duration**: 5 Days of Innovation & Networking

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- pnpm 8+ ([Install](https://pnpm.io/installation))

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

The application will be available at `http://localhost:5173`

---

## 📚 Documentation

Comprehensive documentation is available in the `/docs` folder:

- **[Main Documentation](./docs/README.md)** - Complete guide from beginner to advanced
- **[Architecture Guide](./docs/ARCHITECTURE.md)** - System design and patterns
- **[Component Documentation](./docs/COMPONENTS.md)** - All components explained
- **[API Integration Guide](./docs/API.md)** - Backend integration instructions
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - How to deploy to production

---

## 🏗️ Project Structure

```
eko-trade-expo/
├── docs/                      # 📖 Comprehensive documentation
│   ├── README.md              # Main documentation
│   ├── ARCHITECTURE.md        # Architecture guide
│   ├── COMPONENTS.md          # Component documentation
│   ├── API.md                 # API integration guide
│   └── DEPLOYMENT.md          # Deployment instructions
│
├── email-templates/           # 📧 Email templates
│   └── README.md              # Email templates guide
│
├── src/
│   ├── app/
│   │   ├── components/        # React components
│   │   │   ├── ui/            # Reusable UI components
│   │   │   ├── Layout.tsx     # Main layout
│   │   │   └── ScrollToTop.tsx
│   │   │
│   │   ├── pages/             # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Countdown.tsx
│   │   │   ├── Schedule.tsx
│   │   │   ├── Sponsors.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Downloads.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── ...
│   │   │
│   │   ├── App.tsx            # Root component
│   │   └── routes.tsx         # Route configuration
│   │
│   ├── constants/             # Configuration constants
│   │   └── index.ts
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useCountdown.ts
│   │   ├── useFormValidation.ts
│   │   ├── useScrollAnimation.ts
│   │   └── index.ts
│   │
│   ├── types/                 # TypeScript types
│   │   └── index.ts
│   │
│   ├── utils/                 # Utility functions
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   ├── helpers.ts
│   │   └── index.ts
│   │
│   └── styles/                # Stylesheets
│       ├── index.css
│       ├── tailwind.css
│       ├── theme.css
│       └── fonts.css
│
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🛠️ Technology Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.3** - Build tool & dev server
- **React Router 7** - Routing
- **Tailwind CSS 4** - Utility-first CSS

### UI & Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Motion (Framer Motion)** - Smooth animations
- **Recharts** - Charts and data visualization
- **Sonner** - Toast notifications

### Forms & Validation
- **React Hook Form** - Form state management
- Custom validation utilities

### Development
- **pnpm** - Fast, disk space efficient package manager
- **PostCSS** - CSS processing
- **ESLint** - Code linting (optional)

---

## 🎯 Key Features

### For Visitors
- ✅ Event information and countdown
- ✅ Full event schedule
- ✅ Online registration
- ✅ Contact form
- ✅ Downloadable resources
- ✅ FAQ section
- ✅ Sponsor showcase

### Technical Features
- ✅ Fully responsive (mobile-first)
- ✅ TypeScript for type safety
- ✅ Custom React hooks for reusable logic
- ✅ Centralized constants and configuration
- ✅ Comprehensive utility functions
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Production-ready architecture
- ✅ Extensive documentation

---

## 📖 Code Examples

### Using Custom Hooks

```tsx
import { useCountdown } from '@/hooks';
import { EVENT_CONFIG } from '@/constants';

function CountdownTimer() {
  const targetDate = new Date(EVENT_CONFIG.START_DATE).getTime();
  const timeLeft = useCountdown(targetDate);
  
  return (
    <div>
      {timeLeft.days} days, {timeLeft.hours} hours
    </div>
  );
}
```

### Using Constants

```tsx
import { EVENT_CONFIG, VENUE_CONFIG, CONTACT_INFO } from '@/constants';

<div>
  <p>{EVENT_CONFIG.DISPLAY_DATES}</p>
  <p>{VENUE_CONFIG.FULL_ADDRESS}</p>
  <p>{CONTACT_INFO.EMAILS.PRIMARY}</p>
</div>
```

### Using Utilities

```tsx
import { formatDate, isValidEmail, formatPhoneNumber } from '@/utils';

const displayDate = formatDate(new Date(), 'long');
const isValid = isValidEmail('user@example.com');
const formattedPhone = formatPhoneNumber('+2347039138773');
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
# API Configuration (when ready)
VITE_API_BASE_URL=https://api.ekointernationaltrade.com

# Analytics
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID

# Feature Flags
VITE_ENABLE_ANALYTICS=true
```

### Constants Configuration

All application constants are in `/src/constants/index.ts`:

- Event dates and times
- Venue information
- Contact details
- API endpoints (for future integration)
- Form validation rules
- Navigation routes

**To update event information**, simply modify the constants file - changes will reflect throughout the entire application.

---

## 🚀 Deployment

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Other Platforms

See the [Deployment Guide](./docs/DEPLOYMENT.md) for detailed instructions on deploying to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Traditional hosting (cPanel)

---

## 📧 Email Templates

Professional email templates are available in `/email-templates/`:

- Welcome & Registration Confirmation
- Email Verification
- Password Reset
- Login Notification
- Password Changed Confirmation

See `/email-templates/README.md` for integration instructions.

---

## 🧪 Development Workflow

### Adding a New Page

1. Create component in `/src/app/pages/NewPage.tsx`
2. Add route in `/src/app/routes.tsx`
3. Add to navigation in `/src/constants/index.ts` (if needed)

### Creating Reusable Components

1. Create in `/src/app/components/`
2. Define TypeScript interface for props
3. Import and use in pages

### Adding Custom Hooks

1. Create in `/src/hooks/useMyHook.ts`
2. Export from `/src/hooks/index.ts`
3. Use in components

See [Documentation](./docs/README.md) for detailed guides.

---

## 🎨 Branding

### Color Palette

The EKO brand uses vibrant colors defined in `/src/constants/index.ts` and `/src/styles/theme.css`:

- **Primary Green**: `#10b981`
- **Orange**: `#f97316`
- **Blue**: `#3b82f6`
- **Cyan**: `#06b6d4`
- **Yellow**: `#eab308`
- **Red**: `#ef4444`
- **Light Green**: `#84cc16`

---

## 🤝 Contributing

### Code Style

- Use TypeScript for type safety
- Follow component structure guidelines (see docs)
- Use Tailwind CSS for styling
- Extract reusable logic into custom hooks
- Keep components small and focused
- Document complex logic

### Commit Messages

```
feat: Add new registration form
fix: Resolve countdown timer issue
docs: Update API documentation
style: Improve mobile responsiveness
refactor: Extract validation logic to utils
```

---

## 📞 Support & Contact

### Event Information
- **Email**: info@ekointernationaltrade.com
- **Phone**: +234 703 913 8773 | +234 806 313 0771
- **Organizer**: Momentum Trading Enterprises

### Development Support
- Check the [Documentation](./docs/README.md)
- Review [Component Docs](./docs/COMPONENTS.md)
- See [Architecture Guide](./docs/ARCHITECTURE.md)

---

## 📝 License

Copyright © 2026 EKO International Trade Expo. All rights reserved.

---

## 🙏 Acknowledgments

- Design inspired by modern trade expo websites
- UI components built with Radix UI
- Icons from Lucide React
- Animations powered by Motion (Framer Motion)

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Website structure
- [x] All pages created
- [x] Responsive design
- [x] Email templates
- [x] Documentation

### Phase 2: Backend Integration (Upcoming)
- [ ] User authentication
- [ ] Registration API
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Real-time updates

### Phase 3: Enhancements
- [ ] Multi-language support
- [ ] Live chat integration
- [ ] Mobile app (React Native)
- [ ] Virtual booth tours

---

## 📊 Project Stats

- **Total Pages**: 13
- **Reusable Components**: 50+
- **Custom Hooks**: 3
- **Utility Functions**: 30+
- **Type Definitions**: 20+
- **Documentation Pages**: 5
- **Email Templates**: 5

---

**Built with ❤️ for EKO International Trade Expo 2026**

**Last Updated**: March 13, 2026 | **Version**: 1.0.0
