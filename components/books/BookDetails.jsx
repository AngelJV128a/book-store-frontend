import { GlobeIcon,BookIcon,BookOpenIcon,ShoppingCartIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BookDetail(props) {
  const {
    book
  } = props

  return (
    <Card className="max-w-4xl mx-auto p-6 mt-8">
      <CardContent className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <img
            src={book.image}
            alt={`Portada de ${book.title}`}
            className="rounded-xl w-full object-cover shadow-md"
          />
        </div>

        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <BookOpenIcon className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">{book.title}</h2>
          </div>

          <p className="text-muted-foreground">
            Autor: <span className="font-medium text-foreground">{book.author.name + " " + book.author.last_name }</span>
          </p>

          <p className="text-muted-foreground">
            Editorial:{" "}
            <span className="font-medium text-foreground">{book.editorial.name}</span>{" "}
            <a
              href={book.editorial.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary underline text-sm ml-2"
            >
              <GlobeIcon className="w-4 h-4" />
              Sitio web
            </a>
          </p>

          <p className="text-muted-foreground">
            Precio: <span className="font-medium text-foreground">{book.price}</span>
          </p>
          <p className="text-muted-foreground">
            ISBN: <span className="font-mono">{book.isbn}</span>
          </p>
          <p className="text-muted-foreground">
            Idioma: <span className="font-medium">{book.language}</span>
          </p>
          <p className="text-muted-foreground">
            Lanzamiento: <span className="font-medium">{book.release_date}</span>
          </p>
          <p className="text-muted-foreground">
            Categoría: <Badge variant="secondary">{book.category.name}</Badge>
          </p>

          <div>
            <h3 className="font-semibold mt-4 mb-1">Descripción:</h3>
            <p className="text-sm text-foreground">{book.description}</p>
          </div>

          <Button className="mt-4 cursor-pointer"><ShoppingCartIcon/>Comprar ahora</Button>
        </div>
      </CardContent>
    </Card>
  )
}
