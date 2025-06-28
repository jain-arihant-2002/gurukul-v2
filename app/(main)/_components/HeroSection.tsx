"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Start Learning Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of students who are already advancing their careers 
              with our expert-led courses and hands-on projects.
            </p>
            
            {/* Client-side interactivity */}
            <div className="flex gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsPlaying(!isPlaying)}
                className="group"
              >
                <Play className={`mr-2 h-4 w-4 transition-transform ${isPlaying ? 'scale-110' : ''}`} />
                {isPlaying ? 'Playing...' : 'Watch Demo'}
              </Button>
            </div>
            
            {/* Dynamic counter - client-side */}
            <div className="flex gap-8 pt-6">
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className={`aspect-video bg-muted rounded-lg flex items-center justify-center transition-all duration-300 ${
              isPlaying ? 'bg-primary/20 scale-105' : ''
            }`}>
              <div className="text-center">
                <div className="text-6xl mb-4">🎓</div>
                <p className="text-muted-foreground">
                  {isPlaying ? 'Demo is playing!' : 'Course Preview'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
