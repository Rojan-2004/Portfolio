'use client';

import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'Python'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Android Development', 'Cross-Platform UI'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Authentication'],
  },
  {
    title: 'Tools & Architecture',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Riverpod', 'Clean Architecture'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#faedcd] border-b border-[#3a2e2a]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-[#3a2e2a] font-primary border-b-2 border-[#3a2e2a] pb-2 inline-block">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-2">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-base font-bold text-[#3a2e2a] font-primary border-b border-[#3a2e2a]/20 pb-1">
                {cat.title}
              </h3>
              <ul className="space-y-1.5 pl-4 text-sm font-secondary text-[#3a2e2a] list-disc marker:text-[#3a2e2a]">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


