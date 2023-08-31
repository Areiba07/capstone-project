import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import HanapBuhayLogo from "../assets/images/logo.png";
import 'tailwindcss/tailwind.css';

export default function SignUp() {
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
        </div>
        <br />
        <div className=" mx-20 text-justify justify-around flex flex-col md:flex-row  mb-8">
            <div className="justify-between md:w-2/5 bg-violet-500 bg-opacity-70 p-6 rounded-lg mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                For Service Providers
              </h2>
              <p className="text-lg text-gray-700">
                Discover a wide range of service opportunities from various
                industries, all in one place. Our intelligent matching algorithm
                analyzes your skills, qualifications, and preferences to present
                you with relevant and personalized service listings. Whether
                you're a freelancer, contractor, or business owner, HanapBuhay
                has got you covered. Take advantage of our advanced search
                filters, showcase your portfolio, and connect with service
                seekers looking for your expertise.
              </p>
              <br />
              <div>
                <Button gradientDuoTone="purpleToPink" pill>
                  <Link to={"/providerSignup"}>BE A SERVICE PROVIDER</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 bg-blue-400 bg-opacity-80 p-6 rounded-lg mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                For Service Seekers
              </h2>
              <p className="text-lg text-gray-700">
                Finding the right service provider for your needs is crucial,
                and we're here to make the process efficient and effective.
                HanapBuhay provides a powerful platform that enables you to
                search and connect with qualified service providers. Post your
                service requirements, browse through profiles, and engage with
                service providers who meet your criteria. Our platform also
                offers seamless communication channels, allowing you to discuss
                project details, negotiate terms, and manage the hiring process
                with ease.
              </p>
              <br />
              <div>
                <Button gradientDuoTone="purpleToPink" pill>
                  <Link to={"/seekerSignup"}>BE A SERVICE SEEKER</Link>
                </Button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
