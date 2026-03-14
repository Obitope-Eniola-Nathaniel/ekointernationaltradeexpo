import { Suspense } from "react";
import { Outlet, Link, useLocation } from "react-router";
import {
  Menu,
  X,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/images/5c8986ece2f57565fb099eb11a2b86e50d4009c3.png";
import footerLogo from "../../assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import { ScrollToTop } from "./ScrollToTop";
import { Helmet } from "react-helmet-async";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>EKO International Trade Expo 2026 - Lagos, Nigeria</title>
        <meta
          name="description"
          content="Join West Africa's premier trade exhibition Sept 22-26, 2026 at Police College, Ikeja Lagos. Connect with 500+ exhibitors, 10,000+ visitors, and explore 9 sectors. Register now for exclusive networking, B2B matchmaking, and business growth opportunities."
        />
        <meta
          name="keywords"
          content="trade expo, Lagos, Nigeria, business, investment, EKO, international trade, exhibition, B2B, networking, manufacturers, distributors, SME support, September 2026"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="EKO International Trade Expo 2026 - Lagos, Nigeria"
        />
        <meta
          property="og:description"
          content="West Africa's premier trade exhibition connecting businesses, investors, and entrepreneurs. Sept 22-26, 2026 at Police College, Ikeja Lagos."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ekointernationaltradeexpo.com"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="EKO International Trade Expo 2026 - Lagos, Nigeria"
        />
        <meta
          name="twitter:description"
          content="West Africa's premier trade exhibition. Sept 22-26, 2026. 500+ exhibitors, 10,000+ visitors, 9 sectors."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "EKO International Trade Expo 2026",
            "description": "West Africa's premier multi-sectoral trade exhibition. Connect with 500+ exhibitors, 10,000+ visitors. B2B networking, 9 sectors.",
            "startDate": "2026-09-22T08:00:00+01:00",
            "endDate": "2026-09-26T18:00:00+01:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Police College, Ikeja",
              "address": { "@type": "PostalAddress", "addressLocality": "Lagos", "addressCountry": "NG" }
            },
            "organizer": { "@type": "Organization", "name": "Momentum Trading Enterprises" },
            "image": "https://ekointernationaltradeexpo.com/favicon.png"
          })}
        </script>
      </Helmet>
      <ScrollToTop />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="EKO International Trade Expo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:gap-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-[var(--eko-green)] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm px-3 py-2 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-[var(--eko-green)] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center" aria-hidden="true"><span className="text-gray-400">Loading…</span></div>}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-4">
                <img src={footerLogo} alt="EKO International Trade Expo" className="h-16 w-auto" />
              </Link>
              <p className="text-sm text-white/90 leading-relaxed mb-6">
                A premier multi-sectoral trade exhibition promoting commerce,
                innovation, and international partnerships.
              </p>
              {/* Social Media */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/112296099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61586955837001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://x.com/Ekotradeexpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/ekointernationaltradeexpo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white mb-4 text-lg">Quick Links</h3>
              <div className="flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/downloads"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Downloads
                </Link>
                <Link
                  to="/faq"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  FAQ
                </Link>
                <Link
                  to="/schedule"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Schedule
                </Link>
                <Link
                  to="/gallery"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Gallery
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white mb-4 text-lg">Contact Us</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@ekointernationaltradeexpo.com"
                  className="text-sm text-white/80 hover:text-white transition-colors inline-flex items-start gap-3"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>info@ekointernationaltradeexpo.com</span>
                </a>
                <div className="text-sm text-white/80 inline-flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Organiser & CTA */}
            <div>
              <h3 className="text-white mb-4 text-lg">Organiser</h3>
              <p className="text-sm text-white/90 mb-6 leading-relaxed">
                <span className="font-medium text-white">
                  Momentum Trading Enterprises
                </span>
                <br />
                Professional trade promotion and exhibition management company.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-900 px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 text-sm"
              >
                Register Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/70">
                © {new Date().getFullYear()} EKO International Trade Expo. All
                rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-white/70">
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
