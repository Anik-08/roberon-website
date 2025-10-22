'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useRouter } from "next/navigation";

const products = [
  {
    title: "Custom Flight Controller",
    description: "High-precision 3D printed mechanical parts for industrial applications",
    image: "/products/car-img.jpg",
    link: "/products/car-img.jpg",
    category: "Automotive"
  },
  {
    title: "Custom 3D Printer",
    description: "Lightweight and durable components for aerospace industry",
    image: "/products/heart-hm.jpg",
    link: "/products/heart-hm.jpg",
    category: "Medical"
  },
  {
    title: "Custom Robotics & Machinery",
    description: "Rapid prototyping services for mechanical engineering",
    image: "/products/key-chain.jpg",
    link: "/products/key-chain.jpg",
    category: "Collectibles"
  },
  {
    title: "Student Project Kit",
    description: "Complex geometries and tight tolerance components",
    image: "/products/bike-chain.jpg",
    link: "/products/bike-chain.jpg",
    category: "Sports"
  },
  {
    title: "3D Printed Drone",
    description: "Complex geometries and tight tolerance components",
    image: "/products/key-ring.jpg",
    link: "/products/key-ring.jpg",
    category: "Accessories"
  },
];

export default function Products() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const router = useRouter();
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.4)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full text-red-500 text-sm font-semibold tracking-wider">
              OUR PRODUCTS
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              3D Prints
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Precision-engineered products that push the boundaries of additive manufacturing
          </p>
        </motion.div> */}

        {/* Products Carousel */}
        {/* <div className="relative">
          
          {showLeftButton && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('left')}
              className="absolute z-10 left-0 cursor-target top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full p-4 shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-110 hover:shadow-red-500/50 -translate-x-1/2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}
          {showRightButton && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('right')}
              className="absolute right-0 cursor-target z-10 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full p-4 shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-110 hover:shadow-red-500/50 translate-x-1/2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}

          {/* Scrollable Container */}
          {/* <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="flex-shrink-0 w-[340px]"
              >
                <Link
                  href="https://we-gift-3-d.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="relative h-full bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-red-500/20">
                    

                    <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>


                    <div className="relative h-64 overflow-hidden bg-zinc-900">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      

                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm border border-red-500/30 rounded-full text-red-400 text-xs font-semibold tracking-wider">
                        {product.category}
                      </div>


                      <motion.div
                        className="absolute top-4 right-4 w-10 h-10 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-target"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                      >
                        <FiExternalLink className="w-5 h-5 text-white" />
                      </motion.div>


                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-2">
                          {product.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                      </div>


                      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>


                      <div className="flex items-center justify-between">
                        <span className="text-red-500 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300 cursor-target">
                          View Details
                          <motion.svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </span>

                        {/* Rating or Badge */}
                        {/* <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div> 
                      </div>
                    </div>


                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div> 


          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-zinc-700 transition-all duration-300"
              />
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50">
            <div className="flex-1 text-left">
              <p className="text-white text-lg font-semibold mb-1">Customized drone and robotics for your requirements</p>
              <p className="text-gray-400 text-sm">Solutions designed to address your specific problems and requirements.</p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 whitespace-nowrap cursor-target" onClick={() => router.push('/contact')}>
              Request Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}