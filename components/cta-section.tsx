import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à transformer votre entreprise ?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-purple-100">
          Contactez-nous dès aujourd'hui pour une démonstration personnalisée et découvrez comment Wavesoft peut
          optimiser votre gestion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Phone className="mr-2 h-4 w-4" />
            Demander une démo
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
          >
            <Mail className="mr-2 h-4 w-4" />
            Nous contacter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold mb-2">Démo gratuite</h3>
            <p className="text-sm text-purple-100">Découvrez toutes les fonctionnalités en 30 minutes</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support inclus</h3>
            <p className="text-sm text-purple-100">Formation et accompagnement personnalisé</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Migration facilitée</h3>
            <p className="text-sm text-purple-100">Reprise de vos données existantes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
