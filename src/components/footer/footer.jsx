import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">MahaVastu</h3>
            <p className="text-gray-300">
              Your trusted partner for real estate solutions.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li className="mb-2"><a href="/featured" className="text-gray-300 hover:text-white">Featured</a></li>
              <li className="mb-2"><a href="/popular" className="text-gray-300 hover:text-white">Popular</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul>
              <li className="mb-2 text-gray-300">123 Real Estate St.</li>
              <li className="mb-2 text-gray-300">Property City, PC 12345</li>
              <li className="mb-2 text-gray-300">info@mahavastu.com</li>
              <li className="mb-2 text-gray-300">(123) 456-7890</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} MahaVastu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 