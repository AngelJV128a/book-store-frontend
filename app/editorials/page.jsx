"use client";
import CardEditorial from "@/components/editorials/CardEditorial";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Cookies from "js-cookie";

export default function PageEditorials() {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [editorials, setEditorials] = useState([]);

  useEffect(() => {
    const fetchEditorials = async () => {
      const token = Cookies.get("token");
      const page = currentPage + 1;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/editorials`,
          {
            params: { page },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const json = response.data;
        setTotalPages(json.last_page);

        setEditorials(json.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEditorials();
  }, [currentPage]);

  const handlePageClick = ({ selected }) => {
    console.log("selected", selected);
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="flex flex-col items-center px-4">
        <h1 className="text-2xl font-bold mb-4">Publishers</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-8/9">
          {editorials.map((editorial) => (
            <CardEditorial key={editorial.id} editorial={editorial} />
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
