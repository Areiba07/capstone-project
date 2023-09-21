import { Outlet } from "react-router";
import FooterWithLogo from "../components/footer";
import NavbarWithCTAButton from "../components/navbar-admin";

export default function adminHome() {
  return (
    <>
      <NavbarWithCTAButton />
      <div>{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
}
