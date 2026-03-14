import logo from "../../assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import heroBackground from "../../assets/images/07acd66eead001dce9d6ffedbf0456f7be69a211.png";
import henryImage from "../../assets/images/bcee3f0d9fc7a6049ccf917f73b49ec8792df57a.png";
import reginaImage from "../../assets/images/64f840094eb57bd45c7f3516c3f86bc1e5792961.png";
import fatokiImage from "../../assets/images/fa9a28c12456029b49ef79c17c4f54bedb071111.png";
import { Link } from "react-router";

export function Team() {
  const teamMembers = [
    {
      name: "Henry Anwansedo",
      role: "Founder and Managing Director",
      image: henryImage,
      color: "var(--eko-green)",
      responsibilities: [
        "Overall leadership and strategic direction of the EKO International Trade Expo",
        "Setting the vision and ensuring alignment with national and international trade objectives",
        "Building strategic partnerships with key stakeholders",
        "Ensuring the event's success and sustainable growth",
      ],
    },
    {
      name: "Fatoki Abiodun",
      role: "Operations & Logistics Manager",
      image: fatokiImage,
      color: "var(--eko-orange)",
      responsibilities: [
        "Day-to-day operational planning and execution",
        "Coordinating venue logistics and exhibitor setup",
        "Managing event timeline and ensuring smooth operations",
        "Overseeing vendor relationships and service delivery",
      ],
    },
    {
      name: "Dr. Regina Bamayi",
      role: "Policy, Government Relations & Strategic Advisory Lead",
      image: reginaImage,
      color: "var(--eko-blue)",
      responsibilities: [
        "Liaison with government ministries, agencies, and diplomatic missions",
        "Ensuring policy compliance and regulatory approvals",
        "Facilitating high-level government participation and support",
        "Strategic advisory on trade policy and international relations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
                Our Leadership Team
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl">
                Meet the experienced professionals driving the success of EKO
                International Trade Expo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--eko-green)] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Register Now
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img src={logo} alt="EKO Logo" className="w-64 md:w-80 lg:w-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="w-full lg:w-2/5 flex-shrink-0">
                    <div className="aspect-square lg:aspect-auto lg:h-80 overflow-hidden bg-gray-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-3/5 p-6 md:p-8">
                    <div className="mb-4">
                      <h2 className="text-2xl md:text-3xl mb-2">
                        {member.name}
                      </h2>
                      <p
                        className="text-base md:text-lg mb-4"
                        style={{ color: member.color }}
                      >
                        {member.role}
                      </p>
                    </div>

                    <div>
                      <h3
                        className="text-lg mb-3"
                        style={{ color: member.color }}
                      >
                        Core Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {member.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: member.color }}
                            ></div>
                            <p className="text-gray-700 text-sm">
                              {responsibility}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
