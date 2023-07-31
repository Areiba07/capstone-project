import { Link } from "react-router-dom";
import { Outlet } from "react-router";

export default function Categories() {
  const categories = [
    {
      category: "All",
      link: "serviceDirectory",
    },
    {
      category: "Plumbing",
      link: "serviceCards",
    },
    {
      category: "Electrical",
      link: "serviceCards",
    },
    {
      category: "House Cleaning",
      link: "serviceCards",
    },
    {
      category: "Gardening and Landscaping",
      link: "serviceCards",
    },
    {
      category: "Appliance Repair",
      link: "serviceCards",
    },
    {
      category: "Laundry",
      link: "serviceCards",
    },
    {
      category: "Tailoring",
      link: "serviceCards",
    },
    {
      category: "Carpentry",
      link: "serviceCards",
    },
  ];

  const categoryList = categories.map((e, index) => {
    return (
      <li>
        <a>
          <Link
            to={e.link}
            className="px-2 py-1 rounded-md cursor-pointer bg-blue-500 text-white"
          >
            {e.category}
          </Link>
        </a>
      </li>
    );
  });

  return (
    <>
      <nav className="bg-gray-200 p-4">
        <ul className="flex justify-center space-x-4">{categoryList}</ul>
      </nav>
      {<Outlet />}
    </>
  );
}
