import { useState } from 'react';


export default function BusinessBenefits() {
  const [expandedItem, setExpandedItem] = useState(1);

  const benefitItems = [
    {
      id: 1,
      title: "Customer-First Solutions",
      image: "/images/customer-first.jpg",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Agility Strategy Development",
      image: "/images/agility-strategy.jpg",
      icon: "🚀"
    },
    {
      id: 3,
      title: "Creative Excellence",
      image: "/images/creative-excellence.jpg",
      icon: "🍊"
    },
    {
      id: 4,
      title: "3 Months Warranty",
      image: "/images/warranty.jpg",
      icon: "🛡️"
    }
  ];

  return (
    <div className="bg-white text-black py-20">
      <div className="container mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-center mb-3">
            <span className="text-sm font-medium relative px-8">
              <span className="inline-block h-px w-6 bg-[#E08F34] absolute left-0 top-1/2"></span>
              WE OFFER
              <span className="inline-block h-px w-6 bg-[#E08F34] absolute right-0 top-1/2"></span>
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Your Trusted Partner for<br />
            Business Success
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          {/* Left column - expandable items */}
          <div className="w-full lg:w-1/2 space-y-4">
            {benefitItems.map((item) => (
              <div 
                key={item.id}
                className={`rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  expandedItem === item.id ? 'border-l-4 border-[#E08F34] shadow-md' : 'border-l-4 border-transparent'
                }`}
                onClick={() => setExpandedItem(item.id)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <span className="text-gray-500 transform transition-transform duration-300 text-xl">
                    {expandedItem === item.id ? '▼' : '▶'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - images */}
          <div className="w-full lg:w-1/2 relative h-80">
            {benefitItems.map((item) => (
              <div 
                key={item.id}
                className={`absolute inset-0 rounded-lg overflow-hidden shadow-xl transition-opacity duration-500 ${
                  expandedItem === item.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Placeholder image */}
                <div className="relative h-full w-full bg-gray-200 rounded-lg flex items-center justify-center">
                  {/* This would be an actual image in production */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg"></div>
                  
                  {/* Icon overlay */}
                  {item.id === 3 && (
                    <div className="absolute bottom-2 right-2">
                      <div className="text-4xl">
                        {item.icon}
                      </div>
                    </div>
                  )}
                  
                  {/* Content overlays based on which item is shown */}
                  {item.id === 1 && (
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-orange-100 opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg p-4 w-3/4 h-3/4 flex items-center justify-center">
                          <div className="text-center">
                            <div className="h-32 w-32 mx-auto bg-gray-200 rounded-full overflow-hidden relative">
                              {/* Placeholder for person image */}
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200"></div>
                            </div>
                            <p className="mt-4 font-medium">Customer-First Solutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {item.id === 2 && (
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-blue-100 opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg p-4 w-3/4 h-3/4 flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="h-16 w-16 mx-auto bg-gray-200 rounded-full overflow-hidden relative">
                                {/* Placeholder for person image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="h-16 w-16 mx-auto bg-gray-200 rounded-full overflow-hidden relative">
                                {/* Placeholder for person image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {item.id === 3 && (
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-green-100 opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg p-4 w-3/4 h-3/4 flex items-center justify-center">
                          <div className="grid grid-cols-1 gap-4">
                            <div className="text-center">
                              <div className="h-16 w-16 mx-auto bg-gray-200 rounded-full overflow-hidden relative">
                                {/* Placeholder for person image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200"></div>
                              </div>
                              <p className="mt-2 text-sm font-medium">Creative Excellence</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {item.id === 4 && (
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gray-100 opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg p-4 w-3/4 h-3/4 flex items-center justify-center">
                          <div className="grid grid-cols-1 gap-4">
                            <div className="text-center">
                              <div className="h-16 w-16 mx-auto bg-gray-200 rounded-full overflow-hidden relative">
                                {/* Placeholder for document image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                              </div>
                              <p className="mt-2 text-sm font-medium">3 Months Warranty</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}