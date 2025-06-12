import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";

export default function CardEditorial({ editorial }) {
  return (
    <>
      <Card
        key={editorial.id}
        className="max-w-3xl  items-start gap-6 p-4 transform transition-transform duration-300 hover:scale-105"
      >
        <div className="flex items-start">
          <div className="flex relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://www.gravatar.com/avatar/?d=mp"
              alt="Foto del autor"
              className="object-cover"
              sizes="96px"
            />
          </div>

          <CardContent className="flex flex-col ml-6 p-0">
            <CardTitle className="text-xl">{editorial.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {editorial.country}
              <br />
              {editorial.website}
            </CardDescription>
          </CardContent>
        </div>
        <CardFooter className="ml-auto p-0">
          <Button className="cursor-pointer">
            <Link href={`/editorials/${editorial.id}`}>Ver Libros </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
