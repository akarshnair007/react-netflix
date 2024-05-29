import axios from "axios";
import React, { useEffect, useState } from "react";
import AllApis from "../APIs/AllApis";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(AllApis.requestedPopularMovies).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movie);

  const overviewShort = (data, num) => {
    if (data?.length > num) {
      return data.slice(0, num) + "...";
    } else {
      return data;
    }
  };

  return (
    <>
      <div className="w-full h-[550px] text-white ">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute w-full top-[20%] p-4">
            <h1 className="text-[3vw]">{movie?.title}</h1>
            <div className="my-4">
              <button className="bg-gray-500 text-white px-5 py-2">Play</button>
              <button className="text-white border border-gray-300 px-4 py-2 ml-3">
                Watch Later
              </button>
            </div>
            <h3 className="text-gray-300">Released: {movie?.release_date}</h3>
            <h2 className="w-full">{overviewShort(movie?.overview, 150)}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
