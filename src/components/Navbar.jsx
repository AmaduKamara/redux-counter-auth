import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../store/index";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className="bg-white py-6 px-56 flex items-center justify-between shadow-lg">
      <Link to="/" className="text-xl">
        Redux<em className="text-cyan-500 font-semibold">Counter</em>
      </Link>

      {isAuth && (
        <nav>
          <ul className="flex items-center space-x-8">
            <li className="cursor-pointer text-gray-600">
              <Link to="/">Counter</Link>
            </li>
            <li className="cursor-pointer text-gray-600">
              <button
                type="button"
                className="text-cyan-500 py-3 px-6 rounded-md border border-cyan-500 hover:bg-cyan-500 hover:text-white"
                onClick={handleLogout}
              >
                logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
