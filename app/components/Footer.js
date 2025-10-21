'use client';
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { LuMessageSquareMore } from "react-icons/lu";

const Footer = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'https://mail.google.com/mail/?view=cm&to=sales@roberon.com&subject=Inquiry from Website&body=Hello Roberon Team,';
  };

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-black text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 bg-red-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Contact + Follow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Section */}
            <div className="space-y-4">
              <h2 className="text-red-500 text-2xl font-bold mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </h2>
              <div className="space-y-3">
                {/* Email - Opens default email client */}
                <a
                  href="mailto:sales@roberon.com?subject=Inquiry from Website&body=Hello Roberon Team,"
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors cursor-pointer group"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>sales@roberon.com</span>
                </a>

                {/* WhatsApp (Phone) */}
                <a
                  href="https://wa.me/917676454055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 7676454055</span>
                </a>
              </div>
            </div>

            {/* Follow Section */}
            <div className="space-y-4">
              <h2 className="text-red-500 text-2xl font-bold mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Follow
              </h2>
              <div className="flex space-x-4">
                <Link 
                  href="https://www.instagram.com/roberon_technologies?igsh=eGc2aHhtMjVtcG1u" 
                  target="_blank" 
                  className="group cursor-target relative w-12 h-12 bg-zinc-800/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <FaInstagram size={24} />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    roberon_technologies
                  </span>
                </Link>
                
                <Link 
                  href="https://www.linkedin.com/company/roberon/" 
                  target="_blank"
                  className="group cursor-target relative w-12 h-12 bg-zinc-800/50 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <FaLinkedin size={24} />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    roberon
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Middle Column - Location (Address Only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-red-500 text-2xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location
            </h2>
            <div className="space-y-2 text-gray-300 leading-relaxed">
              <p className="font-semibold text-gray-200">Roberon Technologies</p>
              <p>Basavanapura road,</p>
              <p>Krishnarajapuram,</p>
              <p>Bangalore, Karnataka</p>
              <p>India, 560036</p>
            </div>
          </motion.div>

          {/* Right Column - Map Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-red-500 text-2xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Find Us
            </h2>
            
            {/* Google Map Embed - Updated with correct Roberon Technologies location */}
            <div className="rounded-lg overflow-hidden border border-zinc-700/50 hover:border-red-500/50 transition-colors">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.364195367063!2d77.7039991!3d13.0124643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae115e7b26199b%3A0xb80331e7d1913e0d!2sRoberon%20Technologies!5e0!3m2!1sen!2sin!4v1760542962371!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-300"
              ></iframe>
            </div>
            
            {/* View on Google Maps Link */}
            <a
              href="https://maps.app.goo.gl/faFFv8etRi9TZjjs7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View on Google Maps
            </a>
          </motion.div>
        </div>

        {/* Contact Us Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-zinc-900/30 backdrop-blur-sm rounded-2xl border border-zinc-800/50">
            <p className="text-gray-300 text-lg">Ready to start your next project?</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r cursor-target from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 flex items-center gap-2"
              >
                <LuMessageSquareMore size={20} />
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-8"></div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            All rights reserved © 2025 by Roberon
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;