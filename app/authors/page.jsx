"use client";
import CardAuthor from "@/components/authors/CardAuthor";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Button } from "@/components/ui/button";
import { AuthorCardSkeleton } from "@/components/ui/authorCardSkeleton";

export default function PageAuthors() {
  const [authors, setAuthors] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      console.log(`token ${token}`);
      const page = currentPage + 1;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/authors`,
          {
            params: { page },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const json = response.data;
        console.log(json);
        setTotalPages(json.last_page);
        setAuthors(json.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error",
          text: "No se pudo cargar los autores",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePageClick = ({ selected }) => {
    console.log("selected", selected);
    setCurrentPage(selected);
  };
  return (
    <>
      <div className="flex flex-col items-center px-4">
        <h1 className="text-2xl font-bold mb-4">Authors</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-8/9">
          {loading
            ? // Renderiza skeletons mientras carga
              Array.from({ length: 10 }).map((_, i) => (
                <AuthorCardSkeleton key={i} className="w-64 h-40 rounded-md" />
              ))
            : // Renderiza los cards cuando ya tienes datos
              authors.map((author) => <CardAuthor key={author.id} author={author} />)}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<Button variant="outline">Siguiente</Button>}
          previousLabel={<Button variant="outline">Anterior</Button>}
          pageCount={totalPages}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center items-center gap-2 mt-6 flex-wrap"
          pageClassName="px-1"
          activeClassName="bg-primary text-primary-foreground rounded"
          pageLinkClassName="cursor-pointer px-3 py-1 rounded hover:bg-primary hover:text-primary-foreground mt-2 mb-2"
          disabledClassName="opacity-50 cursor-not-allowed"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
