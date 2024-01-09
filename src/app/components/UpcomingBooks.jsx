"use client"
import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";

const UpcomingBooks = () => {
  const upcomingBooksList = [
    "Don Quixote. Miguel de Cervantes.",
    "Alice's Adventures in Wonderland. Lewis Carroll.",
    "The Adventures of Huckleberry Finn. Mark Twain.",
    "The Adventures of Tom Sawyer. Mark Twain.",
    "Treasure Island. Robert Louis Stevenson.",
    "Pride and Prejudice. Jane Austen.",
    "Wuthering Heights. Emily Brontë",
    "Jane Eyre. Charlotte Brontë",
  ];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="bg-red-500 mt-4 py-2 px-4 text-white">
        <div className="container mx-auto flex flex-row items-center">
          <h2 className="text-medium md:text-xl font-bold bg-gray-500 skew-x-6 w-fit text-nowrap px-2 py-1 h-full">
            Upcoming Books
          </h2>
          <marquee
            className="flex space-x-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {upcomingBooksList?.map((book, index) => {
              return (
                <>
                  <span className="m-auto" key={index + 1}>
                    <FaDotCircle className="inline text-yellow-500 text-xs" />{" "}
                    {book}
                  </span>
                </>
              );
            })}
          </marquee>
        </div>
      </div>
    </>
  );
};

export default UpcomingBooks;
