
'use client'

import { ChevronDown } from 'lucide-react'

export default function HeroSection() {

  const scrollToNextSection = () => {
    const element = document?.getElementById?.('how-it-works')
    element?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 z-0" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white container-custom">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Your Child's Online Safety,<br />
          <span className="text-yellow-300">Simplified.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Give your family peace of mind with comprehensive parental controls that protect without intrusion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => {
              const element = document?.getElementById?.('download')
              element?.scrollIntoView?.({ behavior: 'smooth' })
            }}
            className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get Started Free
          </button>
          <button 
            onClick={() => {
              const element = document?.getElementById?.('how-it-works')
              element?.scrollIntoView?.({ behavior: 'smooth' })
            }}
            className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
