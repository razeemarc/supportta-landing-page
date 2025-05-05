'use client'
import Image from 'next/image'
import Title from './common/title'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Technology stack data
const technologies = [
  { id: 1, name: "Next.Js", icon: "/icons/nextjs.png" },
  { id: 2, name: "JavaScript", icon: "/icons/js.png" },
  { id: 3, name: "Android", icon: "/icons/android.png" },
  { id: 4, name: "iOS", icon: "/icons/ios.png" },
  { id: 5, name: "MongoDB", icon: "/icons/mongodb.png" },
  { id: 6, name: "HTML", icon: "/icons/html.png" },
  { id: 7, name: "CSS", icon: "/icons/css.png" },
  { id: 8, name: "Figma", icon: "/icons/figma.png" },
  { id: 9, name: "React", icon: "/icons/react.png" },
  { id: 10, name: "Flutter", icon: "/icons/flutter.png" },
  { id: 11, name: "Node.Js", icon: "/icons/node.png" },
]

// Define interface for technology item
interface Technology {
  id: number;
  name: string;
  icon: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: custom * 0.05,
    }
  })
}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Tech card component for reusability
const TechCard = ({ tech, index }: { tech: Technology; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      key={tech.id}
      variants={itemVariants}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
      className="bg-white rounded-2xl shadow p-5 flex flex-col items-center justify-center
                 w-[120px] h-[120px]
                 sm:w-[150px] sm:h-[150px]
                 md:w-[180px] md:h-[180px]
                 lg:w-[200px] lg:h-[200px]"
    >
      <div className="rounded-full p-3 mb-3 flex items-center justify-center
                      w-[40px] h-[40px]
                      sm:w-[50px] sm:h-[50px]
                      md:w-[65px] md:h-[65px]
                      lg:w-[75px] lg:h-[75px]">
        <Image
          src={tech.icon}
          alt={tech.name}
          width={75}
          height={75}
          className="object-contain"
        />
      </div>
      <motion.p 
        className="text-sm font-medium text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        {tech.name}
      </motion.p>
    </motion.div>
  )
}

export default function TechStack() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <motion.div 
      className="bg-white text-black py-20"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="text-center mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title text='OUR TECH STACK' />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The Technologies behind our <br />
            Innovation
          </motion.h2>
        </motion.div>

        {/* Technology Grid - Top Row */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {technologies.slice(0, 4).map((tech, index) => (
            <TechCard key={tech.id} tech={tech} index={index} />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          {technologies.slice(4, 8).map((tech, index) => (
            <TechCard key={tech.id} tech={tech} index={index + 4} />
          ))}
        </motion.div>

        {/* Bottom Row - Only 3 items */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          {technologies.slice(8).map((tech, index) => (
            <TechCard key={tech.id} tech={tech} index={index + 8} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}