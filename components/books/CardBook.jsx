import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CardBook({ index }) {
  return (
    <>
      <Card key={index} className="w-full max-w-xs transform transition-transform duration-300 hover:scale-115">
        <CardHeader>
          <Image
            src="https://www.gonvill.com.mx/imagenes/9786074/978607453362.JPG"
            alt="Portada del libro"
            width={300}
            height={240}
            className="w-full h-60 object-cover rounded-md"
          />
        </CardHeader>

        <CardContent className="space-y-2">
          <CardTitle className="text-lg">Libro #{index + 1}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Autor: Juan Pérez
          </CardDescription>
          <CardDescription className="text-sm text-muted-foreground">
            Editorial: Editorial Ejemplo
          </CardDescription>
        </CardContent>

        <CardFooter>
          <Button className="w-full cursor-pointer">Ver detalles</Button>
        </CardFooter>
      </Card>
    </>
  );
}
