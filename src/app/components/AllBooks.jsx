import React from "react";
import BooksTabsAndSearchbar from "./partials/BooksTabsAndSearchbar";
import Bookcard from "./partials/Bookcard";

const AllBooks = ({booksData}) => {
  return (
    <>
      <BooksTabsAndSearchbar />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-10">
        {booksData.map((book, index) => (
          <Bookcard
            key={index}
            title={book.title}
            author={book.author}
            imageSrc={book.imageSrc}
            slug={book.title.replace(/\s+/g, "").toLowerCase()}
          />
        ))}
      </div>
    </>
  );
};

export default AllBooks;
