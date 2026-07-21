// import { use } from "react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

export default function BookDetails() {
  const { id } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId == id);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  // const books = use(booksPromise);

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  return (
    <div className="grid grid-cols-2 container mx-auto my-8">
      <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
        <img src={image} alt={bookName} className="h-[400px]" />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <h2 className="card-title font-medium">By: {author}</h2>
        <p className="py-2 border-y font-medium">{category}</p>
        <p>
          <span className="font-bold">Review: </span> {review}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-bold">Tag</span>
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-soft badge-success font-semibold"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="border-t space-y-3">
          <div className="flex justify-start items-center gap-10">
            <span>Number of Pages: </span>
            <span className="font-bold">{totalPages}</span>
          </div>
          <div className="flex justify-start items-center gap-23">
            <span>Publisher: </span>{" "}
            <span className="font-bold">{publisher}</span>
          </div>
          <div className="flex justify-start items-center gap-10">
            <span>Year of Publishing: </span>{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </div>
          <div className="flex justify-start items-center gap-28">
            <span>Rating: </span> <span className="font-bold">{rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleMarkAsRead(expectedBook)}
              className="btn"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishList(expectedBook)}
              className="btn btn-info"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
