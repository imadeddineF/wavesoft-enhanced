"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { TrendingUp, TrendingDown, Download, Calendar } from "lucide-react"

const salesData = [
  { month: "Jan", ca: 65000, commandes: 120, clients: 45 },
  { month: "Fév", ca: 72000, commandes: 135, clients: 52 },
  { month: "Mar", ca: 68000, commandes: 128, clients: 48 },
  { month: "Avr", ca: 85000, commandes: 165, clients: 62 },
  { month: "Mai", ca: 92000, commandes: 180, clients: 68 },
  { month: "Jun", ca: 88000, commandes: 172, clients: 65 },
]

const topClients = [
  { name: "ACME Corp", ca: 125000, commandes: 45 },
  { name: "TechSolutions", ca: 89500, commandes: 32 },
  { name: "Global Industries", ca: 67200, commandes: 28 },
  { name: "Innovation Corp", ca: 54800, commandes: 24 },
  { name: "Digital Systems", ca: 43600, commandes: 19 },
]

const topProducts = [
  { name: "Ordinateurs", value: 35, color: "#8b5cf6" },
  { name: "Imprimantes", value: 25, color: "#f97316" },
  { name: "Accessoires", value: 20, color: "#06b6d4" },
  { name: "Écrans", value: 20, color: "#10b981" },
]

const monthlyComparison = [
  { category: "Ventes", thisMonth: 92000, lastMonth: 88000 },
  { category: "Commandes", thisMonth: 180, lastMonth: 172 },
  { category: "Nouveaux Clients", thisMonth: 68, lastMonth: 65 },
  { category: "Articles Vendus", thisMonth: 2340, lastMonth: 2180 },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tableaux de Bord & Statistiques</h1>
          <p className="text-muted-foreground">Analyses et rapports de performance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Période
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">CA du Mois</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€92,000</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +4.5% vs mois dernier
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Commandes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">180</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +4.7% vs mois dernier
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Nouveaux Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +4.6% vs mois dernier
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Panier Moyen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€511</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="h-3 w-3 mr-1" />
              -0.3% vs mois dernier
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Évolution des Ventes</TabsTrigger>
          <TabsTrigger value="clients">Top Clients</TabsTrigger>
          <TabsTrigger value="products">Répartition Produits</TabsTrigger>
          <TabsTrigger value="comparison">Comparaison Mensuelle</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Évolution du Chiffre d'Affaires</CardTitle>
              <CardDescription>Progression mensuelle des ventes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`€${value}`, "Chiffre d'Affaires"]} />
                    <Area type="monotone" dataKey="ca" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top 5 Clients</CardTitle>
              <CardDescription>Classement par chiffre d'affaires</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topClients.map((client, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-purple-600">#{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-medium">{client.name}</div>
                        <div className="text-sm text-muted-foreground">{client.commandes} commandes</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">€{client.ca.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Répartition des Ventes par Catégorie</CardTitle>
              <CardDescription>Distribution des ventes par famille de produits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topProducts}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {topProducts.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Comparaison Mensuelle</CardTitle>
              <CardDescription>Mois actuel vs mois précédent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyComparison} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="category" type="category" width={120} />
                    <Tooltip />
                    <Bar dataKey="lastMonth" fill="#e5e7eb" name="Mois dernier" />
                    <Bar dataKey="thisMonth" fill="#8b5cf6" name="Ce mois" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
