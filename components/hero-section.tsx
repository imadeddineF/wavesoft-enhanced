import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-600 to-orange-500" />

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-800/30 rounded-3xl rotate-12 blur-sm" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500/30 rounded-full blur-sm" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/10 rounded-2xl rotate-45" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Solutions de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">gestion</span>{" "}
          créatrices
          <br />
          de valeur
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-purple-100">
          Optimisez votre entreprise avec nos solutions complètes de gestion commerciale, comptabilité, paie et CRM.
          Plus de 30 ans d'expertise au service de votre réussite.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Découvrir nos solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-900 bg-transparent"
          >
            <Play className="mr-2 h-4 w-4" />
            Voir la démo
          </Button>
        </div>

        {/* Floating card */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left max-w-sm">
            <h3 className="font-semibold mb-2">Découvrir</h3>
            <p className="text-sm text-purple-100">Explorez toutes nos fonctionnalités</p>
            <Button variant="ghost" size="sm" className="mt-2 text-white hover:bg-white/20">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
