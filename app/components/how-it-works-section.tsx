
import { Shield, Smartphone, BarChart3, Heart } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: 'Download & Install',
      description: 'Download SafeZapp on both parent and child devices. Simple setup takes less than 5 minutes.'
    },
    {
      number: '02',
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Set Protection Rules',
      description: 'Configure age-appropriate safety settings, screen time limits, and content filters.'
    },
    {
      number: '03',
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Monitor Activity',
      description: 'Get real-time insights into your child\'s digital activities and online interactions.'
    },
    {
      number: '04',
      icon: <Heart className="w-8 h-8 text-blue-500" />,
      title: 'Peace of Mind',
      description: 'Relax knowing your child is protected while they explore and learn online safely.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How SafeZapp Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to complete online safety for your family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps?.map?.((step, index) => (
            <div key={step?.number || `step-${index}`} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  {step?.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {step?.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step?.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step?.description}
              </p>
            </div>
          )) || []}
        </div>
      </div>
    </section>
  )
}
