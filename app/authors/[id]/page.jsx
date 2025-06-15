"use client";
import CardBook from "@/components/books/CardBook";
import { SkeletonCard } from "@/components/ui/skeletonCard";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailsAuthor() {
  const params = useParams();
  const [books, setBooks] = useState({});
  const [authors, setAuthors] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      const token = Cookies.get("token");
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/books/author/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const json = response.data;
        console.log(json.books.data);
        setBooks(json.books.data);
        setAuthors(json.authorName);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center px-4">
        <h1 className="text-2xl font-bold mb-4">Libros del autor: {loading ? "" : authors}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {loading
            ? // Renderiza skeletons mientras carga
              Array.from({ length: 10 }).map((_, i) => (
                <SkeletonCard key={i} className="w-64 h-40 rounded-md" />
              ))
            : // Renderiza los cards cuando ya tienes datos
              books.map((book) => <CardBook key={book.id} book={book} />)}
        </div>
      </div>
    </>
  );
}
