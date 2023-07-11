import Header from "../components/header";
import Carousel from "../components/carousel";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <Header />
      <Carousel />
      <div>{<Outlet />}</div>
    </>
  );
}
