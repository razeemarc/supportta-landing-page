import { useState } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  imageSrc?: string;
  altText: string;
}

const ServiceCard = ({ title, imageSrc, altText }: ServiceCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4 h-48 w-40 relative">
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
      </div>
      <span className="text-gray-800 text-center">{title}</span>
    </div>
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

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-amber-50 to-white">
      <h2 className="text-center text-2xl md:text-3xl font-medium text-amber-500 mb-12">
        We Are Privileged To Collaborate With The Best, Delivering<br />
        Excellence Every Step Of The Way.
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            imageSrc={service.imageSrc}
            altText={service.altText}
          />
        ))}
      </div>
    </div>
  );
}