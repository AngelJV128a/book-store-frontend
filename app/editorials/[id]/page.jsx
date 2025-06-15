"use client";
import CardBook from "@/components/books/CardBook";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SkeletonCard } from "@/components/ui/skeletonCard";

export default function PageBooksPublisher() {
  const params = useParams();
  const [books, setBooks] = useState([]);
  const [editorial, setEditorial] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      const token = Cookies.get("token");
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/books/editorial/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const json = response.data;
        console.log(json.books.data);
        setBooks(json.books.data);
        setEditorial(json.editorialName);
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
        <h1 className="text-2xl font-bold mb-4">Libros de la editorial: {loading ? "" : editorial}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <SkeletonCard key={i} className="w-64 h-40 rounded-md" />
              ))
            : // Renderiza skeletons mientras carga
              books.map((book) => <CardBook key={book.id} book={book} />)}
        </div>
      </div>
    </>
  );
}
