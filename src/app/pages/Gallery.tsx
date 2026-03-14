import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import logo from "@/assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import heroBackground from "@/assets/images/07acd66eead001dce9d6ffedbf0456f7be69a211.png";
import eventPoster from "@/assets/images/b807c71dc03c057cb72e1782296c7f6f8588a576.png";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Exhibition Booths",
    "Networking",
    "Speakers",
    "Venue",
    "Products",
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1761195689615-9469b65dac01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMGV4cG8lMjBleGhpYml0aW9uJTIwYm9vdGglMjBzaG93Y2FzZXxlbnwxfHx8fDE3NzMzODgyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Exhibition Booths",
      title: "Exhibition Booth Setup",
      description: "Professional booth designs showcasing diverse products",
    },
    {
      url: "https://images.unsplash.com/photo-1769839271637-55f6194919e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBuZXR3b3JraW5nJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc3MzM4ODIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Networking",
      title: "Business Networking",
      description: "Professionals connecting and building partnerships",
    },
    {
      url: "https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMzODgyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Speakers",
      title: "Industry Leaders",
      description: "Keynote speakers sharing insights and expertise",
    },
    {
      url: "https://images.unsplash.com/photo-1760001551764-14eddf965019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwaGFsbCUyMHRyYWRlJTIwc2hvd3xlbnwxfHx8fDE3NzMzMjE2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Venue",
      title: "Exhibition Hall",
      description: "Spacious venue accommodating diverse sectors",
    },
    {
      url: "https://images.unsplash.com/photo-1633431303895-8236f0a04b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb25mZXJlbmNlJTIwcm9vbXxlbnwxfHx8fDE3NzMzODgyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Networking",
      title: "B2B Meetings",
      description: "Focused business matchmaking sessions",
    },
    {
      url: "https://images.unsplash.com/photo-1712903276863-46af18d1d8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMHNob3clMjBwcm9kdWN0cyUyMGRpc3BsYXl8ZW58MXx8fHwxNzczMzg4MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Products",
      title: "Product Showcase",
      description: "Innovative products and solutions on display",
    },
    {
      url: eventPoster,
      category: "Venue",
      title: "EKO Expo 2026",
      description: "Official event poster and promotional material",
    },
    {
      url: "https://images.unsplash.com/photo-1550305080-4e029753abcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBuZXR3b3JraW5nJTIwYWZyaWNhfGVufDF8fHx8MTc3MzMyNDQ2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Networking",
      title: "Conference Sessions",
      description: "Engaging panel discussions and workshops",
    },
    {
      url: "https://images.unsplash.com/photo-1573166953836-06864dc70a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZW50cmVwcmVuZXVyJTIwYnVzaW5lc3MlMjBzdWNjZXNzfGVufDF8fHx8MTc3MzMyNDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Speakers",
      title: "Success Stories",
      description: "Entrepreneurs sharing their journey and achievements",
    },
    {
      url: "https://images.unsplash.com/photo-1762028892701-692dc360db08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjB0cmFkZSUyMHNob3djYXNlfGVufDF8fHx8MTc3MzM0NjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Exhibition Booths",
      title: "Interactive Displays",
      description: "Engaging booth experiences and demonstrations",
    },
    {
      url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkZSUyMGV4cG8lMjBleGhpYml0aW9uJTIwbGFnb3N8ZW58MXx8fHwxNzMzMjA5MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Venue",
      title: "Lagos Skyline",
      description: "Beautiful views of Lagos, host city of EKO Expo",
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGlzcGxheSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzMzMjA5MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Products",
      title: "Premium Products",
      description: "High-quality products from exhibitors",
    },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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
                Photo Gallery
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl">
                Explore moments from the EKO International Trade Expo -
                networking, exhibitions, and business connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--eko-green)] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Join Next Expo
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Get In Touch
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

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-6 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? "bg-[var(--eko-green)] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs px-2 py-1 rounded text-white"
                        style={{ backgroundColor: "var(--eko-green)" }}
                      >
                        {image.category}
                      </span>
                      <ZoomIn className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-white mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center">
              <span
                className="inline-block text-xs px-3 py-1 rounded text-white mb-3"
                style={{ backgroundColor: "var(--eko-green)" }}
              >
                {filteredImages[selectedImage].category}
              </span>
              <h3 className="text-2xl text-white mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-white/80">
                {filteredImages[selectedImage].description}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(
                    selectedImage > 0
                      ? selectedImage - 1
                      : filteredImages.length - 1,
                  );
                }}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
              >
                Previous
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(
                    selectedImage < filteredImages.length - 1
                      ? selectedImage + 1
                      : 0,
                  );
                }}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Be Part of EKO Expo 2026
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us and create your own success story at Africa's premier trade
            exhibition.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 bg-[var(--eko-green)] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Register for EKO Expo
          </Link>
        </div>
      </section>
    </div>
  );
}
