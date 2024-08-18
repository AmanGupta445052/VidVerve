import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-100 p-3 text-black shadow-xl border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <div className="text-2xl font-bold ml-4 underline decoration-orange-700">
            <Link to="/">Feeder</Link>
          </div>
          <div className="flex space-x-4 text-xl">
            {isAuthenticated ? (
              <React.Fragment>
                <Link
                  to="/dashboard"
                  className="hover:underline decoration-orange-600 px-2"
                >
                  Dashboard
                </Link>
                <Link
                  to="/myfeed"
                  className="hover:underline decoration-orange-600 px-2"
                >
                  MyFeed
                </Link>
                <Link
                  to="/profile"
                  className="hover:underline decoration-orange-600 px-2"
                >
                  Profile
                </Link>
              </React.Fragment>
            ) : (
              <Link
                to="/"
                className="hover:underline decoration-orange-600 px-2"
              >
                Home
              </Link>
            )}
          </div>
        </div>
        {/* User Authentication Links */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span>Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 rounded text-2xl font-bold border-2 border-orange-500 hover:bg-orange-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
