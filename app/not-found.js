import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TriangleAlertIcon } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full text-center p-6">
        <CardContent className="flex flex-col items-center space-y-4">
          <TriangleAlertIcon className="h-12 w-12 text-destructive" />
          <h2 className="text-2xl font-bold">Página no encontrada</h2>
          <p className="text-muted-foreground">
            No se pudo encontrar el recurso solicitado.
          </p>
          <Link href="/">
            <Button variant="outline" className="cursor-pointer bg-gray-600 text-white">Volver al inicio</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
