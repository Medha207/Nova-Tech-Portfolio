import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Clock, Lightbulb, Code2, TrendingUp, ArrowLeft, QrCode, Home, UserCheck, ShoppingCart, UploadCloud, MapPin, Ticket, LayoutGrid } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ActionIcons = {
  QrCode, Home, UserCheck, ShoppingCart, UploadCloud, MapPin, Ticket, LayoutGrid
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.slug === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
      </div>
    );
  }

  const titleWords = project.title.split(' ');
  const titleWhite = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ');
  const titleBlue = titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ');

  const ActionIcon = ActionIcons[project.dashboard.actionCard.iconType] || QrCode;

  return (
    <div className="min-h-screen bg-[#020617] text-gray-300 font-sans p-4 md:p-10 flex flex-col items-center justify-center">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1400px] bg-[#050812] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl relative flex flex-col"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-start relative z-10 border-r border-white/5 bg-[#050812]">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e40af] text-white rounded-md text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" /> PROJECT {project.id}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
              <span className="text-white block">{titleWhite}</span>
              <span className="text-[#3b82f6] block">{titleBlue}</span>
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              {project.description}
            </p>

            <div className="space-y-8 flex-grow">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center">
                  <Clock className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <div>
                  <h3 className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider mb-2">{project.problem.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.problem.description}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <div>
                  <h3 className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider mb-2">{project.solution.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.solution.description}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center">
                  <Code2 className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <div className="flex flex-col justify-center w-full">
                  <h3 className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider mb-3">TECHNOLOGIES USED</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0,3).map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-[#0a0f1c] border border-white/10 rounded-md text-xs font-medium text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#0a0f1c] flex flex-col">
            <div className="relative w-full h-[320px] rounded-tr-[32px] overflow-hidden">
              <img src={project.banner} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 bg-[#020617]/80 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <span className="text-white text-sm font-semibold max-w-[200px] leading-tight">
                  Improved Efficiency and Experience
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 flex-grow flex flex-col justify-between">
              
              <div className="mb-10">
                <h3 className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider mb-6">KEY FEATURES</h3>
                <div className="flex justify-between items-start gap-4 text-center">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <i className={`fa-solid ${feat.icon} text-[28px] text-[#3b82f6] mb-4`}></i>
                      <span className="text-xs text-gray-300 font-medium leading-tight">{feat.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Dash 1: Action Card */}
                <div className="bg-[#111827] border border-white/5 rounded-2xl p-5 flex flex-col h-[220px]">
                  <h4 className="text-white text-sm font-bold mb-2">{project.dashboard.actionCard.title}</h4>
                  <p className="text-gray-500 text-[10px] mb-4">{project.dashboard.actionCard.description}</p>
                  <div className="flex-grow flex flex-col items-center justify-center">
                    <div className="bg-white p-2 rounded-lg mb-3 shadow-lg">
                      <ActionIcon className="w-14 h-14 text-black stroke-[1.5]" />
                    </div>
                    <button className="bg-[#3b82f6] text-white text-[10px] font-bold px-6 py-1.5 rounded-full uppercase">
                      {project.dashboard.actionCard.buttonText}
                    </button>
                  </div>
                </div>

                {/* Dash 2: List Card */}
                <div className="bg-[#111827] border border-white/5 rounded-2xl p-5 flex flex-col h-[220px]">
                  <h4 className="text-white text-sm font-bold mb-4">{project.dashboard.listCard.title}</h4>
                  <div className="space-y-2 flex-grow">
                    {project.dashboard.listCard.items.map((item, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 flex items-center justify-center opacity-50">
                            <i className="fa-solid fa-circle-dot text-[8px] text-white"></i>
                          </div>
                          <div>
                            <div className="text-white text-[9px] font-bold">{item.id}</div>
                            <div className="text-gray-500 text-[8px]">{item.name}</div>
                          </div>
                        </div>
                        <span className={`${item.color} text-[8px] font-bold`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-[#3b82f6] text-[9px] text-center font-bold cursor-pointer mt-2">
                    {project.dashboard.listCard.actionText}
                  </div>
                </div>

                {/* Dash 3: Chart Card */}
                <div className="bg-[#111827] border border-white/5 rounded-2xl p-5 flex flex-col h-[220px]">
                  <h4 className="text-white text-[10px] font-bold mb-3">{project.dashboard.chartCard.title}</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <div className="text-gray-500 text-[8px]">{project.dashboard.chartCard.stat1Label}</div>
                      <div className="text-white text-lg font-bold">{project.dashboard.chartCard.stat1Value}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-[8px]">{project.dashboard.chartCard.stat2Label}</div>
                      <div className="text-white text-lg font-bold">{project.dashboard.chartCard.stat2Value}</div>
                    </div>
                  </div>
                  <div className="flex-grow flex items-end gap-1 mt-2">
                     {project.dashboard.chartCard.chartData.map((h, i) => (
                       <div key={i} className="flex-1 bg-[#1e3a8a] rounded-t-sm" style={{ height: `${h}%` }}></div>
                     ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border-t border-white/5 bg-[#030712]">
          {project.impact.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-[#111827] rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <i className={`fa-solid ${stat.icon} text-lg text-[#3b82f6]`}></i>
              </div>
              <div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] text-gray-400 leading-tight">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-12 text-center w-full max-w-[1400px]">
        <Link 
          to="/"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#3b82f6] rounded-xl text-white font-bold text-sm transition-all duration-300 hover:bg-[#3b82f6] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
        >
          <ArrowLeft className="w-4 h-4 transform transition-transform group-hover:-translate-x-1" />
          BACK TO SHOWCASE
        </Link>
      </div>

    </div>
  );
};

export default ProjectDetail;
