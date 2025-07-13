import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, Package, ShoppingCart } from "lucide-react"

const actions = [
  { title: "Nouveau Devis", icon: FileText, href: "/dashboard/quotes/new" },
  { title: "Nouvelle Facture", icon: FileText, href: "/dashboard/invoices/new" },
  { title: "Nouveau Client", icon: Users, href: "/dashboard/clients/new" },
  { title: "Nouvel Article", icon: Package, href: "/dashboard/articles/new" },
  { title: "Nouvelle Commande", icon: ShoppingCart, href: "/dashboard/orders/new" },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions Rapides</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {actions.map((action, index) => (
          <Button key={index} variant="outline" className="w-full justify-start bg-transparent" asChild>
            <a href={action.href}>
              <action.icon className="h-4 w-4 mr-2" />
              {action.title}
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
