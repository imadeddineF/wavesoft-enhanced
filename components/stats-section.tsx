import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "30+", label: "Années d'expérience" },
  { number: "10,000+", label: "Entreprises clientes" },
  { number: "50+", label: "Modules disponibles" },
  { number: "99.9%", label: "Disponibilité" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">La confiance de milliers d'entreprises</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Depuis plus de 30 ans, nous accompagnons les entreprises dans leur transformation digitale
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="text-center p-6">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-sm text-purple-100">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
