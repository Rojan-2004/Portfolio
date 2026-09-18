'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#fefae0] border-y border-[#3a2e2a]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Bio Text & Education */}
          <div className="lg:col-span-8 space-y-10">
            {/* Bio */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3a2e2a] font-primary border-b-2 border-[#3a2e2a] pb-2 inline-block">
                About Me
              </h2>
              <div className="space-y-4 text-[#3a2e2a] text-sm sm:text-base leading-relaxed font-secondary">
                <p>
                  I&apos;m a <strong className="font-semibold text-[#3a2e2a]">Computer Science undergraduate</strong> with a strong interest in building modern web and mobile applications.
                </p>
                <p>
                  I enjoy developing practical, user-focused applications and working across both frontend and backend technologies. My current focus is on <strong className="font-semibold text-[#3a2e2a]">full-stack web development, Flutter mobile development, REST APIs, database integration, and application architecture</strong>.
                </p>
                <p>
                  I completed my <strong className="font-semibold text-[#3a2e2a]">A-Levels at NAMI College</strong>, where I developed my foundation in computing and technology. I am currently pursuing a <strong className="font-semibold text-[#3a2e2a]">BSc (Hons) Computing at Softwarica College of IT & E-Commerce</strong>, in partnership with <strong className="font-semibold text-[#3a2e2a]">Coventry University, UK</strong>, where I am further developing my knowledge of software development, programming, databases, web technologies, and application development.
                </p>
                <p>
                  I have experience working with technologies such as <strong className="font-semibold text-[#3a2e2a]">HTML, CSS, JavaScript, React, Next.js, Flutter, Dart, Node.js, and MongoDB</strong>. I enjoy developing full-stack applications, designing user-friendly interfaces, and connecting frontend applications with backend APIs.
                </p>
                <p>
                  I have worked on projects involving <strong className="font-semibold text-[#3a2e2a]">e-commerce platforms, REST APIs, authentication systems, admin dashboards, mobile applications, and data-driven applications</strong>. I am always interested in learning new technologies, working on real-world projects, and improving my development and problem-solving skills.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#3a2e2a] font-primary border-b-2 border-[#3a2e2a] pb-2 inline-flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#3a2e2a]" />
                <span>Education</span>
              </h3>
              <div className="space-y-6 pt-2 font-secondary">
                {/* Degree 1 */}
                <div className="bg-[#faedcd] border border-[#3a2e2a]/20 rounded-lg p-5 space-y-1 shadow-sm">
                  <h4 className="text-base font-bold text-[#3a2e2a] font-primary">
                    BSc (Hons) Computing
                  </h4>
                  <p className="text-sm font-semibold text-[#3a2e2a]">
                    Softwarica College of IT & E-Commerce
                  </p>
                  <p className="text-xs text-[#60514c]">
                    In partnership with <strong className="text-[#3a2e2a]">Coventry University, UK</strong>
                  </p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded bg-white border border-[#3a2e2a]/20 text-xs font-medium text-[#3a2e2a]">
                    Currently pursuing
                  </span>
                </div>

                {/* Degree 2 */}
                <div className="bg-[#faedcd] border border-[#3a2e2a]/20 rounded-lg p-5 space-y-1 shadow-sm">
                  <h4 className="text-base font-bold text-[#3a2e2a] font-primary">
                    A-Levels
                  </h4>
                  <p className="text-sm font-semibold text-[#3a2e2a]">
                    NAMI College, Nepal
                  </p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded bg-white border border-[#3a2e2a]/20 text-xs font-medium text-[#3a2e2a]">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Profile Picture */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-64 h-72 rounded-lg overflow-hidden border border-[#3a2e2a] shadow-sm bg-[#faedcd] p-1 sticky top-28">
              <img
                src="/images/me.jpeg"
                alt="Rojan Mainali Profile"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}




