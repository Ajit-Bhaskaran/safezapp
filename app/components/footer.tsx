
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8">
                <Image
                  src="https://cdn.abacus.ai/images/46e588c8-9780-4516-b408-07ebcc35e97a.png"
                  alt="SafeZapp Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold font-manrope">SafeZapp</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering families with comprehensive digital safety solutions. 
              Protecting children while fostering healthy technology relationships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-manrope">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Download App
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  System Requirements
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-manrope">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-blue-100 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-manrope">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">support@safezapp.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">1-800-SAFEZAPP</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">San Francisco, CA</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-blue-100 text-sm">
                24/7 Family Support Available
              </p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="border-t border-blue-500 mt-12 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex space-x-6">
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © {currentYear} SafeZapp. All rights reserved.
            </p>
            <p className="text-blue-100 text-sm mt-4 md:mt-0">
              Made by <a href="https://safezapp.au" className="text-white hover:text-yellow-300 transition-colors duration-200">safezapp.au</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
