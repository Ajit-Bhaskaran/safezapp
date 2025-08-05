
import Image from 'next/image'
import { Apple, Play, Star } from 'lucide-react'

export default function AppDownloadSection() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of families who trust SafeZapp to protect their children online
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)]?.map?.((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  )) || []}
                </div>
                <span className="ml-2 text-gray-600 font-semibold">4.8/5 rating</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Your Free Trial
              </h3>
              <p className="text-gray-600 mb-6">
                Download SafeZapp for free and experience peace of mind in just minutes. 
                No credit card required for the trial period.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>24/7 family support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  <Apple className="w-6 h-6 mr-2" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  <Play className="w-6 h-6 mr-2" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/e4904027-6532-411d-9223-4b3ab3ab825d.png"
                alt="SafeZapp mobile app interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Trusted by over 50,000 families worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCrunch</div>
            <div className="text-2xl font-bold text-gray-400">Forbes</div>
            <div className="text-2xl font-bold text-gray-400">Wired</div>
            <div className="text-2xl font-bold text-gray-400">Parent</div>
          </div>
        </div>
      </div>
    </section>
  )
}
