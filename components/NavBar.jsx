import { Book, Home, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { AccountDropdown } from "./account/AccountDropdown";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-6 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Book className="w-9 h-9 text-white" />
          <span className="ml-3 text-xl font-bold text-white">Book Store</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/books"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Libros
          </Link>
          <Link
            href="/authors"
            className="rounded-md bg-gray-800 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium hover:bg-gray-700"
          >
            Autores
          </Link>
          <Link
            href="/editorials"
            className="rounded-md bg-gray-800 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium hover:bg-gray-700"
          >
            Editoriales
          </Link>

          <Link
            href="/books/cart"
            className="inline-flex items-center rounded-md bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 text-sm font-medium"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Carrito
          </Link>

          <AccountDropdown />
        </div>
      </div>
    </nav>
  );
}
