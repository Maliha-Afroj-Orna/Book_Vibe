import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../ui/BookCard";

export default function ListedReadList({ sortingType }) {
  const { readList } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log("sort by page", sortedData);
        setFilteredReadList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
        console.log("sort by rating", sortedData);
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, readList]);

  if (filteredReadList.length == 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h2 className="font-bold text-3xl">No Read List Data Found!</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {filteredReadList.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
