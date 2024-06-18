
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';

import '@/styles/globals.css'
import { cookies } from "next/headers";

import { TRPCReactProvider } from '@/trpc/trpc-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

// Metadata
export const metadata: Metadata = {
  title: 'Grupo TAMX',
  description: 'We build homes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <TRPCReactProvider cookies={cookies().toString()}>
        <body className={GeistSans.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
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
