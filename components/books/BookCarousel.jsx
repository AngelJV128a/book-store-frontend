"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const libros = [
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
];

export default function BookCarousel() {
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

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000); // 10 seconds

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Libros destacados</h2>
      <div ref={sliderRef} className="keen-slider">
        {libros.map((libro, idx) => (
          <Card key={idx} className="keen-slider__slide shadow-md">
            <CardContent className="p-2 flex flex-col items-center">
              <img
                src={libro.imagen}
                alt={libro.titulo}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="mt-2 font-semibold text-center">{libro.titulo}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
