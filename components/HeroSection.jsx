import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"


export default function HeroSection() {
  return (
       <section className="relative bg-gradient-to-br from-yellow-50 to-white py-16 px-6 md:px-16 lg:py-24 flex flex-col items-start text-left">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Explora tu próxima aventura <br /> <span className="text-yellow-600">en cada página</span>
        </h1>
        <p className="text-lg text-gray-700">
          Descubre nuevos mundos, aprende algo nuevo o simplemente disfruta de una buena lectura. Tenemos algo para todos.
        </p>
        <div className="flex gap-4">
          <Button className="text-white bg-yellow-600 hover:bg-yellow-700 transition">
            Explorar tienda
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">Ver novedades</Button>
        </div>
      </div>
      <img
        src="https://terramerida.com/wp-content/uploads/2023/01/books-bookstore-book-1204029.jpg"
        alt="Libros destacados"
        className="absolute right-0 top-0 bottom-0 hidden lg:block w-[30%] h-full object-cover"
      />
    </section>
  );
}