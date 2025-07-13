import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Users, BarChart3, Package, CreditCard, FileText, Truck, Calculator } from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "Gestion Commerciale",
    description: "Devis, commandes, factures, bons de livraison avec gestion complète du cycle de vente",
  },
  {
    icon: Users,
    title: "Gestion Clients & Fournisseurs",
    description: "Fichiers clients et fournisseurs complets avec historique et suivi personnalisé",
  },
  {
    icon: Package,
    title: "Gestion des Stocks",
    description: "Inventaires, mouvements, réapprovisionnement automatique et gestion FIFO/FEFO",
  },
  {
    icon: BarChart3,
    title: "Tableaux de Bord",
    description: "Statistiques en temps réel, analyses de performance et indicateurs clés",
  },
  {
    icon: CreditCard,
    title: "Gestion Financière",
    description: "Règlements, échéances, relances et interface bancaire intégrée",
  },
  {
    icon: FileText,
    title: "Facturation Électronique",
    description: "Interface CHORUS Pro et conformité aux obligations légales",
  },
  {
    icon: Truck,
    title: "Logistique",
    description: "Gestion des expéditions, transporteurs et suivi des livraisons",
  },
  {
    icon: Calculator,
    title: "Comptabilité",
    description: "Intégration comptable complète avec export vers tous les logiciels",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Une solution complète pour votre entreprise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez toutes les fonctionnalités de notre suite de gestion intégrée
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
