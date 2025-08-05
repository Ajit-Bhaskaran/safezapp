
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document?.getElementById?.(sectionId)
    element?.scrollIntoView?.({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image
                src="https://cdn.abacus.ai/images/46e588c8-9780-4516-b408-07ebcc35e97a.png"
                alt="SafeZapp Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 font-manrope">SafeZapp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="btn-primary"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="btn-primary w-full"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
