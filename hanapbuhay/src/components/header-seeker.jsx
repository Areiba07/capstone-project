import "../assets/styles/index.css";
import Logo from "../components/logo";
import NavbarItems from "./seeker-navitems";

export default function Header() {
  return (
    <>
      <header>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
              <Logo />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                HanapBuhay
              </span>
            </a>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <NavbarItems />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
