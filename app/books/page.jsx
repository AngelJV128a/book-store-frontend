"use client";

import CardBook from "@/components/books/CardBook";
import { Button } from "@/components/ui/button";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";

export default function PageBooks() {

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      console.log(`token ${token}`);
      const page = currentPage + 1;
      try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
          params: { page },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const json = response.data; 
        console.log(json);
        setTotalPages(json.last_page);
        setBooks(json.data);
      }catch(error){
        console.log(error)
        Swal.fire({
          title: "Error",
          text: "No se pudo cargar los libros",
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
        <h1 className="text-2xl font-bold mb-4">Books</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
{/*           {[...Array(8)].map((_, index) => (
            <CardBook key={index} index={index} />
          ))} */}
          {books.map((book) => (
            <CardBook key={book.id} book={book} />
          ))}
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
