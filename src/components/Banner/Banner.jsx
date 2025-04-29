import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-around items-center m-10 bg-gray-100 w-full mx-auto p-15 rounded-2xl">
      <div>
        <h1 className="text-4xl font-bold mb-10">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn btn-primary">Test Test</button>
      </div>
      <div>
        <img className="w-8/12" src={bookImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
