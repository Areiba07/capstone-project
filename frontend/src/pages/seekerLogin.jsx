import React, { useState, useRef } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  console.log(JSON.parse(localStorage.getItem("authenticatedUser")));

  async function onLoginClick(event) {
    event.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: "/api/auth/sign-in",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          user_email: emailRef.current.value,
          user_password: passwordRef.current.value,
        },
      });
      localStorage.setItem("authenticatedUser", JSON.stringify(response.data));
      navigate("/seeker-home");
      console.log(response);
      /*if (response.status === 200){
        console.log("login ok");
      }else if(response.status === 400){
        console.log(response.data.message);
      }*/
    } catch (e) {
      const { data } = e.response;
      if (Array.isArray(data)) {
        return setErrors(data.map((e) => `${e.field} - ${e.message}`));
      }
    }
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-blue-50 rounded-md shadow-md lg:max-w-xl">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img class="w-12 h-12 mr-2" src={logo} alt="logo" />
          HanapBuhay
        </a>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                ref={emailRef}
              />
            </label>
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300  focus:outline-none focus:ring focus:ring-opacity-40"
                ref={passwordRef}
              />
            </label>
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={onLoginClick}
            >
              Login
              {/*<Link to={"/seeker-home"}>Login</Link>*/}
            </button>
            <ul>
              {errors.map((e) => (
                <li key={e} style={{ color: "red" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a>
            <Link
              to={"signup"}
              className="font-medium text-purple-500 hover:underline"
            >
              Sign up
              </Link>
          </a>
        </p>
      </div>
    </div>
  );
}
