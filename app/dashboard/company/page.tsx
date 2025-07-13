"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, FileText, Settings, Users, Plus } from "lucide-react"

export default function CompanyPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Paramétrage Société</h1>
          <p className="text-muted-foreground">Configuration de votre entreprise</p>
        </div>
        <Button>Sauvegarder</Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Informations Générales</TabsTrigger>
          <TabsTrigger value="addresses">Adresses</TabsTrigger>
          <TabsTrigger value="fiscal">Paramètres Fiscaux</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="preferences">Préférences</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Identification
                </CardTitle>
                <CardDescription>Informations légales de votre société</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Raison Sociale</Label>
                  <Input id="company-name" defaultValue="Wavesoft Solutions SARL" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siret">SIRET</Label>
                  <Input id="siret" defaultValue="12345678901234" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siren">SIREN</Label>
                  <Input id="siren" defaultValue="123456789" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ape">Code APE</Label>
                  <Input id="ape" defaultValue="6201Z" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tva">N° TVA Intracommunautaire</Label>
                  <Input id="tva" defaultValue="FR12345678901" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capital">Capital Social</Label>
                  <Input id="capital" defaultValue="50000" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Coordonnées
                </CardTitle>
                <CardDescription>Informations de contact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse</Label>
                  <Textarea id="address" defaultValue="32 rue Jean Rostand" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="postal-code">Code Postal</Label>
                    <Input id="postal-code" defaultValue="91893" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input id="city" defaultValue="ORSAY Cedex" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Pays</Label>
                  <Select defaultValue="france">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="france">France</SelectItem>
                      <SelectItem value="belgium">Belgique</SelectItem>
                      <SelectItem value="switzerland">Suisse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" defaultValue="01 69 18 90 00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="contact@wavesoft.fr" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Site Web</Label>
                  <Input id="website" defaultValue="https://www.wavesoft.fr" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="addresses" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Adresse de Facturation</CardTitle>
                <CardDescription>Adresse utilisée sur les factures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="billing-address">Adresse</Label>
                  <Textarea id="billing-address" defaultValue="32 rue Jean Rostand" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="billing-postal">Code Postal</Label>
                    <Input id="billing-postal" defaultValue="91893" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-city">Ville</Label>
                    <Input id="billing-city" defaultValue="ORSAY Cedex" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Adresse de Livraison</CardTitle>
                <CardDescription>Adresse de livraison par défaut</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="shipping-address">Adresse</Label>
                  <Textarea id="shipping-address" defaultValue="32 rue Jean Rostand" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shipping-postal">Code Postal</Label>
                    <Input id="shipping-postal" defaultValue="91893" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shipping-city">Ville</Label>
                    <Input id="shipping-city" defaultValue="ORSAY Cedex" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fiscal" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres TVA</CardTitle>
                <CardDescription>Configuration de la TVA</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tva-regime">Régime TVA</Label>
                  <Select defaultValue="normal">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Régime Normal</SelectItem>
                      <SelectItem value="simplifie">Régime Simplifié</SelectItem>
                      <SelectItem value="franchise">Franchise en Base</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tva-default">Taux TVA par Défaut</Label>
                  <Select defaultValue="20">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20">20%</SelectItem>
                      <SelectItem value="10">10%</SelectItem>
                      <SelectItem value="5.5">5.5%</SelectItem>
                      <SelectItem value="2.1">2.1%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exercice Comptable</CardTitle>
                <CardDescription>Dates d'exercice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="exercise-start">Début d'Exercice</Label>
                  <Input id="exercise-start" type="date" defaultValue="2024-01-01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exercise-end">Fin d'Exercice</Label>
                  <Input id="exercise-end" type="date" defaultValue="2024-12-31" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Numérotation des Documents
              </CardTitle>
              <CardDescription>Configuration des numéros de documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Devis</h4>
                  <div className="space-y-2">
                    <Label htmlFor="quote-prefix">Préfixe</Label>
                    <Input id="quote-prefix" defaultValue="DEV" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quote-counter">Compteur</Label>
                    <Input id="quote-counter" defaultValue="1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Factures</h4>
                  <div className="space-y-2">
                    <Label htmlFor="invoice-prefix">Préfixe</Label>
                    <Input id="invoice-prefix" defaultValue="FAC" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="invoice-counter">Compteur</Label>
                    <Input id="invoice-counter" defaultValue="1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Commandes</h4>
                  <div className="space-y-2">
                    <Label htmlFor="order-prefix">Préfixe</Label>
                    <Input id="order-prefix" defaultValue="CMD" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="order-counter">Compteur</Label>
                    <Input id="order-counter" defaultValue="1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Préférences Générales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Devise</Label>
                  <Select defaultValue="eur">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eur">Euro (€)</SelectItem>
                      <SelectItem value="usd">Dollar US ($)</SelectItem>
                      <SelectItem value="gbp">Livre Sterling (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Langue</Label>
                  <Select defaultValue="fr">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuseau Horaire</Label>
                  <Select defaultValue="europe-paris">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="europe-paris">Europe/Paris</SelectItem>
                      <SelectItem value="europe-london">Europe/London</SelectItem>
                      <SelectItem value="america-new_york">America/New_York</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Établissements
                </CardTitle>
                <CardDescription>Gestion multi-établissements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Siège Social</div>
                      <div className="text-sm text-muted-foreground">ORSAY Cedex</div>
                    </div>
                    <Badge>Principal</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un Établissement
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
