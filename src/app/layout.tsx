
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';

import '@/styles/globals.css'
import { cookies } from "next/headers";

import { TRPCReactProvider } from '@/trpc/trpc-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

// Metadata
export const metadata: Metadata = {
  title: 'Grupo TAM',
  description: 'Despacho de Arquitectos enfocados en la satisfacción del cliente',
}

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <TRPCReactProvider cookies={cookies().toString()}>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </TRPCReactProvider>
    </html>
  )
}
