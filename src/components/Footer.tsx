import { Mail, Phone, MapPin} from 'lucide-react';
import { FaInstagram, FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Metazapp</h3>
            <p className="text-gray-400">
              Transforming ideas into exceptional digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={35} /> No.117 - 1st Floor, Mettupalayam Road, Coimbatore - 641 047
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} /> +91 90034 14321
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />hello@metazapp.com
              </li>
            </ul>
          </div>
          
          <div>
  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
  <div className="flex space-x-4">
    <a 
      href="https://www.facebook.com/" 
      className="text-gray-400 hover:text-indigo-400 transition-colors" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaFacebookSquare size={24} />
    </a>
    <a 
      href="https://x.com/" 
      className="text-gray-400 hover:text-indigo-400 transition-colors" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaSquareXTwitter size={24} />
    </a>
    <a 
      href="https://www.instagram.com/" 
      className="text-gray-400 hover:text-indigo-400 transition-colors" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaInstagram size={24} />
    </a>
    <a 
      href="https://www.linkedin.com/" 
      className="text-gray-400 hover:text-indigo-400 transition-colors" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaLinkedin size={24} />
    </a>
  </div>
</div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Metazapp Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;