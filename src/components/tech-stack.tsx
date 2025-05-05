'use client'
import Image from 'next/image'
import Title from './common/title'

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

export default function TechStack() {
  return (
    <div className="bg-white text-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-center mb-2">
            <Title text='WHO ARE WE' />
          </div>
          <h2 className="text-3xl font-bold">
            The Technologies behind our
            <br />
            Innovation
          </h2>
        </div>

        {/* Technology Grid - Top 2 Rows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {technologies.slice(0, 4).map((tech) => (
            <div
              key={tech.id}
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
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 max-w-5xl mx-auto">
          {technologies.slice(4, 8).map((tech) => (
            <div
              key={tech.id}
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
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row - Only 3 items */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 max-w-5xl mx-auto">
          {technologies.slice(8).map((tech) => (
            <div
              key={tech.id}
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
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
