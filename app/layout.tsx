import type { Metadata } from 'next'
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Gurukul',
  description: 'A LMS for the modern world',
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  console.log("Root Layout rendered");
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
// This layout file sets up the global styles and fonts for the application.