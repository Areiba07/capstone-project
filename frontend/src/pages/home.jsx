import BrowseCategories from "../components/browse-categories";
import SearchComponent from "../components/search";
import { Outlet } from "react-router";
export default function Home() {
  return (
    <>
      <div className="justify-center"><SearchComponent /></div>
      <div>
        <h1>Browse Categories</h1>
      </div>
      <BrowseCategories />
      <Outlet />
    </>
  );
}
