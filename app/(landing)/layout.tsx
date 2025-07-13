import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Header } from "@/components/header"
import { CookieConsent } from "@/components/cookie-consent"
import { Footer } from "@/components/footer"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />  
        {children}
      <Footer />
      <CookieConsent />
    </div>
  )
}
