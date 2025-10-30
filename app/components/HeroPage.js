'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { style } from 'framer-motion/client';

const HeroPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  // Amoeba effect refs and state
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const moveTimeoutRef = useRef(null);

  // Typewriter effect states
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(true);

  const text1 = "We are your";
  const text2 = "makers of motion.";

  // Redirect from "/" to "/home"
  useEffect(() => {
    if (pathname === "/") {
      router.push("/home");
    }
  }, [pathname, router]);

  // Typewriter effect
  useEffect(() => {
    let timeout1, timeout2;
    let index1 = 0;
    let index2 = 0;

    // First text typewriter
    const typeText1 = () => {
      if (index1 < text1.length) {
        setDisplayText1(text1.substring(0, index1 + 1));
        index1++;
        timeout1 = setTimeout(typeText1, 100);
      } else {
        setShowCursor1(false);
        // Start second text after a delay
        setTimeout(() => {
          setShowCursor2(true);
          typeText2();
        }, 500);
      }
    };

    // Second text typewriter
    const typeText2 = () => {
      if (index2 < text2.length) {
        setDisplayText2(text2.substring(0, index2 + 1));
        index2++;
        timeout2 = setTimeout(typeText2, 100);
      } else {
        // Blinking cursor effect
        setTimeout(() => setShowCursor2(false), 1000);
      }
    };

    // Start first typewriter after initial delay
    const startDelay = setTimeout(typeText1, 1000);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  // Amoeba effect logic
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      setMousePosition({ x: mouseX, y: mouseY });
      
      // Create ripple effect
      createRipple(mouseX, mouseY);
    };

    const handleMouseEnter = () => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      setMousePosition({ x: centerX, y: centerY });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  const createRipple = (x, y) => {
    const svg = svgRef.current;
    if (!svg) return;

    const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    
    ripple.setAttribute('cx', x);
    ripple.setAttribute('cy', y);
    ripple.setAttribute('r', '0');
    ripple.setAttribute('fill', 'none');
    ripple.setAttribute('stroke', 'rgba(255,255,255,0.4)');
    ripple.setAttribute('stroke-width', '1');
    ripple.setAttribute('opacity', '0.6');
    
    // Add animation
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'r');
    animate.setAttribute('values', '0;40;0');
    animate.setAttribute('dur', '0.8s');
    animate.setAttribute('begin', '0s');
    
    const animateOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animateOpacity.setAttribute('attributeName', 'opacity');
    animateOpacity.setAttribute('values', '0.6;0;0');
    animateOpacity.setAttribute('dur', '0.8s');
    animateOpacity.setAttribute('begin', '0s');
    
    ripple.appendChild(animate);
    ripple.appendChild(animateOpacity);
    svg.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 800);
  };

  return (
    <div 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
      style={{ cursor: 'none' }}
    >
      {/* Layer 1: Hidden Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hidden Background Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Layer 2: Main Background (Home.jpg) with mask */}
      <div 
        className="absolute inset-0 z-20"
        style={{
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 100px, black 150px)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 100px, black 150px)`,
          transition: 'mask-image 0.1s ease-out, -webkit-mask-image 0.1s ease-out'
        }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/Home.jpg"
            alt="Background Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Layer 2.5: Gradient Overlay - transitions image to black at bottom */}
      <div className="absolute inset-0 z-25 bg-gradient-to-b from-transparent via-transparent to-black"></div>

      {/* Layer 3: All other content (drone, text, buttons) - visible above hover effect */}
      <div className="absolute inset-0 z-30">
        {/* Top-left text with typewriter effect */}
        <div className="absolute top-56 sm:top-40 left-0 px-4 sm:px-8">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={` text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold iceland-regular` } style={{fontFamily:'Telegraph'}}
          >
            {displayText1}
            {showCursor1 && (
              <span className="animate-pulse">|</span>
            )}
          </motion.h1>
        </div>

        {/* Centered Drone image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/images/drone.png"
              alt="Drone"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Bottom-right text with typewriter effect */}
        <div className="absolute bottom-64 sm:bottom-44 right-0 px-4 sm:px-8">
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-right font-bold iceland-regular" style={{fontFamily: 'Telegraph'}}
          >
            {displayText2}
            {showCursor2 && (
              <span className="animate-pulse">|</span>
            )}
          </motion.h1>
        </div>

        {/* Bottom-left CTA section */}
        {/* <div className="absolute bottom-12 sm:bottom-20 left-0 px-4 sm:px-8 w-full sm:w-[30vw]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-white text-sm sm:text-base mt-1 italic"
          >
            From Filament to Flight –
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="text-white text-sm sm:text-base mt-1 italic"
          >
            Customized Robotics & Industry Automation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button
              className="bg-red-700 hover:bg-transparent cursor-target hover:border-red-700 border border-red-700 transition duration-300 text-white px-6 py-2 rounded-full z-10"
              onClick={handleExploreClick}
            >
              Explore
            </button>
            <button
              className="bg-transparent hover:bg-white cursor-target hover:text-black transition duration-300 border border-white text-white px-6 py-2 rounded-full flex items-center z-10"
              onClick={handleOurProductsClick}
            >
              Our Products <IoArrowForwardSharp className="ml-2" />
            </button>
          </motion.div>
        </div> */}
      </div>

      {/* Ripple effects container */}
      <svg 
        className="absolute inset-0 w-full h-full z-40 pointer-events-none" 
        ref={svgRef}
      />
    </div>
  );
};

export default HeroPage;