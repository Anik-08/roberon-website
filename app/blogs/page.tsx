'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
    image?: string;
    linkedinUrl: string;
}

export default function Blog() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [mounted, setMounted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Sample blog posts data
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Drones: Our Everyday Sidekicks",
            excerpt: "How drones are evolving from sci-fi gadgets to indispensable partners in daily life — from instant deliveries to saving lives.",
            author: "Tech Team",
            date: "2024-09-15",
            category: "Drones",
            readTime: "5 min read",
            linkedinUrl: "https://www.linkedin.com/pulse/future-drones-everyday-life-from-sci-fi-why-roberon-ccbpf",
            image: "/images/blog_drone.jpeg"
        }
    ];

    const categories = ['All', 'Drones', 'Robotics', 'Tutorials'];

    const filteredPosts = selectedCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory);

    const handleReadMore = (linkedinUrl: string) => {
        window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    };

    useEffect(() => {
        setMounted(true);
        
        const updateWindowSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateWindowSize();
        window.addEventListener('resize', updateWindowSize);
        return () => window.removeEventListener('resize', updateWindowSize);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <Navbar />
                <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="text-5xl md:text-7xl font-bold mb-4 text-white">
                            Loading...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Navbar />
            
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Animated grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-60"
                            initial={{ 
                                x: Math.random() * windowSize.width, 
                                y: windowSize.height + 10,
                                opacity: 0 
                            }}
                            animate={{ 
                                y: -10, 
                                opacity: [0, 1, 1, 0],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{ 
                                duration: 8 + Math.random() * 4, 
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                    <h1 className="text-5xl md:text-7xl font-bold mb-10 text-center">
                        <span className="text-white">Our </span>
                        <span className="bg-gradient-to-r from-red-500 to-[#610202] bg-clip-text text-transparent">Blog</span>
                    </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                            Insights, tutorials, and stories from the world of robotics and AI
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-12 overflow-visible"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Blog Posts Grid */}
                    <motion.div
                        className="flex flex-col gap-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-red-500 transition-all duration-300 group"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3)' }}
                            >
                                {/* Image Placeholder with Robot/Tech Theme */}
                                <div className="h-48 bg-gradient-to-br from-red-900/40 via-gray-900 to-black relative overflow-hidden">
                                    <div className="h-48 w-full relative overflow-hidden bg-black">
                                    <Image
                                        src={post.image || "/placeholder.jpg"}
                                        alt={post.title}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 600px"
                                        priority={index === 0}
                                    />
                                    {/* LinkedIn badge, overlays, etc. */}
                                    </div>

                                    {/* Glowing Orb Effect */}
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-500/30 rounded-full blur-3xl"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.3, 0.5, 0.3],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* Shine Effect on Hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    {/* LinkedIn Badge */}
                                    <div className="absolute top-3 right-3 bg-[#0A66C2] p-2 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category Badge */}
                                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500/20 text-red-400 rounded-full mb-3">
                                        {post.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                                {post.author}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                    </div>

                                    {/* For 1st Blog: Two buttons */}
                                    {post.id === 1 ? (
                                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                            <a
                                                href="/blogs/drone"
                                                className="flex-1 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 cursor-target"
                                            >
                                                <span>Read on Website</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"/>
                                                </svg>
                                            </a>
                                            <button
                                                className="flex-1 bg-[#0A66C2] hover:bg-[#085299] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-target"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleReadMore(post.linkedinUrl);
                                                }}
                                            >
                                                <span>Read on LinkedIn</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    ) : (
                                        // For others, just LinkedIn button
                                        <motion.button
                                            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleReadMore(post.linkedinUrl);
                                            }}
                                        >
                                            <span>Read More on LinkedIn</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                            <motion.svg 
                                                className="w-4 h-4" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </motion.svg>
                                        </motion.button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {filteredPosts.length === 0 && (
                        <motion.div
                            className="text-center py-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className="text-2xl text-gray-500">No posts found in this category</p>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
}