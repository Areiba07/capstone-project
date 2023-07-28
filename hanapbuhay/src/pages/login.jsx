
import { Link } from "react-router-dom";
import HanapBuhayLogo from "../assets/images/logo.png";
import seekerLogo from "../assets/images/seeker2.svg"
import providerLogo from "../assets/images/provider2.svg"
import 'tailwindcss/tailwind.css';

export default function Login() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div>
          <img
            alt="Hanap Buhay Logo"
            className="  mx-auto justify-normal w-60 h-60"
            src={HanapBuhayLogo}
          />
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
            Welcome to HanapBuhay!
          </h1>
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">Login as:</h2>
        </div>
        <br />
        <div className=" mx-20 text-justify  justify-around flex flex-col md:flex-row  mb-8">
            <div className="justify-between md:w-2/4 bg-opacity-70 p-6 rounded-lg mb-4">
              <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
                Service Providers
              </h2>

              <Link to={"/providerLogin"}>              
              <img
                  alt="providerLogo"
                  className=" hover:bg-indigo-200 rounded-full mx-auto justify-normal w-100 h-100"
                  src={providerLogo}
              />
              </Link>

              <br />
            </div>
            <div className="md:w-2/4 bg-opacity-80 p-6 rounded-lg mb-4">
              <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
               Service Seekers
              </h2>
              <Link to={"/seekerLogin"}>              
              <img
                  alt="seekerLogo"
                  className=" hover:bg-indigo-200 rounded-full  mx-auto justify-normal w-100 h-100"
                  src={seekerLogo}
              />
              </Link>

            </div>
          </div>
      </div>
    </>
  );
}
