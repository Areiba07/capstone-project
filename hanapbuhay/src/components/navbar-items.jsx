import { Link } from "react-router-dom";

function NavbarItems() {
  const navItems = [
    {
      nav: "Home",
      link: "home",
    },
    {
      nav: "About",
      link: "about",
    },
    {
      nav: "Services",
      link: "service",
    },
    {
      nav: "Login",
      link: "login",
    },
    {
      nav: "Sign Up",
      link: "signup",
    },
    {
      nav: "Service Request Board",
      link: "serviceBoard",
    },
  ];
  const itemList = navItems.map((e, index) => {
    return (
      <a>
        <Link
          to={e.link}
          className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        >
          {e.nav}
        </Link>
      </a>
    );
  });
  return (
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {itemList}
    </ul>
  );
}

export default NavbarItems;
