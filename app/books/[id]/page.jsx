"use client";
import BookDetail from "@/components/books/BookDetails";
import { BookCardSkeleton } from "@/components/ui/bookCardSkeleton";
import axios from "axios";
import Cookies from "js-cookie";
import { Book } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailsBook() {
  const params = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      const token = Cookies.get("token");
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/books/search`,
          {
            id: params.id, // este es el body real
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const json = response.data;
        console.log(json);
        setBook(json.book);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, []);

  if (book.id === undefined) {
    return <BookCardSkeleton />;
  }

  return (
    <>
      <div className="flex flex-col items-center px-4">
        <h1 className="text-2xl font-bold mb-4">Detalles del libro</h1>

        <div className=" gap-6 justify-items-center">
          <BookDetail book={book} />
        </div>
      </div>
    </>
  );
}
