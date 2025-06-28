"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Award, Clock } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Expert-Led Courses',
    description: 'Learn from industry professionals with real-world experience',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Connect with peers and collaborate on projects',
    color: 'text-green-500'
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Earn recognized certificates upon course completion',
    color: 'text-purple-500'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with lifetime access',
    color: 'text-orange-500'
  }
]

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Gurukul?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                  isHovered 
                    ? 'shadow-lg scale-105 bg-card border-primary/50' 
                    : 'hover:shadow-md bg-card/50'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Icon className={`h-12 w-12 mb-4 transition-all duration-300 ${
                  isHovered ? `${feature.color} scale-110` : 'text-muted-foreground'
                }`} />
                
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                
                {/* Interactive element */}
                <div className={`mt-4 transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <Button variant="ghost" size="sm">
                    Learn More →
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
