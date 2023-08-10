import SearchComponent from "../components/search";
import BrowseCategories from "../components/browse-categories";
import { Outlet } from "react-router";
export default function Home() {
  return (
    <>
      <h1>Find and Discover Local Services</h1>
      <SearchComponent />
      <div className="flex flex-row">
        <p>can't find the service you're looking for?</p>
        <a href="#" style={{ color: "blue" }}>
          Request a Service
        </a>
      </div>
      <div>
        <h1>Browse Categories</h1>
      </div>
      <BrowseCategories />
      <Outlet />
    </>
  );
}
