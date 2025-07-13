import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: "Marie Dubois",
    action: "a créé une facture",
    target: "FAC-2024-001",
    time: "Il y a 5 min",
    avatar: "MD",
  },
  {
    user: "Pierre Martin",
    action: "a validé une commande",
    target: "CMD-2024-045",
    time: "Il y a 12 min",
    avatar: "PM",
  },
  {
    user: "Sophie Laurent",
    action: "a ajouté un client",
    target: "ACME Corp",
    time: "Il y a 1h",
    avatar: "SL",
  },
  {
    user: "Jean Dupont",
    action: "a mis à jour le stock",
    target: "ART-001",
    time: "Il y a 2h",
    avatar: "JD",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité Récente</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
