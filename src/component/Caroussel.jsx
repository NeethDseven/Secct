import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = ({ items }) => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, partialVisibilityGutter: 40 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, partialVisibilityGutter: 30 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 30 },
    };

    return (
        <Carousel
            responsive={responsive}
            swipeable
            draggable
            showDots={false}
            infinite={false}
            autoPlaySpeed={3000}
            keyBoardControl
            pauseOnHover
            slidesToSlide={1}
            containerClass="carousel-container"
            itemClass="carousel-item"
        >
            {items.map((item, index) => (
                <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                    <img src={item.image} alt={item.headline} className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="text-lg font-semibold mt-2">{item.headline}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
