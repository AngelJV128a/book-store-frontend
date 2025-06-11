import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export function AuthorCardSkeleton() {
  return (
    <Card className="max-w-3xl items-start gap-6 p-4">
      <div className="flex items-start">
        {/* Foto autor skeleton */}
        <Skeleton className="w-24 h-24 rounded-full flex-shrink-0" />

        {/* Contenido texto */}
        <CardContent className="flex flex-col ml-6 p-0 space-y-2">
          <Skeleton className="h-6 w-48 rounded" />  {/* Simula CardTitle */}
          <Skeleton className="h-4 w-32 rounded" />  {/* Simula CardDescription */}
        </CardContent>
      </div>

      {/* Footer botón skeleton */}
      <CardFooter className="ml-auto p-0">
        <Skeleton className="h-10 w-28 rounded" />
      </CardFooter>
    </Card>
  );
}
