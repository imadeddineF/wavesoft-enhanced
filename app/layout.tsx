import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wavesoft - Solutions de gestion créatrices de valeur",
  description: "Solutions complètes de gestion commerciale, comptabilité, paie et CRM pour optimiser votre entreprise.",
  keywords: "gestion commerciale, ERP, comptabilité, paie, CRM, logiciel de gestion",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
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
  )
}
