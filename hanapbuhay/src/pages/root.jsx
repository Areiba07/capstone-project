import Header from "../components/header";
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
