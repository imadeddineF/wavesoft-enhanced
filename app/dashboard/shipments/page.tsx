"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Truck, Search, Plus, Package, MapPin, CheckCircle, AlertCircle } from "lucide-react"

export default function ShipmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const shipments = [
    {
      id: "SHP-001",
      orderId: "ORD-2024-001",
      customer: "Acme Corporation",
      carrier: "Chronopost",
      trackingNumber: "CP123456789FR",
      status: "in_transit",
      origin: "Paris Warehouse",
      destination: "Lyon Office",
      shipDate: "2024-01-15",
      estimatedDelivery: "2024-01-17",
      weight: "2.5 kg",
      cost: "€15.50",
    },
    {
      id: "SHP-002",
      orderId: "ORD-2024-002",
      customer: "Tech Solutions Ltd",
      carrier: "DHL",
      trackingNumber: "DHL987654321",
      status: "delivered",
      origin: "Main Warehouse",
      destination: "Berlin Office",
      shipDate: "2024-01-12",
      estimatedDelivery: "2024-01-14",
      weight: "5.2 kg",
      cost: "€28.90",
    },
    {
      id: "SHP-003",
      orderId: "ORD-2024-003",
      customer: "Global Industries",
      carrier: "UPS",
      trackingNumber: "UPS456789123",
      status: "preparing",
      origin: "Warehouse B",
      destination: "Madrid Store",
      shipDate: "2024-01-16",
      estimatedDelivery: "2024-01-18",
      weight: "1.8 kg",
      cost: "€12.30",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Delivered
          </Badge>
        )
      case "in_transit":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Truck className="w-3 h-3 mr-1" />
            In Transit
          </Badge>
        )
      case "preparing":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Package className="w-3 h-3 mr-1" />
            Preparing
          </Badge>
        )
      case "delayed":
        return (
          <Badge className="bg-red-100 text-red-800">
            <AlertCircle className="w-3 h-3 mr-1" />
            Delayed
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shipment Management</h1>
          <p className="text-muted-foreground">Track and manage all shipments and deliveries</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Package className="w-4 h-4 mr-2" />
            Bulk Ship
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Shipment
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">8 in transit</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivered Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delayed</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Shipping Cost</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€1,245</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Shipments</TabsTrigger>
          <TabsTrigger value="preparing">Preparing</TabsTrigger>
          <TabsTrigger value="in_transit">In Transit</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Shipments</CardTitle>
              <CardDescription>Complete overview of all shipment activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search shipments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Shipment ID</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Carrier</TableHead>
                    <TableHead>Tracking</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Delivery Date</TableHead>
                    <TableHead>Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shipments.map((shipment) => (
                    <TableRow key={shipment.id}>
                      <TableCell className="font-medium">{shipment.id}</TableCell>
                      <TableCell>{shipment.orderId}</TableCell>
                      <TableCell>{shipment.customer}</TableCell>
                      <TableCell>{shipment.carrier}</TableCell>
                      <TableCell className="font-mono text-sm">{shipment.trackingNumber}</TableCell>
                      <TableCell>{getStatusBadge(shipment.status)}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{shipment.origin}</div>
                          <div className="text-muted-foreground">→ {shipment.destination}</div>
                        </div>
                      </TableCell>
                      <TableCell>{shipment.estimatedDelivery}</TableCell>
                      <TableCell>{shipment.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preparing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preparing Shipments</CardTitle>
              <CardDescription>Shipments being prepared for dispatch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">1 Shipment Preparing</h3>
                <p className="text-muted-foreground">SHP-003 is being prepared for dispatch</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in_transit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>In Transit</CardTitle>
              <CardDescription>Shipments currently being delivered</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Truck className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">1 Shipment In Transit</h3>
                <p className="text-muted-foreground">SHP-001 is on its way to destination</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivered" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivered Shipments</CardTitle>
              <CardDescription>Successfully completed deliveries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">1 Shipment Delivered</h3>
                <p className="text-muted-foreground">SHP-002 was successfully delivered</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
