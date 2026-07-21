import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

export default function BookCard({ book }) {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow-sm"
    >
      <figure className="p-6">
        <img
          className="rounded-xl h-[250px]"
          src={book.image}
          alt={book.bookName}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          {book.tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-soft badge-success font-semibold"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
        <p className="font-semibold text-lg pb-4">{book.author}</p>
        <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300 text-xl">
          <div className="font-semibold">{book.category}</div>
          <div className="flex gap-2 items-center">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
}
