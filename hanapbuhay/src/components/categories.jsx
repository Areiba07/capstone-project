import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    {
      category: "All",
      link: "serviceDirectory",
    },
    {
      category: "Plumbing",
      link: "service1",
    },
    {
      category: "Electrical",
      link: "service2",
    },
    {
      category: "House Cleaning",
      link: "service3",
    },
    {
      category: "Gardening and Landscaping",
      link: "service4",
    },
    {
      category: "Appliance Repair",
      link: "service5",
    },
    {
      category: "Laundry",
      link: "service6",
    },
    {
      category: "Tailoring",
      link: "service7",
    },
    {
      category: "Carpentry",
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
