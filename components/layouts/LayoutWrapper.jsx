// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hiddenRoutes = ["/login", "/register"]; // rutas donde no se muestra navbar/footer

  const showLayout = !hiddenRoutes.includes(pathname);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {showLayout && <Navbar />}
        
        <main className="flex-grow">{children}</main>
        {showLayout && <Footer />}
      </div>
    </>
  );
}
