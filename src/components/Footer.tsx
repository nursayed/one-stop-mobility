import { Accessibility, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="lovable-uploads/a2594ff9-4e28-4521-ba29-2dc5e4d8fed2.png" alt="Image" />

            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for mobility solutions. Enhancing independence through quality equipment and compassionate service since 2009.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Wheelchair Rentals</li>
              <li className="hover:text-white cursor-pointer transition-colors">Scooter Rentals</li>
              <li className="hover:text-white cursor-pointer transition-colors">Equipment Repairs</li>
              <li className="hover:text-white cursor-pointer transition-colors">Equipment Sales</li>
              <li className="hover:text-white cursor-pointer transition-colors">Insurance Services</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Product Catalog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Rental Rates</li>
              <li className="hover:text-white cursor-pointer transition-colors">Service Areas</li>
              <li className="hover:text-white cursor-pointer transition-colors">Customer Reviews</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@mobilitypro.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span>123 Mobility Street<br />Healthcare District<br />Your City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 MobilityPro Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
