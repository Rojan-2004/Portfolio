'use client';

import React from 'react';
import { FolderGit2, Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tools: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'Aqua Life — E-Commerce Platform',
    description:
      'Full-stack aquarium e-commerce platform designed for ordering fish and aquarium products. Includes product browsing, authentication, ordering, review system, admin dashboard, and Flutter mobile apps.',
    tools: ['Next.js', 'React', 'Flutter', 'Dart', 'Node.js', 'Express', 'MongoDB', 'Riverpod'],
    githubUrl: 'https://github.com/Rojan-2004/AquaLife---Ecommerce-platform',
  },
  {
    title: 'Renting House',
    description:
      'Full-stack house renting application designed for listing, searching, managing, and renting residential properties with user-friendly search and management features.',
    tools: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/Rojan-2004/Renting-Houses',
  },
  {
    title: 'PetShop — Web Project',
    description:
      'Web-based pet shop platform allowing users to browse pet supplies, explore products, manage cart items, and place orders through a clean web interface.',
    tools: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    githubUrl: 'https://github.com/Rojan-2004/PetShop-Web',
  },
];



export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#faedcd] border-b border-[#3a2e2a]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3a2e2a] font-primary border-b-2 border-[#3a2e2a] pb-2 inline-block">
            My Works
          </h2>
        </div>

        {/* Project Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#3a2e2a] rounded-md p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_8px_rgba(85,36,0,0.12)] space-y-4"
            >
              <div className="space-y-4">
                {/* Header row: Icon, Title & GitHub link */}
                <div className="flex items-center justify-between gap-4 border-b border-[#3a2e2a]/10 pb-3">
                  <div className="flex items-center gap-3">
                    <FolderGit2 className="w-5 h-5 text-[#3a2e2a] flex-shrink-0" />
                    <h3 className="text-lg font-bold text-[#3a2e2a] font-primary">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-[#3a2e2a] hover:text-[#b08968] transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-[#3a2e2a] text-sm leading-relaxed font-secondary">
                  {project.description}
                </p>
              </div>

              {/* Tools & Technologies */}
              <div className="pt-2 border-t border-[#3a2e2a]/10 space-y-2">
                <span className="text-xs font-bold text-[#3a2e2a] block font-primary uppercase tracking-wider">
                  Tools & Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded bg-[#faedcd] border border-[#3a2e2a]/20 text-xs font-semibold text-[#3a2e2a]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


