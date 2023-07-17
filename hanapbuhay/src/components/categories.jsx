import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    {
      category: "Service Directory",
      link: "serviceDirectory",
    },
    {
      category: "Service 1",
      link: "service1",
    },
    {
      category: "Service 2",
      link: "service2",
    },
    {
      category: "Service 3",
      link: "service3",
    },
    {
      category: "Service 4",
      link: "service4",
    },
    {
      category: "Service 5",
      link: "service5",
    },
    {
      category: "Service 6",
      link: "service6",
    },
    {
      category: "Service 7",
      link: "service7",
    },
    {
      category: "Service 8",
      link: "service8",
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
    <nav className="bg-gray-200 p-4">
      <ul className="flex justify-center space-x-4">{categoryList}</ul>
    </nav>
  );
}
