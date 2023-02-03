import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white py-6 px-56 flex items-center justify-between shadow-lg">
      <Link to="/" className="text-xl">
        Redux<em className="text-cyan-500 font-semibold">Counter</em>
      </Link>

      <nav>
        <ul className="flex items-center space-x-8">
          <li className="cursor-pointer text-gray-600">
            <Link to="/">Counter</Link>
          </li>
          <li className="cursor-pointer text-gray-600">
            <Link to="/products">Products</Link>
          </li>
          <li className="cursor-pointer text-gray-600">
            <Link
              to="/login"
              className="text-cyan-500 py-3 px-6 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-white"
            >
              Login
            </Link>
          </li>
          <li className="cursor-pointer text-gray-600">
            <Link
              to="/"
              className="text-cyan-500 py-3 px-6 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-white"
            >
              logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
