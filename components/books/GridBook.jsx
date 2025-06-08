"use client";
import { Book, Grid } from "lucide-react";
import Image from "next/image";
import CardBook from "./CardBook";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";

export default function GridBook() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      console.log(`token ${token}`);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/books/random`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const json = response.data;
        console.log(json);
        setBooks(json.data);
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error",
          text: "No se pudo cargar los libros",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    };
    fetchData();
  },[]);

  return (
    <>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Libros destacados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {books.map((book) => (
            <CardBook key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
