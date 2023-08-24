import Header from "../components/header";
import SearchComponent from "../components/search";
import { Outlet } from "react-router";
import FooterWithLogo from "../components/footer";

export default function Root() {
  return (
    <>
      <Header />
      <div>{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
}
