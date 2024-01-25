import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="py-5 bg-[#33524A] text-white">
        <div className="container flex justify-between h-16 mx-auto">
          <Link className="">
            <h1 className="text-2xl  font-extrabold text-[#8B0304]">
              ABC INTERNATIONAL LTD
            </h1>
            <h2 className="">Better Life Through Better Medicine</h2>
          </Link>

          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Global Operation
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                CONTACT US
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">

            <Link
              to="/login"
              className="self-center px-8 py-3 font-semibold rounded bg-[#68a797] hover:bg-[#4d8577]"
            >
              Sign up
            </Link>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
