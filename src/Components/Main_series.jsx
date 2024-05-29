import axios from "axios";
import React, { useEffect, useState } from "react";
import AllApis from "../APIs/AllApis";

const Main_series = () => {
  const [series, setSeries] = useState([]);

  const shows = series[Math.floor(Math.random() * series.length)];

  useEffect(() => {
    axios.get(AllApis.requestedPopularSeries).then((res) => {
      setSeries(res.data.results);
    });
  }, []);
  console.log(shows);

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
            src={`https://image.tmdb.org/t/p/original/${shows?.backdrop_path}`}
            alt={shows?.name}
          />
          <div className="absolute w-full top-[20%] p-4">
            <h1 className="text-[3vw]">{shows?.name}</h1>
            <div className="my-4">
              <button className="bg-gray-500 text-white px-5 py-2">Play</button>
              <button className="text-white border border-gray-300 px-4 py-2 ml-3">
                Watch Later
              </button>
            </div>
            <h3 className="text-gray-300">Released: {shows?.release_date}</h3>
            <h2 className="w-full">{overviewShort(shows?.overview, 150)}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_series;
