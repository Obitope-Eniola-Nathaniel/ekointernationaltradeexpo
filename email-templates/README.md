# EKO International Trade Expo - Email Templates

This folder contains professional HTML email templates for user authentication and account management flows. All templates are designed with the EKO brand colors (green: #10b981, blue: #3b82f6) and are mobile-responsive.

---

## 📧 Available Templates

### 1. **welcome-registration.html**
**Purpose:** Welcome email sent after successful user registration

**Variables to replace:**
- `{{NAME}}` - User's full name
- `{{WEBSITE_URL}}` - Link to the main website

**When to send:** Immediately after a user completes registration

---

### 2. **email-verification.html**
**Purpose:** Email verification request with confirmation link

**Variables to replace:**
- `{{NAME}}` - User's full name
- `{{VERIFICATION_URL}}` - Unique verification link (should expire in 24 hours)

**When to send:** After registration or when user requests email verification

**Security notes:**
- Link should expire after 24 hours
- Include verification token in URL
- Invalidate token after successful verification

---

### 3. **forgot-password.html**
**Purpose:** Password reset request with secure reset link

**Variables to replace:**
- `{{NAME}}` - User's full name
- `{{RESET_PASSWORD_URL}}` - Unique password reset link (should expire in 1 hour)

**When to send:** When user requests password reset

**Security notes:**
- Link should expire after 1 hour
- Include secure reset token in URL
- Invalidate token after password change
- Only send to verified email addresses

---

### 4. **login-notification.html**
**Purpose:** Security notification when account is accessed from new device/location

**Variables to replace:**
- `{{NAME}}` - User's full name
- `{{LOGIN_DATE}}` - Date of login (e.g., "March 13, 2026")
- `{{LOGIN_TIME}}` - Time of login (e.g., "3:45 PM WAT")
- `{{DEVICE_INFO}}` - Device type (e.g., "MacBook Pro, macOS 13.2")
- `{{BROWSER_INFO}}` - Browser details (e.g., "Chrome 120.0.6099.130")
- `{{LOCATION}}` - Approximate location (e.g., "Lagos, Nigeria")
- `{{IP_ADDRESS}}` - IP address of login (e.g., "197.210.xxx.xxx")
- `{{CHANGE_PASSWORD_URL}}` - Link to change password page

**When to send:** After each successful login (optional feature)

**Notes:**
- This is an optional security feature
- Can be disabled by users in account settings
- Helps users detect unauthorized access

---

### 5. **password-changed-confirmation.html**
**Purpose:** Confirmation email after password change

**Variables to replace:**
- `{{NAME}}` - User's full name
- `{{CHANGE_DATE}}` - Date of password change
- `{{CHANGE_TIME}}` - Time of password change
- `{{DEVICE_INFO}}` - Device where change occurred
- `{{LOCATION}}` - Approximate location

**When to send:** Immediately after successful password change

**Security notes:**
- Always send this confirmation
- Helps users detect unauthorized password changes
- Include support contact for immediate assistance

---

## 🎨 Design Features

All templates include:
- **Responsive design** - Works on mobile, tablet, and desktop
- **EKO brand colors** - Green (#10b981) to Blue (#3b82f6) gradient
- **Inline CSS** - Compatible with all email clients
- **Professional layout** - Clean, modern, and accessible
- **Security indicators** - Clear warnings and action items
- **Contact information** - EKO Expo support phone numbers

---

## 🔧 Implementation Guide

### Backend Integration Example (Node.js)

```javascript
const fs = require('fs');
const nodemailer = require('nodemailer');

// Function to send welcome email
async function sendWelcomeEmail(userEmail, userName, websiteUrl) {
  // Read template
  let template = fs.readFileSync('./email-templates/welcome-registration.html', 'utf8');
  
  // Replace variables
  template = template.replace('{{NAME}}', userName);
  template = template.replace('{{WEBSITE_URL}}', websiteUrl);
  
  // Send email
  const transporter = nodemailer.createTransport({
    // Your email service configuration
  });
  
  await transporter.sendMail({
    from: '"EKO Expo" <noreply@ekotradexpo.com>',
    to: userEmail,
    subject: 'Welcome to EKO International Trade Expo 2026!',
    html: template
  });
}

// Function to send verification email
async function sendVerificationEmail(userEmail, userName, verificationToken) {
  let template = fs.readFileSync('./email-templates/email-verification.html', 'utf8');
  
  const verificationUrl = `https://yourdomain.com/verify-email?token=${verificationToken}`;
  
  template = template.replace(/{{NAME}}/g, userName);
  template = template.replace(/{{VERIFICATION_URL}}/g, verificationUrl);
  
  // Send email...
}

// Function to send password reset email
async function sendPasswordResetEmail(userEmail, userName, resetToken) {
  let template = fs.readFileSync('./email-templates/forgot-password.html', 'utf8');
  
  const resetUrl = `https://yourdomain.com/reset-password?token=${resetToken}`;
  
  template = template.replace(/{{NAME}}/g, userName);
  template = template.replace(/{{RESET_PASSWORD_URL}}/g, resetUrl);
  
  // Send email...
}
```

---

## 📱 Testing Email Templates

### Recommended Testing Tools:
1. **Litmus** - Test across 90+ email clients
2. **Email on Acid** - Comprehensive email testing
3. **Mail Tester** - Check spam score
4. **Real devices** - Test on actual Gmail, Outlook, etc.

### Key Email Clients to Test:
- Gmail (Desktop & Mobile)
- Outlook (Desktop & Web)
- Apple Mail (iOS & macOS)
- Yahoo Mail
- Thunderbird

---

## 🔒 Security Best Practices

1. **Token Expiration:**
   - Email verification: 24 hours
   - Password reset: 1 hour
   - One-time use only

2. **Rate Limiting:**
   - Limit verification requests to 3 per hour
   - Limit password reset requests to 3 per hour

3. **Link Security:**
   - Use cryptographically secure tokens
   - Include user ID in token validation
   - Check token hasn't been used before

4. **Email Validation:**
   - Verify email format before sending
   - Implement bounce handling
   - Track email delivery status

---

## 📞 Contact Information in Templates

All templates include:
- **Phone:** +234 703 913 8773 | +234 806 313 0771 | +234 803 597 4401
- **Organizer:** Momentum Trading Enterprises
- **Event:** EKO International Trade Expo 2026
- **Dates:** Tuesday 22nd - Saturday 26th September 2026
- **Time:** 8:00 AM Daily
- **Venue:** Police College, Ikeja, Lagos State

---

## 🎯 Variable Replacement Pattern

Use a consistent pattern for replacing variables in your backend:

```javascript
function replaceVariables(template, variables) {
  let result = template;
  
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value);
  }
  
  return result;
}

// Usage:
const html = replaceVariables(template, {
  NAME: 'John Doe',
  VERIFICATION_URL: 'https://...',
  // ... other variables
});
```

---

## 📄 License & Usage

These email templates are created specifically for the **EKO International Trade Expo** and should maintain brand consistency. When modifying:

- Keep the EKO color scheme (green-blue gradient)
- Maintain contact information accuracy
- Preserve security warnings and guidelines
- Test thoroughly before deployment

---

## 🆘 Support

For questions about these email templates or implementation assistance:
- **Phone:** +234 703 913 8773
- **Phone:** +234 806 313 0771
- **Phone:** +234 803 597 4401

---

**Last Updated:** March 13, 2026  
**Version:** 1.0.0