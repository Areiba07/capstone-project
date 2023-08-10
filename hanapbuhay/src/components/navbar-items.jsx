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
  ];
  const entryItems = [
    {
      nav: "Login",
      link: "login",
    },
    {
      nav: "Sign up",
      link: "signup",
    },
  ];
  const itemList = navItems.map((e, index) => {
    return (
      <a>
        <Link
          to={e.link}
          className="mr-10 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        >
          {e.nav}
        </Link>
      </a>
    );
  });
  const entryList = entryItems.map((e, index) => {
    return (
      <a>
        <Link
          to={e.link}
          className="mr-10 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        >
          {e.nav}
        </Link>
      </a>
    );
  });
  return (
    <>
      <ul className="flex flex-row mr-1">
        {itemList}
        <div className="flex flex-row ml-80">{entryList}</div>
      </ul>
    </>
  );
}

export default NavbarItems;
