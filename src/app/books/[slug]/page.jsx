import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Books from "@/components/RecommendedBooks";
import Footer from "@/components/Footer";
import SingleBookImage from "@/components/partials/SingleBookImage";
import RequestBook from "@/components/partials/RequestBook";
const BookSlugPage = ({ params }) => {
  const bookData = {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: 'Motivational',
    readers: 10,
    reviews: 4,
    description: `Think and Grow Rich has been called the “Granddaddy of All
        Motivational Literature.” It was the first book to boldly ask,
        “What makes a winner?” The man who asked and listened for the
        answer, Napoleon Hill, is now counted in the top ranks of the
        world's winners himself. The most famous of all teachers of
        success spent “a fortune and the better part of a lifetime of
        effort” to produce the “Law of Success” philosophy that forms
        the basis of his books and that is so powerfully summarized in
        this one.`,
    images: {
      front: "/thinkandgrowrich.jpg",
      back: "/aama.jpg",
    },
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-gray-100" >
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center drop-shadow-xl">
            <SingleBookImage images={bookData.images} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                {bookData.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {bookData.title}
              </h1>
              <h3 className="text-gray-700 text-xl title-font font-medium mb-1">
                <a href="#">{bookData.author}</a>
              </h3>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <FaStar className="w-4 h-4 text-indigo-500" />
                  <FaStar className="w-4 h-4 text-indigo-500" />
                  <FaStar className="w-4 h-4 text-indigo-500" />
                  <FaStar className="w-4 h-4 text-indigo-500" />
                  <FaRegStar />
                  <span className="text-gray-600 ml-3">{bookData.reviews} Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">{bookData.readers} Readers</a>
                </span>
              </div>
              <p className="leading-relaxed">
                {bookData.description}
              </p>
              <RequestBook />
            </div>
          </div>
        </div>
      </section>
      <Books/>
      <Footer/>
    </>
  );
};

export default BookSlugPage;
