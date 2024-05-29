import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/authContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { user, signup } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="absolute w-full h-screen top-0 left-0 bg-black/40"></div>
        <div className="row z-20">
          <div className="col-lg-1 col-sm-12"></div>
          <div className="col-lg-10 col-sm-12">
            {/* Centered Login Form Container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm h-auto z-40 bg-black/70 p-16">
              <h2 className="text-white text-4xl font-bold mb-10">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="filled-basic"
                  className="bg-[#101010]/80 w-full rounded-md text-white outline outline-1 outline-[#626569]"
                  label="Email or mobile number"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  variant="filled"
                  type="email"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  InputProps={{
                    style: { color: "white" },
                  }}
                />
                <br />
                <TextField
                  id="filled-basic"
                  className="bg-[#101010]/80 w-full rounded-md text-white outline outline-1 outline-[#626569]"
                  sx={{ mt: 5 }}
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  variant="filled"
                  type="password"
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  InputProps={{
                    style: { color: "white" },
                  }}
                />
                <br />
                {error ? (
                  <p className="bg-[#C11119] rounded-md mt-3 text-white px-2 py-3">
                    {error}
                  </p>
                ) : null}
                <button className="bg-[#C11119] rounded-md mt-10 text-white py-3 w-full">
                  Sign In
                </button>
                <div className="mt-7 flex justify-between items-center text-sm text-gray-400">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help? </p>
                </div>
                <p className="text-gray-400 mt-5 text-[15px]">
                  Already subscribed to Netflix?{" "}
                  <Link to={"/login"}>
                    {" "}
                    <span className=" font-bold text-gray-200">Sign In.</span>
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-1 col-sm-12"></div>
        </div>
      </div>
    </>
  );
};

export default Signup;
