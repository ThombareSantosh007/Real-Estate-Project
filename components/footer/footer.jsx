import { Link } from 'react-router-dom';
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold text-white">Mahavastu</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property. We provide comprehensive real estate solutions with a focus on Vastu principles.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="hover:text-blue-500 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/vastu-consultation" className="hover:text-blue-500 transition-colors">
                  Vastu Consultation
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 mr-2" />
                <span>123 Vastu Marg, Sector 42<br />New Delhi, 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <a href="tel:+911234567890" className="hover:text-blue-500 transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <a href="mailto:info@mahavastu.com" className="hover:text-blue-500 transition-colors">
                  info@mahavastu.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest property updates and Vastu tips.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Award className="h-6 w-6 text-blue-500 mr-2" />
              <span className="text-white font-semibold">Award Winning Real Estate Company</span>
            </div>
            <div className="flex space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Real Estate Award" 
                className="h-12 w-auto"
              />
              <img 
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Best Property Consultant" 
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Mahavastu. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-blue-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;