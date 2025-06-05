import BookCarousel from "@/components/books/BookCarousel";
import CardBook from "@/components/books/CardBook";
import GridBook from "@/components/books/GridBook";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="my-12" />
      <BookCarousel />
      <div className="my-12" />
      <GridBook />
    </>
  );
}
