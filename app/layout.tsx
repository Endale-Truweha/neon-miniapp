import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()


import Script from "next/script";
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='scroll-smooth antialiased'
      suppressHydrationWarning
    >
      
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
      
       
          <main className='grow'>
            
       
    <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  
  </QueryClientProvider>
            
            </main>
      
       
      </body>
    </html>
  )
}
