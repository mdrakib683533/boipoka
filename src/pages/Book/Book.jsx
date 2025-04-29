import React from "react";
import { BiTagAlt } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    bookName,
    image,
    category,
    rating,
    tags,
    yearOfPublishing,
    publisher,
    bookId,
  } = singleBook;

  console.log(singleBook);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-lg border p-8">
        <figure className="bg-gray-100 shadow-sm w-11/12 mx-auto rounded-xl p-5">
          <img className="h-[166px]" src={image} />
        </figure>
        <div className="card-body">
          <div className="flex justify-around items-center text-blue-400">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Publisher by: {publisher}</p>
          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FcRating />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
