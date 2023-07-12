import Categories from "../components/categories";
import { Outlet } from "react-router";

export default function Services() {
    return (
      <>
        <Categories/>
        <h1>SERVICES</h1>
        <div>
          {<Outlet/>}
        </div>
      </>
    );
  }