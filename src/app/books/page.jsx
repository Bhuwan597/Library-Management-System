import React from "react";
import Footer from "../components/Footer";
import {Books} from '../data/BooksData'
import BooksTabsAndSearchbar from "../components/partials/BooksTabsAndSearchbar";
import Bookcard from "../components/partials/Bookcard";

const BooksPage = async ({ searchParams }) => {
    const searchQueries = await searchParams;
    const booksData = searchQueries?.search ? Books.filter((book)=> book.title.includes(searchQueries?.search)): Books
  return (
    <>
      <BooksTabsAndSearchbar search={searchParams?.search} type={searchParams?.type}/>
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
      <Footer />
    </>
  );
};

export default BooksPage;
