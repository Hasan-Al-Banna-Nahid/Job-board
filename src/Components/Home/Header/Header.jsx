import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("LogOut Successful");
  };
  return (
    <div>
      <div className="navbar bg-base-300 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-slate-900">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <a>Jobs</a>
              </li>
              <li>
                <Link to="/candidates">Candidates</Link>
              </li>

              <li>
                <a>Employers</a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img src="/Asset/logo-v6.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-2xl text-slate-900">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <a>Jobs</a>
            </li>
            <li>
              <Link to="/candidates">Candidates</Link>
            </li>

            <li>
              <a>Employers</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link>
              <button className="btn" onClick={handleLogOut}>
                LogOut
              </button>
            </Link>
          ) : (
            <Link to="/register">
              <a className="btn">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
