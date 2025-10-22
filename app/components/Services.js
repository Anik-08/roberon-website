'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// Mock slide data with unique slugs
const slides = [
  {
    id: 1,
    slug: "gps-autonomous-drone-technology",
    image: "/images/service1.jpg",
    heading: "GPS Autonomous denied drone",
    subheading: "Redefining the skies with intelligence and precision",
    description:
      "Our team is pushing the boundaries of aerial innovation with autonomous drone technology. From intelligent navigation to vision-based decision-making, we are building systems that think while they fly.",
    buttonText: "Know More",
  },
  {
    id: 2,
    slug: "industrial-automation-solutions",
    image: "/images/service2.jpg",
    heading: "Industrial Automation",
    subheading: "Engineering Tomorrow's Efficiency",
    description:
      "In the age of Industry 5.0, repetitive work belongs to machines, not people. We design intelligent automation systems that adapt, optimize, and scale effortlessly. Our solutions free human potential — so you focus on innovation, while we handle the repetition",
    buttonText: "Reach out our Team",
  },
  {
    id: 3,
    slug: "manufacturing-production-services",
    image: "/images/service3.jpeg",
    heading: "Manufacturing & Production",
    subheading: "From Idea to Reality, Faster Than Ever",
    description:
      "Prototyping to full-scale production — we bridge imagination with precision. With 3D printing, CNC machining, laser cutting, and advanced fabrication, we make building seamless. Outsource your design and manufacturing to us, and watch concepts transform into market-ready products.",
    buttonText: "Send your designs",
  },
  {
    id: 4,
    slug: "edtech-skill-development-programs",
    image: "/images/service4.jpg",
    heading: "EdTech & Skill Development",
    subheading: "Shaping Future Innovators",
    description:
      "Engineering isn't just about building things — it's about building people. We empower students with hands-on training, projects, and real-world exposure beyond textbooks. Through internships and guided learning, we prepare the next generation to create, not just follow.",
    buttonText: "Courses",
  },
  {
    id: 5,
    slug: "Ready-Kits",
    image: "/images/service5.jpeg",
    heading: "Student Project Kits",
    subheading: "Projects Made Simple, Learning Made Fun",
    description:
      "No more running around for parts or wasting money on extras you don't need. Our all-in-one project kits come complete with the right components, neat 3D enclosures, and easy guides. With manuals, videos, and mentor support — students build with confidence, learn with joy, and create without stress.",
    buttonText: "Ready Kits",
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = slides[currentSlide];

  // Improved WhatsApp helper:
  // - Encodes message properly (including newlines)
  // - Attempts deep link (whatsapp://) on mobile, falls back to api.whatsapp.com
  // - Uses api.whatsapp.com for desktop / web
  const openWhatsApp = (phone, message) => {
    const encoded = encodeURIComponent(message);

    const deepLink = `whatsapp://send?phone=${phone}&text=${encoded}`;
    const apiUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    if (isMobile) {
      // Try deep link first (opens native app). If that fails, open API fallback.
      window.location.href = deepLink;

      // fallback after a short delay — open api url in a new tab/window
      setTimeout(() => {
        window.open(apiUrl, "_blank", "noopener,noreferrer");
      }, 700);
    } else {
      // Desktop / web: open the API url (works with WhatsApp Web)
      window.open(apiUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Email helper (keeps using Gmail compose link for consistent UX)
  const openMailTo = (email, subject = "", body = "") => {
    const s = encodeURIComponent(subject);
    const b = encodeURIComponent(body);
    window.location.href = `https://mail.google.com/mail/?view=cm&to=${email}&su=${s}&body=${b}`;
  };

  // Navigate to skill-dev
  const goToSkillDev = () => {
    router.push("/skill-dev");
  };

  // Handle primary service button click
  const handleServiceClick = () => {
    // Industrial Automation -> open WhatsApp
    if (slide.slug === "industrial-automation-solutions") {
      const phone = "917676454055";
      const message = `Hello,\n\nI'm interested in your "${slide.heading}" service. Please connect me with the team.`;
      openWhatsApp(phone, message);
      return;
    }

    // EdTech: we render explicit buttons for this slide (Courses / Materials),
    // so do not handle it here — but keep fallback navigation just in case.
    if (slide.slug === "edtech-skill-development-programs") {
      router.push("/skill-dev");
      return;
    }

    // Default behavior: navigate to product page
    router.push(`/products/${slide.slug}`);
  };

  // Specific handlers for Manufacturing & Production
  const handleSendDesignsWhatsApp = () => {
    const phone = "917676454055";
    const message = `Hello,\n\nI would like to send my designs for manufacturing (${slide.heading}). Please advise next steps.`;
    openWhatsApp(phone, message);
  };

  const handleOutsourceManufacturingEmail = () => {
    const email = "sales@roberon.com";
    const subject = "Outsource Manufacturing Inquiry";
    const body = `Hello Roberon Team,\n\nI am interested in outsourcing manufacturing for my design ("${slide.heading}"). Please share details on lead times, MOQ, pricing, and quoting process.\n\nThanks,\n[Your name]`;
    openMailTo(email, subject, body);
  };

  // Handlers for EdTech slide (Courses + Materials)
  const handleCoursesClick = () => {
    goToSkillDev();
  };

  const handleMaterialsClick = () => {
    goToSkillDev();
  };

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  // Play/Pause icon variants
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section className="w-full bg-black py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div
          className="flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-[#181818] shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={slide.image}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 1.05 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image src={slide.image} alt={slide.heading} fill className="object-cover" priority />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="p-6 sm:p-8 lg:p-12">
              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div key={slide.heading} initial="hidden" animate="visible" exit="exit" className="text-center lg:text-left">
                  <motion.p variants={textVariants} custom={0} className="text-base sm:text-lg text-gray-300 mb-2">
                    {slide.subheading}
                  </motion.p>
                  <motion.h2 variants={textVariants} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-4 sm:mb-6 leading-tight">
                    {slide.heading}
                  </motion.h2>
                  <motion.p variants={textVariants} custom={2} className="text-base sm:text-md italic text-gray-300 mb-6 sm:mb-8">
                    {slide.description}
                  </motion.p>

                  {/* Conditional rendering for Manufacturing & Production (slide 3) */}
                  {slide.slug === "manufacturing-production-services" ? (
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <motion.button
                        variants={textVariants}
                        custom={3}
                        onClick={handleSendDesignsWhatsApp}
                        whileHover={{ scale: 1.03, boxShadow: "0px 6px 18px rgba(239,68,68,0.08)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors cursor-target"
                        aria-label="Send your designs via WhatsApp"
                      >
                        Send your designs
                      </motion.button>

                      <motion.button
                        variants={textVariants}
                        custom={4}
                        onClick={handleOutsourceManufacturingEmail}
                        whileHover={{ scale: 1.03, boxShadow: "0px 6px 18px rgba(239,68,68,0.04)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2 rounded-full border-2 border-red-600 text-red-600 bg-transparent text-sm font-semibold hover:bg-red-600 hover:text-white transition-colors cursor-target"
                        aria-label="Outsource manufacturing via Email"
                      >
                        Outsource Manufacturing
                      </motion.button>
                    </div>
                  ) : slide.slug === "edtech-skill-development-programs" ? (
                    // EdTech slide: render Courses + Materials (both route to /skill-dev)
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <motion.button
                        variants={textVariants}
                        custom={3}
                        onClick={handleCoursesClick}
                        whileHover={{ scale: 1.03, boxShadow: "0px 6px 18px rgba(239,68,68,0.08)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors cursor-target"
                        aria-label="Courses"
                      >
                        Courses
                      </motion.button>

                      <motion.button
                        variants={textVariants}
                        custom={4}
                        onClick={handleMaterialsClick}
                        whileHover={{ scale: 1.03, boxShadow: "0px 6px 18px rgba(239,68,68,0.04)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2 rounded-full border-2 border-red-600 text-white bg-transparent text-sm font-semibold hover:bg-red-600 hover:border-red-300 transition-colors cursor-target"
                        aria-label="Materials"
                      >
                        Materials
                      </motion.button>
                    </div>
                  ) : (
                    <motion.button
                      variants={textVariants}
                      custom={3}
                      onClick={handleServiceClick}
                      whileHover={{ scale: 1.06, boxShadow: "0px 0px 15px rgba(239,68,68,0.12)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-red-600 text-white font-semibold text-base sm:text-lg hover:bg-red-700 transition-colors cursor-target"
                    >
                      {slide.buttonText}
                    </motion.button>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators and Play/Pause Status */}
              <div className="flex justify-between items-center mt-8">
                {/* Slide Indicators */}
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentSlide ? 1 : -1);
                        setCurrentSlide(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-6 bg-red-600" : "bg-gray-600"}`}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Play/Pause Status Indicator */}
                <div className="flex items-center space-x-2">
                  <AnimatePresence mode="wait">
                    <motion.div key={isPaused ? "paused" : "playing"} variants={iconVariants} initial="hidden" animate="visible" exit="hidden" className="flex items-center space-x-1">
                      {isPaused ? (
                        <>
                          {/* Pause Icon */}
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-yellow-400">Paused</span>
                        </>
                      ) : (
                        <>
                          {/* Play Icon */}
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-green-400">Playing</span>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}