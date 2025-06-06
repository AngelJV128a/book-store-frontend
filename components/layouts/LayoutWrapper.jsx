// components/LayoutWrapper.tsx
'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()

  const hiddenRoutes = ['/login', '/register'] // rutas donde no se muestra navbar/footer

  const showLayout = !hiddenRoutes.includes(pathname)

  return (
    <>
      {showLayout && <Navbar />}
      <main>{children}</main>
      {showLayout && <Footer />}
    </>
  )
}
