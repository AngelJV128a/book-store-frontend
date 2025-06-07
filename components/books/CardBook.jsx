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

export default function CardBook({ book }) {
  return (
    <>
      <Card key={book.id} className="w-full max-w-xs transform transition-transform duration-300 hover:scale-115">
        <CardHeader>
          <img
            src={book.image}
            alt="Portada del libro"
            width={300}
            height={240}
            className="w-full h-60 object-cover rounded-md"
          />
        </CardHeader>

        <CardContent className="space-y-2">
          <CardTitle className="text-lg">{book.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Autor: {book.author.name + " " + book.author.last_name}
          </CardDescription>
          <CardDescription className="text-sm text-muted-foreground">
            Editorial: {book.editorial.name}
          </CardDescription>
        </CardContent>

        <CardFooter>
          <Button className="w-full cursor-pointer">Ver detalles</Button>
        </CardFooter>
      </Card>
    </>
  );
}
