'use client'
import React from 'react';
import Image from 'next/image';

type StepProps = {
  stepNumber: number;
  title: string[];
  image: {
    src: string;
    alt: string;
  };
  description: string;
  summary: string;
  isReversed?: boolean;
};

const Step: React.FC<StepProps> = ({ 
  stepNumber, 
  title, 
  image, 
  description, 
  summary,
  isReversed = false
}) => (
  <div className="grid md:grid-cols-2 gap-12 items-center mb-24 px-2 sm:px-4">
    <div className={`space-y-6 ${isReversed ? 'md:order-2' : ''}`}>
      <div className="text-orange-400 font-semibold text-lg mb-2">STEP {stepNumber}</div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        {title.map((line, index) => (
          <React.Fragment key={index}>
            {line}<br />
          </React.Fragment>
        ))}
      </h2>
    </div>
    <div className={`overflow-hidden ${isReversed ? 'md:order-1' : ''} text-white`}>
      <div className="relative w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto mx-auto">
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="mt-12 space-y-6">
        <p className="text-lg leading-relaxed">{description}</p>
        <p className="text-xl font-medium mt-6">{summary}</p>
      </div>
    </div>
  </div>
);

const DiscoveryPhaseSection = () => {
  const steps = [
    {
      stepNumber: 1,
      title: ['Discovery Phase —', 'Laying the', 'Foundation'],
      image: {
        src: '/aboutus/table.png',
        alt: 'Team collaboration at a table'
      },
      description: 'Every great solution starts with understanding. We begin with in-depth research and strategy building, ensuring a strong foundation for your project. Our team crafts lean go-to-market strategies to enhance user experience, align with your objectives, and guarantee a successful launch. By gathering core product insights, we translate your vision into clear, actionable app requirements.',
      summary: 'A well-defined strategy that ensures an efficient and user-focused product.'
    },
    {
      stepNumber: 2,
      title: ['Design Phase —', 'Crafting the', 'Experience'],
      image: {
        src: '/services/ui-ux.png',
        alt: 'UI/UX Design Process'
      },
      description: 'With a solid foundation in place, our design team brings your vision to life. We create intuitive user interfaces and engaging experiences that resonate with your target audience. Our iterative design process ensures that every element serves a purpose and contributes to the overall user journey.',
      summary: 'Beautiful, functional designs that captivate and convert.'
    },
    {
      stepNumber: 3,
      title: ['Development —', 'Building with', 'Precision'],
      image: {
        src: '/services/web-development.png',
        alt: 'Development Process'
      },
      description: 'Our development team transforms designs into fully functional solutions using cutting-edge technologies. We follow best practices in coding, ensuring scalability, security, and performance. Regular testing and quality assurance guarantee a robust final product.',
      summary: 'Robust, scalable solutions built for long-term success.'
    },
    {
      stepNumber: 4,
      title: ['Launch & Support —', 'Ensuring', 'Success'],
      image: {
        src: '/services/team.png',
        alt: 'Launch and Support Team'
      },
      description: "We don't just deliver and disappear. Our team ensures a smooth launch and provides ongoing support to maintain optimal performance. We monitor, analyze, and optimize based on real user feedback and data, helping your solution evolve and grow with your business.",
      summary: 'Continuous support and optimization for lasting impact.'
    }
  ];

  return (
    <div className="bg-black text-white py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {steps.map((step, index) => (
          <Step key={step.stepNumber} {...step} isReversed={index % 2 === 1} />
        ))}
      </div>
    </div>
  );
};

export default DiscoveryPhaseSection;
