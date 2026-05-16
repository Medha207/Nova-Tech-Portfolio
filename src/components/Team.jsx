import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Rudhraksh Deethi",
    role: "FULL STACK DEVELOPER",
    theme: "blue",
    isLead: true,
    img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop",
    desc: "Leads end-to-end development across frontend and backend, architecting scalable solutions with React and Node.js.",
    tech: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    name: "Deekshitha P.",
    role: "UI/UX DESIGNER",
    theme: "purple",
    isLead: false,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    desc: "Crafts intuitive, visually stunning interfaces using Figma, ensuring every product delivers an exceptional user experience.",
    tech: ["Figma", "UI Design", "Prototyping", "UX"]
  },
  {
    name: "Medha A.",
    role: "AI DEVELOPER",
    theme: "blue",
    isLead: false,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    desc: "Builds intelligent AI-powered features and machine learning integrations that add real business value to our products.",
    tech: ["Python", "TensorFlow", "OpenAI", "ML"]
  },
  {
    name: "Lakshmi Priya M.",
    role: "FRONTEND DEVELOPER",
    theme: "purple",
    isLead: false,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    desc: "Specializes in building responsive, pixel-perfect React interfaces with a strong eye for design and performance.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML"]
  },
  {
    name: "Namani Yashwanth",
    role: "BACKEND DEVELOPER",
    theme: "blue",
    isLead: false,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    desc: "Develops robust backend systems and APIs, ensuring performance, security and reliability at scale.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST API"]
  },
  {
    name: "Punith Reddy G.",
    role: "DATABASE ENGINEER",
    theme: "purple",
    isLead: false,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    desc: "Designs efficient database schemas and manages data systems that power our applications.",
    tech: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    name: "Sai Rangaiah P.",
    role: "DEVOPS ENGINEER",
    theme: "blue",
    isLead: false,
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    desc: "Handles deployment, CI/CD pipelines and cloud infrastructure to ensure smooth delivery and uptime.",
    tech: ["Docker", "AWS", "CI/CD", "Linux"]
  }
];

const statsData = [
  { icon: "fa-rocket", value: "88+", label: "Projects Built" },
  { icon: "fa-users", value: "100+", label: "Happy Clients" },
  { icon: "fa-code", value: "5+", label: "Tech Stack" },
  { icon: "fa-star", value: "100%", label: "Commitment" }
];

const Team = () => {
  return (
    <section id="team" className="relative w-full bg-[#030611] py-24 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="block text-[#3b82f6] text-sm font-bold tracking-[4px] uppercase mb-4">Meet Our Team</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            The Minds Behind <span className="text-[#3b82f6]">NovaTech</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A passionate team of student innovators and developers building smart digital solutions for real businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {teamMembers.map((member, index) => {
            const isBlue = member.theme === 'blue';
            const themeColor = isBlue ? '#3b82f6' : '#a855f7';
            const bgHoverClass = isBlue ? 'hover:bg-blue-900/20' : 'hover:bg-purple-900/20';
            const textClass = isBlue ? 'text-[#3b82f6]' : 'text-[#a855f7]';
            const borderClass = isBlue ? 'border-[#3b82f6]/30' : 'border-[#a855f7]/30';
            const glowClass = isBlue ? 'shadow-[0_0_25px_rgba(59,130,246,0.2)]' : 'shadow-[0_0_25px_rgba(168,85,247,0.15)]';
            
            // First card glowing border matching image
            const cardStyle = index === 0 
              ? { border: '2px solid rgba(59,130,246,0.6)', boxShadow: '0 0 30px rgba(59,130,246,0.3)' } 
              : {};

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={cardStyle}
                className={`relative flex flex-col items-center p-8 bg-[#0b1120]/80 backdrop-blur-xl rounded-2xl border border-white/5 transition-all duration-300 ${index !== 0 ? 'hover:border-white/20' : ''} group`}
              >
                {/* Team Lead Badge */}
                {member.isLead && (
                  <div className="absolute -top-3 -right-3 bg-[#3b82f6] text-white text-[10px] font-bold px-4 py-1.5 rounded-lg shadow-lg">
                    TEAM LEAD
                  </div>
                )}

                {/* Avatar */}
                <div className={`w-28 h-28 rounded-full p-1 border-2 ${borderClass} mb-6 ${glowClass}`}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                </div>

                {/* Name & Role */}
                <h3 className="text-white text-lg font-bold mb-2">{member.name}</h3>
                <div className={`px-4 py-1.5 rounded-full border ${borderClass} bg-[#0b1120] mb-5`}>
                  <span className={`text-[10px] font-bold tracking-wider ${textClass}`}>{member.role}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs text-center leading-relaxed mb-6 flex-grow">
                  {member.desc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {member.tech.map((t, i) => (
                    <span key={i} className={`px-2 py-1 rounded border ${borderClass} bg-[#0b1120] ${textClass} text-[9px] font-medium`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    <i className="fa-brands fa-github text-lg"></i>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    <i className="fa-brands fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    <i className="fa-solid fa-globe text-lg"></i>
                  </a>
                </div>
              </motion.div>
            );
          })}

          {/* Stats & Quote Card (8th Item) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col justify-between p-8 bg-[#0b1120]/80 backdrop-blur-xl rounded-2xl border border-white/5"
          >
            {/* Quote Block */}
            <div className="mb-8">
              <i className="fa-solid fa-quote-left text-[#3b82f6] text-3xl mb-4 opacity-50"></i>
              <p className="text-gray-300 text-sm leading-relaxed font-medium">
                Together, we transform ideas into smart digital solutions. <br/>
                <span className="text-[#3b82f6]">Innovation is in our DNA.</span>
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {statsData.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6] shrink-0">
                    <i className={`fa-solid ${stat.icon} text-sm`}></i>
                  </div>
                  <div>
                    <div className="text-white text-base font-bold leading-tight">{stat.value}</div>
                    <div className="text-gray-400 text-[10px]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Team;
