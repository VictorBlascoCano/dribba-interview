import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Burger King - Menú',
  description:
    'Explora nuestro delicioso menú de hamburguesas, patatas fritas y más. ¡Ordena ahora y disfruta de la mejor comida rápida en casa!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <body className='min-h-full'>
        <Toaster position='bottom-right' richColors />
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2'
        >
          Saltar al contenido
        </a>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <main
              id='main'
              tabIndex={-1}
              className='flex-1 max-w-7xl mx-auto py-8 px-4'
            >
              {children}
            </main>
            <Footer />
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
