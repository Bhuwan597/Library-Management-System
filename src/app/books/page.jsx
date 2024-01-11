import React from "react";
import NavbarComponent from "../components/Navbar";
import AllBooks from "../components/AllBooks";
import Footer from "../components/Footer";
import {Books} from '../data/BooksData'

const BooksPage = async ({ searchParams }) => {
    const searchQueries = await searchParams;
    const booksData = searchQueries?.search ? Books.filter((book)=> book.title.includes(searchQueries?.search)): Books
  return (
    <>
      <AllBooks booksData={booksData} />
      <Footer />
    </>
  );
};

export default BooksPage;
