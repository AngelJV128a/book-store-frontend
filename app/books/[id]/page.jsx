import BookDetail from "@/components/books/BookDetails";

export default function DetailsBook() {
  return (
    <>
      <BookDetail
        image="https://www.gonvill.com.mx/imagenes/9786073/978607384414.JPG"
        title="El Principito"
        author="Antoine de Saint-Exupéry"
        publisher="Editorial Planeta"
        publisherWebsite="https://www.planetadelibros.com"
        price="$14.99"
        isbn="978-1234567890"
        language="Español"
        description="Un clásico que explora temas de amor, amistad y la naturaleza humana a través de los ojos de un niño."
        releaseDate="1943-04-06"
        category="Ficción"
      />
    </>
  );
}
