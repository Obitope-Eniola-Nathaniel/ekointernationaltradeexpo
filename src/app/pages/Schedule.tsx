import { Calendar, Clock, MapPin, Users, Award, Presentation, Coffee, Utensils, Handshake, PartyPopper } from "lucide-react";
// Placeholder assets (replace with actual exports when using Figma/Make)
const logo = "https://placehold.co/400x200/0d9488/ffffff?text=EKO+Expo+Logo";
const heroBackground = "https://images.unsplash.com/photo-1760001551764-14eddf965019?w=1920&q=80";
import { Link } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";

export function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0);

  const eventDays = [
    {
      date: "November 15, 2026",
      day: "Day 1",
      theme: "Opening & Innovation",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          title: "Registration & Welcome Coffee",
          type: "networking",
          icon: Coffee,
          location: "Main Lobby",
          description: "Check-in, collect badges, and network over coffee",
        },
        {
          time: "9:00 AM - 10:00 AM",
          title: "Grand Opening Ceremony",
          type: "ceremony",
          icon: Award,
          location: "Main Hall",
          description: "Official opening with keynote addresses from dignitaries and industry leaders",
          speakers: ["Governor of Lagos State", "Henry Anwansedo - Founder and Managing Director"],
        },
        {
          time: "10:00 AM - 12:00 PM",
          title: "Exhibition Hall Opens",
          type: "exhibition",
          icon: MapPin,
          location: "Exhibition Halls A, B, C",
          description: "Explore exhibitor booths across all sectors",
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Lunch Break",
          type: "break",
          icon: Utensils,
          location: "Food Court",
          description: "Networking lunch with refreshments",
        },
        {
          time: "1:00 PM - 2:30 PM",
          title: "Panel Discussion: Future of African Trade",
          type: "panel",
          icon: Presentation,
          location: "Conference Room A",
          description: "Expert panel on emerging trends and opportunities in African commerce",
          speakers: ["Trade Experts", "Business Leaders", "Policy Makers"],
        },
        {
          time: "2:30 PM - 4:00 PM",
          title: "B2B Matchmaking Session 1",
          type: "networking",
          icon: Handshake,
          location: "Business Lounge",
          description: "Pre-scheduled one-on-one business meetings",
        },
        {
          time: "4:00 PM - 6:00 PM",
          title: "Innovation Showcase",
          type: "exhibition",
          icon: Award,
          location: "Innovation Zone",
          description: "Startups and innovators pitch their products and solutions",
        },
        {
          time: "6:00 PM - 8:00 PM",
          title: "Welcome Reception",
          type: "networking",
          icon: PartyPopper,
          location: "Outdoor Terrace",
          description: "Evening cocktail reception with live music and networking",
        },
      ],
    },
    {
      date: "November 16, 2026",
      day: "Day 2",
      theme: "Manufacturing & Agriculture",
      schedule: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Keynote: Transforming African Manufacturing",
          type: "keynote",
          icon: Presentation,
          location: "Main Hall",
          description: "Insights on scaling manufacturing across Africa",
          speakers: ["Manufacturing Industry Leaders"],
        },
        {
          time: "10:00 AM - 12:00 PM",
          title: "Sector Focus: Manufacturing Excellence",
          type: "exhibition",
          icon: MapPin,
          location: "Hall A - Manufacturing Zone",
          description: "Deep dive into manufacturing exhibitors and demonstrations",
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Networking Lunch",
          type: "break",
          icon: Utensils,
          location: "Food Court",
          description: "Lunch and informal networking",
        },
        {
          time: "1:00 PM - 2:30 PM",
          title: "Workshop: Agribusiness Opportunities",
          type: "workshop",
          icon: Presentation,
          location: "Conference Room B",
          description: "Practical strategies for agribusiness growth and investment",
        },
        {
          time: "2:30 PM - 4:00 PM",
          title: "B2B Matchmaking Session 2",
          type: "networking",
          icon: Handshake,
          location: "Business Lounge",
          description: "Focused meetings for manufacturing and agriculture sectors",
        },
        {
          time: "4:00 PM - 5:30 PM",
          title: "Live Product Demonstrations",
          type: "demo",
          icon: Award,
          location: "Demo Stage",
          description: "Exhibitors showcase their latest products and innovations",
        },
        {
          time: "5:30 PM - 6:00 PM",
          title: "Day Wrap-up & Networking",
          type: "networking",
          icon: Coffee,
          location: "Main Lobby",
          description: "Informal networking and discussions",
        },
      ],
    },
    {
      date: "November 17, 2026",
      day: "Day 3",
      theme: "Technology & Innovation",
      schedule: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Tech Talk: Digital Transformation",
          type: "keynote",
          icon: Presentation,
          location: "Main Hall",
          description: "How technology is reshaping African businesses",
          speakers: ["Tech Industry Pioneers"],
        },
        {
          time: "10:00 AM - 12:00 PM",
          title: "Tech Zone Showcase",
          type: "exhibition",
          icon: MapPin,
          location: "Hall C - Technology Hub",
          description: "Explore cutting-edge technology solutions and innovations",
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Lunch Break",
          type: "break",
          icon: Utensils,
          location: "Food Court",
          description: "Midday refreshments and networking",
        },
        {
          time: "1:00 PM - 2:30 PM",
          title: "Startup Pitch Competition",
          type: "competition",
          icon: Award,
          location: "Conference Room A",
          description: "Emerging startups pitch to investors and win prizes",
        },
        {
          time: "2:30 PM - 4:00 PM",
          title: "Panel: E-commerce & Digital Markets",
          type: "panel",
          icon: Presentation,
          location: "Conference Room B",
          description: "Strategies for succeeding in digital marketplaces",
        },
        {
          time: "4:00 PM - 5:30 PM",
          title: "B2B Matchmaking Session 3",
          type: "networking",
          icon: Handshake,
          location: "Business Lounge",
          description: "Technology sector business connections",
        },
        {
          time: "5:30 PM - 7:00 PM",
          title: "Innovation Awards Ceremony",
          type: "ceremony",
          icon: Award,
          location: "Main Hall",
          description: "Recognizing outstanding innovators and exhibitors",
        },
      ],
    },
    {
      date: "November 18, 2026",
      day: "Day 4",
      theme: "Fashion, Beauty & Creative Industries",
      schedule: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Morning Briefing: Creative Economy",
          type: "keynote",
          icon: Presentation,
          location: "Main Hall",
          description: "Unlocking value in Africa's creative industries",
        },
        {
          time: "10:00 AM - 12:00 PM",
          title: "Fashion & Beauty Showcase",
          type: "exhibition",
          icon: MapPin,
          location: "Hall B - Creative Zone",
          description: "Explore fashion, beauty, and creative products",
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "VIP Lunch",
          type: "break",
          icon: Utensils,
          location: "VIP Lounge",
          description: "Exclusive lunch for VIP participants",
        },
        {
          time: "1:00 PM - 2:30 PM",
          title: "Fashion Show & Runway",
          type: "special",
          icon: PartyPopper,
          location: "Main Stage",
          description: "Live fashion presentations from exhibiting brands",
        },
        {
          time: "2:30 PM - 4:00 PM",
          title: "Workshop: Building Beauty Brands",
          type: "workshop",
          icon: Presentation,
          location: "Conference Room A",
          description: "Insights into launching and scaling beauty businesses",
        },
        {
          time: "4:00 PM - 5:30 PM",
          title: "B2B Matchmaking Session 4",
          type: "networking",
          icon: Handshake,
          location: "Business Lounge",
          description: "Creative industries networking",
        },
        {
          time: "6:00 PM - 8:00 PM",
          title: "Evening Gala & Fashion After-Party",
          type: "networking",
          icon: PartyPopper,
          location: "Grand Ballroom",
          description: "Networking gala with entertainment and refreshments",
        },
      ],
    },
    {
      date: "November 19, 2026",
      day: "Day 5",
      theme: "Investment & Closing",
      schedule: [
        {
          time: "9:00 AM - 10:30 AM",
          title: "Investor Summit",
          type: "keynote",
          icon: Presentation,
          location: "Main Hall",
          description: "Investment opportunities and funding strategies",
          speakers: ["Venture Capitalists", "Angel Investors", "Financial Institutions"],
        },
        {
          time: "10:30 AM - 12:00 PM",
          title: "Final Exhibition Hours",
          type: "exhibition",
          icon: MapPin,
          location: "All Exhibition Halls",
          description: "Last chance to visit exhibitor booths",
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Closing Lunch",
          type: "break",
          icon: Utensils,
          location: "Food Court",
          description: "Final networking opportunity over lunch",
        },
        {
          time: "1:00 PM - 2:30 PM",
          title: "B2B Matchmaking Session 5",
          type: "networking",
          icon: Handshake,
          location: "Business Lounge",
          description: "Final round of business meetings",
        },
        {
          time: "2:30 PM - 4:00 PM",
          title: "Roundtable: Future of Trade in Africa",
          type: "panel",
          icon: Presentation,
          location: "Conference Room A",
          description: "Looking ahead - trends and opportunities",
        },
        {
          time: "4:00 PM - 5:00 PM",
          title: "Official Closing Ceremony",
          type: "ceremony",
          icon: Award,
          location: "Main Hall",
          description: "Event wrap-up, awards, and thank you addresses",
        },
        {
          time: "5:00 PM - 6:00 PM",
          title: "Farewell Reception",
          type: "networking",
          icon: Coffee,
          location: "Main Lobby",
          description: "Final goodbyes and exchange of contacts",
        },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      keynote: "var(--eko-green)",
      panel: "var(--eko-orange)",
      workshop: "var(--eko-blue)",
      networking: "var(--eko-cyan)",
      exhibition: "var(--eko-yellow)",
      ceremony: "var(--eko-red)",
      break: "var(--eko-light-green)",
      demo: "var(--eko-orange)",
      special: "var(--eko-red)",
      competition: "var(--eko-green)",
    };
    return colors[type] || "var(--eko-green)";
  };

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
                Event Schedule
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl">
                Your complete guide to five days of networking, learning, and business opportunities.
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start text-white/90">
                <Calendar className="h-6 w-6" />
                <span className="text-lg">November 15-19, 2026</span>
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

      {/* Day Selector */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {eventDays.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg transition-all ${
                  selectedDay === index
                    ? "bg-[var(--eko-green)] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="text-sm opacity-80">{day.day}</div>
                <div className="font-medium">{day.date}</div>
                <div className="text-xs mt-1 opacity-75">{day.theme}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Details */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Day Theme */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-2">
              {eventDays[selectedDay].day} - {eventDays[selectedDay].theme}
            </h2>
            <p className="text-xl text-gray-600">{eventDays[selectedDay].date}</p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {eventDays[selectedDay].schedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Time & Icon */}
                    <div className="flex items-start gap-4 md:w-48 flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: getTypeColor(item.type) }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{item.time}</span>
                        </div>
                        <div
                          className="text-xs px-2 py-1 rounded inline-block text-white"
                          style={{ backgroundColor: getTypeColor(item.type) }}
                        >
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <p className="text-gray-700 mb-3">{item.description}</p>
                      {item.speakers && (
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <Users className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Speakers: </span>
                            {item.speakers.join(", ")}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Attend?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Register now to secure your spot at this premier trade exhibition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-[var(--eko-green)] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Calendar className="h-5 w-5" />
              Register Now
            </Link>
            <Link
              to="/downloads"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--eko-green)] text-[var(--eko-green)] px-8 py-4 rounded-lg hover:bg-[var(--eko-green)]/10 transition-colors"
            >
              Download Full Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}