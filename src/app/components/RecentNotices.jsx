import React from "react";
import NoticeCard from "./partials/NoticeCard";

const RecentNotices = () => {
  let newsAndNotices = [
    {
      title: "New Books on Library",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/019.jpg",
      publishedDate: "13-01-2022",
      category: "Information",
      description:
        "Excited to inform all of you about our newly arrivals books in the library. Hope all of you all are excited to read out all our new collections. Have a good day readers.",
    },
    {
      title: "New Books on Library",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
      publishedDate: "13-01-2022",
      category: "Information",
      description:
        "Excited to inform all of you about our newly arrivals books in the library. Hope all of you all are excited to read out all our new collections. Have a good day readers.",
    },
    {
      title: "New Books on Library",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/017.jpg",
      publishedDate: "13-01-2022",
      category: "Information",
      description:
        "Excited to inform all of you about our newly arrivals books in the library. Hope all of you all are excited to read out all our new collections. Have a good day readers.",
    },
    {
      title: "New Books on Library",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/016.jpg",
      publishedDate: "13-01-2022",
      category: "Information",
      description:
        "Excited to inform all of you about our newly arrivals books in the library. Hope all of you all are excited to read out all our new collections. Have a good day readers.",
    },
    {
      title: "New Books on Library",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/015.jpg",
      publishedDate: "13-01-2022",
      category: "Information",
      description:
        "Excited to inform all of you about our newly arrivals books in the library. Hope all of you all are excited to read out all our new collections. Have a good day readers.",
    },
    {
      title: "New Books on Library",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/014.jpg",
      publishedDate: "13-01-2022",
      category: "Information",
      description:
        "Excited to inform all of you about our newly arrivals books in the library. Hope all of you all are excited to read out all our new collections. Have a good day readers.",
    },
    {
      title: "New Books on Library",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/013.jpg",
      publishedDate: "13-01-2022",
      category: "Information",
      description:
        "Excited to inform all of you about our newly arrivals books in the library. Hope all of you all are excited to read out all our new collections. Have a good day readers.",
    },
    {
      title: "New Books on Library",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/011.jpg",
      publishedDate: "13-01-2022",
      category: "Information",
      description:
        "Excited to inform all of you about our newly arrivals books in the library. Hope all of you all are excited to read out all our new collections. Have a good day readers.",
    },
  ];
  return (
    <div class="container mt-10 mx-auto md:px-6">
      <div className="text-center mb-8">
        <p className="text-sm text-red-500">Be Updated</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Notices and Announcements
        </h2>
      </div>
      <section class="mb-32 text-center md:text-left mt-5 grid grid-cols-1 md:grid-cols-2">
        {newsAndNotices?.map((n, index) => {
          return (
            <NoticeCard
              key={index + 1}
              title={n.title}
              description={n.description}
              imageSrc={n.image}
              publishedDate={n.publishedDate}
              category={n.category}
            />
          );
        })}
      </section>
    </div>
  );
};

export default RecentNotices;
