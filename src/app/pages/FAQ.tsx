import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Users,
  Calendar,
  MapPin,
  CreditCard,
  FileText,
  Mail,
  Star,
} from "lucide-react";
import logo from "../../assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import heroBackground from "../../assets/images/07acd66eead001dce9d6ffedbf0456f7be69a211.png";
import { Link } from "react-router";
import { motion } from "motion/react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: "General Information",
      icon: HelpCircle,
      color: "var(--eko-green)",
      questions: [
        {
          question: "What is the EKO International Trade Expo?",
          answer:
            "The EKO International Trade Expo is a premier multi-sectoral trade exhibition that brings together businesses, investors, and industry professionals from around the world. It's designed to promote commerce, innovation, and international partnerships across various sectors including manufacturing, agriculture, technology, fashion, and more.",
        },
        {
          question: "When and where will the expo take place?",
          answer:
            "The EKO International Trade Expo will be held from November 15-19, 2026, in Lagos, Nigeria. The exact venue details will be announced closer to the event date.",
        },
        {
          question: "Who should attend the EKO Expo?",
          answer:
            "The expo is ideal for business owners, entrepreneurs, investors, manufacturers, distributors, importers, exporters, industry professionals, and anyone looking to expand their business network and explore new market opportunities.",
        },
      ],
    },
    {
      category: "Registration & Participation",
      icon: Users,
      color: "var(--eko-orange)",
      questions: [
        {
          question: "How do I register for the expo?",
          answer:
            "You can register through our online registration form available on the Register page. Simply fill in your details, select your participation category (Exhibitor, Visitor, Sponsor, etc.), and submit. You'll receive a confirmation email with further instructions.",
        },
        {
          question: "What are the different participation categories?",
          answer:
            "We offer several participation categories: Exhibitor (showcase your products/services), Visitor (attend and network), Sponsor (brand visibility and benefits), Investor (explore investment opportunities), Media (coverage access), and Speaker (share your expertise).",
        },
        {
          question: "Is there a registration deadline?",
          answer:
            "Yes, early bird registration closes on September 30, 2026. However, we recommend registering as early as possible to secure the best rates and premium booth locations for exhibitors.",
        },
        {
          question: "Can I register on-site during the expo?",
          answer:
            "Yes, on-site registration will be available, but we strongly encourage pre-registration to avoid queues and to take advantage of early bird discounts.",
        },
      ],
    },
    {
      category: "Exhibition & Booths",
      icon: MapPin,
      color: "var(--eko-blue)",
      questions: [
        {
          question: "What booth sizes are available?",
          answer:
            "We offer various booth sizes ranging from 9 sqm (3m x 3m) standard booths to larger custom spaces up to 100+ sqm for major exhibitors. Each package includes basic furniture, lighting, and power supply.",
        },
        {
          question: "What is included in the booth package?",
          answer:
            "Standard booth packages include a display table, chairs, basic lighting, power outlet, company name board, and Wi-Fi access. Premium packages include additional features like custom design, extra furniture, and promotional materials.",
        },
        {
          question: "Can I customize my booth design?",
          answer:
            "Absolutely! We offer custom booth design services. Our team can work with you to create a unique booth that reflects your brand identity. Contact our exhibition team for more details.",
        },
        {
          question: "When can exhibitors set up their booths?",
          answer:
            "Exhibitor setup begins two days before the official opening (November 13-14, 2026). Detailed setup schedules and guidelines will be provided to registered exhibitors.",
        },
      ],
    },
    {
      category: "Fees & Payment",
      icon: CreditCard,
      color: "var(--eko-cyan)",
      questions: [
        {
          question: "What are the registration fees?",
          answer:
            "Fees vary by participation category. Visitor passes start from $50, standard exhibition booths from $1,500, and sponsorship packages are customized based on your requirements. Early bird discounts of up to 20% are available.",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept bank transfers, credit/debit cards, and online payment platforms. Payment instructions will be provided in your registration confirmation email.",
        },
        {
          question: "Is there a refund policy?",
          answer:
            "Cancellations made 60+ days before the event receive a 75% refund. Cancellations 30-59 days prior receive 50%, and within 30 days are non-refundable. No-shows are not eligible for refunds.",
        },
        {
          question: "Are there group discounts available?",
          answer:
            "Yes! Groups of 5 or more visitors receive a 15% discount. Companies registering multiple booths also qualify for bulk discounts. Contact us for customized group rates.",
        },
      ],
    },
    {
      category: "Event Schedule & Activities",
      icon: Calendar,
      color: "var(--eko-yellow)",
      questions: [
        {
          question: "What are the expo operating hours?",
          answer:
            "The expo will be open from 9:00 AM to 6:00 PM daily (November 15-19, 2026). VIP networking sessions and special events may extend beyond these hours.",
        },
        {
          question: "Will there be networking sessions?",
          answer:
            "Yes! We have scheduled B2B matchmaking sessions, industry roundtables, networking breakfasts, and evening cocktail receptions throughout the five-day event.",
        },
        {
          question: "Are there speaker sessions or seminars?",
          answer:
            "Absolutely! We have a full program of keynote speeches, panel discussions, and workshops featuring industry leaders, successful entrepreneurs, and subject matter experts. The detailed schedule will be published on our Schedule page.",
        },
        {
          question: "Can I bring my team/colleagues?",
          answer:
            "Yes, you're encouraged to bring your team! Each registration type has specific allowances. Exhibitor packages include multiple staff passes, while visitors need individual registrations.",
        },
      ],
    },
    {
      category: "Logistics & Venue",
      icon: MapPin,
      color: "var(--eko-red)",
      questions: [
        {
          question: "Is parking available at the venue?",
          answer:
            "Yes, ample parking facilities are available at the venue. VIP and exhibitor parking areas will be designated. Parking is included for exhibitors and available at a nominal fee for visitors.",
        },
        {
          question: "Are there accommodation options nearby?",
          answer:
            "We have partnered with several hotels near the venue offering discounted rates for expo participants. A list of recommended accommodations will be shared with registered participants.",
        },
        {
          question: "Is the venue accessible for people with disabilities?",
          answer:
            "Yes, the venue is fully accessible with ramps, elevators, accessible restrooms, and designated parking spaces for people with disabilities.",
        },
        {
          question: "Will food and beverages be available?",
          answer:
            "Yes, multiple food courts and refreshment areas will be available throughout the venue, offering a variety of local and international cuisine.",
        },
      ],
    },
    {
      category: "Contact & Support",
      icon: Mail,
      color: "var(--eko-light-green)",
      questions: [
        {
          question: "How can I contact the organizing team?",
          answer:
            "You can reach us via email at info@ekointernationaltradeexpo.com or through the contact form on our Contact page. Our team typically responds within 24-48 hours.",
        },
        {
          question: "Will there be on-site support during the expo?",
          answer:
            "Yes, our team will be available throughout the event to assist with any questions or issues. Information desks will be strategically located around the venue.",
        },
        {
          question: "Can I make changes to my registration after submitting?",
          answer:
            "Yes, you can request changes to your registration by contacting our team. Some changes may be subject to availability and additional fees.",
        },
        {
          question: "How do I become a sponsor?",
          answer:
            "We offer various sponsorship packages with different benefits and visibility levels. Please visit our Sponsors page or contact us directly to discuss customized sponsorship opportunities.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl">
                Find answers to common questions about the EKO International
                Trade Expo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--eko-green)] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Still Have Questions?
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Register Now
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

      {/* FAQ Categories */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl">{category.category}</h2>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleAccordion(globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-lg pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 text-gray-600 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-white">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from past attendees, exhibitors, and partners about their EKO Expo experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
      {/* <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--eko-green)] to-[var(--eko-blue)] flex items-center justify-center text-white text-2xl">
                  AM
                </div>
                <div>
                  <h4 className="text-lg">Adebayo Mensah</h4>
                  <p className="text-sm text-gray-600">CEO, TechVenture Africa</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--eko-yellow)] text-[var(--eko-yellow)]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "EKO Expo opened doors we didn't know existed. We secured three major partnerships and expanded into two new markets. The networking opportunities were invaluable!"
                </p>
              </div>
            </div> */}

      {/* Testimonial 2 */}
      {/* <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--eko-orange)] to-[var(--eko-red)] flex items-center justify-center text-white text-2xl">
                  CO
                </div>
                <div>
                  <h4 className="text-lg">Chioma Okonkwo</h4>
                  <p className="text-sm text-gray-600">Founder, Fashion Forward Ltd</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--eko-yellow)] text-[var(--eko-yellow)]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "As a small business owner, I was amazed by the support and exposure. The event was professionally organized, and I made connections that doubled my sales in six months!"
                </p>
              </div>
            </div> */}

      {/* Testimonial 3 */}
      {/* <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--eko-blue)] to-[var(--eko-cyan)] flex items-center justify-center text-white text-2xl">
                  JW
                </div>
                <div>
                  <h4 className="text-lg">John Williams</h4>
                  <p className="text-sm text-gray-600">Director, Global Imports Inc.</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--eko-yellow)] text-[var(--eko-yellow)]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "This expo is a must-attend for anyone serious about African markets. The quality of exhibitors and the business matchmaking sessions exceeded all expectations."
                </p>
              </div>
            </div> */}

      {/* Testimonial 4 */}
      {/* <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--eko-cyan)] to-[var(--eko-green)] flex items-center justify-center text-white text-2xl">
                  FA
                </div>
                <div>
                  <h4 className="text-lg">Fatima Abubakar</h4>
                  <p className="text-sm text-gray-600">Managing Director, Agro Solutions</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--eko-yellow)] text-[var(--eko-yellow)]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "The agricultural sector showcase was exceptional. We found suppliers, distributors, and even secured funding for our expansion project. Highly recommended!"
                </p>
              </div>
            </div> */}

      {/* Testimonial 5 */}
      {/* <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--eko-yellow)] to-[var(--eko-orange)] flex items-center justify-center text-white text-2xl">
                  EM
                </div>
                <div>
                  <h4 className="text-lg">Emmanuel Musa</h4>
                  <p className="text-sm text-gray-600">Investor & Venture Capitalist</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--eko-yellow)] text-[var(--eko-yellow)]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "As an investor, I discovered incredible opportunities. The quality of startups and established businesses showcasing here is world-class. Can't wait for the next edition!"
                </p>
              </div>
            </div> */}

      {/* Testimonial 6 */}
      {/* <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--eko-red)] to-[var(--eko-orange)] flex items-center justify-center text-white text-2xl">
                  NO
                </div>
                <div>
                  <h4 className="text-lg">Ngozi Obi</h4>
                  <p className="text-sm text-gray-600">Owner, Beauty Essence Cosmetics</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--eko-yellow)] text-[var(--eko-yellow)]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "The beauty and fashion segment was perfectly curated. I launched my new product line here and the response was overwhelming. Thank you EKO Expo team!"
                </p>
              </div>
            </div> */}
      {/* </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Didn't Find Your Answer?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help! Reach out to us with any questions or
            concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--eko-green)] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </Link>
            <a
              href="mailto:info@ekointernationaltradeexpo.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--eko-green)] text-[var(--eko-green)] px-8 py-4 rounded-lg hover:bg-[var(--eko-green)]/10 transition-colors"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
