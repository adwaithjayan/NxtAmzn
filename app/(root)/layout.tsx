import React from 'react'

import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'

export default async function RootLayout({
                                               children,
                                         }: {
      children: React.ReactNode
}) {
      return (
          <div className='flex min-h-screen flex-col'>
                <Header />
                <main className='flex flex-1 flex-col p-4'>{children}</main>
                <Footer />
          </div>
      )
}