'use client';

import React from 'react';
import { Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-20 bg-[#faedcd]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Headlines */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#3a2e2a] font-primary">
            Hello, my name is{' '}
            <span className="font-script text-4xl sm:text-5xl text-[#3a2e2a] font-normal tracking-wide inline-block ml-1">
              Rojan Mainali
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3a2e2a] font-primary">
            I&apos;m a <span className="underline text-[#3a2e2a]">Web & Mobile App Developer</span>
          </h2>
        </div>

        {/* Bio summary */}
        <p className="text-sm sm:text-base text-[#3a2e2a] max-w-2xl leading-relaxed font-secondary">
          I am a Computer Science undergraduate with a strong interest in web and mobile application development. I enjoy building practical projects, learning new technologies, and developing applications that solve real-world problems.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href="mailto:rojanm1000@gmail.com"
            className="btn-primary"
          >
            <Mail className="w-4 h-4" />
            <span>Hire Me</span>
          </a>

          <a
            href="#about"
            className="btn-outline"
          >
            <span>Learn More</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}


