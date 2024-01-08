"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageText from "@/app/components/partials/ImageText";

const CarouselComponent = () => {
    return (
        <div
            style={{
                padding: '2em',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxHeight: '80vh',
                justifyContent: 'center',
            }}
        >
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={2000}
                autoPlay={2000}
                centerMode={false}
                className="rounded-md"
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside

                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 1,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 1,
                    },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <ImageText
                    imageUrl="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    altText="Slide 1"
                    displayText={'Welcome to Krantikari Library'}
                />
                <ImageText
                    imageUrl="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    altText="Slide 2"
                    displayText={'Motivational Books'}
                />
                <ImageText
                    imageUrl="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    altText="Slide 3"
                    displayText={'Explore our Fiction Collection'}
                />
                <ImageText
                    imageUrl="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    altText="Slide 4"
                    displayText={'Novel Books'}
                />
                <ImageText
                    imageUrl="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    altText="Slide 5"
                    displayText={'Nepali Books'}
                />
            </Carousel>
        </div>

    )
        ;
}

export default CarouselComponent;
