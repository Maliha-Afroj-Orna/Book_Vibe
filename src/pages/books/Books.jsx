import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log("storedBooks", storedBooks);

  return (
    <div className="container mx-auto">
      read list: {storedBooks.length}
      wish list: {wishList.length}
    </div>
  );
};

export default Books;
