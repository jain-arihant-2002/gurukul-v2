import type { Metadata } from 'next'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from './_components/Navbar';

export const metadata: Metadata = {
  title: 'Gurukul',
  description: 'A LMS for the modern world',
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <html lang="en" suppressHydrationWarning>
          <head />
          <body>
            <Navbar />
            {children}
          </body>
        </html>
      </ThemeProvider>
    </>
  )
}
// This layout file sets up the global styles and fonts for the application.