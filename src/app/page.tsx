'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'; // Added more imports
import TechStack from '../components/tech-stack';
import BusinessSuccess from '../components/business-success';
import ServicesSection from '../components/ServicesSection';
import ContactForm from '../components/contact-form';
import ServiceCard from '../components/service-card';
import { Particles } from '../components/ui/particles';
import { useRef } from 'react';
import Title from '../components/common/title';

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Hover animations for buttons
const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

// Circular image animations
const circleImageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export default function HomePage() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="relative min-h-screen w-full font-sans text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <Particles className="h-full" quantity={100} ease={80} color="#ffffff" refresh />
      </div>
      
      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-10 pt-28 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Text */}
          <motion.div className="lg:w-1/2 text-left" variants={containerVariants}>
            <motion.h1 
              className="text-4xl font-semibold leading-snug"
              variants={itemVariants}
            >
              Supporting Your Vision with
              <br />
              <motion.span 
                className="text-[#E08F34] text-3xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Web Development...
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-base max-w-md leading-relaxed text-gray-300"
              variants={itemVariants}
            >
              From Concept To Execution, We Deliver Innovative Software That Drives Results And Scales With Your Business
            </motion.p>
            
            <motion.div 
              className="flex gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.div whileHover="hover" variants={buttonHoverVariants}>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-yellow-600 to-[#E08F34] hover:from-yellow-500 hover:to-orange-400 text-white px-6 py-3 rounded font-medium"
                >
                  Let&apos;s Connect
                </Link>
              </motion.div>
              
              <motion.div whileHover="hover" variants={buttonHoverVariants}>
                <Link
                  href="/services"
                  className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded font-medium"
                >
                  Check Our Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Circular Images */}
          <div className="relative lg:w-1/2 h-[500px] hidden lg:block">
            <motion.div
              className="absolute w-56 h-56 rounded-full overflow-hidden top-0 right-50 shadow-lg"
              variants={circleImageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={1}
            >
              <Image src="/home1.png" alt="Developer working" fill className="object-cover" />
            </motion.div>
            
            <motion.div
              className="absolute w-48 h-48 rounded-full overflow-hidden top-40 left-46 shadow-lg"
              variants={circleImageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={2}
            >
              <Image src="/home2.png" alt="Team collaboration" fill className="object-cover" />
            </motion.div>
            
            <motion.div
              className="absolute w-56 h-56 rounded-full overflow-hidden top-64 right-50 shadow-lg"
              variants={circleImageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={3}
            >
              <Image src="/home3.png" alt="Coding developer" fill className="object-cover" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Transform Ideas Section */}
      <motion.div 
        className="w-full bg-white text-black py-16"
        ref={sectionRef}
        style={{ opacity, scale }}
      >
        <div className="container mx-auto px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Title text='WHO ARE WE' />
              </motion.div>

              <motion.h2 
                className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We Transform Ideas Into<br />
                Powerful Digital Realities
              </motion.h2>

              {/* Image for small and medium screens - positioned between heading and paragraph */}
              <motion.div
                className="relative mb-8 block lg:hidden mx-auto text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/whoarewe.png"
                  alt="Team collaboration meeting"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-[200px] sm:w-[220px] md:w-[300px] h-auto sm:h-[165px] md:h-[225px] mx-auto"
                />
              </motion.div>

              <motion.p 
                className="text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                The future belongs to those who innovate - and
                that&apos;s where we come in. With a team of young,
                dynamic minds, we turn your ideas into digital
                solutions that make an impact. We understand
                the importance of standing out in today&apos;s
                fast-paced digital landscape while meeting the
                end-user expectations. Your vision, powered by
                our expertise, becomes a reality that drives
                results. Let&apos;s build something extraordinary. We
                don&rsquo;t just adapt to the future – we design it. Let&apos;s
                start something extraordinary.
              </motion.p>
            </motion.div>

            {/* Image for large screens - original position */}
            <motion.div
              className="lg:w-1/2 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/whoarewe.png"
                  alt="Team collaboration meeting"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="w-full bg-[#FDF9F3] py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center justify-center mb-4"
              variants={itemVariants}
            >
              <Title text='SOLUTIONS WE OFFER' />
            </motion.div>
            
            <motion.h2 
              className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-gray-800"
              variants={itemVariants}
            >
              Explore our cutting-edge<br />
              business solutions
            </motion.h2>
          </motion.div>

          {/* Services Grid */}
          <ServicesSection />
        </div>
      </motion.div>

      <AnimatePresence>
        <BusinessSuccess />
        <TechStack />
        <ServiceCard />
        <motion.div 
          className="min-h-screen bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <ContactForm illustrationSrc="/contact-illustration.png" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}