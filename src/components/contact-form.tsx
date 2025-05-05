'use client'
import { useState } from 'react';
import Title from './common/title';

interface ContactFormProps {
  illustrationSrc?: string;
}

export default function ContactForm({ illustrationSrc = '/aboutus/amico.png' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    projectDetails: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (

    <div className="max-w-6xl mx-auto px-4 py-12 bg-[#fffcfc]">
      <div className="text-center mb-8">
        <div className="inline-block">
          <div className="flex items-center justify-center space-x-2 mb-3">
           <Title text="Connect With Us" />
          </div>

        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Let&apos;s Build Something Amazing!</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Give Your Ideas Life!</h2>

          <div className="flex justify-center">
            <img
              src={illustrationSrc}
              alt="Developer working on app"
              className="max-w-md mx-auto"
            />
          </div>

          <h3 className="text-2xl font-medium text-gray-700">Share a Few Quick Details.</h3>
        </div> 


        <div>
          <div className="space-y-8">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-b-2 border-gray-300 py-3 focus:border-green-600 focus:outline-none text-gray-700"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Id"
                className="w-full border-b-2 border-gray-300 py-3 focus:border-green-600 focus:outline-none text-gray-700"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border-b-2 border-gray-300 py-3 focus:border-green-600 focus:outline-none text-gray-700"
              />
            </div>

            <div>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Project Details"
                className="w-full border-b-2 border-gray-300 py-3 focus:border-green-600 focus:outline-none text-gray-700 resize-none h-32"
              ></textarea>
            </div>

            <div className="flex justify-center pt-6">
              <button
                onClick={handleSubmit}
                className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-12 rounded-md transition duration-300"
              >
                Let&apos;s Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}