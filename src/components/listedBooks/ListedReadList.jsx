import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../ui/BookCard";

export default function ListedReadList() {
  const { readList } = useContext(BookContext);

  if (readList.length == 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h2 className="font-bold text-3xl">No Read List Data Found!</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {readList.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
