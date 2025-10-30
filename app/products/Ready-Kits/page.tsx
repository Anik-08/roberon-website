'use client';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

// All kits in one array with categories
const allKits = [
    // Beginner Level
    { name: "Line Follower Robot Kit", specs: ["5 array IR sensor", "Runs on PID algorithm", "Manual & code in box"], category: "Beginner", difficulty: 1 },
    { name: "Obstacle Avoidance Robot", specs: ["Ultrasonic sensor based", "Auto navigation system", "Pre-programmed Arduino"], category: "Beginner", difficulty: 1 },
    { name: "Light Follower Bot", specs: ["LDR sensor array", "Solar tracking capability", "Complete assembly guide"], category: "Beginner", difficulty: 1 },
    { name: "Bluetooth Controlled Car", specs: ["HC-05 Bluetooth module", "Android app included", "4-wheel chassis base"], category: "Beginner", difficulty: 1 },
    { name: "Voice Controlled Robot", specs: ["Voice recognition app", "Multi-command support", "Wireless control range 10m"], category: "Beginner", difficulty: 1 },
    { name: "Simple Ultrasonic Distance Meter", specs: ["LCD display included", "Range up to 4 meters", "Portable design"], category: "Beginner", difficulty: 1 },
    { name: "Gesture Controlled Robot", specs: ["MPU6050 gyro sensor", "Hand gesture recognition", "Wireless operation"], category: "Beginner", difficulty: 1 },
    { name: "Smart Street Light System", specs: ["Auto ON/OFF with LDR", "Energy efficient design", "Real-world application"], category: "Beginner", difficulty: 1 },
    { name: "Rain Detection System", specs: ["Moisture sensor based", "Buzzer alert system", "IoT integration ready"], category: "Beginner", difficulty: 1 },
    { name: "Sound / Clap Controlled Light", specs: ["Sound sensor module", "Clap ON/OFF feature", "Easy DIY assembly"], category: "Beginner", difficulty: 1 },
    
    // Intermediate Level
    { name: "Robotic Arm Kit", specs: ["3D printed components", "4-DOF servo control", "Arduino based control"], category: "Intermediate", difficulty: 2 },
    { name: "Pick and Place Robot", specs: ["Wireless RF control", "Gripper mechanism included", "Industrial simulation"], category: "Intermediate", difficulty: 2 },
    { name: "4-Wheel Drive Smart Car", specs: ["Bluetooth & Wi-Fi ready", "Mobile app control", "All-terrain capability"], category: "Intermediate", difficulty: 2 },
    { name: "Maze Solver Robot", specs: ["IR sensor navigation", "Logic-based pathfinding", "Memory algorithm"], category: "Intermediate", difficulty: 2 },
    { name: "ESP32 Wi-Fi Controlled Bot", specs: ["Web-based dashboard", "Real-time control", "IoT cloud compatible"], category: "Intermediate", difficulty: 2 },
    { name: "IoT Home Automation Kit", specs: ["Wi-Fi module included", "4 relay control board", "Smartphone integration"], category: "Intermediate", difficulty: 2 },
    { name: "Temperature Monitoring System", specs: ["IoT dashboard access", "DHT11 sensor included", "Alert notifications"], category: "Intermediate", difficulty: 2 },
    { name: "Fire Detection Robot", specs: ["Flame sensor array", "Auto extinguisher system", "Emergency alert feature"], category: "Intermediate", difficulty: 2 },
    { name: "Bluetooth Tank Bot", specs: ["Metal chassis design", "Heavy-duty motors", "Off-road capability"], category: "Intermediate", difficulty: 2 },
    { name: "Arduino Smart Dustbin", specs: ["Auto-open lid system", "Ultrasonic sensor based", "Servo mechanism"], category: "Intermediate", difficulty: 2 },
    { name: "Motion Following Bot", specs: ["PIR sensor tracking", "Human detection system", "Auto-follow mode"], category: "Intermediate", difficulty: 2 },
    { name: "Line + Obstacle Dual Mode", specs: ["Switchable operation modes", "Multi-sensor integration", "Advanced navigation"], category: "Intermediate", difficulty: 2 },
    { name: "Voice Controlled Robotic Arm", specs: ["Speech recognition", "Multi-axis control", "Custom voice commands"], category: "Intermediate", difficulty: 2 },
    { name: "RFID Door Lock System", specs: ["RFID card reader", "Secure access control", "Multiple user support"], category: "Intermediate", difficulty: 2 },
    { name: "Smart Parking System", specs: ["IR slot detection", "LED indicator display", "Automated barrier gate"], category: "Intermediate", difficulty: 2 },
    
    // Advanced Level
    { name: "ESP32 Mini Drone", specs: ["Brushless motor setup", "Flight controller included", "Wi-Fi telemetry"], category: "Advanced", difficulty: 3 },
    { name: "Toothpick Nano FPV Drone", specs: ["Ultra-lightweight frame", "FPV camera included", "Acro mode capable"], category: "Advanced", difficulty: 3 },
    { name: "Wi-Fi Controlled FPV Drone", specs: ["Live camera streaming", "ESP32-CAM integration", "Mobile app control"], category: "Advanced", difficulty: 3 },
    { name: "Gesture Controlled Drone", specs: ["Hand gesture navigation", "MPU6050 sensor", "Stable flight mode"], category: "Advanced", difficulty: 3 },
    { name: "Self-Balancing Robot", specs: ["MPU6050 + PID control", "Two-wheel design", "Auto stabilization"], category: "Advanced", difficulty: 3 },
    { name: "Ball Balancing Platform", specs: ["PID control system", "Servo-based tilting", "Real-time adjustment"], category: "Advanced", difficulty: 3 },
    { name: "Object Tracking Robot", specs: ["ESP32-CAM / OpenCV", "Color detection mode", "Auto-follow target"], category: "Advanced", difficulty: 3 },
    { name: "AI Face Detection Robot", specs: ["Raspberry Pi / ESP32-CAM", "Face recognition AI", "Multi-face tracking"], category: "Advanced", difficulty: 3 },
    { name: "Autonomous Delivery Bot", specs: ["GPS navigation system", "Ultrasonic obstacle avoid", "Waypoint programming"], category: "Advanced", difficulty: 3 },
    { name: "Autonomous Water Robot", specs: ["Waterproof chassis", "Propeller drive system", "Remote monitoring"], category: "Advanced", difficulty: 3 },
    { name: "Path Planning Robot", specs: ["Line mapping memory", "Route optimization", "EEPROM storage"], category: "Advanced", difficulty: 3 },
    { name: "Smart Farming Robot", specs: ["Seed sowing mechanism", "Auto watering system", "Soil moisture sensor"], category: "Advanced", difficulty: 3 },
    { name: "Surveillance Robot", specs: ["Wi-Fi camera stream", "Night vision capable", "Remote patrol mode"], category: "Advanced", difficulty: 3 },
    { name: "Drone Swarm Communication", specs: ["Multi-drone sync", "Research-grade kit", "Formation flight ready"], category: "Advanced", difficulty: 3 },
    { name: "Bionic Arm (EMG Control)", specs: ["EMG sensor based", "Muscle signal control", "Prosthetic simulation"], category: "Advanced", difficulty: 3 },
    
    // Educational / Learning
    { name: "Sensor Learning Kit", specs: ["10-in-1 sensor pack", "Arduino compatible", "Project guide included"], category: "Educational", difficulty: 1 },
    { name: "IoT Developer Kit", specs: ["ESP32 + sensor bundle", "Relay board included", "Cloud integration ready"], category: "Educational", difficulty: 2 },
    { name: "Robotics Workshop Kit", specs: ["School/college edition", "Multiple project support", "Teacher's manual included"], category: "Educational", difficulty: 1 },
    { name: "AI & Computer Vision Kit", specs: ["ESP32-CAM bundle", "OpenCV compatible", "ML model support"], category: "Educational", difficulty: 3 },
    { name: "Drone Learning Pack", specs: ["Brushless motor set", "Flight controller board", "Complete frame kit"], category: "Educational", difficulty: 2 },
    { name: "3D Printing Project Kit", specs: ["Motorized models", "STL files included", "Assembly instructions"], category: "Educational", difficulty: 2 },
    { name: "Automation Starter Pack", specs: ["Relay + sensor bundle", "NodeMCU included", "Beginner friendly"], category: "Educational", difficulty: 1 },
    { name: "DIY Arduino Car Chassis", specs: ["4-wheel base platform", "Motor driver included", "Modular design"], category: "Educational", difficulty: 1 },
    { name: "DIY Drone Frame Kit", specs: ["3D printed frame", "Motor mounts included", "Customizable design"], category: "Educational", difficulty: 2 },
    { name: "Smart Home DIY Kit", specs: ["Complete automation set", "App control ready", "Easy installation"], category: "Educational", difficulty: 2 },
];

