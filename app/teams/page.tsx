'use client';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    linkedin?: string;
    instagram?: string;
    mail?: string;
  };
}

interface Intern {
  id: string;
  name: string;
  designation: string;
  image: string;
  social: {
    linkedin?: string;
    instagram?: string;
    
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Vijaya Vitthal",
    role: "Founder",
    image: "/team/vijay.jpg",
    bio: "A visionary technologist leading Roberon's innovations in robotics, drones, and Industry 5.0 automation. Vijay drives product development with hands-on expertise in 3D printing and advanced engineering systems.",
    skills: ["Robotics Visionary", "Technical Innovator", "Industry 5.0 Visionary"],
    social: {
      linkedin: "https://www.linkedin.com/in/vijayavitthal",
      instagram: "https://www.instagram.com/vijaya_vitthal_offical/",
      mail: "ceo@roberon.com" 
    }
  },
  {
    id: "member-2",
    name: "Bharath Kumar S",
    role: "Founder",
    image: "/team/bharath.jpg",
    bio: "The strategic mind behind Roberon's growth, finance, and business development. His leadership ensures that innovation aligns with market needs and sustainable expansion.",
    skills: ["Strategic Thinker", "Community Connector", "Growth Architect"],
    social: {
      linkedin: "www.linkedin.com/in/bharathsbk",
      // instagram: "https://www.instagram.com/bharath_s_bk/",
      mail: "sbkbharathkumar03@gmail.com"
    }
  },
  {
    id: "member-3",
    name: "Vishnu V",
    role: "Founder",
    image: "/team/vishnu.jpg",
    bio: "A passionate innovator focused on electronics, drone systems, & satellite technologies. He spearheads Roberon's research initiatives & cutting-edge solutions that bridge science with real-world applications.",
    skills: ["Research-Driven Creator", "Futuristic Technologist", "Electronics & Drone Specialist"],
    social: {
      linkedin: "https://www.linkedin.com/in/ftvishnu-v?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // instagram: "https://www.instagram.com/ftvishnu_v/?igsh=MWZkOGV0bGM4eWNvZA==",
      mail: "vishnuvenugopal1978@gmail.com"
    }
  }
];

const interns: Intern[] = [
  {
    id: "intern-1",
    name: "Shreya Upadhyay",
    designation: "Business Development Intern",
    image: "/team/intern1.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/shreya-upadhyay-055367320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/rudrashankar_0406?igsh=MTZqNzllMThtYnA4eA=="
    }
  },
  // {
  //   id: "intern-2",
  //   name: "S Nishaanth",
  //   designation: "Electronics Engineer Intern",
  //   image: "/team/intern2.jpg",
  //   social: {
  //     linkedin: "https://linkedin.com/in/rahulverma",
  //     instagram: "https://instagram.com/rahulverma"
  //   }
  // },
  {
    id: "intern-3",
    name: "Daksha K Gowda",
    designation: "Design Intern",
    image: "/team/daksha.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/dakshakgowda",
      instagram: "https://www.instagram.com/the_red_dk"
    }
  },
  {
    id: "intern-4",
    name: "Sharan Tej",
    designation: "Media and Content Creator Intern",
    image: "/team/intern4.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/sharan-tej-1237b32bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/sharan_tej07?igsh=aDlyOTBsNDJhcm9x"
    }
  },
  {
    id: "intern-5",
    name: "Anik Tiwary",
    designation: "Web Developer Intern",
    image: "/team/intern5.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/anik-tiwary-4a1161292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/anik_tiwary08/"
    }
  },
  {
    id: "intern-6",
    name: "Neelakshi Yemde",
    designation: "Social Media Manager Intern",
    image: "/team/intern6.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/neelakshiyemde",
      instagram: "https://www.instagram.com/ny._.neelsy"
    }
  },
  {
    id: "intern-7",
    name: " Punith S",
    designation: "3D Design Intern",
    image: "/team/intern7.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/punith-s-484b37323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/punithsuresh18?igsh=MWV0czc0aW90eWUwOQ=="
    }
  },
  {
    id: "intern-8",
    name: "Jaijan S",
    designation: "Operations Intern",
    image: "/team/intern8.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/jaijan-s-975210300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/jaijan_jj?igsh=MWZkOGV0bGM4eWNvZA%3D%3D&utm_source=qr"
    }
  }
];

