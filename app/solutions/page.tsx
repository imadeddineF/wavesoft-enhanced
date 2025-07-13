import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Users, Package, BarChart3, Settings, Globe, Shield, Zap } from "lucide-react"

const modules = [
  {
    category: "Gestion Commerciale",
    icon: ShoppingCart,
    modules: [
      { name: "Devis et Factures", description: "Création et gestion complète des documents commerciaux" },
      { name: "Commandes", description: "Suivi des commandes clients et fournisseurs" },
      { name: "Bons de livraison", description: "Gestion des expéditions et réceptions" },
      { name: "Avoirs", description: "Traitement des retours et remboursements" },
    ],
  },
  {
    category: "Gestion des Tiers",
    icon: Users,
    modules: [
      { name: "Fichier Clients", description: "Base de données clients complète avec historique" },
      { name: "Fichier Fournisseurs", description: "Gestion centralisée des fournisseurs" },
      { name: "Contacts", description: "Carnet d'adresses et suivi des interactions" },
      { name: "Commerciaux", description: "Gestion des équipes de vente et commissions" },
    ],
  },
  {
    category: "Gestion des Stocks",
    icon: Package,
    modules: [
      { name: "Inventaires", description: "Inventaires physiques et valorisation" },
      { name: "Mouvements", description: "Traçabilité complète des mouvements de stock" },
      { name: "Réapprovisionnement", description: "Calcul automatique des besoins" },
      { name: "Lots et Séries", description: "Traçabilité par lot et numéro de série" },
    ],
  },
  {
    category: "Analyses et Reporting",
    icon: BarChart3,
    modules: [
      { name: "Tableaux de bord", description: "Indicateurs de performance en temps réel" },
      { name: "Statistiques", description: "Analyses détaillées des ventes et achats" },
      { name: "Reporting", description: "Rapports personnalisables et automatisés" },
      { name: "Graphiques", description: "Visualisation graphique des données" },
    ],
  },
]

const features = [
  {
    icon: Globe,
    title: "Multi-établissements",
    description: "Gestion centralisée de plusieurs établissements",
  },
  {
    icon: Shield,
    title: "Sécurité avancée",
    description: "Droits utilisateurs granulaires et audit trail",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisé pour traiter de gros volumes de données",
  },
  {
    icon: Settings,
    title: "Personnalisable",
    description: "Interface et fonctionnalités adaptables à vos besoins",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Solutions de Gestion</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos modules pour optimiser tous les aspects de votre entreprise
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Demander une démonstration
          </Button>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modules Disponibles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plus de 50 modules pour couvrir tous vos besoins de gestion
            </p>
          </div>

          <div className="space-y-12">
            {modules.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-6">
                  <category.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.modules.map((module, moduleIndex) => (
                    <Card key={moduleIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{module.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{module.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fonctionnalités Avancées</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des fonctionnalités pensées pour les entreprises modernes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à découvrir nos solutions ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une démonstration personnalisée et découvrez comment nos solutions peuvent transformer
            votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Demander une démo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Télécharger la brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
