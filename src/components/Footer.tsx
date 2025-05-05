'use client'
import { useState } from 'react';
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-10 space-y-10">
        
        {/* Row: Resources + Services */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {/* On mobile, flex-row */}
          <div className="flex flex-col md:col-span-2 md:grid md:grid-cols-2 gap-8">
            {/* Resources */}
            <div>
              <h3 className="text-lg font-medium text-[#E08F34] mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/careers" className="hover:text-[#E08F34]">Careers</a></li>
                <li><a href="/about-us" className="hover:text-[#E08F34]">About Us</a></li>
                <li><a href="/contact-us" className="hover:text-[#E08F34]">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-medium text-[#E08F34] mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#E08F34]">Custom Software Development</a></li>
                <li><a href="#" className="hover:text-[#E08F34]">Web Development</a></li>
                <li><a href="#" className="hover:text-[#E08F34]">Mobile App Development</a></li>
                <li><a href="#" className="hover:text-[#E08F34]">UI / UX Design</a></li>
                <li><a href="#" className="hover:text-[#E08F34]">ECommerce Website</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-medium text-[#E08F34] mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#E08F34] mt-1 flex-shrink-0" size={20} />
                <p>
                  YMCA International Building,<br />
                  Lal Bahadur Shastri Rd,<br />
                  Kottayam, Kerala 686061
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#E08F34]" size={20} />
                <a href="tel:+919188911326" className="hover:text-[#E08F34]">+91 9188911326</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#E08F34]" size={20} />
                <a href="mailto:info@supporttasolutions.com" className="hover:text-[#E08F34]">info@supporttasolutions.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Row: Follow Us + Let's Connect */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-medium text-[#E08F34] mb-2">Follow us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-[#E08F34] hover:text-orange-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#E08F34] hover:text-orange-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-[#E08F34] hover:text-orange-300 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Let's Connect */}
          <div className="flex w-full md:w-auto max-w-xs sm:max-w-sm mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Enter your Number"
              className="px-2 py-1.5 sm:px-3 sm:py-2 w-full text-xs sm:text-sm md:text-base rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E08F34] text-black h-8 sm:h-10 md:h-auto"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button className="bg-[#E08F34] hover:bg-[#E08F34] text-white px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base rounded-r transition-colors whitespace-nowrap h-8 sm:h-10 md:h-auto min-w-[0px] sm:min-w-[50px] md:min-w-[120px]">
              Let&apos;s Connect
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400 pt-6 border-t border-gray-700">
          © 2025 Supportta Solutions Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
