import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ServiceCard from "./common/service-card";

// Sample services data
const services = [
  {
    id: 1,
    title: "Custom Software development",
    icon: "/icons/software-development.png",
    tags: ["PRODUCT DEVELOPMENT", "iOS DEVELOPMENT"],
    color: "#f97316",
  },
  {
    id: 2,
    title: "Web development",
    icon: "/icons/we-development.png",
    tags: ["WEB DEVELOPMENT", "NODE.JS", "NEXT.JS"],
    color: "#f97316",
  },
  {
    id: 3,
    title: "Mobile App development",
    icon: "/icons/mobile-app.png",
    tags: ["FLUTTER", "ANDROID", "iOS"],
    color: "#f97316",
  },
  {
    id: 4,
    title: "UI / UX Design",
    icon: "/icons/ui-ux.png",
    tags: ["FIGMA", "HTML", "CSS"],
    color: "#f97316",
  },
  {
    id: 5,
    title: "eCommerce Development",
    icon: "/icons/e-commerce.png",
    tags: ["SHOPIFY", "WOOCOMMERCE"],
    color: "#f97316",
  },
  {
    id: 6,
    title: "Digital Marketing",
    icon: "/icons/digital-marketing.png",
    tags: ["SEO", "GOOGLE ADS"],
    color: "#f97316",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: custom * 0.1,
      duration: 0.5,
    },
  }),
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | string | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | string | null>(null);

  const handleCardClick = (id: number | string) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="p-8">
      {/* Animate the entire grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            custom={service.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCardClick(service.id)}
            initial="hidden"
            animate="visible"
            layoutId={`service-card-${service.id}`}
          >
            <ServiceCard
              id={service.id}
              title={service.title}
              tags={service.tags}
              icon={service.icon}
              color={service.color}
              isHovered={hoveredCard === service.id || selectedCard === service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              isSelected={selectedCard === service.id}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;