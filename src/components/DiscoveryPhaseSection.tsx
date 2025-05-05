'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="grid md:grid-cols-2 gap-12 items-start mb-24"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div 
        className={`space-y-6 ${isReversed ? 'md:order-2' : ''}`}
        variants={containerVariants}
      >
        <motion.div 
          className="text-orange-400 font-semibold text-lg"
          variants={itemVariants}
        >
          STEP {stepNumber}
        </motion.div>
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold leading-tight text-white"
          variants={itemVariants}
        >
          {title.map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}
        </motion.h2>
      </motion.div>
      
      <motion.div 
        className={`${isReversed ? 'md:order-1' : ''} flex flex-col`}
        variants={containerVariants}
      >
        <motion.div 
          className="relative w-full h-64 md:h-72 mb-8"
          variants={imageVariants}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div 
          className="space-y-4 text-white"
          variants={containerVariants}
        >
          <motion.p 
            className="text-sm md:text-base leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.p 
            className="text-base md:text-lg font-medium mt-4"
            variants={itemVariants}
          >
            {summary}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const DiscoveryPhaseSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

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
    <motion.div 
      ref={ref}
      className="bg-black text-white py-24"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {steps.map((step, index) => (
          <Step key={step.stepNumber} {...step} isReversed={index % 2 === 1} />
        ))}
      </div>
    </motion.div>
  );
};

export default DiscoveryPhaseSection;