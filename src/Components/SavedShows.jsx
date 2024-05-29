import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../Context/authContext";
import { db } from "../Firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { MdClose } from "react-icons/md";

const SavedShows = () => {
  const [movie, setMovie] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovie(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const settings = {
    dots: true, // Enable navigation dots
    infinite: movie.length > 1, // Only enable infinite loop for more than 1 item
    speed: 500, // Transition speed in milliseconds
    slidesToShow: movie.length > 2 ? 3 : Math.max(movie.length, 2), // Minimum of 2 slides
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
  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteHandler = async (passedId) => {
    try {
      const result = movie.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-white font-bold text-2xl p-4 group">My Shows</h1>

      <div className="group">
        {" "}
        <Slider
          {...settings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {movie.map((item, id) => (
            <div key={id} className="inline-block cursor-pointer p-3 relative">
              <img
                className="w-full h-[300px] object-cover block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title || "Image"}
              />
              <div className="absolute top-0 left-0 hover:bg-black/80 opacity-0 text-white hover:opacity-100 w-full h-full">
                <p className="text-white whitespace-normal h-full font-bold text-base flex items-center justify-center">
                  {item?.name ? item?.name : item?.title}
                </p>
                <p
                  onClick={() => deleteHandler(item.id)}
                  className="absolute top-[20px] left-[90%]"
                >
                  <MdClose size="2em" />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SavedShows;
