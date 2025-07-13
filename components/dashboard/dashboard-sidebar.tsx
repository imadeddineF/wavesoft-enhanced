"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  FileText,
  BarChart3,
  Settings,
  CreditCard,
  Truck,
  Warehouse,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

const menuItems = [
  {
    title: "Tableau de Bord",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Gestion Commerciale",
    icon: ShoppingCart,
    children: [
      { title: "Devis", href: "/dashboard/quotes" },
      { title: "Commandes", href: "/dashboard/orders" },
      { title: "Factures", href: "/dashboard/invoices" },
      { title: "Bons de Livraison", href: "/dashboard/deliveries" },
      { title: "Avoirs", href: "/dashboard/credits" },
    ],
  },
  {
    title: "Tiers",
    icon: Users,
    children: [
      { title: "Clients", href: "/dashboard/clients" },
      { title: "Fournisseurs", href: "/dashboard/suppliers" },
      { title: "Contacts", href: "/dashboard/contacts" },
      { title: "Commerciaux", href: "/dashboard/sales-reps" },
    ],
  },
  {
    title: "Articles & Produits",
    icon: Package,
    children: [
      { title: "Articles", href: "/dashboard/articles" },
      { title: "Produits", href: "/dashboard/products" },
      { title: "Familles", href: "/dashboard/families" },
      { title: "Nomenclatures", href: "/dashboard/nomenclatures" },
      { title: "Tarifs", href: "/dashboard/pricing" },
    ],
  },
  {
    title: "Stocks",
    icon: Warehouse,
    children: [
      { title: "Consultation Stock", href: "/dashboard/stock" },
      { title: "Mouvements", href: "/dashboard/stock-movements" },
      { title: "Inventaires", href: "/dashboard/inventory" },
      { title: "Réapprovisionnement", href: "/dashboard/replenishment" },
    ],
  },
  {
    title: "Achats",
    icon: FileText,
    children: [
      { title: "Demandes d'Achat", href: "/dashboard/purchase-requests" },
      { title: "Commandes Fournisseurs", href: "/dashboard/purchase-orders" },
      { title: "Réceptions", href: "/dashboard/receipts" },
      { title: "Factures Fournisseurs", href: "/dashboard/supplier-invoices" },
    ],
  },
  {
    title: "Financier",
    icon: CreditCard,
    children: [
      { title: "Règlements Clients", href: "/dashboard/customer-payments" },
      { title: "Règlements Fournisseurs", href: "/dashboard/supplier-payments" },
      { title: "Échéancier", href: "/dashboard/payment-schedule" },
      { title: "Relances", href: "/dashboard/reminders" },
    ],
  },
  {
    title: "Statistiques",
    icon: BarChart3,
    children: [
      { title: "Chiffre d'Affaires", href: "/dashboard/sales-stats" },
      { title: "Analyses Clients", href: "/dashboard/client-analysis" },
      { title: "Analyses Articles", href: "/dashboard/product-analysis" },
      { title: "Tableaux de Bord", href: "/dashboard/reports" },
    ],
  },
  {
    title: "Logistique",
    icon: Truck,
    children: [
      { title: "Expéditions", href: "/dashboard/shipments" },
      { title: "Transporteurs", href: "/dashboard/carriers" },
      { title: "Cadencier", href: "/dashboard/delivery-schedule" },
    ],
  },
  {
    title: "Paramétrage",
    icon: Settings,
    children: [
      { title: "Société", href: "/dashboard/company" },
      { title: "Utilisateurs", href: "/dashboard/users" },
      { title: "Préférences", href: "/dashboard/preferences" },
      { title: "Sauvegardes", href: "/dashboard/backups" },
    ],
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-gradient-to-r from-purple-600 to-orange-500" />
          <span className="text-xl font-bold">Wavesoft</span>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <div>
                  <Button variant="ghost" className="w-full justify-between" onClick={() => toggleExpanded(item.title)}>
                    <div className="flex items-center">
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.title}
                    </div>
                    {expandedItems.includes(item.title) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  {expandedItems.includes(item.title) && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "w-full justify-start",
                              pathname === child.href && "bg-purple-100 text-purple-700",
                            )}
                          >
                            {child.title}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn("w-full justify-start", pathname === item.href && "bg-purple-100 text-purple-700")}
                  >
                    <item.icon className="h-4 w-4 mr-3" />
                    {item.title}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}
