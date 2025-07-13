"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bell, Search, Plus, Mail, Phone, FileText, AlertTriangle, Clock, CheckCircle } from "lucide-react"

export default function RemindersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const reminders = [
    {
      id: "REM-001",
      customer: "Acme Corporation",
      invoice: "INV-2024-001",
      amount: "€2,500.00",
      daysOverdue: 15,
      level: 1,
      lastSent: "2024-01-10",
      method: "email",
      status: "sent",
      nextAction: "2024-01-20",
    },
    {
      id: "REM-002",
      customer: "Tech Solutions Ltd",
      invoice: "INV-2024-002",
      amount: "€1,200.00",
      daysOverdue: 30,
      level: 2,
      lastSent: "2024-01-05",
      method: "postal",
      status: "pending",
      nextAction: "2024-01-18",
    },
    {
      id: "REM-003",
      customer: "Global Industries",
      invoice: "INV-2024-003",
      amount: "€850.00",
      daysOverdue: 45,
      level: 3,
      lastSent: "2024-01-01",
      method: "phone",
      status: "escalated",
      nextAction: "2024-01-16",
    },
  ]

  const templates = [
    {
      id: "TPL-001",
      name: "First Reminder - Friendly",
      level: 1,
      method: "email",
      subject: "Payment Reminder - Invoice {invoice_number}",
      usage: 45,
    },
    {
      id: "TPL-002",
      name: "Second Reminder - Formal",
      level: 2,
      method: "postal",
      subject: "Overdue Payment Notice",
      usage: 23,
    },
    {
      id: "TPL-003",
      name: "Final Notice - Legal",
      level: 3,
      method: "email",
      subject: "Final Notice - Legal Action Warning",
      usage: 8,
    },
  ]

  const getLevelBadge = (level: number) => {
    switch (level) {
      case 1:
        return <Badge className="bg-yellow-100 text-yellow-800">Level 1</Badge>
      case 2:
        return <Badge className="bg-orange-100 text-orange-800">Level 2</Badge>
      case 3:
        return <Badge className="bg-red-100 text-red-800">Level 3</Badge>
      default:
        return <Badge variant="secondary">Level {level}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Sent
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        )
      case "escalated":
        return (
          <Badge className="bg-red-100 text-red-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Escalated
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getMethodIcon = (method: string) => {
    switch (method) {
      case "email":
        return <Mail className="w-4 h-4" />
      case "postal":
        return <FileText className="w-4 h-4" />
      case "phone":
        return <Phone className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customer Reminders</h1>
          <p className="text-muted-foreground">Manage payment reminders and collection processes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Bell className="w-4 h-4 mr-2" />
            Send Batch
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Reminder
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Reminders</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">3 escalated</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Amount</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€45,230</div>
            <p className="text-xs text-muted-foreground">Across 18 invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Collection Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 days</div>
            <p className="text-xs text-muted-foreground">After first reminder</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Reminders</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Reminders</CardTitle>
              <CardDescription>Current payment reminders and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search reminders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Days Overdue</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Next Action</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reminders.map((reminder) => (
                    <TableRow key={reminder.id}>
                      <TableCell className="font-medium">{reminder.customer}</TableCell>
                      <TableCell>{reminder.invoice}</TableCell>
                      <TableCell>{reminder.amount}</TableCell>
                      <TableCell>
                        <Badge variant={reminder.daysOverdue > 30 ? "destructive" : "secondary"}>
                          {reminder.daysOverdue} days
                        </Badge>
                      </TableCell>
                      <TableCell>{getLevelBadge(reminder.level)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getMethodIcon(reminder.method)}
                          <span className="capitalize">{reminder.method}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(reminder.status)}</TableCell>
                      <TableCell>{reminder.nextAction}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Send Now
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reminder Templates</CardTitle>
              <CardDescription>Manage reminder message templates</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Template Name</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">{template.name}</TableCell>
                      <TableCell>{getLevelBadge(template.level)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getMethodIcon(template.method)}
                          <span className="capitalize">{template.method}</span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{template.subject}</TableCell>
                      <TableCell>{template.usage} times</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reminder History</CardTitle>
              <CardDescription>Complete history of sent reminders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Reminder History</h3>
                <p className="text-muted-foreground">View complete history of all sent reminders</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reminder Analytics</CardTitle>
              <CardDescription>Performance metrics and success rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground">Collection rates, response times, and effectiveness metrics</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
