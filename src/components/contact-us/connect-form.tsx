'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import Title from '../common/title';

const ConnectForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    project: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Send to backend here
  };

  return (
    <section className="w-full bg-[#fdf9f4] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Title text="Tell us about your project" />
          </div>
          <h1 className="text-2xl font-medium text-gray-800">Give Your Ideas Life!</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 bg-[#fff9ef] p-6 md:p-8 rounded-lg">
            <div className="space-y-8">
              <div className="flex items-start space-x-3">
                <div className="text-[#E08F34]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[#E08F34] font-medium mb-1">Email</h3>
                  <p className="text-gray-700 text-sm">OWERGOWERTYUI</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-[#E08F34]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[#E08F34] font-medium mb-1">Phone</h3>
                  <p className="text-gray-700 text-sm">OWERGOWERTYUI</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-[#E08F34]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[#E08F34] font-medium mb-1">Our Office Location</h3>
                  <p className="text-gray-700 text-sm">OWERGOWERTYUI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 bg-white p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-0 border-b border-gray-200 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-b-gray-400 focus:outline-none"
              />

              <Input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-0 border-b border-gray-200 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-b-gray-400 focus:outline-none"
              />

              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-0 border-b border-gray-200 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-b-gray-400 focus:outline-none"
              />

              <Input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full border-0 border-b border-gray-200 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-b-gray-400 focus:outline-none"
              />

              <Textarea
                name="project"
                placeholder="Project Details"
                value={formData.project}
                onChange={handleChange}
                className="w-full min-h-[100px] border-0 border-b border-gray-200 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-b-gray-400 resize-none focus:outline-none"
              />

              <div className="flex justify-center md:justify-start">
                <Button
                  type="submit"
                  className="bg-[#b5842f] hover:bg-[#9e7229] text-white px-8 py-2 rounded font-normal"
                >
                  Let&rsquo;s Connect
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-700">Our team will get back to you as soon as possible.</p>
        </div>

        <div className="mt-8 relative w-full h-[300px]">
          <Image 
            src="/services/team.png" 
            alt="Team working" 
            fill 
            className="object-cover rounded-md" 
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectForm;
