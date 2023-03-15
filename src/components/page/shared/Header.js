import React, { useContext } from "react";
import {  Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUpload } from "react-icons/fa";
import { AuthContext } from "../../out/context/UserContext";
import { toast } from "react-hot-toast";

const Header = () => {
  const {logOut} = useContext(AuthContext)



  const handelLogout= ()=>{
    logOut().then(()=>{})
    return toast.success('Log out Success Full');  
  }
  return (
    <div className="navbar  p-4  bg-white text-black   shadow-lg ">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {/* <img src="https://i.ibb.co/FmHgBT1/eteacher-removebg-preview.png"  className="bg-white w-12 rounded-full" alt="" /> */}
          <h1 className="text-3xl font-bold text-blue-700">StoreKo</h1>
        </Link>
      </div>
      {/* about */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-xl font-semibold ">
          <li>
            <Link to="/uplde-image">
              <span>
                <FaUpload />
              </span>
              Uploaded
            </Link>
          </li>
        </ul>
      </div>

      {/* responsive menu  */}

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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <button onClick={handelLogout}>LogI Out</button>
            </li>
          </ul>
        </div>
      </div>
      {/* lg  */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-xl font-semibold ">
          <li tabIndex={0}>
            <Link>
              About
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="menu bg-base-100 w-56  shadow-xl">
              <li>
                <Link to='/api-keys'>API Keys</Link>
              </li>
            </ul>
          </li>

          {/*  */}

          <li tabIndex={0}>
            <Link>
              <span>
                <div className="avatar">
                  <div className="w-8 rounded">
                    <img
                      src="https://i.ibb.co/QnVhN1m/IMG20220618211638.jpg"
                      alt="Tailwind-CSS-Avatar-component"
                    />
                  </div>
                </div>
              </span>
              rohit
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="menu bg-base-100 w-56  shadow-2xl">
              <li>
                <Link to="/myProfile">My Profile</Link>
              </li>
              <li>
                <Link to="/albums">Albums</Link>
              </li>
              <li>
                <Link>Log Out</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/Profile-update">
              <button>Upgrade</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
