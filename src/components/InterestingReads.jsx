import Card from "../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { newsData } from "../data/data";

function InterestingReads() {
  const settings = {
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 space-y-8 mt-10 py-5 container">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold">
        Interesting Reads
      </h2>

      <Slider {...settings}>
        {newsData.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            imageSrc={data.imageSrc}
            description={data.description}
            date={data.date}
          />
        ))}
      </Slider>
    </div>
  );
}

export default InterestingReads;
