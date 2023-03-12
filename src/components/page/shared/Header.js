import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="navbar  p-4 rounded-xl bg-white   shadow-lg ">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {/* <img src="https://i.ibb.co/FmHgBT1/eteacher-removebg-preview.png"  className="bg-white w-12 rounded-full" alt="" /> */}
          <h1
            className="text-3xl font-bold text-blue-700
          "
          >
            CARRY
          </h1>
        </Link>
      </div>

      {/* responive manu  */}

      <div className="navbar-end gap-4">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>

           

            <li>
              <button>LogI Out</button>
            </li>

            
          </ul>
        </div>
      </div>
      {/* lg  */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-xl font-semibold text-blue-800">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <button>LogI Out</button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
