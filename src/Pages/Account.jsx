import React from "react";
import SavedShows from "../Components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[260px] object-cover"
          src="https://img.goodfon.com/original/1920x1080/1/61/fon-netflix-logo-raduga-tsvet-fon-background-skachat-oboi-sk.jpg"
          alt=""
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-[600px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold">WatchList</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
