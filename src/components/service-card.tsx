import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  imageSrc?: string;
  altText: string;
  index: number;
}

const ServiceCard = ({ title, imageSrc, altText, index }: ServiceCardProps) => {
  const [imageError, setImageError] = useState(false);

  // Animation variants for the card
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  // Animation variants for the image container
  const imageContainerVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center p-4"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div 
        className="mb-4 h-48 w-40 relative"
        variants={imageContainerVariants}
      >
        {!imageError && imageSrc ? (
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-500 text-sm">Image placeholder</span>
          </div>
        )}
      </motion.div>
      <motion.span 
        className="text-gray-800 text-center"
        whileHover={{ color: "#f59e0b" }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.span>
    </motion.div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      title: "Android/iOS Applications",
      imageSrc: "/android-apps.png", // Replace with your actual image path
      altText: "Mobile Application Development"
    },
    {
      title: "Custom-built Softwares",
      imageSrc: "/laptop.png", // Replace with your actual image path
      altText: "Custom Software Development"
    },
    {
      title: "E-Commerce Websites",
      imageSrc: "/laptop.png", // Replace with your actual image path
      altText: "E-Commerce Website Development"
    }
  ];

  // Animation variants for the heading
  const headingVariants = {
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

  // Animation variants for the services container
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

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-amber-50 to-white">
      <motion.h2 
        className="text-center text-2xl md:text-3xl font-medium text-amber-500 mb-12"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        We Are Privileged To Collaborate With The Best, Delivering<br />
        Excellence Every Step Of The Way.
      </motion.h2>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            imageSrc={service.imageSrc}
            altText={service.altText}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}