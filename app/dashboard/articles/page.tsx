"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, Copy, Barcode } from "lucide-react"

const articles = [
  {
    code: "ART-001",
    designation: "Ordinateur Portable Dell Latitude 5520",
    famille: "Informatique",
    marque: "Dell",
    prixAchat: "€650.00",
    prixVente: "€899.00",
    tva: "20%",
    unite: "Pièce",
    poids: "1.8 kg",
    statut: "Actif",
    stock: 25,
    codeBarre: "3760123456789",
  },
  {
    code: "ART-002",
    designation: "Imprimante HP LaserJet Pro M404n",
    famille: "Informatique",
    marque: "HP",
    prixAchat: "€180.00",
    prixVente: "€249.00",
    tva: "20%",
    unite: "Pièce",
    poids: "8.9 kg",
    statut: "Actif",
    stock: 5,
    codeBarre: "3760123456790",
  },
  {
    code: "ART-003",
    designation: "Clavier Mécanique RGB Gaming",
    famille: "Accessoires",
    marque: "Corsair",
    prixAchat: "€45.00",
    prixVente: "€79.00",
    tva: "20%",
    unite: "Pièce",
    poids: "1.2 kg",
    statut: "Actif",
    stock: 45,
    codeBarre: "3760123456791",
  },
  {
    code: "ART-004",
    designation: "Écran LED 24 pouces Full HD",
    famille: "Informatique",
    marque: "Samsung",
    prixAchat: "€120.00",
    prixVente: "€189.00",
    tva: "20%",
    unite: "Pièce",
    poids: "3.2 kg",
    statut: "Inactif",
    stock: 12,
    codeBarre: "3760123456792",
  },
]

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArticles = articles.filter(
    (article) =>
      article.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.famille.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.marque.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Articles</h1>
          <p className="text-muted-foreground">Gérez votre catalogue d'articles</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Copy className="h-4 w-4 mr-2" />
            Import/Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nouvel Article
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articles.length}</div>
            <p className="text-xs text-muted-foreground">Références</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Articles Actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articles.filter((a) => a.statut === "Actif").length}</div>
            <p className="text-xs text-muted-foreground">En vente</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Familles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(articles.map((a) => a.famille)).size}</div>
            <p className="text-xs text-muted-foreground">Catégories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Marques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(articles.map((a) => a.marque)).size}</div>
            <p className="text-xs text-muted-foreground">Fournisseurs</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Catalogue des Articles</CardTitle>
          <CardDescription>{filteredArticles.length} article(s) trouvé(s)</CardDescription>
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
                <TableHead>Marque</TableHead>
                <TableHead>Prix Achat</TableHead>
                <TableHead>Prix Vente</TableHead>
                <TableHead>TVA</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredArticles.map((article) => (
                <TableRow key={article.code}>
                  <TableCell className="font-medium">{article.code}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{article.designation}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Barcode className="h-3 w-3 mr-1" />
                        {article.codeBarre}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{article.famille}</TableCell>
                  <TableCell>{article.marque}</TableCell>
                  <TableCell>{article.prixAchat}</TableCell>
                  <TableCell className="font-medium">{article.prixVente}</TableCell>
                  <TableCell>{article.tva}</TableCell>
                  <TableCell>
                    <span className={article.stock <= 10 ? "text-red-600 font-medium" : ""}>{article.stock}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={article.statut === "Actif" ? "default" : "secondary"}>{article.statut}</Badge>
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
                        <DropdownMenuItem>
                          <Copy className="h-4 w-4 mr-2" />
                          Dupliquer
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Barcode className="h-4 w-4 mr-2" />
                          Étiquette
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
