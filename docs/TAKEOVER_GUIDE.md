# Project Takeover Guide

This guide is specifically designed to help new developers (from beginner to senior level) quickly understand and take over the EKO International Trade Expo website project.

## 📋 Table of Contents

1. [First Day: Getting Started](#first-day-getting-started)
2. [Week 1: Understanding the Codebase](#week-1-understanding-the-codebase)
3. [Week 2: Making Your First Changes](#week-2-making-your-first-changes)
4. [Ongoing: Maintenance and Development](#ongoing-maintenance-and-development)
5. [Common Tasks](#common-tasks)
6. [Emergency Procedures](#emergency-procedures)

---

## First Day: Getting Started

### Morning: Environment Setup (2-3 hours)

#### 1. Clone and Setup (30 minutes)

```bash
# Clone the repository
git clone <repository-url>
cd eko-trade-expo

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Visit `http://localhost:5173` - you should see the homepage.

#### 2. Explore the Website (30 minutes)

Click through every page and feature:
- [ ] Home page with countdown
- [ ] About page
- [ ] Countdown page
- [ ] Schedule page
- [ ] Sponsors page
- [ ] Registration form
- [ ] Contact form
- [ ] Downloads page
- [ ] FAQ page
- [ ] Gallery
- [ ] Team page
- [ ] Login/SignUp pages

Take notes on what each page does.

#### 3. Review Documentation (1-2 hours)

Read these in order:

1. **[Main README](../README.md)** (15 minutes)
   - Understand what the project does
   - Note the technology stack
   - Check the quick start guide

2. **[Main Documentation](./README.md)** (30-45 minutes)
   - Understand the folder structure
   - Review key concepts
   - Note the development workflow

3. **[Architecture Guide](./ARCHITECTURE.md)** (30-45 minutes)
   - Understand system design
   - Learn the component patterns
   - Review state management approach

### Afternoon: Code Exploration (3-4 hours)

#### 1. Understand the Entry Points (30 minutes)

**Read these files in order:**

```
1. /src/main.tsx              (App initialization)
2. /src/app/App.tsx            (Root component)
3. /src/app/routes.tsx         (All routes)
4. /src/app/components/Layout.tsx (Layout wrapper)
```

**What to look for:**
- How does the app start?
- How are routes configured?
- What is the layout structure?

#### 2. Explore Constants (30 minutes)

**Open:** `/src/constants/index.ts`

This is the **most important file** - it's the single source of truth for:
- Event dates and times (September 22-26, 2026)
- Venue information (Police College, Ikeja)
- Contact details (emails, phone numbers)
- Brand colors
- API endpoints (for future use)
- Form validation rules

**Exercise:** Find where these are used in the codebase.

#### 3. Review Type Definitions (30 minutes)

**Open:** `/src/types/index.ts`

Understand the data structures for:
- Form data (Registration, Contact, Login, SignUp)
- Event data (Schedule, FAQ, Sponsors)
- API responses (for future use)

**Exercise:** Find where each type is used.

#### 4. Study Custom Hooks (45 minutes)

**Read these files:**

1. `/src/hooks/useCountdown.ts`
   - How does the countdown work?
   - Where is it used?

2. `/src/hooks/useFormValidation.ts`
   - What validations are available?
   - How to use them?

3. `/src/hooks/useScrollAnimation.ts`
   - How are scroll animations triggered?
   - Where is it used?

**Exercise:** Find examples of each hook being used in pages.

#### 5. Explore Utility Functions (45 minutes)

**Read these files:**

1. `/src/utils/formatters.ts`
   - Date formatting
   - Phone number formatting
   - Currency formatting
   - etc.

2. `/src/utils/validators.ts`
   - Email validation
   - Phone validation
   - Password strength
   - etc.

3. `/src/utils/helpers.ts`
   - Debounce/throttle
   - Copy to clipboard
   - Scroll utilities
   - etc.

**Exercise:** Try using some utilities in the browser console.

#### 6. Study a Complete Page (45 minutes)

**Pick one page to study deeply:** `/src/app/pages/Contact.tsx`

Trace through:
1. Imports - where do they come from?
2. State - what state does it manage?
3. Form handling - how does form submission work?
4. Types - what types are used?
5. Styling - how is Tailwind CSS used?

**Exercise:** Draw a diagram of how data flows through the component.

---

## Week 1: Understanding the Codebase

### Day 2: Component Architecture

#### Morning: UI Components (3 hours)

1. **Explore UI Components** (`/src/app/components/ui/`)
   - Open `button.tsx` - understand the variants
   - Open `card.tsx` - see composition pattern
   - Open `input.tsx` - understand form inputs
   - Open `accordion.tsx` - see how FAQ uses it

2. **Exercise:** Create a test page using UI components
   ```tsx
   // Create /src/app/pages/Test.tsx
   import { Button } from '@/components/ui/button';
   import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
   
   export function Test() {
     return (
       <Card>
         <CardHeader>
           <CardTitle>Test Page</CardTitle>
         </CardHeader>
         <CardContent>
           <Button>Click Me</Button>
         </CardContent>
       </Card>
     );
   }
   ```

#### Afternoon: Page Components (4 hours)

Study each page component in `/src/app/pages/`:

**For each page, answer:**
1. What is its purpose?
2. What state does it manage?
3. What hooks does it use?
4. What components does it use?
5. How does it handle user interactions?

**Create a spreadsheet:**

| Page | Purpose | State | Hooks Used | Key Features |
|------|---------|-------|------------|--------------|
| Home | Landing page | timeLeft | useCountdown | Hero, countdown, features |
| About | Event info | counter states | useScrollAnimation | Stats, why attend |
| ... | ... | ... | ... | ... |

### Day 3: State and Data Flow

#### Morning: Forms (3 hours)

Study form handling:

1. **Registration Form** (`/src/app/pages/Register.tsx`)
   - How is form data structured?
   - How is validation done?
   - How is submission handled?

2. **Contact Form** (`/src/app/pages/Contact.tsx`)
   - Similar questions as above

**Exercise:** Add a new field to the contact form:
- Add "Phone Number" field
- Add validation
- Update the type definition

#### Afternoon: Countdown Timer (2 hours)

Deep dive into the countdown:

1. Study `/src/hooks/useCountdown.ts`
2. Find where it's used (Home.tsx, Countdown.tsx)
3. Understand the timer logic

**Exercise:** Modify the countdown to show milliseconds

### Day 4: Styling and Animations

#### Morning: Tailwind CSS (3 hours)

1. **Study the theme** (`/src/styles/theme.css`)
   - CSS custom properties
   - Color palette
   - Typography

2. **Review Tailwind usage**
   - How are colors applied?
   - How is responsiveness handled?
   - What utility classes are common?

**Exercise:** Restyle the contact page button to use different colors

#### Afternoon: Animations (3 hours)

1. **Motion animations**
   - Find Motion usage in pages
   - Understand animation variants
   - See ANIMATION_VARIANTS in constants

2. **Scroll animations**
   - Study useScrollAnimation hook
   - Find examples in About.tsx

**Exercise:** Add a fade-in animation to the FAQ page

### Day 5: Review and Practice

#### Morning: Code Review (3 hours)

Review what you've learned:
- [ ] I understand the project structure
- [ ] I know where constants are defined
- [ ] I understand the type system
- [ ] I know how forms work
- [ ] I understand the hooks
- [ ] I can navigate the codebase confidently

#### Afternoon: Make a Small Change (3 hours)

**Exercise:** Update the event information

1. Find where event dates are stored
2. Change the event dates
3. Verify the changes appear everywhere
4. Document where you found the information

**Answer:** All in `/src/constants/index.ts` under `EVENT_CONFIG`

---

## Week 2: Making Your First Changes

### Common Change Scenarios

#### Scenario 1: Update Event Information

**Task:** Change event dates, venue, or contact info

**Steps:**
1. Open `/src/constants/index.ts`
2. Find the relevant constant:
   - `EVENT_CONFIG` for dates/times
   - `VENUE_CONFIG` for venue
   - `CONTACT_INFO` for contact details
3. Update the values
4. Check all pages to verify changes

**Test:** Navigate through the site and confirm changes appear everywhere.

#### Scenario 2: Add a New Page

**Task:** Create a "Press" page for media information

**Steps:**

1. **Create the page component**
   ```tsx
   // /src/app/pages/Press.tsx
   export function Press() {
     return (
       <div className="min-h-screen bg-white">
         <section className="py-16">
           <div className="mx-auto max-w-7xl px-4">
             <h1 className="text-4xl mb-6">Press & Media</h1>
             <p>Press information goes here...</p>
           </div>
         </section>
       </div>
     );
   }
   ```

2. **Add route** in `/src/app/routes.tsx`
   ```tsx
   import { Press } from "./pages/Press";
   
   // In the children array:
   { path: "press", Component: Press }
   ```

3. **Add to navigation** in `/src/constants/index.ts`
   ```tsx
   export const NAV_ITEMS = [
     // ... existing items
     { path: "/press", label: "Press" },
   ];
   ```

4. **Add to navigation** in `/src/app/components/Layout.tsx`
   - The navigation automatically uses NAV_ITEMS from constants

#### Scenario 3: Update a Form

**Task:** Add a "Company Size" field to registration

**Steps:**

1. **Update the type** in `/src/types/index.ts`
   ```tsx
   export interface RegistrationFormData {
     // ... existing fields
     companySize?: "1-10" | "11-50" | "51-200" | "201+";
   }
   ```

2. **Update the form** in `/src/app/pages/Register.tsx`
   ```tsx
   const [formData, setFormData] = useState<RegistrationFormData>({
     // ... existing fields
     companySize: undefined,
   });
   
   // Add the field in the JSX:
   <div>
     <label htmlFor="companySize">Company Size</label>
     <select
       id="companySize"
       name="companySize"
       value={formData.companySize}
       onChange={handleChange}
     >
       <option value="">Select size</option>
       <option value="1-10">1-10 employees</option>
       <option value="11-50">11-50 employees</option>
       <option value="51-200">51-200 employees</option>
       <option value="201+">201+ employees</option>
     </select>
   </div>
   ```

#### Scenario 4: Add a Utility Function

**Task:** Add a function to format company names

**Steps:**

1. **Add to** `/src/utils/helpers.ts`
   ```tsx
   /**
    * Format company name to proper case
    * @param name - Company name to format
    * @returns Formatted company name
    */
   export function formatCompanyName(name: string): string {
     return name
       .split(' ')
       .map(word => 
         word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
       )
       .join(' ');
   }
   ```

2. **Export from** `/src/utils/index.ts`
   - Already exported via `export * from './helpers'`

3. **Use in component**
   ```tsx
   import { formatCompanyName } from '@/utils';
   
   const formatted = formatCompanyName('ACME CORPORATION');
   // Result: "Acme Corporation"
   ```

---

## Ongoing: Maintenance and Development

### Daily Tasks

#### Morning Routine
1. Pull latest changes: `git pull`
2. Install any new dependencies: `pnpm install`
3. Start dev server: `pnpm run dev`
4. Check for any errors

#### Before Committing
1. Test your changes thoroughly
2. Check for TypeScript errors
3. Review your code
4. Write clear commit messages

### Weekly Tasks

1. **Review Analytics** (if set up)
   - Check page views
   - Review user behavior
   - Identify issues

2. **Update Content**
   - Check for outdated information
   - Update event details if changed
   - Refresh sponsor information

3. **Performance Check**
   - Test page load times
   - Check mobile responsiveness
   - Review console for errors

### Monthly Tasks

1. **Dependency Updates**
   ```bash
   pnpm update
   ```

2. **Security Check**
   ```bash
   pnpm audit
   ```

3. **Backup**
   - Ensure code is pushed to repository
   - Backup any local configuration

---

## Common Tasks

### Updating Event Dates

**File:** `/src/constants/index.ts`

```tsx
export const EVENT_CONFIG = {
  START_DATE: "2026-09-22T08:00:00",  // Update here
  END_DATE: "2026-09-26T18:00:00",    // Update here
  DISPLAY_DATES: "Tues 22nd - Sat 26th September 2026",  // Update here
  DISPLAY_TIME: "8:00 AM Daily",      // Update here
  DURATION_DAYS: 5,                   // Update here
}
```

### Updating Contact Information

**File:** `/src/constants/index.ts`

```tsx
export const CONTACT_INFO = {
  EMAILS: {
    PRIMARY: "info@ekointernationaltrade.com",  // Update here
    SECONDARY: "contact@momentumtrading.ng",    // Update here
  },
  PHONES: {
    PRIMARY: "+234 703 913 8773",     // Update here
    SECONDARY: "+234 806 313 0771",   // Update here
    TERTIARY: "+234 803 597 4401",    // Update here
  },
}
```

### Updating Sponsors

**File:** `/src/app/pages/Sponsors.tsx`

Find the `sponsorTiers` array and add/update sponsors:

```tsx
const sponsorTiers = [
  {
    tier: "Platinum",
    color: "var(--eko-green)",
    sponsors: [
      {
        name: "New Sponsor",
        logo: sponsorLogo1,  // Import the logo at the top
        description: "Sponsor description",
        website: "https://sponsor.com"
      },
      // ... more sponsors
    ]
  },
  // ... more tiers
]
```

### Adding FAQs

**File:** `/src/app/pages/FAQ.tsx`

Find the `faqCategories` array and add questions:

```tsx
{
  category: "Category Name",
  questions: [
    {
      question: "Your question here?",
      answer: "Your answer here.",
    },
    // Add more questions
  ],
}
```

---

## Emergency Procedures

### Website is Down

1. **Check the hosting platform**
   - Vercel/Netlify dashboard
   - Look for deployment errors

2. **Check recent deployments**
   - Was there a recent deploy?
   - Roll back if needed

3. **Contact hosting support**
   - Have account details ready

### Critical Bug Found

1. **Assess severity**
   - Does it affect all users?
   - Is data at risk?
   - Can users complete critical actions?

2. **Quick fix**
   - Create a hotfix branch
   - Fix the issue
   - Test thoroughly
   - Deploy immediately

3. **Communicate**
   - Inform stakeholders
   - Update status page (if available)

### Form Submissions Not Working

1. **Check browser console** for errors
2. **Review form handling** code
3. **Test with different data**
4. **Check email configuration** (if integrated)

### Performance Issues

1. **Check Lighthouse score**
2. **Review recent changes**
3. **Check for:**
   - Large unoptimized images
   - Too many API calls
   - Heavy JavaScript
4. **Optimize as needed**

---

## Resources

### Internal Documentation
- [Main Documentation](./README.md)
- [Architecture Guide](./ARCHITECTURE.md)
- [Component Documentation](./COMPONENTS.md)
- [API Guide](./API.md)
- [Deployment Guide](./DEPLOYMENT.md)

### External Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Docs](https://reactrouter.com/)

### Getting Help

1. **Check Documentation First**
   - Most questions are answered in docs

2. **Search Codebase**
   - Use VS Code search (Ctrl/Cmd + Shift + F)
   - Look for similar implementations

3. **Console Logs**
   - Add console.logs to understand flow
   - Use React DevTools

4. **Ask for Help**
   - Email: dev@ekointernationaltrade.com
   - Document your issue clearly

---

## Checklist for New Developers

### Week 1
- [ ] Set up development environment
- [ ] Run the project locally
- [ ] Read all documentation
- [ ] Explore every page
- [ ] Understand the folder structure
- [ ] Review constants and types
- [ ] Study custom hooks
- [ ] Understand utility functions
- [ ] Know where to find things

### Week 2
- [ ] Make a small change successfully
- [ ] Add a new page
- [ ] Modify a form
- [ ] Create a utility function
- [ ] Update content
- [ ] Test on mobile
- [ ] Commit code with proper messages

### Month 1
- [ ] Comfortable navigating codebase
- [ ] Can add new features
- [ ] Can fix bugs independently
- [ ] Understand deployment process
- [ ] Know emergency procedures
- [ ] Can help other developers

---

**Good luck! You've got this! 🚀**

---

**Last Updated**: March 13, 2026
**Version**: 1.0.0
