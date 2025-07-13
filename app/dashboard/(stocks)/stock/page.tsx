"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Edit, Eye, AlertTriangle, Package } from "lucide-react"

const stockItems = [
  {
    code: "ART-001",
    designation: "Ordinateur Portable Dell",
    family: "Informatique",
    stockActuel: 25,
    stockMin: 10,
    stockMax: 50,
    prixAchat: "€650.00",
    prixVente: "€899.00",
    valeurStock: "€16,250.00",
    statut: "Normal",
    emplacement: "A-01-01",
  },
  {
    code: "ART-002",
    designation: "Imprimante HP LaserJet",
    family: "Informatique",
    stockActuel: 5,
    stockMin: 8,
    stockMax: 20,
    prixAchat: "€180.00",
    prixVente: "€249.00",
    valeurStock: "€900.00",
    statut: "Rupture",
    emplacement: "B-02-03",
  },
  {
    code: "ART-003",
    designation: "Clavier Mécanique",
    family: "Accessoires",
    stockActuel: 45,
    stockMin: 15,
    stockMax: 30,
    prixAchat: "€45.00",
    prixVente: "€79.00",
    valeurStock: "€2,025.00",
    statut: "Surstock",
    emplacement: "C-01-05",
  },
  {
    code: "ART-004",
    designation: "Écran 24 pouces",
    family: "Informatique",
    stockActuel: 12,
    stockMin: 5,
    stockMax: 25,
    prixAchat: "€120.00",
    prixVente: "€189.00",
    valeurStock: "€1,440.00",
    statut: "Normal",
    emplacement: "A-03-02",
  },
]

export default function StockPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = stockItems.filter(
    (item) =>
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.family.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "Normal":
        return "default"
      case "Rupture":
        return "destructive"
      case "Surstock":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getStockPercentage = (actuel: number, min: number, max: number) => {
    return ((actuel - min) / (max - min)) * 100
  }

  const totalValue = stockItems.reduce((sum, item) => {
    return sum + Number.parseFloat(item.valeurStock.replace("€", "").replace(",", ""))
  }, 0)

  const lowStockItems = stockItems.filter((item) => item.stockActuel <= item.stockMin).length
  const overstockItems = stockItems.filter((item) => item.stockActuel > item.stockMax).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Stocks</h1>
          <p className="text-muted-foreground">Consultation et gestion des stocks</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Inventaire</Button>
          <Button>Mouvement de Stock</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Valeur Totale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€{totalValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Stock valorisé</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stockItems.length}</div>
            <p className="text-xs text-muted-foreground">Références actives</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ruptures</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{lowStockItems}</div>
            <p className="text-xs text-muted-foreground">À réapprovisionner</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Surstock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{overstockItems}</div>
            <p className="text-xs text-muted-foreground">À écouler</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>État des Stocks</CardTitle>
          <CardDescription>{filteredItems.length} article(s) trouvé(s)</CardDescription>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher un article..."
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
                <TableHead>Désignation</TableHead>
                <TableHead>Famille</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Niveau</TableHead>
                <TableHead>Prix Achat</TableHead>
                <TableHead>Prix Vente</TableHead>
                <TableHead>Valeur</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Emplacement</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.code}>
                  <TableCell className="font-medium">{item.code}</TableCell>
                  <TableCell>{item.designation}</TableCell>
                  <TableCell>{item.family}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{item.stockActuel}</span>
                      {item.stockActuel <= item.stockMin && <AlertTriangle className="h-4 w-4 text-red-500" />}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Progress
                        value={getStockPercentage(item.stockActuel, item.stockMin, item.stockMax)}
                        className="h-2"
                      />
                      <div className="text-xs text-muted-foreground">
                        Min: {item.stockMin} | Max: {item.stockMax}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{item.prixAchat}</TableCell>
                  <TableCell>{item.prixVente}</TableCell>
                  <TableCell className="font-medium">{item.valeurStock}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(item.statut)}>{item.statut}</Badge>
                  </TableCell>
                  <TableCell>{item.emplacement}</TableCell>
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
                          Voir détails
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Ajuster stock
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Package className="h-4 w-4 mr-2" />
                          Mouvements
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
