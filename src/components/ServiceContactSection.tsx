'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function ServicesContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    projectDetails: ''
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full bg-white">
      {/* Header Text */}
      <div className="text-center py-10 bg-amber-50">
        <h2 className="text-2xl md:text-3xl font-medium text-amber-500">
          We Are Privileged To Collaborate With The Best, Delivering<br />
          Excellence Every Step Of The Way.
        </h2>
      </div>

      {/* Services Showcase */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {/* Mobile Apps */}
          <div className="text-center w-64">
            <Image 
              src="/api/placeholder/200/200" 
              alt="Android/iOS Applications" 
              width={160} 
              height={160} 
              className="mx-auto mb-4 w-40"
            />
            <p className="text-gray-700">Android/iOS Applications</p>
          </div>

          {/* Custom Software */}
          <div className="text-center w-64">
            <Image 
              src="/api/placeholder/200/200" 
              alt="Custom-built Softwares" 
              width={160} 
              height={160} 
              className="mx-auto mb-4 w-40"
            />
            <p className="text-gray-700">Custom-built Softwares</p>
          </div>

          {/* E-Commerce */}
          <div className="text-center w-64">
            <Image 
              src="/api/placeholder/200/200" 
              alt="E-Commerce Websites" 
              width={160} 
              height={160} 
              className="mx-auto mb-4 w-40"
            />
            <p className="text-gray-700">E-Commerce Websites</p>
          </div>
        </div>
      </div>

      {/* Contact Section Divider */}
      <div className="flex items-center justify-center my-8">
        <div className="h-px bg-gray-300 w-16"></div>
        <div className="mx-4 text-pink-600 font-medium text-sm">
          <span className="bg-white px-4 py-1 border border-pink-600 rounded">Connect With Us</span>
        </div>
        <div className="h-px bg-gray-300 w-16"></div>
      </div>

      {/* Let's Build Something Amazing */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800">Let&apos;s Build Something Amazing!</h2>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Left side - Illustration and text */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Give Your Ideas Life!</h3>
            <div className="flex justify-center md:justify-start">
              <Image 
                src="/api/placeholder/150/150" 
                alt="Development illustration" 
                width={150} 
                height={150} 
                className="w-32 md:w-40"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">Share a Few Quick Details.</p>
          </div>

          {/* Right side - Contact Form */}
          <div className="w-full max-w-md">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="projectDetails"
                  placeholder="Project Details"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={formData.projectDetails}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                >
                  Let&apos;s Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="py-4 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image 
                src="/api/placeholder/150/50" 
                alt="Supportta Logo" 
                width={150} 
                height={50} 
                className="h-10"
              />
            </div>
            <div className="text-xs text-gray-600 max-w-lg text-center md:text-right">
              Driven by innovation and fueled by passion, Supportta is committed to delivering digital solutions that make a difference.
              Let&apos;s build the future together.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
