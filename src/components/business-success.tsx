'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Title from "./common/title";

const BusinessSuccess = () => {
  const items = [
    {
      title: "Customer-First Solutions",
      content: "We put your needs first, creating tailored solutions that address your specific business challenges and goals.",
      image: "/business-success1.png"
    },
    {
      title: "Agility Strategy Development",
      content: "Our flexible approach allows us to adapt quickly to changing market conditions and business requirements.",
      image: "/business-success2.png"
    },
    {
      title: "Creative Excellence",
      content: "We combine innovation with expertise to deliver outstanding results that exceed expectations.",
      image: "/business-success3.png"
    },
    {
      title: "3 Months Warranty",
      content: "We stand behind our work with a comprehensive 3-month warranty for your peace of mind.",
      image: "/business-success1.png"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const accordionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-6xl px-4 py-8 sm:py-10 md:py-12">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 text-center"
          variants={titleVariants}
        >
          <div className="flex items-center justify-center mb-2 sm:mb-3">
            <Title text="WHY CHOOSE US" />
          </div>
          <motion.h2 
            className="text-2xl sm:text-2xl md:text-3xl font-medium text-gray-800"
            variants={titleVariants}
          >
            Your Trusted Partner for<br />Business Success
          </motion.h2>
        </motion.div>
        
        {/* Image section - visible only on small screens between title and accordion */}
        <div className="flex justify-center md:hidden mb-8">
          <div className="flex flex-col space-y-4 items-center w-full max-w-xs">
            {items.slice(0, 3).map((item, index) => (
              <motion.div 
                key={`mobile-image-${index}`}
                className="rounded-full overflow-hidden h-28 w-28 bg-gray-100 relative"
                custom={index}
                variants={imageVariants}
                whileHover="hover"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
            {/* Logo positioning remains the same */}
            <motion.div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
              {/* Logo commented out as in original */}
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          <motion.div 
            className="md:col-span-3"
            variants={accordionVariants}
          >
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {items.map((item, index) => (
                <motion.div
                  key={`item-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger
                      className="py-3 sm:py-3 md:py-4 hover:no-underline text-gray-800 pt-6 sm:pt-7 md:pt-9 font-raleway font-normal text-2xl sm:text-3xl md:text-4xl leading-none tracking-normal"
                    >
                      {item.title}
                    </AccordionTrigger>
                    
                    <AccordionContent className="py-1 sm:py-1.5 md:py-2 text-gray-600 text-sm sm:text-base">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
          
          {/* Image section - visible only on medium screens and above */}
          <div className="hidden md:flex md:col-span-2 md:flex-col md:space-y-5">
            {items.slice(0, 3).map((item, index) => (
              <motion.div 
                key={`desktop-image-${index}`}
                className="rounded-full overflow-hidden h-28 bg-gray-100 relative"
                custom={index}
                variants={imageVariants}
                whileHover="hover"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
            {/* Logo positioning remains the same */}
            <motion.div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
              {/* Logo commented out as in original */}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessSuccess;