import React, { useState } from "react";
import logo from "../assets/logo.png";


function Login() {
  const [islogin, setislogin] = useState(true);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            className="w-[250px]"
            src={logo}
            alt=""
          />
          <h1 className="text-center font-semibold ">VibeNest</h1>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-3xl text-gray-900 ">
              🌟 "Sign up, shine on!"
            </h1>
          </div>
          <h1 className="font-semibold text-2xl text-gray-700 text-center mr-16 mt-4">
            {islogin ? "Login" : "Sing Up"}
          </h1>
          <form className="flex flex-col w-[80%] ">
            {!islogin && (
              <>
                <input
                  type="text"
                  placeholder="Username"
                  required
                  className="m-2 px-8 border-none outline-none py-2 bg-blue-400 rounded-4xl"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              required
              className="m-2 px-8 border-none outline-none py-2 bg-blue-400 rounded-4xl"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="m-2 px-8 border-none outline-none py-2 bg-blue-400 rounded-4xl"
            />
            <button className="m-2 px-8 border-none outline-none py-2 cursor-pointer bg-blue-700 rounded-4xl">
              {islogin ? "Login" : "Sing Up"}
            </button>
            {islogin ? (
              <>
                <h1 className="text-center">
                  Don't have an account?
                  <span
                    className="underline cursor-pointer"
                    onClick={() => setislogin(false)}
                  >
                    Sing Up
                  </span>
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-center">
                  Already have an account?
                  <span
                    className="underline cursor-pointer"
                    onClick={() => setislogin(true)}
                  >
                    Login
                  </span>
                </h1>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
