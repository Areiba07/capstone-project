import { Outlet } from "react-router";
import FooterWithLogo from "../components/footer";
import NavbarWithCTAButton from "../components/navbar-main"

export default function Root() {
  return (
    <>
      <NavbarWithCTAButton />
      <div>{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
}
