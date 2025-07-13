import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-gradient-to-r from-purple-600 to-orange-500" />
              <span className="text-xl font-bold">Wavesoft</span>
            </div>
            <p className="text-gray-400 mb-4">Solutions de gestion créatrices de valeur depuis plus de 30 ans.</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/gestion-commerciale" className="hover:text-white">
                  Gestion Commerciale
                </Link>
              </li>
              <li>
                <Link href="/comptabilite" className="hover:text-white">
                  Comptabilité
                </Link>
              </li>
              <li>
                <Link href="/paie" className="hover:text-white">
                  Paie
                </Link>
              </li>
              <li>
                <Link href="/crm" className="hover:text-white">
                  CRM
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/documentation" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/formation" className="hover:text-white">
                  Formation
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white">
                  Support technique
                </Link>
              </li>
              <li>
                <Link href="/mises-a-jour" className="hover:text-white">
                  Mises à jour
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">
                  32 rue Jean Rostand
                  <br />
                  91893 ORSAY Cedex
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">01 69 18 90 00</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">contact@wavesoft.fr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Wavesoft. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
