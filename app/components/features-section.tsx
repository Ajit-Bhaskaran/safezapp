
import Image from 'next/image'
import { Shield, Clock, MessageSquare, BarChart3, Users, Settings } from 'lucide-react'

export default function FeaturesSection() {
  const parentFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Content Filtering',
      description: 'Block inappropriate websites and content automatically'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Screen Time Control',
      description: 'Set healthy limits and schedules for device usage'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      title: 'Message Monitoring',
      description: 'Stay informed about your child\'s communications'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      title: 'Activity Reports',
      description: 'Detailed insights into online behavior and patterns'
    }
  ]

  const kidFeatures = [
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Safe Social Features',
      description: 'Connect with friends in a protected environment'
    },
    {
      icon: <Settings className="w-6 h-6 text-green-500" />,
      title: 'Easy Requests',
      description: 'Simple way to ask parents for more time or access'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Learning Resources',
      description: 'Access to educational content and safe websites'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      title: 'Progress Tracking',
      description: 'See achievements and digital citizenship goals'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Every Family
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed for both parents and children
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Parent Features */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-500 mr-3" />
                For Parents
              </h3>
              <p className="text-gray-600">
                Complete control and visibility over your child's digital experience
              </p>
            </div>

            <div className="space-y-6">
              {parentFeatures?.map?.((feature, index) => (
                <div key={feature?.title || `parent-feature-${index}`} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    {feature?.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature?.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              )) || []}
            </div>

            <div className="mt-8">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.abacus.ai/images/536f097e-5c1c-4cf7-9e7f-e1c668e2caf6.png"
                  alt="Parent Dashboard View"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Kid Features */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-green-500 mr-3" />
                For Kids
              </h3>
              <p className="text-gray-600">
                Safe, fun, and educational digital experiences
              </p>
            </div>

            <div className="space-y-6">
              {kidFeatures?.map?.((feature, index) => (
                <div key={feature?.title || `kid-feature-${index}`} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0">
                    {feature?.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature?.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              )) || []}
            </div>

            <div className="mt-8">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.abacus.ai/images/e4904027-6532-411d-9223-4b3ab3ab825d.png"
                  alt="Phone showing SafeZapp app interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
