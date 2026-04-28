import { FileText, Download, FileImage, File } from "lucide-react";
import logo from "../../assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import heroBackground from "../../assets/images/07acd66eead001dce9d6ffedbf0456f7be69a211.png";
import eiteProspectusPdf from "../../assets/images/Eko International Trade Expo 2026 ProspectusFULL.pdf";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Downloads() {
  const downloadItems = [
    {
      title: "EITE Prospectus",
      description:
        "Complete prospectus for EKO International Trade Expo 2026 with all details",
      fileType: "PDF",
      size: "3.5 MB",
      icon: FileText,
      color: "var(--eko-green)",
      filePath: eiteProspectusPdf,
    },
    {
      title: "Event Brochure",
      description:
        "Comprehensive overview of the expo, including schedule and exhibitors",
      fileType: "PDF",
      size: "2.5 MB",
      icon: FileText,
      color: "var(--eko-orange)",
    },
    {
      title: "Sponsorship Prospectus",
      description:
        "Detailed information about sponsorship packages and benefits",
      fileType: "PDF",
      size: "1.8 MB",
      icon: FileText,
      color: "var(--eko-yellow)",
    },
    {
      title: "Exhibition Booth Plans",
      description: "Floor plans and booth layout options for exhibitors",
      fileType: "PDF",
      size: "3.2 MB",
      icon: FileImage,
      color: "var(--eko-blue)",
    },
    {
      title: "Registration Form",
      description: "Printable registration form for offline submissions",
      fileType: "PDF",
      size: "850 KB",
      icon: File,
      color: "var(--eko-cyan)",
    },
    {
      title: "Visitor Guide",
      description: "Essential information for expo visitors and attendees",
      fileType: "PDF",
      size: "1.5 MB",
      icon: FileText,
      color: "var(--eko-yellow)",
    },
    {
      title: "Media Kit",
      description: "Logos, images, and press materials for media coverage",
      fileType: "ZIP",
      size: "15 MB",
      icon: FileImage,
      color: "var(--eko-red)",
    },
  ];

  const handleDownload = (title: string, filePath?: string) => {
    if (filePath) {
      // Download actual file by creating a download link
      const link = document.createElement("a");
      link.href = filePath;
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback for demo items
      console.log(`Downloading: ${title}`);
      const link = document.createElement("a");
      link.href = filePath || "#";
      link.target = "_blank";
      link.click();
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
                Downloads
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl">
                Access important documents, brochures, and resources for the EKO
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
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Items */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Available Documents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download essential materials to help you prepare for the expo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="px-2 py-0.5 bg-gray-100 rounded">
                        {item.fileType}
                      </span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => handleDownload(item.title, item.filePath)}
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="mb-2">For Exhibitors</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Download booth plans, exhibitor guidelines, and registration
                  forms
                </p>
                <button
                  onClick={() => handleDownload("Exhibitor Package")}
                  className="text-[var(--eko-green)] hover:underline text-sm flex items-center gap-1"
                >
                  Download Package
                  <Download className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="mb-2">For Sponsors</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Access sponsorship prospectus and partnership opportunities
                </p>
                <button
                  onClick={() => handleDownload("Sponsor Package")}
                  className="text-[var(--eko-orange)] hover:underline text-sm flex items-center gap-1"
                >
                  Download Package
                  <Download className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="mb-2">For Visitors</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get visitor guides, event schedules, and venue information
                </p>
                <button
                  onClick={() => handleDownload("Visitor Package")}
                  className="text-[var(--eko-blue)] hover:underline text-sm flex items-center gap-1"
                >
                  Download Package
                  <Download className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="mb-2">For Media</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Download media kit with logos, images, and press materials
                </p>
                <button
                  onClick={() => handleDownload("Media Package")}
                  className="text-[var(--eko-cyan)] hover:underline text-sm flex items-center gap-1"
                >
                  Download Package
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[var(--eko-green)] to-[var(--eko-blue)] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl mb-4 text-white">
              Need Additional Information?
            </h2>
            <p className="text-white/95 mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[var(--eko-green)] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
