'use client'
import React from 'react';
import Image from 'next/image';

const OverviewSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Overview Title */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="h-1 w-6 bg-green-500 rounded"></div>
        <h3 className="text-xl font-medium text-[#E08F34] tracking-wide uppercase">OVERVIEW</h3>
        <div className="h-1 w-6 bg-green-500 rounded"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">
        Your Vision, Our Innovation &ndash; Building Success Together.
      </h1>

      {/* Hero Image */}
      <div className="w-full h-80 md:h-[500px] mb-16 overflow-hidden rounded-lg shadow-lg relative">
        <Image 
          src="/aboutus/table.png" 
          alt="Team collaborating around a table" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Description Text */}
      <div className="space-y-8">
        <p className="text-xl md:text-2xl font-medium text-gray-800">
          Welcome to Supportta &ndash; <span className="font-bold">Your Success, Our Priority &ndash; For You, With You</span>.
        </p>
        
        <p className="text-lg text-gray-700 leading-relaxed">
          We&apos;re not just a software development company; we&apos;re your partners in turning bold ideas into game-changing digital solutions. 
          With a team of young, brilliant minds and a passion for problem-solving, we deliver tailored solutions that are as unique as your vision. 
          From concept to launch, we&apos;re with you every step of the way, ensuring 100% satisfaction and results that speak for themselves. <span className="text-2xl font-bold text-gray-800">
          &quot;Your success is our mission&quot;
        </span>
        </p>
      </div>
    </div>
  );
};

export default OverviewSection;
