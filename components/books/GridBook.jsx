import { Book, Grid } from "lucide-react";
import Image from "next/image";
import CardBook from "./CardBook";

export default function GridBook() {
  return (
    <>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Libros destacados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {[...Array(8)].map((_, index) => (
            <CardBook key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
