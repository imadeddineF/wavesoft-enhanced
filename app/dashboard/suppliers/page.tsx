"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, Mail, Phone, Building } from "lucide-react"

const suppliers = [
  {
    id: "FOU-001",
    name: "Dell Technologies France",
    contact: "Jean Dupont",
    email: "jean.dupont@dell.fr",
    phone: "+33 1 55 12 34 56",
    address: "34 Boulevard Haussmann",
    city: "Paris",
    postalCode: "75009",
    country: "France",
    status: "Actif",
    category: "Informatique",
    paymentTerms: "30 jours fin de mois",
    totalPurchases: "€245,670",
    lastOrder: "2024-01-15",
    siret: "12345678901234",
  },
  {
    id: "FOU-002",
    name: "HP France SAS",
    contact: "Marie Martin",
    email: "marie.martin@hp.fr",
    phone: "+33 1 42 98 76 54",
    address: "80 Rue Camille Desmoulins",
    city: "Issy-les-Moulineaux",
    postalCode: "92130",
    country: "France",
    status: "Actif",
    category: "Informatique",
    paymentTerms: "45 jours",
    totalPurchases: "€189,450",
    lastOrder: "2024-01-12",
    siret: "98765432109876",
  },
  {
    id: "FOU-003",
    name: "Logitech Europe SA",
    contact: "Pierre Dubois",
    email: "pierre.dubois@logitech.com",
    phone: "+33 1 23 45 67 89",
    address: "7 Rue de Madrid",
    city: "Paris",
    postalCode: "75008",
    country: "France",
    status: "Inactif",
    category: "Accessoires",
    paymentTerms: "30 jours",
    totalPurchases: "€67,890",
    lastOrder: "2023-12-20",
    siret: "11223344556677",
  },
]

export default function SuppliersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Fournisseurs</h1>
          <p className="text-muted-foreground">Gérez votre fichier fournisseur</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau Fournisseur
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Fournisseurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{suppliers.length}</div>
            <p className="text-xs text-muted-foreground">Références actives</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Fournisseurs Actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{suppliers.filter((s) => s.status === "Actif").length}</div>
            <p className="text-xs text-muted-foreground">En cours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Achats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€503,010</div>
            <p className="text-xs text-muted-foreground">Cette année</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Catégories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(suppliers.map((s) => s.category)).size}</div>
            <p className="text-xs text-muted-foreground">Types de produits</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Fournisseurs</CardTitle>
          <CardDescription>{filteredSuppliers.length} fournisseur(s) trouvé(s)</CardDescription>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher un fournisseur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Raison Sociale</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Coordonnées</TableHead>
                <TableHead>Adresse</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Conditions</TableHead>
                <TableHead>Total Achats</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSuppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell className="font-medium">{supplier.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{supplier.name}</div>
                      <div className="text-sm text-muted-foreground">SIRET: {supplier.siret}</div>
                    </div>
                  </TableCell>
                  <TableCell>{supplier.contact}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-3 w-3 mr-1" />
                        {supplier.email}
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-3 w-3 mr-1" />
                        {supplier.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-start">
                      <Building className="h-3 w-3 mr-1 mt-1" />
                      <div className="text-sm">
                        <div>{supplier.address}</div>
                        <div>
                          {supplier.postalCode} {supplier.city}
                        </div>
                        <div>{supplier.country}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{supplier.category}</TableCell>
                  <TableCell>{supplier.paymentTerms}</TableCell>
                  <TableCell className="font-medium">{supplier.totalPurchases}</TableCell>
                  <TableCell>
                    <Badge variant={supplier.status === "Actif" ? "default" : "secondary"}>{supplier.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          Voir
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
