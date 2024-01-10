import React from "react";
import BooksTabsAndSearchbar from "./partials/BooksTabsAndSearchbar";
import Bookcard from "./partials/Bookcard";

const AllBooks = ({}) => {
  const booksData = [
    {
      title: "Think and Grow Rich",
      author: "Napolean Hill",
      imageSrc: "/thinkandgrowrich.jpg",
    },
    {
      title: "Jhola",
      author: "Krishna Dharabasi",
      imageSrc: "/jhola.jpg",
    },
    {
      title: "FirFire",
      author: "BuddhiSagar",
      imageSrc: "/firfire.jpg",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      imageSrc: "/richdadpoordad.jpg",
    },
    {
      title: "Summer Love",
      author: "Subin Bhattrai",
      imageSrc: "/summerlove.jpg",
    },
    {
      title: "Fatsungh",
      author: "Chuden Kabimo",
      imageSrc: "/fatsungh.jpg",
    },
    {
      title: "The Power of Positive Thinking",
      author: "Norman Vincent Peale",
      imageSrc: "/thepowerofpositivethinking.jpg",
    },
    {
      title: "Like It Happened Yesterday",
      author: "Ravinder Singh",
      imageSrc: "/likeithappenedyesterday.jpg",
    },
    {
      title: "Think and Grow Rich",
      author: "Napolean Hill",
      imageSrc: "/thinkandgrowrich.jpg",
    },
    {
      title: "Jhola",
      author: "Krishna Dharabasi",
      imageSrc: "/jhola.jpg",
    },
    {
      title: "FirFire",
      author: "BuddhiSagar",
      imageSrc: "/firfire.jpg",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      imageSrc: "/richdadpoordad.jpg",
    },
    {
      title: "Summer Love",
      author: "Subin Bhattrai",
      imageSrc: "/summerlove.jpg",
    },
    {
      title: "Fatsungh",
      author: "Chuden Kabimo",
      imageSrc: "/fatsungh.jpg",
    },
    {
      title: "The Power of Positive Thinking",
      author: "Norman Vincent Peale",
      imageSrc: "/thepowerofpositivethinking.jpg",
    },
    {
      title: "Like It Happened Yesterday",
      author: "Ravinder Singh",
      imageSrc: "/likeithappenedyesterday.jpg",
    },
    {
      title: "Think and Grow Rich",
      author: "Napolean Hill",
      imageSrc: "/thinkandgrowrich.jpg",
    },
    {
      title: "Jhola",
      author: "Krishna Dharabasi",
      imageSrc: "/jhola.jpg",
    },
    {
      title: "FirFire",
      author: "BuddhiSagar",
      imageSrc: "/firfire.jpg",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      imageSrc: "/richdadpoordad.jpg",
    },
    {
      title: "Summer Love",
      author: "Subin Bhattrai",
      imageSrc: "/summerlove.jpg",
    },
    {
      title: "Fatsungh",
      author: "Chuden Kabimo",
      imageSrc: "/fatsungh.jpg",
    },
    {
      title: "The Power of Positive Thinking",
      author: "Norman Vincent Peale",
      imageSrc: "/thepowerofpositivethinking.jpg",
    },
    {
      title: "Like It Happened Yesterday",
      author: "Ravinder Singh",
      imageSrc: "/likeithappenedyesterday.jpg",
    },
    {
      title: "Think and Grow Rich",
      author: "Napolean Hill",
      imageSrc: "/thinkandgrowrich.jpg",
    },
    {
      title: "Jhola",
      author: "Krishna Dharabasi",
      imageSrc: "/jhola.jpg",
    },
    {
      title: "FirFire",
      author: "BuddhiSagar",
      imageSrc: "/firfire.jpg",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      imageSrc: "/richdadpoordad.jpg",
    },
    {
      title: "Summer Love",
      author: "Subin Bhattrai",
      imageSrc: "/summerlove.jpg",
    },
    {
      title: "Fatsungh",
      author: "Chuden Kabimo",
      imageSrc: "/fatsungh.jpg",
    },
    {
      title: "The Power of Positive Thinking",
      author: "Norman Vincent Peale",
      imageSrc: "/thepowerofpositivethinking.jpg",
    },
    {
      title: "Like It Happened Yesterday",
      author: "Ravinder Singh",
      imageSrc: "/likeithappenedyesterday.jpg",
    },
    {
      title: "Think and Grow Rich",
      author: "Napolean Hill",
      imageSrc: "/thinkandgrowrich.jpg",
    },
    {
      title: "Jhola",
      author: "Krishna Dharabasi",
      imageSrc: "/jhola.jpg",
    },
    {
      title: "FirFire",
      author: "BuddhiSagar",
      imageSrc: "/firfire.jpg",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      imageSrc: "/richdadpoordad.jpg",
    },
    {
      title: "Summer Love",
      author: "Subin Bhattrai",
      imageSrc: "/summerlove.jpg",
    },
    {
      title: "Fatsungh",
      author: "Chuden Kabimo",
      imageSrc: "/fatsungh.jpg",
    },
    {
      title: "The Power of Positive Thinking",
      author: "Norman Vincent Peale",
      imageSrc: "/thepowerofpositivethinking.jpg",
    },
    {
      title: "Like It Happened Yesterday",
      author: "Ravinder Singh",
      imageSrc: "/likeithappenedyesterday.jpg",
    },
  ];
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
