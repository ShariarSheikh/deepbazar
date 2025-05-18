'use client';

import { AiOutlineLogin, AiOutlineShop } from 'react-icons/ai';
import { BsClock, BsFillLaptopFill, BsShop } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { FiCamera, FiHeadphones, FiSmartphone, FiWatch } from 'react-icons/fi';
import { IoMdCart, IoMdHome, IoMdPricetag } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiTruckLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center">
            <BsShop className="mr-2 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              DeepBazar
            </span>
          </h3>
          <p className="text-gray-300">
            Your premium destination for electronics and gadgets.
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
              <FaPhoneAlt className="text-blue-400" />
              <span>+880-01304802278</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
              <MdEmail className="text-blue-400" />
              <span>support@deepbazar.com</span>
            </div>
          </div>

          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100053248808536"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors"
            >
              <FaFacebookF className="text-lg text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/sheikhshariar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
            >
              <FaLinkedinIn className="text-lg text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <IoMdHome className="mr-2 text-blue-400" />
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              {
                icon: <IoMdHome className="mr-2 text-blue-400" />,
                text: 'Home',
                link: '/',
              },
              {
                icon: <AiOutlineShop className="mr-2 text-blue-400" />,
                text: 'Shop',
                link: '/shop',
              },
              {
                icon: <IoMdPricetag className="mr-2 text-blue-400" />,
                text: 'Best Offers',
                link: '/best-offers',
              },
              {
                icon: <RiTruckLine className="mr-2 text-blue-400" />,
                text: 'Track Order',
                link: '/track-order',
              },
              {
                icon: <IoMdCart className="mr-2 text-blue-400" />,
                text: 'Cart',
                link: '/cart',
              },
              {
                icon: <AiOutlineLogin className="mr-2 text-blue-400" />,
                text: 'Sign In/Register',
                link: '/auth',
              },
            ].map((item, index) => (
              <li key={index} className="group">
                <a
                  href={item.link}
                  className="flex items-center text-gray-300 group-hover:text-blue-400 transition-colors"
                >
                  {item.icon}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <FiSmartphone className="mr-2 text-blue-400" />
            Categories
          </h3>
          <ul className="space-y-3">
            {[
              {
                icon: <FiWatch className="mr-2 text-blue-400" />,
                text: 'Watches',
                link: '/shop?category=watch',
              },
              {
                icon: <FiSmartphone className="mr-2 text-blue-400" />,
                text: 'Smartphones',
                link: '/shop?category=smart-phone',
              },
              {
                icon: <BsFillLaptopFill className="mr-2 text-blue-400" />,
                text: 'Laptops',
                link: '/shop?category=laptop',
              },
              {
                icon: <FiCamera className="mr-2 text-blue-400" />,
                text: 'Cameras',
                link: '/shop?category=camera',
              },
              {
                icon: <FiHeadphones className="mr-2 text-blue-400" />,
                text: 'Audio',
                link: '/shop?category=audio',
              },
            ].map((item, index) => (
              <li key={index} className="group">
                <a
                  href={item.link}
                  className="flex items-center text-gray-300 group-hover:text-blue-400 transition-colors"
                >
                  {item.icon}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <BsClock className="mr-2 text-blue-400" />
            Opening Hours
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex justify-between items-center">
              <span>Monday - Friday</span>
              <span className="text-blue-400 font-medium">9AM - 10PM</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Saturday</span>
              <span className="text-blue-400 font-medium">9AM - 9PM</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Sunday</span>
              <span className="text-red-400 font-medium">Closed</span>
            </li>
          </ul>

          <div className="pt-6">
            <p className="text-sm text-gray-400">
              Created by{' '}
              <a
                href="https://www.shariardev.com"
                className="text-blue-400 hover:underline"
              >
                Shariar Sheikh
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} DeepBazar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
