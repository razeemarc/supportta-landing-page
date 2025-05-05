// ServiceCard.tsx
import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  id: number | string;
  title: string;
  tags: string[];
  icon: string;
  color: string;
  isHovered: boolean;
  onMouseEnter: (id: number | string) => void;
  onMouseLeave: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  tags,
  icon,
  color,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
  className="bg-white rounded-lg transition-all duration-300 overflow-hidden max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px] w-full"
  style={{
    boxShadow: "0px 8px 16px 0px #00000014, 0px 0px 4px 0px #0000000A",
  }}
  onMouseEnter={() => onMouseEnter(id)}
  onMouseLeave={onMouseLeave}
>

      <div className="p-4 sm:p-5 md:p-6 h-full flex flex-col">
        {/* Icon */}
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
        
        {/* Title */}
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">
          {title}
        </h3>
        
      {/* Tags with Divider */}
  <div className="flex text-xs text-gray-600 font-medium space-x-1 sm:space-x-2 mb-6 sm:mb-8">
    {tags.map((tag, index) => (
      <React.Fragment key={index}>
        {index !== 0 && <span className="text-gray-400">|</span>}
        <span className="text-[10px] sm:text-xs">{tag.toUpperCase()}</span>
      </React.Fragment>
    ))}
  </div>
      </div>
      
      {/* Hover bar */}
      <div
        className="h-[3px] sm:h-1 w-full transition-all duration-300"
        style={{
          backgroundColor: isHovered ? color : "transparent",
        }}
      />
    </div>
  );
};

export default ServiceCard;