'use client';
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f82cf446-8bdb-49ec-a23d-ca27ee95387f', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen"
    >
        <Navbar />  
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
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
              GET IN TOUCH
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Us
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Get in touch with our team and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-red-500/50 transition-all duration-500">
              {/* Top Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
              <div className="p-8 sm:p-10 lg:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed cursor-target"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg text-emerald-400 text-sm"
                  >
                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
                  >
                    ✗ Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-2xl border border-zinc-800/50 p-8 hover:border-red-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <MdOutlineMailOutline className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">info@roberon.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <FiPhone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 7676454055</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <FaLocationDot className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-white font-medium">
                      Umesh Educational Trust Cambridge IT,<br />
                      Basavanapura road, Krishnarajapuram, Bangalore,<br />
                      Bangalore North, Karnataka, India, 560036
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-red-500/50 transition-all duration-500">
              <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
                
                {/* Map Container */}
                <div className="relative h-64 bg-zinc-800 rounded-lg overflow-hidden">
                  {/* Replace this iframe with your actual map embed code */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.364195367063!2d77.7039991!3d13.0124643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae115e7b26199b%3A0xb80331e7d1913e0d!2sRoberon%20Technologies!5e0!3m2!1sen!2sin!4v1760542962371!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg transition-all duration-500"
                  ></iframe>
                  
                  {/* Custom Map Overlay (for styling) */}
                  <div className="absolute inset-0 bg-red-500/10 pointer-events-none rounded-lg"></div>
                </div>
                
                <p className="text-gray-400 text-sm mt-4">
                  Click on the map to open in Google Maps for directions
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50">
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <p className="text-gray-400">Stay connected and get the latest updates</p>
            
            <div className="flex gap-4">
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/roberon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-800/80 hover:bg-blue-600 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-target"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/roberon_technologies?igsh=eGc2aHhtMjVtcG1u"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-800/80 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 cursor-target"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}