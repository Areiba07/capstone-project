import BrowseCategories from "../components/browse-categories";
import SearchComponent from "../components/search";
import { Outlet } from "react-router";
export default function Home() {
  return (
    <>
      <SearchComponent />
      <BrowseCategories />
      <Outlet />
    </>
  );
}
