"use client"

import { useRef } from "react"
import Image from "next/image"
import Title from "../common/title"
import { motion, useInView, type Variants } from "framer-motion"

interface WorkStep {
  number: string
  title: string
  description: string
  bulletPoints?: string[]
  additionalText?: string
  summary: string
  imageUrl: string
}

export const HowWeWork = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const workSteps: WorkStep[] = [
    {
      number: "1",
      title: "Discovery Phase – Laying the Foundation",
      description:
        "Every great solution starts with understanding. We begin with in-depth research and strategy building, ensuring a strong foundation for your project. Our team crafts lean go-to-market strategies to enhance user experience, align with your objectives, and guarantee a successful launch. By gathering core product insights, we translate your vision into clear, actionable app requirements.",
      summary: "A well-defined strategy that ensures an efficient and user-focused product.",
      imageUrl: "/services/team.png",
    },
    {
      number: "2",
      title: "Planning Phase – Structuring Success",
      description:
        "The planning phase is where we map out the key features, technical requirements, and overall framework of your project. Our approach covers:",
      bulletPoints: [
        "Performance benchmarks & usability",
        "Security & data protection",
        "Failure prevention & recovery strategies",
        "Scalability & accessibility",
      ],
      additionalText:
        "With a detailed roadmap in place, we minimize risks, streamline workflows, and maximize productivity.",
      summary: "A structured development process that accelerates project success.",
      imageUrl: "/services/team.png",
    },
    {
      number: "3",
      title: "Design Phase – Crafting Intuitive Experiences",
      description:
        "In this phase, we bring your vision to life through visually compelling, user-friendly, and functional designs. We focus on:",
      bulletPoints: [
        "Intuitive UX and experience (UX) design",
        "Wireframing & prototyping",
        "Seamless interaction design",
      ],
      additionalText:
        "Our goal is to deliver aesthetically pleasing, intuitive, and accessible product that reflects your brand and resonates with your audience.",
      summary: "A prototype-driven, user-friendly design ready for development.",
      imageUrl: "/services/team.png",
    },
    {
      number: "4",
      title: "Development Phase – Building the Solution",
      description:
        "With a strong strategy and design in place, our expert developers build your digital solution. Depending on your business needs and complexity, we:",
      bulletPoints: [
        "Build applications using low-code/no-code or custom development",
        "Optimize for performance, security, and scalability",
        "Ensure every detail meets for a bug-free experience",
      ],
      additionalText:
        "Our team ensures seamless integration with third-party applications, databases, and cloud platforms, meeting your app requirements.",
      summary: "A functional, high-performance digital solution.",
      imageUrl: "/services/team.png",
    },
    {
      number: "5",
      title: "Quality Assurance & Testing – Ensuring Perfection",
      description:
        "Before launch, our dedicated QA team rigorously tests the application across multiple parameters, including:",
      bulletPoints: ["Performance & load testing", "Integration & compatibility checks", "Bug detection & resolution"],
      additionalText:
        "We deliver a fully optimized, usable, and market-ready product right after passing its verification stages.",
      summary: "A flawless, high-performing solution ready for deployment.",
      imageUrl: "/services/team.png",
    },
    {
      number: "6",
      title: "Deployment & Maintenance – Continuous Growth",
      description:
        "Once your app or website is launched, we ensure smooth deployment with manual or automated processes based on your business needs. Post-launch, we provide:",
      bulletPoints: [
        "Regular system & performance monitoring",
        "Timely updates & improvements",
        "Security patches & capability enhancements",
      ],
      additionalText:
        "Your success doesn't stop at launch—we help you evolve your product to adapt to competition, and reflect to fast-changing digital landscape.",
      summary: "A well-maintained, adaptable product that meets market demands.",
      imageUrl: "/services/team.png",
    },
  ]

  // Animation variants
  const timelineLineVariants: Variants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const stepVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const contentVariants: Variants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? -30 : 30,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const numberVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
      },
    },
  }

  const bulletVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="py-16 bg-[#fffaf0]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div className="flex items-center justify-center mb-4">
            <Title text="PHASES" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif">How do we work as a team !</h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical timeline line - hidden on mobile */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-amber-300 hidden md:block"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={timelineLineVariants}
            style={{ originY: 0 }}
          ></motion.div>

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-28">
            {workSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                variants={stepVariants}
              >
                {/* Number Circle - hidden on mobile */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center w-24"
                  variants={numberVariants}
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-amber-400 text-amber-800 font-medium">
                    {step.number}
                  </div>
                </motion.div>

                {/* Mobile number indicator - visible only on small screens */}
                <motion.div className="md:hidden flex items-center mb-3" variants={numberVariants}>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-amber-400 text-amber-800 font-medium text-sm mr-3">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-serif text-gray-900">{step.title}</h3>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  className={`w-full md:w-[45%] px-4 mb-8 md:mb-0 ${
                    index % 2 === 0 ? "md:pr-16 text-left md:text-left" : "md:pl-16 text-left"
                  }`}
                  variants={contentVariants}
                  custom={index % 2 === 0}
                >
                  {/* Title only shows on desktop since we moved it to mobile indicator above */}
                  <h3 className="text-xl font-serif text-gray-900 mb-3 hidden md:block">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.description}</p>

                  {step.bulletPoints && (
                    <ul className={`list-disc text-sm text-gray-600 mb-4 ml-4`}>
                      {step.bulletPoints.map((point, i) => (
                        <motion.li key={i} className="mb-1" custom={i} variants={bulletVariants}>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {step.additionalText && (
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.additionalText}</p>
                  )}

                  <p className="text-sm font-medium text-gray-800 italic">{step.summary}</p>
                </motion.div>

                {/* Empty space for the central line - now wider to create more space */}
                <div className="hidden md:block md:w-[10%]"></div>

                {/* Image Side */}
                <motion.div className={`w-full md:w-[45%] px-4`} variants={imageVariants}>
                  <div className="relative w-full h-48 md:h-64">
                    <Image
                      src={step.imageUrl || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork
