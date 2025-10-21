'use client';
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants with proper typing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.6, -0.05, 0.01, 0.99] // easeOut as cubic bezier
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// Animated Section Wrapper Component with proper typing
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutUs() {
  // Core values data
  const coreValues = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We don't just follow trends — we create them. Every challenge is an opportunity to pioneer new solutions."
    },
    {
      icon: "🎯",
      title: "Precision Driven",
      description: "Excellence lives in the details. From concept to execution, we deliver nothing less than perfection."
    },
    {
      icon: "🤝",
      title: "People Powered",
      description: "Behind every innovation is a team of passionate minds. We invest in people, not just projects."
    },
    {
      icon: "🌱",
      title: "Future Focused",
      description: "We build for tomorrow. Sustainable, scalable, and smart — our solutions stand the test of time."
    }
  ];

  // Our journey milestones
  const milestones = [
    {
      year: "Foundation",
      title: "The Beginning",
      description: "Started with a vision to revolutionize automation and robotics in India."
    },
    {
      year: "Innovation",
      title: "Tech Breakthrough",
      description: "Developed GPS-denied autonomous drone technology, setting new industry standards."
    },
    {
      year: "Growth",
      title: "Expanding Horizons",
      description: "Launched Industrial Automation and Manufacturing divisions, serving 100+ clients."
    },
    {
      year: "Impact",
      title: "Empowering Minds",
      description: "Trained over 5,000 students through EdTech initiatives and project kits."
    }
  ];

  // Statistics
  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "5000+", label: "Students Trained" },
    { number: "100+", label: "Industry Partners" },
    { number: "15+", label: "Patents Filed" }
  ];

  return (
    <div className="w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#dc2626 1px, transparent 1px),
                            linear-gradient(90deg, #dc2626 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Are <span className="text-red-600">Roberon</span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Engineering the Future, One Innovation at a Time
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(239,68,68,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition-colors"
              >
                Our Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-red-600 rounded-full font-semibold hover:bg-red-600/10 transition-colors"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Who <span className="text-red-600">We Are</span>
                </h2>
                <div className="space-y-4 text-gray-300 text-lg">
                  <p>
                    At <strong className="text-white">Roberon</strong>, we&apos;re not just engineers — we&apos;re dreamers, builders, and problem solvers. 
                    We exist at the intersection of cutting-edge technology and real-world impact.
                  </p>
                  <p>
                    From <strong className="text-red-500">autonomous drones</strong> that navigate without GPS to 
                    <strong className="text-red-500"> industrial automation systems</strong> that redefine efficiency, 
                    we push boundaries others don&apos;t dare to approach.
                  </p>
                  <p>
                    But innovation isn&apos;t just about machines. It&apos;s about <strong className="text-white">people</strong>. 
                    Through our EdTech initiatives and student project kits, we&apos;re shaping the next generation of innovators — 
                    because the future belongs to those who dare to build it.
                  </p>
                </div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/about-team.jpg"
                  alt="Roberon Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="text-red-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Driven by vision, guided by mission, powered by passion
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#181818] p-8 rounded-2xl border border-red-600/20 h-full"
              >
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold mb-4 text-red-600">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize advanced technology by making automation, robotics, and intelligent systems 
                  accessible to industries and individuals. We bridge the gap between complex innovation and 
                  practical application — empowering businesses to scale and students to succeed.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#181818] p-8 rounded-2xl border border-red-600/20 h-full"
              >
                <div className="text-5xl mb-4">🔭</div>
                <h3 className="text-3xl font-bold mb-4 text-red-600">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be India&apos;s leading innovator in robotics, automation, and EdTech — recognized globally 
                  for solutions that don&apos;t just solve problems, but redefine what&apos;s possible. We envision a 
                  future where human creativity and machine intelligence work in perfect harmony.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Core <span className="text-red-600">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Principles that guide every decision, every project, every innovation
            </p>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(239,68,68,0.2)" }}
                className="bg-[#181818] p-6 rounded-xl border border-gray-800 hover:border-red-600/50 transition-all"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-red-600">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="text-red-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to industry leadership
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-red-500 to-red-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row gap-8 items-center ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-[#181818] p-6 rounded-xl border border-red-600/20 ${
                          index % 2 === 0 ? 'lg:text-right' : ''
                        }`}
                      >
                        <div className="inline-block px-4 py-1 bg-red-600 rounded-full text-sm font-semibold mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-red-600">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden lg:block relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-6 h-6 bg-red-600 rounded-full border-4 border-black shadow-lg shadow-red-600/50"
                      ></motion.div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden lg:block"></div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Sets Us <span className="text-red-600">Apart</span>
            </h2>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "End-to-End Solutions",
                description: "From ideation to deployment, we handle everything. You dream it, we engineer it, we deliver it.",
                icon: "⚙️"
              },
              {
                title: "Industry 5.0 Ready",
                description: "We don't just automate — we intelligently integrate humans and machines for optimal collaboration.",
                icon: "🤖"
              },
              {
                title: "Education Focused",
                description: "We're not just building products; we're building the builders. Our training programs create industry-ready talent.",
                icon: "📚"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-[#181818] p-8 rounded-xl border border-gray-800 hover:border-red-600/50 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 to-black">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Ready to Build the Future Together?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-200 mb-8"
            >
              Whether you&apos;re looking to automate your industry, prototype your vision, 
              or learn from the best — we&apos;re here to make it happen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Explore Careers
              </motion.button>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}