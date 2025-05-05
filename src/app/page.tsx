'use client';

import Image from 'next/image';
import Link from 'next/link';
import TechStack from '../components/tech-stack';
import BusinessSuccess from '../components/business-success';
import ServicesSection from '../components/ServicesSection';
import ContactForm from '../components/contact-form';
import ServiceCard from '../components/service-card';
import { Particles } from '../components/ui/particles';

import Title from '../components/common/title';

export default function HomePage() {


  return (
    <div className="relative min-h-screen w-full font-sans text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <Particles className="h-full" quantity={100} ease={80} color="#ffffff" refresh />
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-10 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl font-semibold leading-snug">
              Supporting Your Vision with
              <br />
              <span className="text-[#E08F34] text-3xl ">Web Development...</span>
            </h1>
            <p className="mt-8 text-base max-w-md leading-relaxed text-gray-300">
              From Concept To Execution, We Deliver Innovative Software That Drives Results And Scales With Your Business
            </p>
            <div className="flex gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-600 to-[#E08F34] hover:from-yellow-500 hover:to-orange-400 text-white px-6 py-3 rounded font-medium"
              >
                Let&apos;s Connect
              </Link>
              <Link
                href="/services"
                className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded font-medium hidden sm:inline-block"
              >
                Check Our Services
              </Link>
            </div>
          </div>

          {/* Right Circular Images */}
          <div className="relative lg:w-1/2 h-[500px] hidden lg:block">
            <div className="absolute w-56 h-56 rounded-full overflow-hidden top-0 right-50 shadow-lg">
              <Image src="/home1.png" alt="Developer working" fill className="object-cover" />
            </div>
            <div className="absolute w-48 h-48 rounded-full overflow-hidden top-40 left-46 shadow-lg">
              <Image src="/home2.png" alt="Team collaboration" fill className="object-cover" />
            </div>
            <div className="absolute w-56 h-56 rounded-full overflow-hidden top-64 right-50 shadow-lg">
              <Image src="/home3.png" alt="Coding developer" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Transform Ideas Section */}
      <div className="w-full bg-white text-black py-16">
        <div className="container mx-auto px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="text-center mb-6">
                <Title text='WHO ARE WE' />
              </div>

              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-center mb-8">
                We Transform Ideas Into<br />
                Powerful Digital Realities
              </h2>
              
              {/* Image for small and medium screens - positioned between heading and paragraph */}
              <div className="relative mb-8 block lg:hidden mx-auto text-center">
                <Image
                  src="/whoarewe.png"
                  alt="Team collaboration meeting"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-[200px] sm:w-[220px] md:w-[300px] h-auto sm:h-[165px] md:h-[225px] mx-auto"
                />
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                The future belongs to those who innovate - and
                that&apos;s where we come in. With a team of young,
                dynamic minds, we turn your ideas into digital
                solutions that make an impact. We understand
                the importance of standing out in today&apos;s
                fast-paced digital landscape while meeting the
                end-user expectations. Your vision, powered by
                our expertise, becomes a reality that drives
                results. Let&apos;s build something extraordinary. We
                don&rsquo;t just adapt to the future – we design it. Let&apos;s
                start something extraordinary.
              </p>
            </div>

            {/* Image for large screens - original position */}
            <div className="lg:w-1/2 hidden lg:block">
              <div className="relative">
                <Image
                  src="/whoarewe.png"
                  alt="Team collaboration meeting"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-[#FDF9F3] py-20 px-4 ">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 ">
            <div className="flex items-center justify-center mb-4">

              <Title text='SOLUTIONS WE OFFER' />

            </div>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-gray-800">
              Explore our cutting-edge<br />
              business solutions
            </h2>
          </div>

          {/* Services Grid */}

          <ServicesSection />



          {/* Rating badge (similar to what was shown in the image) */}

        </div>
      </div>

      <BusinessSuccess />
      <TechStack />
      <ServiceCard />
      <div className="min-h-screen bg-gray-50">
        <ContactForm illustrationSrc="/contact-illustration.png" />
      </div>

    </div>
  );
}