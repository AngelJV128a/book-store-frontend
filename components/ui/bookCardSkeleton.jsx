import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BookCardSkeleton() {
  return (
    <Card className="max-w-4xl mx-auto p-6 mt-8">
      <CardContent className="grid md:grid-cols-3 gap-6">
        {/* Imagen */}
        <div className="md:col-span-1">
          <Skeleton className="rounded-xl w-full h-64 shadow-md" />
        </div>

        {/* Contenido */}
        <div className="md:col-span-2 space-y-3">
          {/* Título con icono */}
          <div className="flex items-center gap-2">
            <Skeleton className="w-6 h-6 rounded" />
            <Skeleton className="h-8 w-1/2 rounded" />
          </div>

          {/* Autor */}
          <Skeleton className="h-4 w-3/4 rounded" />

          {/* Editorial + link */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-2/3 rounded" />
            <Skeleton className="h-4 w-12 rounded" />
          </div>

          {/* Precio */}
          <Skeleton className="h-4 w-1/4 rounded" />

          {/* ISBN */}
          <Skeleton className="h-4 w-1/3 rounded" />

          {/* Idioma */}
          <Skeleton className="h-4 w-1/5 rounded" />

          {/* Lanzamiento */}
          <Skeleton className="h-4 w-1/4 rounded" />

          {/* Categoría Badge */}
          <Skeleton className="h-6 w-24 rounded-full" />

          {/* Descripción título */}
          <Skeleton className="h-6 w-1/4 rounded" />

          {/* Descripción texto */}
          <Skeleton className="h-16 w-full rounded" />

          {/* Botón */}
          <Skeleton className="h-10 w-36 rounded" />
        </div>
      </CardContent>
    </Card>
  );
}
