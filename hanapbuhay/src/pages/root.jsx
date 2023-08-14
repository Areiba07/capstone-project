import Header from "../components/header";
import SearchComponent from "../components/search";
import { Outlet } from "react-router";
import FooterWithLogo from "../components/footer";

export default function Root() {
  return (
    <>
      <Header />
      <h1>Find and Discover Local Services</h1>
      <SearchComponent />
      <div className="flex flex-row">
        <p>can't find the service you're looking for?</p>
        <a href="serviceBoard" style={{ color: "blue" }}>
          Request a Service
        </a>
      </div>
      <div>{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
}
