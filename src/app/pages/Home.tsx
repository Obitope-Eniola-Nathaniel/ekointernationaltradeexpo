/**
 * Home Page Component
 * EKO International Trade Expo 2026
 */
import { Link } from "react-router";
import {
  Calendar,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
  Clock,
  MapPin,
  Factory,
  Sprout,
  Cpu,
  Sparkles,
  Shirt,
  Briefcase,
  Palette,
  Heart,
  Building2,
  Handshake,
  Rocket,
  PartyPopper,
  Store,
  UserCheck,
  CheckCircle2,
  Star,
  Phone,
  Download,
} from "lucide-react";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../config/api";
import { motion } from "motion/react";
import logo from "../../assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import eventPoster from "../../assets/images/b807c71dc03c057cb72e1782296c7f6f8588a576.png";
import heroBackground from "../../assets/images/07acd66eead001dce9d6ffedbf0456f7be69a211.png";
import expoBackground from "../../assets/images/5422825574e49bbbe2bf755b6a86b23d18d0cf1e.png";
import henryImage from "../../assets/images/bcee3f0d9fc7a6049ccf917f73b49ec8792df57a.png";
import reginaImage from "../../assets/images/ReginaBamaiyi.jpeg";
import fatokiImage from "../../assets/images/Fatoki.jpeg";
import marketplaceImage from "../../assets/images/46f98dc36d495776547edc6a4a75291b188687d3.png";
import innovationImage from "../../assets/images/1515d8d3bed41fb6e1826ad5af6f2a1962c49f3c.png";
import connectionsImage from "../../assets/images/c73d872ff89058d703832a96a0329cd39c4df152.png";
import smeImage from "../../assets/images/c292bf6e3ace4d46137d89a0c473a4685e002f5f.png";
import prexImage from "../../assets/images/prex.jpeg";
import venueOne from "../../assets/images/new-venue.png";
import venueTwo from "../../assets/images/4613.jpg";
import eiteProspectusPdf from "../../assets/images/Eko International Trade Expo 2026 ProspectusFULL.pdf";

