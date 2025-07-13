"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const rejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowConsent(false)
  }

  const customize = () => {
    localStorage.setItem("cookie-consent", "customized")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                Ce site utilise des cookies et vous donne le contrôle sur ceux que vous souhaitez activer
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" onClick={rejectAll}>
                Tout refuser
              </Button>
              <Button variant="outline" size="sm" onClick={customize}>
                Personnaliser
              </Button>
              <Button size="sm" onClick={acceptAll}>
                Tout accepter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
