import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Store, Factory } from "lucide-react"

const solutions = [
  {
    icon: Store,
    title: "Commerce & Distribution",
    description: "Solution adaptée aux commerces de détail, grossistes et distributeurs",
    features: ["Gestion multi-magasins", "E-commerce intégré", "Codes-barres", "Promotions"],
    badge: "Populaire",
  },
  {
    icon: Factory,
    title: "Industrie & Production",
    description: "Gestion complète pour les entreprises industrielles et de production",
    features: ["Nomenclatures techniques", "Ordres de fabrication", "Contremarque", "Traçabilité"],
    badge: "Complet",
  },
  {
    icon: Building2,
    title: "Services & Négoce",
    description: "Optimisé pour les entreprises de services et de négoce",
    features: ["Gestion d'affaires", "Abonnements", "Frais d'approche", "Multi-devises"],
    badge: "Flexible",
  },
]

export function SolutionsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Des solutions adaptées à votre secteur</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la solution qui correspond parfaitement à votre activité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <solution.icon className="h-10 w-10 text-purple-600" />
                  <Badge variant="secondary">{solution.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
