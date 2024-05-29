import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/authContext";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      closeHandler();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeHandler = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <div className="navbar p-4 w-full flex items-center pt-3 justify-between absolute z-[100]">
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <h1 className="text-red-700 font-semibold cursor-pointer text-4xl mr-3">
              Netflix
            </h1>
          </Link>

          {user?.email ? (
            <>
              <Link to={"/"}>
                <h1 className="text-white hidden sm:block text-1xl">Home</h1>
              </Link>

              <Link to={"/movies"}>
                <h1 className="text-white hidden sm:block text-1xl">Movies</h1>
              </Link>
              <Link to={"/series"}>
                <h1 className="text-white hidden sm:block text-1xl">
                  TV Shows
                </h1>
              </Link>
            </>
          ) : null}
        </div>

        {user?.email && (
          <div className="text-white block sm:hidden">
            {/* Conditionally render menu icon based on openMenu state */}
            {openMenu ? (
              <MdClose
                className="absolute top-0 right-0"
                size="2em"
                onClick={closeHandler}
              />
            ) : (
              <FaBars onClick={handleMenu} />
            )}
          </div>
        )}

        {user?.email ? (
          <div
            className={`nav_btn  ${
              user?.email && "hidden sm:flex"
            } items-center`}
          >
            <Link to={"/account"}>
              {" "}
              <button className="pr-4 text-white">Account</button>
            </Link>{" "}
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded bg-red-700 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div
            className={`nav_btn  ${
              user?.email && "hidden sm:flex"
            } items-center`}
          >
            <Link to={"/login"}>
              {" "}
              <button className="pr-4 text-white">Sign In</button>
            </Link>

            <Link to={"/signup"}>
              {" "}
              <button className="px-5 py-2 rounded bg-red-700 text-white">
                Sign Up
              </button>
            </Link>
          </div>
        )}

        {openMenu && (
          <div
            className={`absolute ${
              user?.email && "block sm:hidden"
            } z-50 bg-black/80 w-[40%] h-56 top-0 right-0 p-4 rounded-lg`}
          >
            <MdClose
              className="absolute top-0 right-0 text-white"
              size="2em"
              onClick={closeHandler}
            />
            <div className="flex flex-col gap-5 text-center">
              {user?.email && (
                <>
                  {" "}
                  <Link to={"/movies"}>
                    <h1 className="text-white  text-1xl">Movies</h1>
                  </Link>
                  <Link to={"/series"}>
                    <h1 className="text-white  text-1xl">TV Shows</h1>
                  </Link>
                </>
              )}
              <Link to={"/account"} onClick={closeHandler}>
                {" "}
                <button className="text-white">Account</button>
              </Link>{" "}
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded bg-red-700 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
