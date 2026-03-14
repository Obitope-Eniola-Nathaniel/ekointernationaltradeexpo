import { Building2, Target, Users, Award, TrendingUp, Globe, Handshake, Check, Factory, Briefcase, Globe2, Landmark, DollarSign, UserCheck, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import eventPoster from "@/assets/images/b807c71dc03c057cb72e1782296c7f6f8588a576.png";
import logoImage from "@/assets/images/686dfd60960f5ec6fb7b20566eaeb8cd432e3f97.png";
import logo from "@/assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import heroBackground from "@/assets/images/07acd66eead001dce9d6ffedbf0456f7be69a211.png";
import henryImage from "@/assets/images/bcee3f0d9fc7a6049ccf917f73b49ec8792df57a.png";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Counter Component for animated counting
function AnimatedCounter({ 
  end, 
  suffix = "", 
  duration = 2000 
}: { 
  end: number; 
  suffix?: string; 
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const endTime = startTime + duration;

          const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);
            
            setCount(currentCount);

            if (now < endTime) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl mb-2 text-gray-900">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const objectives = [
    "Promote international trade and investment opportunities in Nigeria",
    "Provide a strategic platform for SMEs to access markets and partnerships",
    "Facilitate business networking and collaboration between local and international companies",
    "Encourage innovation and product development across industries",
    "Strengthen economic and commercial ties between Nigeria and global markets",
    "Showcase the entrepreneurial spirit and cultural richness of Lagos",
  ];

  const experiences = [
    "International and local exhibitions",
    "Business-to-business (B2B) networking sessions",
    "Investment and trade promotion opportunities",
    "Product launches and brand showcases",
    "Government and diplomatic engagement platforms",
    "SME development and market access opportunities",
    "Cultural showcases reflecting the spirit of Eko",
  ];

  const participants = [
    {
      title: "Manufacturers and exporters",
      icon: Factory,
    },
    {
      title: "Small and Medium Enterprises (SMEs)",
      icon: Briefcase,
    },
    {
      title: "International companies seeking African market entry",
      icon: Globe2,
    },
    {
      title: "Government agencies and trade promotion organisations",
      icon: Landmark,
    },
    {
      title: "Investors and venture capital firms",
      icon: DollarSign,
    },
    {
      title: "Diplomatic missions and international trade bodies",
      icon: Globe,
    },
    {
      title: "Service providers and industry professionals",
      icon: UserCheck,
    },
  ];

  const stats = [
    { number: "10,000+", label: "Expected Visitors", icon: Users, end: 10000, suffix: "+" },
    { number: "200+", label: "Exhibitors", icon: Building2, end: 200, suffix: "+" },
    { number: "12+", label: "Countries", icon: Globe, end: 12, suffix: "+" },
    { number: "5 Days", label: "Of Networking", icon: TrendingUp, end: 5, suffix: " Days" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Consistent with Home */}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
                About EKO Expo
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl">
                A premier multi-sectoral trade exhibition promoting commerce, innovation, and international partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--eko-green)] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Register Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
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
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-10 w-10 mx-auto mb-4 text-[var(--eko-green)]" />
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  <p className="text-gray-500 text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content - Clean Layout */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl" style={{ color: "var(--eko-green)" }}>
                A premier trade exhibition
              </h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  The Eko International Trade Expo is a premier multi-sectoral trade exhibition
                  designed to promote commerce, innovation, and international partnerships within
                  Nigeria and across global markets.
                </p>
                <p>
                  Inspired by Lagos — fondly known as "Eko" — the Expo serves as a dynamic platform where businesses, investors,
                  entrepreneurs, and institutions converge to explore new opportunities.
                </p>
                <p>
                  A symbol of enterprise, resilience, and cultural pride, bringing
                  together industries, ideas, and people from different parts of the world.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <img
                src={logoImage}
                alt="EKO International Trade Expo Logo"
                className="absolute inset-0 w-full h-full object-contain p-8 bg-white rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission with Full Width Background */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1564069970419-0bc8e7b487da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwcGFydG5lcnNoaXAlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzczMjI3NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)" }}
        ></div>
        <div className="absolute inset-0 bg-[var(--eko-green)]/90"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <Handshake className="h-16 w-16 mx-auto mb-8 text-white" />
          <h2 className="text-4xl md:text-5xl mb-8 text-white">Our Mission</h2>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
            To showcase the strength of Nigerian enterprise while connecting local businesses with international markets,
            investors, and strategic partners.
          </p>
        </div>
      </section>

      {/* What to Expect - Minimalist Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: "var(--eko-green)" }}>What to Expect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A vibrant business marketplace where innovation meets opportunity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-lg hover:border-[var(--eko-green)] transition-colors group"
              >
                <div className="w-12 h-1 bg-[var(--eko-green)] mb-6 group-hover:w-16 transition-all"></div>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives - Side by Side with Image */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] lg:h-[700px] order-2 lg:order-1">
              <img
                src={logoImage}
                alt="EKO International Trade Expo Logo"
                className="absolute inset-0 w-full h-full object-contain p-8 bg-white rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl mb-12" style={{ color: "var(--eko-green)" }}>Our Objectives</h2>
              <div className="space-y-6">
                {objectives.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--eko-green)] flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Participants - Clean Background */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1743138058185-446e2ac989d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMGZhaXIlMjBleGhpYml0aW9uJTIwbWFya2V0cGxhY2UlMjBib290aHMlMjBjcm93ZGVkfGVufDF8fHx8MTc3MzM4NjE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)" }}
        ></div>
        <div className="absolute inset-0 bg-[var(--eko-green)]/85"></div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Who Attends</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join industry leaders, innovators, and decision-makers shaping Africa's commercial future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {participants.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white leading-relaxed">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organiser - Clean Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: "var(--eko-green)" }}>Organiser</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              The Eko International Trade Expo is organised by{" "}
              <span className="text-[var(--eko-green)] font-medium">
                Momentum Trading Enterprises
              </span>
              , a professional trade promotion and exhibition management company committed to
              creating world-class platforms that support business growth and international
              collaboration.
            </p>
            <p>
              With strong industry experience and deep institutional knowledge in trade fair
              management, Momentum Trading Enterprises delivers professionally managed exhibitions
              that connect businesses, promote investment, and drive economic development.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership - Minimalist */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "var(--eko-green)" }}>Leadership</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl border-4 border-[var(--eko-green)]">
                <ImageWithFallback
                  src={henryImage}
                  alt="Henry Anwansedo - Founder and Managing Director"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Green overlay */}
                <div className="absolute inset-0 bg-[var(--eko-green)]/10"></div>
                {/* Overlay with name badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl md:text-2xl text-white mb-1">
                    Henry Anwansedo
                  </h3>
                  <p className="text-white/90">Founder and Managing Director</p>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="order-1 lg:order-2">
              {/* Mobile Version - Truncated with Read More */}
              <div className="lg:hidden space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  Henry Anwansedo has built a diverse professional career spanning finance, trade promotion, and exhibition development. He began his professional journey with Agusto & Co., one of Nigeria's leading rating agencies, where he gained valuable experience in financial analysis and corporate advisory. He subsequently worked with Sterling Bank, further strengthening his expertise in the financial services sector.
                </p>
                {isExpanded && (
                  <>
                    <p>
                      He later joined the Lagos Chamber of Commerce and Industry, where he played a significant role in trade promotion and exhibition development.
                    </p>
                    <p>
                      Following this, he worked with the Lagos International Trade Fair Complex as a consultant, where he supported efforts to develop and mobilize stakeholders for the Nigeria International Trade Fair.
                    </p>
                    <p>
                      A graduate of Accounting from Lead City University, Ibadan, Oyo State, Nigeria and an alumnus of  2019 JICA Training Programme on Financial Access for Small and Medium Enterprises (SMEs) Promotion in Japan, which further strengthened his capacity in SME development and trade facilitation.
                    </p>
                    <p>
                      Driven by a strong passion for economic development and enterprise growth, Henry leads the Eko International Trade Expo with a vision to build a globally recognised trade platform that promotes Nigerian businesses while fostering international partnerships.
                    </p>
                  </>
                )}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[var(--eko-green)] hover:text-[var(--eko-blue)] transition-colors font-medium inline-flex items-center gap-1"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                  <svg 
                    className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Desktop Version - Full Bio */}
              <div className="hidden lg:block space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  Henry Anwansedo has built a diverse professional career spanning finance, trade promotion, and exhibition development.
                </p>
                <p>
                  He began his professional journey with Agusto & Co., one of Nigeria's leading rating agencies, where he gained valuable experience in financial analysis and corporate advisory. He subsequently worked with Sterling Bank, further strengthening his expertise in the financial services sector.
                </p>
                <p>
                  He later joined the Lagos Chamber of Commerce and Industry, where he played a significant role in trade promotion and exhibition development.
                </p>
                <p>
                  Following this, he worked with the Lagos International Trade Fair Complex as a consultant, where he supported efforts to develop and mobilize stakeholders for the Nigeria International Trade Fair.
                </p>
                <p>
                  A graduate of Accounting from Lead City University, Ibadan, Oyo State, Nigeria and an alumnus of  2019 JICA Training Programme on Financial Access for Small and Medium Enterprises (SMEs) Promotion in Japan, which further strengthened his capacity in SME development and trade facilitation.
                </p>
                <p>
                  Driven by a strong passion for economic development and enterprise growth, Henry leads the Eko International Trade Expo with a vision to build a globally recognised trade platform that promotes Nigerian businesses while fostering international partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Poster - Clean Display */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "var(--eko-green)" }}>Event Poster</h2>
            <p className="text-gray-600 text-lg">
              Complete event information at a glance
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={eventPoster}
              alt="EKO International Trade Expo 2026 - September 22-26, Police College Ikeja"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}