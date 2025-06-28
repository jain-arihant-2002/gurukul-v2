import { HeroSection } from './_components/HeroSection'
import { FeaturesSection } from './_components/FeaturesSection'
import { CTASection } from './_components/CTASection'

// Enable static generation
export const dynamic = 'force-static'

// Optional: Add metadata for SEO
export const metadata = {
  title: 'Gurukul - Transform Your Learning Journey',
  description: 'Access expert-led courses, connect with instructors, and achieve your educational goals with our modern learning platform.',
}

// This page is STATIC by default (Server Component)
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Static content - rendered at build time */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to Gurukul
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your learning journey with our modern education platform. 
            Access courses, connect with instructors, and achieve your goals.
          </p>
        </div>
      </div>

      {/* Client components for interactivity */}
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
