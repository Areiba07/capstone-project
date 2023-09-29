import { Button } from "flowbite-react";
import HanapBuhayLogo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import "../assets/styles/index.css";
import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <img
          alt="Hanap Buhay Logo"
          className="  mx-auto justify-normal w-60 h-60"
          src={HanapBuhayLogo}
        />
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
            Welcome to HanapBuhay!
          </h1>
          <p className=" mx-30  text-justify text-lg text-gray-700 mb-8">
            At HanapBuhay, we believe that finding the perfect service provider
            or service seeker shouldn't be a tedious and time-consuming process.
            That's why we've created a revolutionary online hiring platform that
            connects individuals with their ideal service providers or service
            seekers effortlessly. Our mission is to simplify and streamline the
            service search experience, making it faster, easier, and more
            efficient for both parties.
          </p>
          <div className="text-justify justify-around flex flex-col md:flex-row  mb-8">
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
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose HanapBuhay?
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                Extensive Service Network: Access a comprehensive database of
                service providers and service seekers from various industries
                and sectors.
              </li>
              <li>
                Personalized Matches: Our intelligent algorithm analyzes your
                preferences and requirements to deliver relevant service
                recommendations tailored to your needs.
              </li>
              <li>
                User-Friendly Interface: Our platform is designed to be
                intuitive and easy to navigate, ensuring a smooth user
                experience for both service providers and service seekers.
              </li>
              <li>
                Advanced Search Filters: Refine your search with various
                criteria such as location, service type, ratings, and more to
                find the ideal service provider or service seeker.
              </li>
              <li>
                Efficient Communication: Seamlessly connect with service
                providers or service seekers through our platform's messaging
                system, simplifying the hiring process.
              </li>
              <li>
                Project Management: Collaborate, track progress, and manage
                projects efficiently within our platform, keeping everything
                organized in one place.
              </li>
            </ul>
          </div>
          <p className="text-lg text-gray-700">
            Join the HanapBuhay community today and discover a world of
            opportunities for service providers and service seekers. We're here
            to empower individuals, revolutionizing the way we connect talent
            with service needs. Let HanapBuhay be your trusted companion in
            finding the perfect service provider or service seeker. Together,
            let's unlock the doors to success!
          </p>
        </div>
      </div>
    </>
  );
}