export default function TeamPage() {
  const teamSectionRef = useRef(null);
  const internSectionRef = useRef(null);
  const isTeamInView = useInView(teamSectionRef, { once: true, margin: "-100px" });
  const isInternInView = useInView(internSectionRef, { once: true, margin: "-100px" });

  return (
    <div className="relative w-full bg-black min-h-screen">
      {/* Hero Section */}
      <Navbar />
      {/* <section className="relative w-full bg-black pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>

        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Dream Team
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Meet the talented individuals driving innovation and excellence in 3D printing technology
          </motion.p>
        </div>
      </section> */}

      {/* Core Team Section */}
      <section
        ref={teamSectionRef}
        className="relative w-full bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isTeamInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full text-red-500 text-sm font-semibold tracking-wider">
                CORE TEAM
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Experts
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A passionate team of innovators dedicated to pushing the boundaries of technology, creativity, and purposeful design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 transition-all duration-500">
                  <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="p-8">
                    <div className="relative mb-6">
                      <div className="relative w-28 h-28 mx-auto">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 blur-md"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-red-500/70 transition-all duration-500 shadow-lg shadow-red-500/20">
                          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                          <Image src={member.image} alt={member.name} width={112} height={112} className="object-cover w-full h-full" />
                          </div>
                        </div>
                        
                        <div className="absolute bottom-1 right-1 w-7 h-7 bg-black rounded-full flex items-center justify-center">
                          <div className="w-5 h-5 bg-emerald-500 rounded-full border-2 border-black">
                            <motion.div
                              className="w-full h-full bg-emerald-400 rounded-full"
                              animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-red-500 font-medium text-sm uppercase tracking-widest">
                        {member.role}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed min-h-[3rem]">
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mt-6 mb-6">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-zinc-800/80 text-gray-300 text-xs rounded-lg border border-zinc-700/50 hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-6"></div>

                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-zinc-800/80 hover:bg-blue-600 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-target"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                      )}
                      {member.social.instagram && (
                        <Link
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-zinc-800/80 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-pink-500/50 cursor-target"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                      )}
                      {member.social.mail && (
                        <a
                          href={`https://mail.google.com/mail/?view=cm&to=${member.social.mail}`}
                          className="w-10 h-10 bg-zinc-800/80 hover:bg-red-600 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-red-500/50 cursor-target hover:shadow-lg hover:shadow-red-500/20"
                        >
                            <IoMailOutline className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interns Section */}
      <section
        ref={internSectionRef}
        className="relative w-full bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <motion.div
          className="absolute top-40 left-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInternInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInternInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full text-red-500 text-sm font-semibold tracking-wider">
                INTERNS
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Rising{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Stars
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Talented interns bringing fresh perspectives and energy to our team
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
            {interns.map((intern, index) => (
              <motion.div
                key={intern.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInternInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group relative h-full"
              >
                <div className="relative bg-gradient-to-b from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800/50 hover:border-red-500/40 transition-all duration-500 p-6 min-h-[280px]">
                  <div className="relative mb-4">
                    <div className="relative w-20 h-20 mx-auto">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 blur-sm"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-red-500/50 transition-all duration-500">
                        <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                        <Image src={intern.image} alt={intern.name} width={80} height={80} className="object-cover w-full h-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {intern.name}
                    </h3>
                    <p className="text-red-500/90 font-medium text-xs tracking-wide">
                      {intern.designation}
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-4"></div>

                  <div className="flex justify-center gap-2">
                    {intern.social.linkedin && (
                      <Link
                        href={intern.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-zinc-800/80 hover:bg-blue-600 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 cursor-target"
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </Link>
                    )}
                    {intern.social.instagram && (
                      <Link
                        href={intern.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-zinc-800/80 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-pink-500/50 cursor-target"
                      >
                        <FaInstagram className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}