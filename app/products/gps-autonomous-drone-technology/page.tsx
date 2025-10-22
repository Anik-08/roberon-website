'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdOutlineGpsFixed } from "react-icons/md";
import { IoMdPower } from "react-icons/io";
import { FaRegMap } from "react-icons/fa6";
import { MdOutlineSensors } from "react-icons/md";
import { IoIosBulb } from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
import Link from 'next/link';

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative">
      <Navbar />

      {/* HERO */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            aria-labelledby="hero-title"
          >
            <p className="text-sm text-red-400 font-medium">Featured Project</p>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
              GPS-Denied Autonomous Navigation Drone
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl">
              When GPS fails, intelligence takes over.
            </p>

            <p className="text-base text-gray-300 max-w-2xl">
              Our R&D team built an end-to-end autonomy stack that lets drones sense,
              map, and navigate without relying on satellite signals — achieving
              centimeter-level localization in complex, dynamic environments.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#demo"
                className="inline-flex items-center px-5 py-3 bg-red-500 hover:bg-red-600 text-black font-semibold rounded-md shadow cursor-target"
              >
                Watch Demo
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-5 py-3 border border-gray-700 text-gray-200 rounded-md hover:bg-white/5 cursor-target"
              >
                Request a Demo
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Photo credit: <span className="text-gray-300 font-medium">@Sharan</span>
            </p>
          </motion.div>

          {/* Media Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl overflow-hidden shadow-lg bg-black/40 border border-white/5"
            aria-hidden={false}
          >
            {/* Wide-angle banner image or short looping video placeholder */}
            {/* Replace src and poster with production assets when available */}
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-900 relative">
              <video
                className="w-full h-full object-cover"
                src="/media/drone-hero-loop.mp4"
                poster="/media/drone-hero-poster.jpg"
                loop
                muted
                playsInline
                autoPlay
                aria-label="Drone in flight demo video"
              >
                {/* Fallback image if video isn't supported */}
                <Image
                  src="/media/drone-hero-poster.jpg"
                  alt="Wide-angle drone in flight - banner"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </video>

              <div className="absolute left-6 bottom-6 bg-black/50 px-4 py-2 rounded-md">
                <span className="text-xs text-gray-200">Autonomy in GPS-denied environments</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-20 space-y-16">
        {/* Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="text-gray-300">
              When GPS signals become unreliable or unavailable — indoors, underground,
              or in dense urban canyons — conventional autopilots lose localization
              and autonomy. This project combines visual-inertial odometry, LiDAR SLAM,
              and AI perception to enable robust navigation without external localization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <figure className="bg-black/40 rounded-md p-3">
                <Image
                  src="/media/drone-closeup.jpg"
                  alt="Close-up of drone sensors and compute module"
                  width={100}
                  height={100}
                  className="w-full h-40 object-cover rounded-md"
                />
                <figcaption className="text-xs text-gray-400 mt-2">
                  Close-up: sensors & compute module
                </figcaption>
              </figure>

              <figure className="bg-black/40 rounded-md p-3">
                <Image
                  src="/media/drone-warehouse.jpg"
                  alt="Drone operating in a warehouse — mapping environment"
                  width={100}
                  height={100}
                  className="w-full h-40 object-cover rounded-md"
                />
                <figcaption className="text-xs text-gray-400 mt-2">
                  Drone mapping a warehouse corridor
                </figcaption>
              </figure>
            </div>
          </motion.div>

          {/* Quick Specs Panel */}
          <motion.aside
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-white/3 to-white/2 rounded-lg p-6 border border-white/5"
            aria-labelledby="specs-title"
          >
            <h3 id="specs-title" className="text-lg font-semibold mb-3">
              System Highlights
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <strong className="text-white">Localization:</strong> Visual-inertial odometry + LiDAR SLAM
              </li>
              <li>
                <strong className="text-white">Perception:</strong> AI-based obstacle & dynamic object detection
              </li>
              <li>
                <strong className="text-white">Sensors:</strong> LiDAR, stereo/mono camera, IMU, ultrasonic
              </li>
              <li>
                <strong className="text-white">Accuracy:</strong> Centimeter-level in structured environments
              </li>
              <li>
                <strong className="text-white">Runtime:</strong> Onboard compute for real-time decisions
              </li>
            </ul>
          </motion.aside>
        </section>

        {/* Key Features */}
        <section>
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6"
          >
            Key Features
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Complete GPS Independence',
                desc: 'Reliable navigation in tunnels, indoors, and dense urban areas.',
                icon: <MdOutlineGpsFixed size={24} />
              },
              {
                title: 'AI-Powered Perception',
                desc: 'Real-time detection of obstacles and moving objects with robust inference.',
                icon: <IoMdPower size={24} />
              },
              {
                title: 'SLAM-Based Mapping',
                desc: 'Builds live 3D maps for accurate localization and planning.',
                icon: <FaRegMap size={24} />
              },
              {
                title: 'Multi-Sensor Fusion',
                desc: 'LiDAR + camera + IMU + ultrasonic for robust situational awareness.',
                icon: <MdOutlineSensors size={24} />
              },
              {
                title: 'Autonomous Decision-Making',
                desc: 'Onboard planning, path correction and adaptive mission execution.',
                icon: <IoIosBulb size={24} />
              },
              {
                title: 'Research Ready',
                desc: 'Modular stack for benchmarking SLAM and AI navigation systems.',
                icon: <GiArchiveResearch size={24} />
              }
            ].map((f, idx) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="bg-white/3 border border-white/5 rounded-lg p-5"
                role="article"
                aria-labelledby={`feature-${idx}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none text-red-500" style={{ width: 24, height: 24 }}>{f.icon}</div>
                  <div>
                    <h4 id={`feature-${idx}`} className="font-semibold text-white">
                      {f.title}
                    </h4>
                    <p className="text-sm text-gray-300 mt-1">{f.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Who Can Buy / Use */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Who can benefit</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Search & Rescue',
                desc: 'Operate in disaster zones where GPS is unreliable or jammed.'
              },
              {
                title: 'Industrial Inspection',
                desc: 'Inspect tunnels, warehouses, and power plants without external localization.'
              },
              {
                title: 'Defence Reconnaissance',
                desc: 'Recon in hostile or GPS-jammed environments with autonomous navigation.'
              },
              {
                title: 'Infrastructure Mapping',
                desc: 'Map structures and interiors where satellite localization is not available.'
              },
              {
                title: 'Research & Academia',
                desc: 'A modular platform for SLAM and AI navigation research.'
              }
            ].map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="p-5 rounded-lg bg-black/40 border border-white/5"
              >
                <h4 className="font-semibold text-white">{p.title}</h4>
                <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Demo Video Section */}
        <section id="demo" className="space-y-4">
          <h3 className="text-2xl font-bold">Watch the Drone in Action</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="bg-black/50 rounded-lg overflow-hidden border border-white/5">
              {/* Embedded demo video with SLAM overlays — replace src with production asset */}
              <video
                src="/media/drone-demo.mp4"
                poster="/media/drone-demo-poster.jpg"
                controls
                className="w-full h-72 lg:h-96 object-cover"
                aria-label="Demo video showing autonomous mapping and obstacle navigation"
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <p className="text-gray-300">
                  Short demo: autonomous mapping, obstacle avoidance, and path replanning in a GPS-denied space.
                </p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="p-5 rounded-lg bg-black/40 border border-white/5">
                <h4 className="font-semibold">Video Notes</h4>
                <ul className="text-gray-300 mt-3 list-disc list-inside text-sm space-y-2">
                  <li>Visual overlays show live SLAM map generation and estimated pose.</li>
                  <li>The demo highlights dynamic obstacle handling and path replanning.</li>
                  <li>All computation runs on the drone’s onboard computer for real-time decisions.</li>
                </ul>
              </div>

              <div id="contact" className="p-5 rounded-lg bg-black/40 border border-white/5">
                <h4 className="font-semibold">Get Involved</h4>
                <p className="text-sm text-gray-300 mt-2">
                  Interested in a pilot, integration, or research collaboration? Reach out to our team to schedule a demo or request technical specs.
                </p>
                <div className="mt-4 flex gap-3">
                  <Link href="/contact" className="px-4 py-2 bg-red-500 rounded-md font-semibold text-black cursor-target">
                    Contact Sales
                  </Link>
                  {/* <a href="/assets/specs.pdf" className="px-4 py-2 border border-white/10 rounded-md text-gray-200">
                    Download Specs
                  </a> */}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* Decorative subtle background grid for depth (purely visual) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Autonomous Systems Lab — GPS-Denied Navigation Project
      </footer>
    </div>
  );
}