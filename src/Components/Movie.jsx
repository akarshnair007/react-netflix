import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { UserAuth } from "../Context/authContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item, id }) => {
  const [like, setLink] = useState(false);
  const [saved, setSaved] = useState(false);

  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveHandler = async () => {
    if (user?.email) {
      setLink(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item?.id,
          title: item?.name ? item?.name : item?.title,
          img: item?.backdrop_path,
        }),
      });
    } else {
      alert("Sorry! you need to login/signup");
    }
  };

  return (
    <div key={id} className="inline-block cursor-pointer p-3 relative">
      <img
        className="w-full h-auto object-cover block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title || "Image"}
      />
      <div className="absolute top-0 left-0 hover:bg-black/80 opacity-0 text-white hover:opacity-100 w-full h-full">
        <p className="text-white whitespace-normal h-full font-bold text-base flex items-center justify-center">
          {item?.name ? item?.name : item?.title}
        </p>
        <p onClick={saveHandler} className="absolute top-[20px] left-[20px]">
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
};

export default Movie;
