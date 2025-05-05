'use client'

import Image from "next/image";
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl px-4 py-8 sm:py-10 md:py-12">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="flex items-center justify-center mb-2 sm:mb-3">
            <Title text="WHY CHOOSE US" />
          </div>
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium text-gray-800">
            Your Trusted Partner for<br />Business Success
          </h2>
        </div>
        
        {/* Image section - visible only on small screens between title and accordion */}
        <div className="flex justify-center md:hidden mb-8">
          <div className="flex flex-col space-y-4 items-center w-full max-w-xs">
            <div className="rounded-full overflow-hidden h-28 w-28 bg-gray-100 relative">
              <Image
                src={items[0].image}
                alt={items[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full flex justify-center">
              <div className="rounded-full overflow-hidden h-28 w-28 bg-gray-100 relative">
                <Image
                  src={items[1].image}
                  alt={items[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Logo positioned to the right of the second image */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                {/* <Image
                  src="/supportta-logo.png"
                  alt="Company Logo"
                  width={48}
                  height={48}
                /> */}
              </div>
            </div>
            <div className="rounded-full overflow-hidden h-28 w-28 bg-gray-100 relative">
              <Image
                src={items[2].image}
                alt={items[2].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          <div className="md:col-span-3">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {items.map((item, index) => (
                <AccordionItem key={`item-${index}`} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger
                    className="py-3 sm:py-3 md:py-4 hover:no-underline text-gray-800 pt-6 sm:pt-7 md:pt-9 font-raleway font-normal text-2xl sm:text-3xl md:text-4xl leading-none tracking-normal"
                  >
                    {item.title}
                  </AccordionTrigger>
                  
                  <AccordionContent className="py-1 sm:py-1.5 md:py-2 text-gray-600 text-sm sm:text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Image section - visible only on medium screens and above */}
          <div className="hidden md:flex md:col-span-2 md:flex-col md:space-y-5">
            <div className="rounded-full overflow-hidden h-28 bg-gray-100 relative">
              <Image
                src={items[0].image}
                alt={items[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative">
              <div className="rounded-full overflow-hidden h-28 bg-gray-100 relative">
                <Image
                  src={items[1].image}
                  alt={items[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Logo positioned to the right of the second image */}
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                {/* <Image
                  src="/supportta-logo.png"
                  alt="Company Logo"
                  width={48}
                  height={48}
                /> */}
              </div>
            </div>
            <div className="rounded-full overflow-hidden h-28 bg-gray-100 relative">
              <Image
                src={items[2].image}
                alt={items[2].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSuccess;