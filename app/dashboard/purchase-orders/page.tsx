"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, Package, CheckCircle } from "lucide-react"

const purchaseOrders = [
  {
    id: "ACH-2024-001",
    supplier: "Dell Technologies France",
    date: "2024-01-15",
    deliveryDate: "2024-01-25",
    amount: "€25,600.00",
    status: "Confirmée",
    buyer: "Marie Dubois",
    items: 12,
    received: 0,
  },
  {
    id: "ACH-2024-002",
    supplier: "HP France SAS",
    date: "2024-01-14",
    deliveryDate: "2024-01-24",
    amount: "€18,900.00",
    status: "En attente",
    buyer: "Pierre Martin",
    items: 8,
    received: 0,
  },
  {
    id: "ACH-2024-003",
    supplier: "Logitech Europe SA",
    date: "2024-01-12",
    deliveryDate: "2024-01-22",
    amount: "€4,500.00",
    status: "Partiellement reçue",
    buyer: "Sophie Laurent",
    items: 15,
    received: 8,
  },
  {
    id: "ACH-2024-004",
    supplier: "Samsung Electronics",
    date: "2024-01-10",
    deliveryDate: "2024-01-20",
    amount: "€12,300.00",
    status: "Reçue",
    buyer: "Jean Dupont",
    items: 6,
    received: 6,
  },
]

export default function PurchaseOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredOrders = purchaseOrders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.buyer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmée":
        return "default"
      case "En attente":
        return "secondary"
      case "Partiellement reçue":
        return "outline"
      case "Reçue":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Commandes Fournisseurs</h1>
          <p className="text-muted-foreground">Gestion des achats et approvisionnements</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle Commande
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Commandes en Cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{purchaseOrders.filter((o) => o.status !== "Reçue").length}</div>
            <p className="text-xs text-muted-foreground">À recevoir</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En Attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{purchaseOrders.filter((o) => o.status === "En attente").length}</div>
            <p className="text-xs text-muted-foreground">Confirmation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Reçues ce Mois</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{purchaseOrders.filter((o) => o.status === "Reçue").length}</div>
            <p className="text-xs text-muted-foreground">Complètes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Montant Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€61,300</div>
            <p className="text-xs text-muted-foreground">Ce mois</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Commandes Fournisseurs</CardTitle>
          <CardDescription>{filteredOrders.length} commande(s) trouvée(s)</CardDescription>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher une commande..."
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
                <TableHead>Numéro</TableHead>
                <TableHead>Fournisseur</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Livraison Prévue</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Articles</TableHead>
                <TableHead>Réception</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Acheteur</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.supplier}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.deliveryDate}</TableCell>
                  <TableCell className="font-medium">{order.amount}</TableCell>
                  <TableCell>{order.items} articles</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span>
                        {order.received}/{order.items}
                      </span>
                      {order.received === order.items && order.items > 0 && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(order.status)}>{order.status}</Badge>
                  </TableCell>
                  <TableCell>{order.buyer}</TableCell>
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
                          <Package className="h-4 w-4 mr-2" />
                          Réceptionner
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Annuler
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
