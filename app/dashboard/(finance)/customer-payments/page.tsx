"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, CreditCard, AlertTriangle, CheckCircle } from "lucide-react"

const payments = [
  {
    id: "REG-2024-001",
    client: "ACME Corporation",
    invoice: "FAC-2024-001",
    amount: "€12,500.00",
    dueDate: "2024-02-15",
    paymentDate: "2024-02-10",
    method: "Virement",
    status: "Payé",
    delay: 0,
  },
  {
    id: "REG-2024-002",
    client: "TechSolutions SARL",
    invoice: "FAC-2024-002",
    amount: "€8,750.00",
    dueDate: "2024-02-12",
    paymentDate: null,
    method: "Chèque",
    status: "En attente",
    delay: 3,
  },
  {
    id: "REG-2024-003",
    client: "Global Industries",
    invoice: "FAC-2024-003",
    amount: "€15,200.00",
    dueDate: "2024-01-25",
    paymentDate: null,
    method: "Virement",
    status: "En retard",
    delay: 21,
  },
  {
    id: "REG-2024-004",
    client: "Innovation Corp",
    invoice: "FAC-2024-004",
    amount: "€6,300.00",
    dueDate: "2024-02-08",
    paymentDate: "2024-02-05",
    method: "Carte bancaire",
    status: "Payé",
    delay: 0,
  },
]

export default function CustomerPaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPayments = payments.filter(
    (payment) =>
      payment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.invoice.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Payé":
        return "default"
      case "En attente":
        return "secondary"
      case "En retard":
        return "destructive"
      case "Partiel":
        return "outline"
      default:
        return "secondary"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Payé":
        return CheckCircle
      case "En retard":
        return AlertTriangle
      default:
        return CreditCard
    }
  }

  const totalOutstanding = payments
    .filter((p) => p.status !== "Payé")
    .reduce((sum, p) => sum + Number.parseFloat(p.amount.replace("€", "").replace(",", "")), 0)

  const overduePayments = payments.filter((p) => p.status === "En retard").length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Règlements Clients</h1>
          <p className="text-muted-foreground">Suivi des paiements et encaissements</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau Règlement
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En Attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€{totalOutstanding.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">À encaisser</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En Retard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{overduePayments}</div>
            <p className="text-xs text-muted-foreground">Factures</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Payés ce Mois</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{payments.filter((p) => p.status === "Payé").length}</div>
            <p className="text-xs text-muted-foreground">Règlements</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taux de Recouvrement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((payments.filter((p) => p.status === "Payé").length / payments.length) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">Ce mois</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Suivi des Règlements</CardTitle>
          <CardDescription>{filteredPayments.length} règlement(s) trouvé(s)</CardDescription>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher un règlement..."
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
                <TableHead>Référence</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Facture</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Échéance</TableHead>
                <TableHead>Date Paiement</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead>Retard</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((payment) => {
                const StatusIcon = getStatusIcon(payment.status)
                return (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.client}</TableCell>
                    <TableCell>{payment.invoice}</TableCell>
                    <TableCell className="font-medium">{payment.amount}</TableCell>
                    <TableCell>{payment.dueDate}</TableCell>
                    <TableCell>{payment.paymentDate || "-"}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell>
                      {payment.delay > 0 && <span className="text-red-600 font-medium">{payment.delay} jours</span>}
                      {payment.delay === 0 && payment.status === "Payé" && (
                        <span className="text-green-600">À temps</span>
                      )}
                      {payment.delay === 0 && payment.status !== "Payé" && "-"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <StatusIcon className="h-4 w-4" />
                        <Badge variant={getStatusColor(payment.status)}>{payment.status}</Badge>
                      </div>
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
                            <CreditCard className="h-4 w-4 mr-2" />
                            Encaisser
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
