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

export default function CardAuthor({ author }) {
  return (
    <Card
      key={author.id}
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
          <CardTitle className="text-xl">{author.name + " " + author.last_name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {author.nationality}
          </CardDescription>
        </CardContent>
      </div>
      <CardFooter className="ml-auto p-0">
        <Button className="cursor-pointer">Ver Libros </Button>
      </CardFooter>
    </Card>
  );
}
