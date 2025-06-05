"use client";

import CardBook from "@/components/books/CardBook";
import { Button } from "@/components/ui/button";
import ReactPaginate from "react-paginate";

export default function PageBooks() {
  return (
    <>
      <div className="flex flex-col items-center px-4">
        <h1 className="text-2xl font-bold mb-4">Books</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {[...Array(8)].map((_, index) => (
            <CardBook key={index} index={index} />
          ))}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<Button variant="outline">Siguiente</Button>}
          previousLabel={<Button variant="outline">Anterior</Button>}
          pageCount={10}
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
