
import Image from 'next/image'
import { Heart, Shield, Clock, Users } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Peace of Mind',
      description: 'Sleep better knowing your child is protected from online dangers while still enjoying the benefits of technology.',
      stat: '98% of parents report feeling more confident about their child\'s online activities'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Proven Protection',
      description: 'Advanced AI-powered filters and real-time monitoring keep your child safe from inappropriate content and cyber threats.',
      stat: 'Blocks 99.9% of harmful content automatically'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Healthy Balance',
      description: 'Help your child develop healthy digital habits with smart screen time management and educational content prioritization.',
      stat: 'Families see 40% improvement in screen time balance'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Stronger Relationships',
      description: 'Foster trust and communication with transparent monitoring that educates rather than restricts your child\'s digital growth.',
      stat: 'Children show 85% better digital citizenship awareness'
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why SafeZapp Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just parental controls - we're building safer digital futures for families
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/87429000-8c98-4924-8f4e-876b8e13c0f6.png"
                alt="Parent using SafeZapp for child protection"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Protect What Matters Most
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In today's digital world, children face online risks that didn't exist when we were growing up. 
                SafeZapp bridges that gap with modern solutions that protect without isolating.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-900 font-semibold text-lg">
                  "SafeZapp has transformed how our family approaches technology. 
                  My kids are safer online, and we have better conversations about digital responsibility."
                </p>
                <p className="text-blue-700 mt-2">- Sarah M., Mother of 3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits?.map?.((benefit, index) => (
            <div key={benefit?.title || `benefit-${index}`} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {benefit?.icon}
                <h4 className="text-xl font-bold text-gray-900 ml-3">
                  {benefit?.title}
                </h4>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit?.description}
              </p>
              <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-gray-900">
                  {benefit?.stat}
                </p>
              </div>
            </div>
          )) || []}
        </div>
      </div>
    </section>
  )
}
