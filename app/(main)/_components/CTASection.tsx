"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Mail } from 'lucide-react'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 2000)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers. 
            Get early access to new courses and exclusive content.
          </p>
          
          {/* Interactive newsletter signup */}
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitted}
                className="shrink-0"
              >
                {isSubmitted ? (
                  'Subscribed! ✓'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Social proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-sm font-medium">Trusted by</div>
              <div className="font-bold">Google</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">Partnerships with</div>
              <div className="font-bold">Microsoft</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">Featured on</div>
              <div className="font-bold">TechCrunch</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">Certified by</div>
              <div className="font-bold">IEEE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
