import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white py-6 md:py-16">
      <div className="max-w-[90%] md:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-2 sm:col-span-2 md:col-span-3 text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 mb-2 md:mb-4 justify-center md:justify-start">
              <div className="w-6 h-6 md:w-8 md:h-8">
                <img src="./src/assets/logo.png" alt="" className="w-full h-full object-contain" />
              </div>
              <span className="text-base md:text-xl font-semibold text-gray-900">Medical</span>
            </Link>
            <p className="text-[10px] md:text-sm text-gray-600 mb-2 md:mb-4">
              Nam posuere accumsan porta. Integer id tincidunt sit amet sed libero.
            </p>
            <p className="text-[10px] md:text-xs text-gray-500">
              © Skyrev Theme 2021
            </p>
          </div>

          <div className="col-span-2 md:col-span-2 text-center md:text-left">
            <h3 className="text-xs md:text-sm font-semibold text-blue-500 uppercase mb-2 md:mb-4">
              COMPANY
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Donec dignissim</a></li>
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Curabitur egestas</a></li>
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Nam posuere</a></li>
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Aenean facilisis</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 text-center md:text-left">
            <h3 className="text-xs md:text-sm font-semibold text-blue-500 uppercase mb-2 md:mb-4">
              SERVICES
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Cras convallis</a></li>
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Vestibulum faucibus</a></li>
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Quisque lacinia purus</a></li>
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Aliquam nec ex</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 text-center md:text-left">
            <h3 className="text-xs md:text-sm font-semibold text-blue-500 uppercase mb-2 md:mb-4">
              RESOURCES
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Suspendisse porttitor</a></li>
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Nam posuere</a></li>
              <li><a href="#" className="text-[10px] md:text-sm text-gray-600">Curabitur egestas</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 flex flex-col items-center md:items-end mt-4 md:mt-0">
            <div className="flex justify-center space-x-2 mb-3">
              <a href="#" className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#E8F4FF]">
                <FaFacebookF className="text-blue-500 text-[10px] md:text-sm" />
              </a>
              <a href="#" className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#E8F4FF]">
                <FaLinkedinIn className="text-blue-500 text-[10px] md:text-sm" />
              </a>
              <a href="#" className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#E8F4FF]">
                <FaTwitter className="text-blue-500 text-[10px] md:text-sm" />
              </a>
              <a href="#" className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#E8F4FF]">
                <FaInstagram className="text-blue-500 text-[10px] md:text-sm" />
              </a>
            </div>
            <select className="w-36 md:w-full px-2 py-1 md:px-4 md:py-2 text-[10px] md:text-sm border border-gray-200 rounded-md">
              <option>English - En</option>
              <option>Hindi - Hn</option>
              <option>French - Fn</option>
              <option>Spanish - Sp</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; 