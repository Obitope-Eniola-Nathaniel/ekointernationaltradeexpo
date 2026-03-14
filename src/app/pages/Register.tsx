import { useState } from "react";
import { CheckCircle2, Building2, User, Mail, Phone, Globe, MapPin, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import logo from "../../assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import heroBackground from "../../assets/images/07acd66eead001dce9d6ffedbf0456f7be69a211.png";

export function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    country: "",
    cityState: "",
    category: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "Exhibitor",
    "Visitor",
    "Sponsor",
    "Investor",
    "Media",
    "Speaker",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        country: "",
        cityState: "",
        category: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
                Register for EKO Expo
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl">
                Secure your participation and be part of this premier trade exhibition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--eko-green)] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Register Now
                  <ArrowDown className="h-5 w-5 animate-bounce" />
                </button>
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

      {/* Registration Form */}
      <section id="registration-form" className="py-16 md:py-20 relative">
        {/* Watermark Logo Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-8 opacity-10">
            {Array.from({ length: 9 }).map((_, index) => (
              <img 
                key={index}
                src={logo} 
                alt="EKO Logo Watermark" 
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl text-green-900 mb-2">Registration Successful!</h2>
              <p className="text-green-700">
                Thank you for registering. We will contact you soon with more details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--eko-green)] flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl">Personal Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--eko-green)] flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl">Professional Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm mb-2">
                      Position/Title *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm mb-2">
                      Country *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cityState" className="block text-sm mb-2">
                      City/State *
                    </label>
                    <input
                      type="text"
                      id="cityState"
                      name="cityState"
                      required
                      value={formData.cityState}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm mb-2">
                      Participation Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <label htmlFor="message" className="block text-sm mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your interest in the expo..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[var(--eko-green)] text-white py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit Registration
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Benefits of Registering */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Register Early?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Early registration comes with exclusive benefits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Priority Access",
                desc: "Get early entry to exhibitions and premium networking sessions",
                color: "var(--eko-green)",
              },
              {
                title: "Special Discounts",
                desc: "Enjoy reduced rates on exhibition booths and sponsorship packages",
                color: "var(--eko-orange)",
              },
              {
                title: "Exclusive Updates",
                desc: "Receive first updates on speakers, programs, and special events",
                color: "var(--eko-blue)",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center"
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: benefit.color }}
                >
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}