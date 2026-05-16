import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="relative w-full overflow-hidden bg-transparent">
      
      <div className="section-header text-center mb-16 pt-20">
        <span className="section-subtitle block text-[#3b82f6] font-mono tracking-[4px] uppercase mb-4 text-sm font-semibold">Case Studies</span>
        <h2 className="section-title-highlight inline-block text-4xl md:text-5xl font-extrabold text-white pb-2 relative">
          Our Work
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]"></span>
        </h2>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col h-full bg-[#080b14] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
            >
              {/* Image Banner */}
              <div className="w-full h-48 overflow-hidden bg-[#111827]">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content matching Image 2 */}
              <div className="flex flex-col flex-grow p-6">
                
                {/* Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-[#3b82f6] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                    PROJECT {project.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-200 mb-6">
                  {project.title}
                </h3>
                
                {/* Problem section */}
                <div className="mb-4">
                  <div className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider mb-1">
                    PROBLEM
                  </div>
                  <div className="text-gray-400 text-sm">
                    {project.problem.description.substring(0, 40)}...
                  </div>
                </div>

                {/* Tech section */}
                <div className="mb-8 mt-auto">
                  <div className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider mb-1">
                    TECH
                  </div>
                  <div className="text-gray-400 text-sm">
                    {project.techStack.slice(0, 3).join(', ')}
                  </div>
                </div>

                {/* Action Button (highlighted on hover) */}
                <Link 
                  to={`/work/${project.slug}`}
                  className="mt-auto w-full flex items-center justify-center gap-2 px-5 py-3 bg-transparent border border-white/10 rounded-xl text-gray-300 font-medium text-sm transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:border-[#3b82f6] group-hover:text-white"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
