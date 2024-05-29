import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchURL);
      setData(response.data.results);
    };

    fetchData();
  }, [fetchURL]);

  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Continuously loop through slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show per row
    slidesToScroll: 3, // Number of slides to scroll per swipe/arrow click
    responsive: [
      // Responsive settings for different screen sizes
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 2, // Adjust number of slides for smaller screens
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Show only one slide on very small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="fa-3x text-white absolute top-1/2 z-[1] left-2 -translate-y-1/2 hover:text-gray-500 hidden group-hover:block"
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} />{" "}
      </button>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="fa-3x text-white absolute top-1/2 z-[1] right-2 -translate-y-1/2 hover:text-gray-500 hidden group-hover:block"
      >
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </button>
    );
  };

  return (
    <>
      <h1 className="text-white font-bold text-4xl p-4 group">{title}</h1>
      <div className="group">
        <Slider
          {...settings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {data.map((item, id) => (
            <Movie item={item} id={id} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Row;
