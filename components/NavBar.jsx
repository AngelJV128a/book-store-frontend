import { Book } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Book className="w-9 h-9 text-white" />
          <span className="ml-3 text-xl font-bold text-white">Book Store</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="rounded-md bg-gray-800 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
          >
            Products
          </a>
          <a
            href="#"
            className="rounded-md bg-gray-800 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