export function Home() {
  // Countdown Timer State
  const expoDate = new Date("2026-09-22T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = expoDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [expoDate]);

  // Lightweight page view tracking for basic visitor analytics.
  useEffect(() => {
    const track = async () => {
      try {
        await fetch(`${API_BASE_URL}/api/analytics/track`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            route: "/",
            referrer: document.referrer || undefined,
          }),
        });
      } catch {
        // Tracking failures should never impact the user experience.
      }
    };

    track();
  }, []);

  const highlights = [
    {
      icon: Globe,
      title: "International Reach",
      description:
        "Connect with businesses and investors from across the globe",
      color: "var(--eko-blue)",
      bgImage:
        "https://images.unsplash.com/photo-1760001551764-14eddf965019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMGV4cG8lMjBleGhpYml0aW9uJTIwaGFsbHxlbnwxfHx8fDE3NzMzMjQ0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Users,
      title: "Networking",
      description: "B2B sessions with industry leaders and strategic partners",
      color: "var(--eko-orange)",
      bgImage:
        "https://images.unsplash.com/photo-1550305080-4e029753abcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBuZXR3b3JraW5nJTIwYWZyaWNhfGVufDF8fHx8MTc3MzMyNDQ2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Showcase products, launch brands, and access new markets",
      color: "var(--eko-cyan)",
      bgImage:
        "https://images.unsplash.com/photo-1573166953836-06864dc70a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZW50cmVwcmVuZXVyJTIwYnVzaW5lc3MlMjBzdWNjZXNzfGVufDF8fHx8MTc3MzMyNDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Calendar,
      title: "Premier Event",
      description: "Multi-sectoral trade exhibition celebrating Eko's spirit",
      color: "var(--eko-yellow)",
      bgImage:
        "https://images.unsplash.com/photo-1762028892701-692dc360db08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjB0cmFkZSUyMHNob3djYXNlfGVufDF8fHx8MTc3MzM0NjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const sectors = [
    { name: "Manufacturing", icon: Factory },
    { name: "Agriculture", icon: Sprout },
    { name: "Technology", icon: Cpu },
    { name: "Beauty & Cosmetics", icon: Sparkles },
    { name: "Fashion", icon: Shirt },
    { name: "Services", icon: Briefcase },
    { name: "Creative Industries", icon: Palette },
    { name: "Healthcare & Pharmaceuticals", icon: Heart },
  ];

  const timeUnits = [
    { label: "Days", value: timeLeft.days, color: "var(--eko-green)" },
    { label: "Hours", value: timeLeft.hours, color: "var(--eko-orange)" },
    { label: "Minutes", value: timeLeft.minutes, color: "var(--eko-blue)" },
    { label: "Seconds", value: timeLeft.seconds, color: "var(--eko-cyan)" },
  ];

  const sponsorCards = [
    { tier: "Platinum", label: "Sponsor Logo", color: "var(--eko-green)" },
    { tier: "Platinum", label: "Sponsor Logo", color: "var(--eko-green)" },
    { tier: "Gold", label: "Sponsor Logo", color: "var(--eko-orange)" },
    { tier: "Gold", label: "Sponsor Logo", color: "var(--eko-orange)" },
    { tier: "Silver", label: "Partner Logo", color: "var(--eko-blue)" },
    { tier: "Silver", label: "Partner Logo", color: "var(--eko-blue)" },
    { tier: "Bronze", label: "Partner Logo", color: "var(--eko-cyan)" },
    { tier: "Bronze", label: "Partner Logo", color: "var(--eko-cyan)" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--eko-green)] to-[var(--eko-blue)] text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--eko-green)]/95 to-[var(--eko-blue)]/90"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              {/* Animated Welcome Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white pb-2">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                  >
                    Welcome to{" "}
                  </motion.span>
                  <motion.span
                    className="inline-block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent pb-1"
                    style={{
                      backgroundSize: "200% auto",
                      animation: "shimmer 3s linear infinite",
                      paddingBottom: "0.25rem",
                      lineHeight: "1.2",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    EKO International Trade Expo 2026
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A premier platform connecting businesses, investors, and
                entrepreneurs across Nigeria and global markets.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--eko-green)] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Register Now
                  <ArrowRight
                    className="h-5 w-5"
                    style={{ animation: "blink-right 1s ease-in-out infinite" }}
                  />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <motion.img
                src={logo}
                alt="EKO Logo"
                className="w-64 md:w-80 lg:w-96"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            {timeUnits.map((unit, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl p-6 md:p-8 text-center text-white"
                style={{ backgroundColor: unit.color }}
              >
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl lg:text-6xl mb-2 text-white">
                    {unit.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base uppercase tracking-wide text-white/90">
                    {unit.label}
                  </div>
                </div>
                {/* Decorative circle */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10"
                  style={{ backgroundColor: "white" }}
                ></div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[var(--eko-green)] to-[var(--eko-blue)] rounded-xl p-6 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-white" />
                  <h3 className="text-lg text-white">Event Dates</h3>
                </div>
                <p className="text-xl text-white">
                  Tues 22nd - Sat 26th Sept 2026
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 text-white/95 text-sm">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>
                    Eridan-space (Testing Ground) Obafemi Awolowo Way, Alausa,
                    Ikeja, Lagos State
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[var(--eko-orange)] to-[var(--eko-yellow)] rounded-xl p-6 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-white" />
                  <h3 className="text-lg text-white">Daily Hours</h3>
                </div>
                <p className="text-xl text-white">8:00 AM Daily</p>
              </div>
            </div>
          </div>

          {/* Event Venue Images */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3
              className="text-center text-xl font-medium mb-6"
              style={{ color: "var(--eko-green)" }}
            >
              Event Venue - Eridan-space (Testing Ground), Alausa, Ikeja
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src={venueOne}
                alt="EKO Trade Expo venue - Eridan-space (Testing Ground), Alausa, Ikeja"
                className="w-full rounded-xl shadow-lg object-cover"
                loading="lazy"
              />
              <img
                src={venueTwo}
                alt="EKO Trade Expo venue - Eridan-space (Testing Ground), Alausa, Ikeja"
                className="w-full rounded-xl shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--eko-green)" }}
            >
              Why Attend EKO Trade Expo?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience a dynamic marketplace where innovation meets
              opportunity
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow overflow-hidden group min-h-[200px] flex flex-col justify-end"
              >
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--eko-green)]/90 via-[var(--eko-green)]/60 to-[var(--eko-green)]/30"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Poster Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <a
              href={eiteProspectusPdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open EITE prospectus in a new tab"
              className="block bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 md:p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <img
                src={eventPoster}
                alt="EKO International Trade Expo 2026 - September 22-26, Eridan-space (Testing Ground), Alausa, Ikeja"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </a>
            <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 bg-[var(--eko-green)] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Book Your Space Now - Early Bird Discount!
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={eiteProspectusPdf}
                download="Eko International Trade Expo 2026 ProspectusFULL.pdf"
                className="inline-flex items-center justify-center gap-2 bg-[var(--eko-orange)] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Download EITE Prospectus
                <Download className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE EXPO EXPERIENCE Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${expoBackground})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[var(--eko-green)]/10 rounded-full mb-4">
              <span
                className="text-sm uppercase tracking-wider"
                style={{ color: "var(--eko-green)" }}
              >
                Tues 22nd - Sat 26th September 2026 • Lagos, Nigeria
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{ color: "var(--eko-green)" }}
            >
              Where Business Meets{" "}
              <span style={{ color: "var(--eko-orange)" }}>Opportunity</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              More than a trade expo, it's where Lagos' entrepreneurial spirit
              comes alive. Five days of connections, innovation, and growth that
              will transform your business journey.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg">
              <div
                className="text-4xl mb-2"
                style={{ color: "var(--eko-green)" }}
              >
                200+
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Exhibitors
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg">
              <div
                className="text-4xl mb-2"
                style={{ color: "var(--eko-orange)" }}
              >
                10,000+
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Visitors
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg">
              <div
                className="text-4xl mb-2"
                style={{ color: "var(--eko-blue)" }}
              >
                All
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Sectors
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm shadow-lg">
              <div
                className="text-4xl mb-2"
                style={{ color: "var(--eko-cyan)" }}
              >
                12+
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Countries
              </div>
            </div>
          </div>

          {/* Story Grid */}
          <div className="space-y-20">
            {/* Row 1: The Marketplace */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-3 py-1 bg-[var(--eko-green)]/10 rounded-full mb-4">
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "var(--eko-green)" }}
                  >
                    The Marketplace
                  </span>
                </div>
                <h3
                  className="text-3xl md:text-4xl mb-4"
                  style={{ color: "var(--eko-green)" }}
                >
                  Your Products. <br />
                  Their Next Big Discovery.
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Picture this: Your booth buzzing with energy. International
                  buyers examining your products. Local retailers discovering
                  new partnerships. Investors taking notes. This is where
                  Nigerian businesses step onto the global stage, and where
                  international brands discover the pulse of West Africa's
                  largest market.
                </p>
                <div className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 mt-1"
                    style={{ color: "var(--eko-green)" }}
                  />
                  <span>200+ exhibition booths across all dynamic sectors</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600 mt-2">
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 mt-1"
                    style={{ color: "var(--eko-green)" }}
                  />
                  <span>
                    Direct access to procurement managers and decision-makers
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl group h-[400px] md:h-[500px]">
                <img
                  src={marketplaceImage}
                  alt="African marketplace vendor with colorful fabrics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--eko-green)]/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Row 2: The Connections */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[400px] md:h-[500px]">
                <img
                  src={connectionsImage}
                  alt="Business handshake partnership"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--eko-orange)]/60 via-transparent to-transparent"></div>
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-[var(--eko-orange)]/10 rounded-full mb-4">
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "var(--eko-orange)" }}
                  >
                    The Connections
                  </span>
                </div>
                <h3
                  className="text-3xl md:text-4xl mb-4"
                  style={{ color: "var(--eko-orange)" }}
                >
                  Relationships That <br />
                  Outlast The Event.
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The deals signed here echo for years. In our structured B2B
                  lounges, manufacturers meet distributors. Tech innovators
                  pitch to investors. Government officials engage with private
                  sector leaders. These aren't chance encounters, they're
                  curated opportunities designed to create partnerships that
                  matter.
                </p>
                <div className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 mt-1"
                    style={{ color: "var(--eko-orange)" }}
                  />
                  <span>Pre-scheduled B2B matchmaking sessions</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600 mt-2">
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 mt-1"
                    style={{ color: "var(--eko-orange)" }}
                  />
                  <span>
                    Exclusive networking lounges and roundtable discussions
                  </span>
                </div>
              </div>
            </div>

            {/* Row 3: The Innovation */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-3 py-1 bg-[var(--eko-blue)]/10 rounded-full mb-4">
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "var(--eko-blue)" }}
                  >
                    The Innovation
                  </span>
                </div>
                <h3
                  className="text-3xl md:text-4xl mb-4"
                  style={{ color: "var(--eko-blue)" }}
                >
                  Launch Big. <br />
                  Make Headlines.
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  This is your moment. The spotlight. The stage. Launch your new
                  product line to thousands. Unveil your brand transformation.
                  Showcase technological breakthroughs. With media coverage,
                  industry analysts, and eager early adopters in attendance,
                  your launch doesn't just happen, it resonates across markets.
                </p>
                <div className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 mt-1"
                    style={{ color: "var(--eko-blue)" }}
                  />
                  <span>Dedicated product launch pavilions and demo zones</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600 mt-2">
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 mt-1"
                    style={{ color: "var(--eko-blue)" }}
                  />
                  <span>
                    Press coverage and media partnership opportunities
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl group h-[400px] md:h-[500px]">
                <img
                  src={innovationImage}
                  alt="Product launch and innovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--eko-blue)]/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Three Column Section */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {/* SME Growth */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <div className="relative h-80">
                  <img
                    src={smeImage}
                    alt="SME business success"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--eko-green)]/90 via-[var(--eko-green)]/60 to-[var(--eko-green)]/30"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded mb-2">
                      <span className="text-xs uppercase tracking-wider">
                        For SMEs
                      </span>
                    </div>
                    <h4 className="text-xl mb-2 text-white">
                      Scale Your Dreams
                    </h4>
                    <p className="text-white/90 text-sm">
                      Access grants, mentorship programs, and market entry
                      support designed specifically for small businesses ready
                      to grow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cultural Experience */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <div className="relative h-80">
                  <img
                    src="https://images.unsplash.com/photo-1764145162259-04eaf2b3d86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyYWwlMjBmZXN0aXZhbCUyMGNlbGVicmF0aW9uJTIwZGFuY2Vyc3xlbnwxfHx8fDE3NzMzNDc3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Cultural celebration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--eko-green)]/90 via-[var(--eko-green)]/60 to-[var(--eko-green)]/30"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded mb-2">
                      <span className="text-xs uppercase tracking-wider">
                        The Spirit
                      </span>
                    </div>
                    <h4 className="text-xl mb-2 text-white">
                      Feel The Energy of Eko
                    </h4>
                    <p className="text-white/90 text-sm">
                      Business with soul. Experience art installations, fashion
                      shows, and cultural performances that celebrate Lagos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Government & Policy */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <div className="relative h-80">
                  <img
                    src="https://images.unsplash.com/photo-1631701731910-2c6c6c1545f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzczMzQ3NzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Government engagement"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--eko-green)]/90 via-[var(--eko-green)]/60 to-[var(--eko-green)]/30"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded mb-2">
                      <span className="text-xs uppercase tracking-wider">
                        Policy & Dialogue
                      </span>
                    </div>
                    <h4 className="text-xl mb-2 text-white">
                      Shape The Future
                    </h4>
                    <p className="text-white/90 text-sm">
                      Join policy roundtables with government officials, trade
                      delegations, and industry regulators.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-20 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8">
              "This isn't just about transactions. It's about{" "}
              <span
                style={{ color: "var(--eko-green)" }}
                className="font-semibold"
              >
                transformation
              </span>
              . Your business. Your network. Your future."
            </p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--eko-green)] to-[var(--eko-blue)] text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105"
            >
              Secure Your Spot Now
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors & Partners Scrolling Logos */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <div className="text-center">
            <h3
              className="text-2xl md:text-3xl mb-2"
              style={{ color: "var(--eko-green)" }}
            >
              Our Sponsors & Partners
            </h3>
            <p className="text-gray-600">
              Trusted by industry leaders driving business growth and innovation
            </p>
          </div>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Track */}
          <div className="flex gap-8 animate-scroll">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 flex-shrink-0">
                {sponsorCards.map((sponsor, sponsorIndex) => (
                  <div
                    key={`${setIndex}-${sponsorIndex}`}
                    className="w-40 h-24 bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={prexImage}
                      alt={`${sponsor.tier} sponsor`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* 
                      <div className="text-center text-gray-400">
                        <div className="text-xs mb-2" style={{ color: sponsor.color }}>
                          {sponsor.tier}
                        </div>
                        <div className="text-xs mt-2">{sponsor.label}</div>
                      </div>
                    */}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center mt-8">
          <Link
            to="/sponsors"
            className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all"
            style={{ color: "var(--eko-green)" }}
          >
            Become a Sponsor
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="pt-16 md:pt-20 pb-8 md:pb-10 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--eko-green)" }}
            >
              Featured Sectors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore diverse industries and discover new business opportunities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sectors.map((sector, index) => {
              const colors = [
                "var(--eko-green)",
                "var(--eko-orange)",
                "var(--eko-blue)",
                "var(--eko-cyan)",
                "var(--eko-yellow)",
                "var(--eko-red)",
                "var(--eko-light-green)",
                "var(--eko-green)",
              ];
              const SectorIcon = sector.icon;
              return (
                <div
                  key={index}
                  className="relative p-6 rounded-xl text-center text-white group hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{ backgroundColor: colors[index] }}
                >
                  {/* Decorative circle */}
                  <div
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-300"
                    style={{ backgroundColor: "white" }}
                  ></div>

                  {/* Icon */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      <SectorIcon
                        className="h-8 w-8 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-white text-sm md:text-base">
                      {sector.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ color: "var(--eko-green)" }}
            >
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to making EKO Trade Expo a
              success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              to="/team"
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={henryImage}
                  alt="Henry Anwansedo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Henry Anwansedo</h3>
                <p className="text-sm" style={{ color: "var(--eko-green)" }}>
                  Founder and Managing Director
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  Strategic leadership and overall direction
                </p>
              </div>
            </Link>

            <Link
              to="/team"
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={fatokiImage}
                  alt="Fatoki Abiodun"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Fatoki Abiodun</h3>
                <p className="text-sm" style={{ color: "var(--eko-green)" }}>
                  Operations & Logistics Manager
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  Day-to-day operational planning and execution
                </p>
              </div>
            </Link>

            <Link
              to="/team"
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={reginaImage}
                  alt="Dr. Regina Bamayi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Regina Bamayi</h3>
                <p className="text-sm" style={{ color: "var(--eko-green)" }}>
                  Policy & Government Relations Lead
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  Government liaison and strategic advisory
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--eko-green)]/95 to-[var(--eko-blue)]/90"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-white">
            Ready to Join Us?
          </h2>
          <p className="text-lg mb-8 text-white/95 max-w-2xl mx-auto">
            Don't miss this opportunity to connect, grow, and expand your
            business horizons.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--eko-green)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            I Will Be Attending
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
