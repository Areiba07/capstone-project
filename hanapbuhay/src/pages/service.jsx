import Categories from "../components/categories";
import { Outlet } from "react-router";
import Carousel from "../components/carousel";

export default function Services() {
    return (
      <>
        <Carousel />
        <Categories/>
        <h1>SERVICES</h1>
        <div>
          {<Outlet/>}
        </div>
      </>
    );
  }