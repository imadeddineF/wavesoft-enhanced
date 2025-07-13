"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Package, Search, Plus, Download, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const inventories = [
    {
      id: "INV-001",
      name: "Q4 2024 Physical Inventory",
      location: "Main Warehouse",
      status: "in_progress",
      progress: 75,
      startDate: "2024-01-15",
      operator: "John Smith",
      itemsTotal: 1250,
      itemsCounted: 938,
      discrepancies: 12,
    },
    {
      id: "INV-002",
      name: "Store A Monthly Count",
      location: "Store A",
      status: "completed",
      progress: 100,
      startDate: "2024-01-10",
      operator: "Sarah Johnson",
      itemsTotal: 450,
      itemsCounted: 450,
      discrepancies: 3,
    },
    {
      id: "INV-003",
      name: "Warehouse B Audit",
      location: "Warehouse B",
      status: "pending",
      progress: 0,
      startDate: "2024-01-20",
      operator: "Mike Wilson",
      itemsTotal: 800,
      itemsCounted: 0,
      discrepancies: 0,
    },
  ]

  const stockMovements = [
    {
      id: "MOV-001",
      article: "Laptop Dell XPS 13",
      type: "in",
      quantity: 25,
      location: "Main Warehouse",
      operator: "John Smith",
      date: "2024-01-15 14:30",
      reference: "PO-2024-001",
    },
    {
      id: "MOV-002",
      article: "Office Chair Ergonomic",
      type: "out",
      quantity: 10,
      location: "Store A",
      operator: "Sarah Johnson",
      date: "2024-01-15 11:20",
      reference: "SO-2024-045",
    },
    {
      id: "MOV-003",
      article: "Wireless Mouse",
      type: "transfer",
      quantity: 50,
      location: "Warehouse B → Store A",
      operator: "Mike Wilson",
      date: "2024-01-15 09:15",
      reference: "TR-2024-012",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        )
      case "in_progress":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Clock className="w-3 h-3 mr-1" />
            In Progress
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-gray-100 text-gray-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getMovementBadge = (type: string) => {
    switch (type) {
      case "in":
        return <Badge className="bg-green-100 text-green-800">Stock In</Badge>
      case "out":
        return <Badge className="bg-red-100 text-red-800">Stock Out</Badge>
      case "transfer":
        return <Badge className="bg-blue-100 text-blue-800">Transfer</Badge>
      default:
        return <Badge variant="secondary">{type}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground">Manage physical inventories and stock movements</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Inventory
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Inventories</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Items Counted</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,388</div>
            <p className="text-xs text-muted-foreground">of 2,500 total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Discrepancies</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">55.5%</div>
            <p className="text-xs text-muted-foreground">Overall progress</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="inventories" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inventories">Physical Inventories</TabsTrigger>
          <TabsTrigger value="movements">Stock Movements</TabsTrigger>
          <TabsTrigger value="discrepancies">Discrepancies</TabsTrigger>
        </TabsList>

        <TabsContent value="inventories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Physical Inventories</CardTitle>
              <CardDescription>Track and manage physical inventory counts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search inventories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Inventory ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Operator</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Discrepancies</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventories.map((inventory) => (
                    <TableRow key={inventory.id}>
                      <TableCell className="font-medium">{inventory.id}</TableCell>
                      <TableCell>{inventory.name}</TableCell>
                      <TableCell>{inventory.location}</TableCell>
                      <TableCell>{getStatusBadge(inventory.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={inventory.progress} className="w-16" />
                          <span className="text-sm text-muted-foreground">{inventory.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{inventory.operator}</TableCell>
                      <TableCell>
                        {inventory.itemsCounted}/{inventory.itemsTotal}
                      </TableCell>
                      <TableCell>
                        {inventory.discrepancies > 0 ? (
                          <Badge variant="destructive">{inventory.discrepancies}</Badge>
                        ) : (
                          <Badge variant="secondary">0</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="movements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stock Movements</CardTitle>
              <CardDescription>Real-time tracking of all stock transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Movement ID</TableHead>
                    <TableHead>Article</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Operator</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Reference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stockMovements.map((movement) => (
                    <TableRow key={movement.id}>
                      <TableCell className="font-medium">{movement.id}</TableCell>
                      <TableCell>{movement.article}</TableCell>
                      <TableCell>{getMovementBadge(movement.type)}</TableCell>
                      <TableCell>{movement.quantity}</TableCell>
                      <TableCell>{movement.location}</TableCell>
                      <TableCell>{movement.operator}</TableCell>
                      <TableCell>{movement.date}</TableCell>
                      <TableCell>{movement.reference}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discrepancies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Discrepancies</CardTitle>
              <CardDescription>Items requiring attention and resolution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <AlertTriangle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Active Discrepancies</h3>
                <p className="text-muted-foreground">All inventory counts match expected values</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
