import React, { useState } from "react";
import ServiceCard from "./common/service-card";

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

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | string | null>(null);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            tags={service.tags}
            icon={service.icon}
            color={service.color}
            isHovered={hoveredCard === service.id}
            onMouseEnter={setHoveredCard}
            onMouseLeave={() => setHoveredCard(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;