import Image from "next/image";

export default function TechServices() {
  const services = [
    {
      icon: "/services/mobile-app.png",
      title: "Mobile App Development",
    },
    {
      icon: "/services/web-development.png",
      title: "Web Development",
    },
    {
      icon: "/services/ecomerce.png",
      title: "eCommerce Development",
    },
    {
      icon: "/services/ui-ux.png",
      title: "UI / UX Design",
    },
    {
      icon: "/services/custom-software.png",
      title: "Custom Software Development",
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
     
        <div className="flex justify-center gap-4">
        
        
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-20 max-w-6xl mx-auto shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl flex flex-col items-center text-center shadow hover:shadow-md transition"
            >
              <div className="bg-blue-100 p-3 rounded-xl mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-b from-gray-50 to-amber-100 rounded-2xl max-w-6xl mx-auto p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <div className="mb-6">
              <Image
                src="/services/figmalist.png"
                alt="figma"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              We Transform Ideas Into Powerful Digital Realities
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The future belongs to those who innovate – and that&apos;s where we come in. With a team of young, dynamic
              minds, we turn your ideas into digital realities that inspire.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md transition">
              Let&apos;s Connect
            </button>
          </div>

          {/* Illustration Image */}
          <div className="flex justify-center">
            <Image
              src="/services/illustration.png"
              alt="Digital transformation illustration"
              width={300}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
