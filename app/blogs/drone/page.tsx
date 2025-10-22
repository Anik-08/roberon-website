'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * app/blog/page.tsx
 * Refined, professional layout for the blog page.
 * - Removed colorful/gradient text and decorative extras
 * - Cleaner typographic scale, neutral palette, improved spacing
 * - Kept content identical; only visual/structural changes applied
 */

const blog = {
  title: "Drones: Our Everyday Sidekicks",
  date: "2024-09-15",
  author: "Tech Team",
  readTime: "5 min read",
  linkedinUrl: "https://www.linkedin.com/pulse/future-drones-everyday-life-from-sci-fi-why-roberon-ccbpf",
  heroImage: "/images/drone-hero.jpg",
  sections: [
    { type: "paragraph", content: `Remember when drones felt like something straight out of a sci-fi movie? A buzzing gadget flown by tech geeks or used in action films? Fast forward to today, and they’re slowly turning into our everyday companions, delivering packages, saving lives, and even filming your best friend’s wedding from the sky.` },
    { type: "paragraph", content: `The real question isn’t if drones will be everywhere. It’s how soon.` },
    { type: "paragraph", content: `At Roberon, we like to think of drones as less of a machine and more of a sidekick, giving us superpowers we didn’t know we needed. Let’s take a quick flight into the future.` },
    { type: "divider" },
    { type: "heading", content: "Coffee, Groceries, and Instant Gratification" },
    { type: "paragraph", content: `Imagine this: you order your coffee beans in the morning, and instead of a delivery person zigzagging through traffic, a drone buzzes over your balcony minutes later. Faster than you can say “double shot espresso”. That’s the future of delivery: swift, seamless, and sky-high.` },
    { type: "divider" },
    { type: "heading", content: "First Responders with Propellers" },
    { type: "paragraph", content: `Emergencies are stressful, but drones are turning into unexpected heroes. They can zip through traffic to drop off medicines, scan disaster-hit areas, or deliver defibrillators faster than an ambulance stuck at a red light. Think of them as the “flying paramedics” of tomorrow.` },
    { type: "divider" },
    { type: "heading", content: "Farming from the Clouds" },
    { type: "paragraph", content: `Drones in agriculture? Absolutely. They’re the new farmhands: flying over fields, spotting crop diseases, and telling farmers where to water (or not). The result: healthier crops, less waste, and smarter farming. Feeding billions suddenly looks a lot more doable with wings on our side.` },
    { type: "divider" },
    { type: "heading", content: "Cities That Think in 3D" },
    { type: "paragraph", content: `As cities grow taller, so do their problems. Traffic jams, crumbling bridges, crowded events, and drones are stepping up as urban problem-solvers. From monitoring traffic flows to inspecting skyscrapers, they’re helping build safer, smarter cities… without anyone having to hang dangerously off a ledge.` },
    { type: "divider" },
    { type: "heading", content: "Lights, Camera, Propellers!" },
    { type: "paragraph", content: `On the creative front, drones are unlocking Hollywood-level magic for everyday storytellers. From dreamy wedding shots to epic travel vlogs, anyone can capture cinematic moments. Forget “say cheese”; soon it’ll be “look up and wave!”` },
    { type: "divider" },
    { type: "heading", content: "The Big Picture" },
    { type: "paragraph", content: `The future of drones isn’t about replacing humans; it’s about making our lives faster, safer, and more exciting. They’re not just gadgets in the sky anymore; they’re partners on the ground, in the field, and in our cities.` },
    { type: "paragraph", content: `At Roberon, we’re not just building drones; we’re building futures where the sky isn’t the limit. It’s the playground.` }
  ]
};

export default function DroneBlogPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Navbar />

      {/* HERO */}
      <header className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 shadow">
            {blog.heroImage ? (
              <div className="relative h-64 md:h-80 lg:h-96">
                <Image src={blog.heroImage} alt="Drone hero" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                  <motion.h1
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white"
                    id="article-title"
                  >
                    {blog.title}
                  </motion.h1>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {blog.readTime}
                    </span>

                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-neutral-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      {blog.author}
                    </span>

                    <time className="text-neutral-400">{new Date(blog.date).toLocaleDateString()}</time>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8">
                <h1 className="text-3xl font-semibold">{blog.title}</h1>
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm">
            <a
              href={blog.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-800 px-3 py-2 text-neutral-100 border border-neutral-700 hover:bg-neutral-700 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z"/>
              </svg>
              Read on LinkedIn
            </a>

            <span className="text-neutral-400">•</span>

            <span className="text-neutral-400">Category: <span className="ml-1 font-medium text-neutral-200">Robotics</span></span>
          </div>
        </div>
      </header>

      {/* ARTICLE */}
      <main className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8 md:p-12 prose prose-invert prose-lg text-neutral-200"
          >
            {blog.sections.map((section, idx) => {
              if (section.type === 'heading') {
                return (
                  <h2 key={idx} className="mt-10 mb-3 text-2xl font-semibold text-neutral-100">
                    {section.content}
                  </h2>
                );
              }

              if (section.type === 'divider') {
                return <hr key={idx} className="my-8 border-neutral-700/60" />;
              }

              return (
                <p key={idx} className="mt-6 leading-relaxed text-neutral-300">
                  {section.content}
                </p>
              );
            })}

            {/* Subtle call-to-action */}
            <div className="mt-12 border border-neutral-700 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-neutral-900/40">
              <div>
                <h3 className="text-lg font-semibold text-neutral-100">Interested in a demo?</h3>
                <p className="text-sm text-neutral-300 mt-1">See our GPS-denied autonomy stack in a live demo or request technical details.</p>
              </div>
              <div className="flex gap-3">
                <a href="/products/gps-autonomous-drone-technology" className="inline-flex items-center px-4 py-2 rounded-md bg-neutral-100 text-neutral-900 font-medium border border-neutral-200 hover:bg-neutral-50 transition">
                  Product
                </a>
                <a href="/contact" className="inline-flex items-center px-4 py-2 rounded-md border border-neutral-700 text-neutral-200 hover:bg-neutral-800 transition">
                  Contact
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-6 pb-12 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Roberon — Built with care
      </footer>
    </div>
  );
}