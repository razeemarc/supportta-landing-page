import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ServiceCardProps {
  id: number | string;
  title: string;
  tags: string[];
  icon: string;
  color: string;
  isHovered: boolean;
  onMouseEnter: (id: number | string) => void;
  onMouseLeave: () => void;
  isSelected?: boolean;
}

// Animation variants
const cardVariants: Variants = {
  initial: {
    boxShadow: "0px 8px 16px 0px #00000014, 0px 0px 4px 0px #0000000A",
    y: 0,
  },
  hover: {
    boxShadow: "0px 16px 24px 0px #00000024, 0px 2px 8px 0px #0000001A", 
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    }
  },
  tap: {
    y: 2,
    boxShadow: "0px 4px 8px 0px #00000014, 0px 0px 2px 0px #0000000A",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    }
  }
};

const barVariants: Variants = {
  initial: {
    scaleX: 0,
    originX: 0,
  },
  hover: {
    scaleX: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    }
  },
  selected: {
    scaleX: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    }
  }
};

const titleVariants: Variants = {
  initial: { 
    color: "#1F2937" // text-gray-800 
  },
  hover: { 
    color: "#111827", // text-gray-900
    scale: 1.01,
    transition: {
      duration: 0.3
    }
  },
  selected: {
    color: "#111827", // text-gray-900
    fontWeight: 700,
    transition: {
      duration: 0.3
    }
  }
};

const tagContainerVariants: Variants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  },
  selected: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

const tagVariants: Variants = {
  initial: { 
    opacity: 0.7,
    y: 0
  },
  hover: { 
    opacity: 1,
    y: -2,
    transition: {
      duration: 0.3
    }
  },
  selected: {
    opacity: 1,
    y: -2,
    fontWeight: 600,
    transition: {
      duration: 0.3
    }
  }
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  tags,
  icon,
  color,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  isSelected = false,
}) => {
  // Determine which animation state to use
  const animationState = isSelected ? "selected" : isHovered ? "hover" : "initial";

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px] w-full"
      variants={cardVariants}
      initial="initial"
      animate={animationState}
      whileHover="hover"
      whileTap="tap"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      layoutId={`service-card-container-${id}`}
    >
      <div className="p-4 sm:p-5 md:p-6 h-full flex flex-col">
        {/* Icon without animation */}
        <div className="mb-3 sm:mb-4">
          <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[99px] lg:h-[99px] relative">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Title with animation */}
        <motion.h3 
          className="text-sm sm:text-base font-semibold mb-2 sm:mb-3"
          variants={titleVariants}
        >
          {title}
        </motion.h3>
        
        {/* Tags with Divider and animation */}
        <motion.div 
          className="flex text-xs text-gray-600 font-medium space-x-1 sm:space-x-2 mb-6 sm:mb-8"
          variants={tagContainerVariants}
        >
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                <motion.span 
                  className="text-gray-400"
                >
                  |
                </motion.span>
              )}
              <motion.span 
                className="text-[10px] sm:text-xs"
                variants={tagVariants}
              >
                {tag.toUpperCase()}
              </motion.span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      
      {/* Hover bar with animation */}
      <motion.div
        className="h-[3px] sm:h-1 w-full"
        style={{ backgroundColor: color }}
        variants={barVariants}
        initial="initial"
        animate={animationState}
      />
    </motion.div>
  );
};

export default ServiceCard;