const KITS_PER_PAGE = 12;

export default function Events() {
    const [currentPage, setCurrentPage] = useState(1);
    const [direction, setDirection] = useState(0);

    const totalPages = Math.ceil(allKits.length / KITS_PER_PAGE);
    const startIndex = (currentPage - 1) * KITS_PER_PAGE;
    const currentKits = allKits.slice(startIndex, startIndex + KITS_PER_PAGE);

    const handlePageChange = (newPage: number) => {
        setDirection(newPage > currentPage ? 1 : -1);
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const pageVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0
        })
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Navbar />
            
            {/* Simplified Static Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-white/3 rounded-full blur-[90px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            </div>

            {/* Hero Section - Simplified */}
            <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="relative inline-block mb-8">
                        <h1 className="relative text-6xl md:text-8xl font-black" style={{fontFamily: 'Telegraph', fontWeight: 400}}>
                            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                                Mini Project Kits to 
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                                Assemble
                            </span>
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-400 mb-6 font-light tracking-wide">
                        <span className="text-white">Build</span> • <span className="text-red-500">Learn</span> • <span className="text-white">Innovate</span>
                    </p>
                </div>
            </div>

            {/* Kits Grid - Simplified Animations */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentPage}
                            custom={direction}
                            variants={pageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {currentKits.map((kit, index) => (
                                <div
                                    key={`${currentPage}-${index}`}
                                    className="group relative h-full"
                                    style={{
                                        animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`
                                    }}
                                >
                                    <div className="relative h-full bg-gradient-to-br from-zinc-900/90 via-black/90 to-zinc-950/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/50 transition-all duration-300">
                                        
                                        {/* Image Container - Simplified */}
                                        <div className="relative h-56 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black overflow-hidden flex items-center justify-center">
                                            {/* Simple Icon */}
                                            <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                                                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border border-white/10 group-hover:border-red-500/50 transition-all duration-300 shadow-2xl">
                                                    <svg className="w-12 h-12 text-white/80 group-hover:text-red-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            
                                            {/* Simple gradient at bottom */}
                                            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold mb-4 min-h-[56px] leading-tight group-hover:text-red-500 transition-colors duration-300">
                                                {kit.name}
                                            </h3>
                                            
                                            {/* Specifications */}
                                            <div className="space-y-3 mb-6">
                                                {kit.specs.map((spec, specIndex) => (
                                                    <div 
                                                        key={specIndex} 
                                                        className="flex items-start text-sm text-gray-400"
                                                    >
                                                        <span className="text-red-500 mr-3 mt-0.5 font-bold">▸</span>
                                                        <span className="leading-relaxed">{spec}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Simple bottom accent */}
                                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 via-white to-red-600 group-hover:w-full transition-all duration-500" />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination - Simplified */}
                    <div className="mt-20 flex flex-col items-center gap-8">
                        <div className="text-gray-500 text-sm tracking-wider">
                            PAGE <span className="text-red-500 font-bold">{currentPage}</span> OF <span className="text-white font-bold">{totalPages}</span>
                            <span className="mx-3 text-gray-700">|</span>
                            SHOWING <span className="text-white">{startIndex + 1}-{Math.min(startIndex + KITS_PER_PAGE, allKits.length)}</span> OF <span className="text-white">{allKits.length}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="px-5 py-3 rounded-xl bg-gradient-to-r from-zinc-900 to-black border border-white/10 disabled:opacity-20 disabled:cursor-not-allowed hover:border-red-500/50 hover:scale-105 transition-all duration-300 cursor-target"
                            >
                                <svg className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            <div className="flex gap-2">
                                {[...Array(totalPages)].map((_, i) => {
                                    const pageNum = i + 1;
                                    if (
                                        pageNum === 1 ||
                                        pageNum === totalPages ||
                                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                                    ) {
                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => handlePageChange(pageNum)}
                                                className={`w-12 h-12 rounded-xl font-bold transition-all duration-300 cursor-target ${
                                                    currentPage === pageNum
                                                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30 scale-110'
                                                        : 'bg-gradient-to-r from-zinc-900 to-black border border-white/10 text-gray-400 hover:border-red-500/50 hover:text-white hover:scale-110'
                                                }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                                        return <span key={pageNum} className="flex items-center px-2 text-gray-600">...</span>;
                                    }
                                    return null;
                                })}
                            </div>
                            
                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="px-5 py-3 rounded-xl bg-gradient-to-r from-zinc-900 to-black border border-white/10 disabled:opacity-20 disabled:cursor-not-allowed hover:border-red-500/50 hover:scale-105 transition-all duration-300 cursor-target"
                            >
                                <svg className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add CSS for fade in animation */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}