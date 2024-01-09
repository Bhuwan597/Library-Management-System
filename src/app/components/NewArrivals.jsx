"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Bookcard from "./partials/Bookcard";
import Divider from "./partials/Divider";

const NewArrivals = () => {
  return (
    <>
      <div className="mx-10 md:mx-20 mt-20">
        <p className="text-sm text-red-500">Learn from today</p>
        <h2 className="text-left text-xl md:text-2xl font-bold">
          Newly Arrivals 
        </h2>
        <Divider text={"Slide to view more"} />
      </div>
      <div className="flex w-full items-center justify-center px-5">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          customRightArrow={<></>}
          customLeftArrow={<></>}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Bookcard
            title="48 Laws of Power"
            author="Robert Grenne"
            imageSrc={"/48-laws-of-power.jpg"}
            slug={"48-laws-of-power"}
          />
          <Bookcard
            title="Atomic Habits"
            author="Robert Grenne"
            imageSrc={"/atomic_habits.png"}
            slug={"48-laws-of-power"}
          />
          <Bookcard
            title="Ijoriya"
            author="Robert Grenne"
            imageSrc={"/ijoriya.jpg"}
            slug={"48-laws-of-power"}
          />
          <Bookcard
            title="Power of subconscious mind"
            author="Robert Grenne"
            imageSrc={"/power-of-subconscious-mind.png"}
            slug={"48-laws-of-power"}
          />
        </Carousel>
      </div>
    </>
  );
};

export default NewArrivals;
