import CardAuthor from "@/components/authors/CardAuthor";
import { Card } from "@/components/ui/card";

export default function PageAuthors() {
  return (
    <>
      <div className="flex flex-col items-center px-4">
        <h1 className="text-2xl font-bold mb-4">Authors</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-8/9">
          <CardAuthor />
          <CardAuthor />
          <CardAuthor />
        </div>
      </div>
    </>
  );
}
