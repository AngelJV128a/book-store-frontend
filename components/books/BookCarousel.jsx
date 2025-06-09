"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";

/* const libros = [
  { titulo: "Libro 1", imagen: "https://picsum.photos/200?random=1" },
  { titulo: "Libro 2", imagen: "https://picsum.photos/200?random=2" },
  { titulo: "Libro 3", imagen: "https://picsum.photos/200?random=3" },
  { titulo: "Libro 4", imagen: "https://picsum.photos/200?random=4" },
  { titulo: "Libro 5", imagen: "https://picsum.photos/200?random=5" },
  { titulo: "Libro 6", imagen: "https://picsum.photos/200?random=6" },
  { titulo: "Libro 7", imagen: "https://picsum.photos/200?random=7" },
  { titulo: "Libro 8", imagen: "https://picsum.photos/200?random=8" },
  { titulo: "Libro 9", imagen: "https://picsum.photos/200?random=9" },
  { titulo: "Libro 10", imagen: "https://picsum.photos/200?random=10" },
]; */

export default function BookCarousel() {
  const [libros, setLibros] = useState([]);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.5, spacing: 10 },
      },
    },
  });

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
        setLibros(json.data);
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
  }, []);

/*    useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [instanceRef]);  */

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Libros destacados</h2>
      <div ref={sliderRef} className="keen-slider">
        {libros.map((libro, idx) => (
          <Card key={idx} className="keen-slider__slide shadow-md">
            <CardContent className="p-2 flex flex-col items-center">
              <img
                src={libro.image}
                alt={libro.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="mt-2 font-semibold text-center">{libro.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
