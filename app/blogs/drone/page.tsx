'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

const blog = {
  title: "Drones: Our Everyday Sidekicks",
  date: "2024-09-15",
  author: "Tech Team",
  readTime: "5 min read",
  linkedinUrl: "https://www.linkedin.com/pulse/future-drones-everyday-life-from-sci-fi-why-roberon-ccbpf", // Replace with your actual LinkedIn post
  sections: [
    {
      type: "paragraph",
      content: `Remember when drones felt like something straight out of a sci-fi movie? A buzzing gadget flown by tech geeks or used in action films? Fast forward to today, and they’re slowly turning into our everyday companions, delivering packages, saving lives, and even filming your best friend’s wedding from the sky.`
    },
    {
      type: "paragraph",
      content: `The real question isn’t if drones will be everywhere. It’s how soon.`
    },
    {
      type: "paragraph",
      content: `At Roberon, we like to think of drones as less of a machine and more of a sidekick, giving us superpowers we didn’t know we needed. Let’s take a quick flight into the future.`
    },
    { type: "divider" },
    {
      type: "heading",
      content: "Coffee, Groceries, and Instant Gratification"
    },
    {
      type: "paragraph",
      content: `Imagine this: you order your coffee beans in the morning, and instead of a delivery person zigzagging through traffic, a drone buzzes over your balcony minutes later. Faster than you can say “double shot espresso”. That’s the future of delivery: swift, seamless, and sky-high.`
    },
    { type: "divider" },
    {
      type: "heading",
      content: "First Responders with Propellers"
    },
    {
      type: "paragraph",
      content: `Emergencies are stressful, but drones are turning into unexpected heroes. They can zip through traffic to drop off medicines, scan disaster-hit areas, or deliver defibrillators faster than an ambulance stuck at a red light. Think of them as the “flying paramedics” of tomorrow.`
    },
    { type: "divider" },
    {
      type: "heading",
      content: "Farming from the Clouds"
    },
    {
      type: "paragraph",
      content: `Drones in agriculture? Absolutely. They’re the new farmhands: flying over fields, spotting crop diseases, and telling farmers where to water (or not). The result: healthier crops, less waste, and smarter farming. Feeding billions suddenly looks a lot more doable with wings on our side.`
    },
    { type: "divider" },
    {
      type: "heading",
      content: "Cities That Think in 3D"
    },
    {
      type: "paragraph",
      content: `As cities grow taller, so do their problems. Traffic jams, crumbling bridges, crowded events, and drones are stepping up as urban problem-solvers. From monitoring traffic flows to inspecting skyscrapers, they’re helping build safer, smarter cities… without anyone having to hang dangerously off a ledge.`
    },
    { type: "divider" },
    {
      type: "heading",
      content: "Lights, Camera, Propellers!"
    },
    {
      type: "paragraph",
      content: `On the creative front, drones are unlocking Hollywood-level magic for everyday storytellers. From dreamy wedding shots to epic travel vlogs, anyone can capture cinematic moments. Forget “say cheese”; soon it’ll be “look up and wave!”`
    },
    { type: "divider" },
    {
      type: "heading",
      content: "The Big Picture"
    },
    {
      type: "paragraph",
      content: `The future of drones isn’t about replacing humans; it’s about making our lives faster, safer, and more exciting. They’re not just gadgets in the sky anymore; they’re partners on the ground, in the field, and in our cities.`
    },
    {
      type: "paragraph",
      content: `At Roberon, we’re not just building drones; we’re building futures where the sky isn’t the limit. It’s the playground.`
    }
  ]
};

export default function DroneBlogPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <Navbar />

      {/* Floating Orbs and Neon Glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {[...Array(8)].map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full"
            style={{
              top: `${10 + Math.random() * 75}%`,
              left: `${Math.random() * 90}%`,
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              background: `radial-gradient(circle at 70% 30%, #f87171bb 0%, #991b1b00 80%)`,
              filter: "blur(12px)",
              zIndex: 0,
              opacity: 0.17 + Math.random() * 0.18,
            }}
            initial={{ scale: 0.7, y: 40 * (Math.random() - 0.5) }}
            animate={{ scale: 1.1, y: 0 }}
            transition={{ duration: 12 + Math.random() * 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* 3D-Like Drone Illustration */}
      <div className="relative z-10 flex flex-col items-center pt-20 pb-10">
        <motion.div
          initial={{ y: -60, scale: 0.85 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          <div className="drop-shadow-neon">
            <svg width="150" height="80" viewBox="0 0 120 60" fill="none">
              {/* Drone arms */}
              <rect x="10" y="27" width="100" height="6" rx="3" fill="#ef4444" fillOpacity="0.5"/>
              {/* Drone body */}
              <ellipse cx="60" cy="30" rx="24" ry="12" fill="#fff" fillOpacity="0.12"/>
              <ellipse cx="60" cy="30" rx="14" ry="8" fill="#ef4444" fillOpacity="0.35"/>
              {/* Lenses */}
              <ellipse cx="60" cy="32" rx="4.5" ry="2.2" fill="#fff" fillOpacity="0.8"/>
              {/* Props */}
              <ellipse cx="18" cy="30" rx="7" ry="7" fill="#991b1b" fillOpacity="0.9" />
              <ellipse cx="102" cy="30" rx="7" ry="7" fill="#991b1b" fillOpacity="0.9" />
              {/* Glow */}
              <ellipse cx="60" cy="45" rx="18" ry="6" fill="#ef4444" fillOpacity="0.15"/>
            </svg>
          </div>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-[#f87171] via-[#facc15] to-[#c026d3] bg-clip-text text-transparent mt-8 drop-shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {blog.title}
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-3 mt-4 text-gray-400 text-sm">
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
            {blog.readTime}
          </span>
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            {blog.author}
          </span>
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>
        <div className="mb-8 mt-2">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-tr from-[#f87171]/30 to-[#c026d3]/30 text-[#f87171] font-bold text-xs tracking-widest uppercase border border-[#f87171]/40 shadow-lg">
            Robotics
          </span>
        </div>
        <a
          href={blog.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#0A66C2] to-[#6366f1] hover:from-[#2563eb] hover:to-[#0ea5e9] text-white font-extrabold px-6 py-3 rounded-xl shadow-lg text-lg transition-all duration-300 border-2 border-[#0A66C2]/40"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>Read on LinkedIn</span>
        </a>
      </div>

      {/* Main Content Card */}
      <main className="relative z-10 px-3 pb-20 flex justify-center">
        <motion.article
          className="w-full max-w-3xl bg-gradient-to-br from-white/5 via-[#0f172a]/60 to-[#111827]/90 border border-[#f87171]/20 shadow-2xl rounded-3xl px-6 md:px-12 py-10 md:py-14 backdrop-blur-2xl"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, type: "spring" }}
        >
          {blog.sections.map((section, i) =>
            section.type === "heading" ? (
              <h2 key={i} className="text-2xl md:text-3xl font-extrabold mt-10 mb-3 bg-gradient-to-r from-[#f87171] via-[#facc15] to-[#c026d3] bg-clip-text text-transparent drop-shadow">
                {section.content}
              </h2>
            ) : section.type === "divider" ? (
              <div key={i} className="my-8 border-t border-dashed border-[#f87171]/30" />
            ) : (
              <p key={i} className="text-lg md:text-xl text-gray-100 mt-4 leading-relaxed">{section.content}</p>
            )
          )}
        </motion.article>
      </main>
    </div>
  );
}