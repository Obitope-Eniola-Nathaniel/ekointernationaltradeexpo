import { Building2, Award, Star, Crown } from "lucide-react";
import { motion } from "motion/react";
import logo from "../../assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import heroBackground from "../../assets/images/07acd66eead001dce9d6ffedbf0456f7be69a211.png";
import { Link } from "react-router";

export function Sponsors() {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      icon: Crown,
      color: "var(--eko-green)",
      sponsors: ["Your Company Here", "Become a Platinum Sponsor"],
    },
    {
      tier: "Gold Sponsors",
      icon: Award,
      color: "var(--eko-orange)",
      sponsors: ["Your Company Here", "Become a Gold Sponsor"],
    },
    {
      tier: "Silver Sponsors",
      icon: Star,
      color: "var(--eko-blue)",
      sponsors: ["Your Company Here", "Become a Silver Sponsor"],
    },
    {
      tier: "Bronze Sponsors",
      icon: Building2,
      color: "var(--eko-cyan)",
      sponsors: ["Your Company Here", "Become a Bronze Sponsor"],
    },
  ];

  const benefits = [
    {
      title: "Brand Visibility",
      description:
        "Prominent logo placement across all expo materials and digital platforms",
      color: "var(--eko-green)",
    },
    {
      title: "Networking Access",
      description:
        "Exclusive access to VIP networking events and business matchmaking sessions",
      color: "var(--eko-orange)",
    },
    {
      title: "Exhibition Space",
      description:
        "Premium booth locations and additional exhibition space for product showcases",
      color: "var(--eko-blue)",
    },
    {
      title: "Media Coverage",
      description:
        "Featured interviews, press releases, and social media highlights",
      color: "var(--eko-cyan)",
    },
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
                Our Sponsors
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl">
                Partnering with industry leaders to create exceptional
                experiences and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--eko-green)] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Become a Sponsor
                </Link>
                <Link
                  to="/downloads"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  View Packages
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
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Sponsorship Tiers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us as a sponsor and connect with thousands of business
              professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sponsorTiers.map((tier, index) => (
              <div
                key={index}
                className="border-2 rounded-xl p-8 hover:shadow-xl transition-shadow"
                style={{ borderColor: tier.color }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: tier.color }}
                  >
                    <tier.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl">{tier.tier}</h3>
                </div>
                <div className="space-y-3">
                  {tier.sponsors.map((sponsor, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200"
                    >
                      <p className="text-gray-600">{sponsor}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Benefits */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Sponsor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Maximize your brand exposure and business opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: benefit.color }}
                >
                  <div className="w-6 h-6 rounded-full bg-white/30"></div>
                </div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[var(--eko-green)] to-[var(--eko-blue)] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              Become a Sponsor
            </h2>
            <p className="text-lg mb-8 text-white/95">
              Partner with us to showcase your brand to thousands of industry
              professionals, decision-makers, and potential clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-[var(--eko-green)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/downloads"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Download Prospectus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Custom Packages Available
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer flexible sponsorship packages tailored to your business
              goals and budget
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Exhibition Booth",
                  desc: "Premium location",
                  price: "Custom",
                },
                {
                  title: "Conference Room",
                  desc: "Private meeting space",
                  price: "Custom",
                },
                {
                  title: "Digital Package",
                  desc: "Online visibility",
                  price: "Custom",
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 text-center"
                >
                  <h3 className="mb-2">{pkg.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{pkg.desc}</p>
                  <div
                    className="text-xl"
                    style={{
                      color: [
                        "var(--eko-green)",
                        "var(--eko-orange)",
                        "var(--eko-blue)",
                      ][index],
                    }}
                  >
                    {pkg.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
