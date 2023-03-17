import React, { useContext } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUpload } from "react-icons/fa";
import { AuthContext } from "../../out/context/UserContext";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { AiOutlineHome } from "react-icons/ai";
import { SiAmazonapigateway } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { BiPhotoAlbum } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";


const Header = () => {
  const { auth} = useContext(AuthContext)
  const navigate = useNavigate()
  const data = useSelector(state => state);
  const image = data?.currentUser?.image
  const name = data?.currentUser?.name



  const handelLogout= ()=>{
    console.log('object');
    signOut(auth).then(() => {
      navigate('/login')
      return toast.success('Log out Success Full'); 
    }).catch((error) => {
      
    });
     
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
      <div className="navbar-end ">
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
              <Link to="/home"><AiOutlineHome/> Home</Link>
            </li>
            <li>
                <Link to='/api-keys'><SiAmazonapigateway/> API Keys</Link>
              </li>
              <li>
                <Link to="/myProfile">
                  <CgProfile/>
                   My Profile</Link>
              </li>
              <li>
              <Link to="/albums"><BiPhotoAlbum/> Albums</Link>
              </li>
              <li>
              
              <button onClick={handelLogout}><FiLogOut/> LogI Out</button>
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
              <Link to='/api-keys'><SiAmazonapigateway/> API Keys</Link>
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
                      src={image}
                      alt="component"
                    />
                  </div>
                </div>
              </span>
              {name}
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
                <Link to="/myProfile"> <CgProfile/> My Profile</Link>
              </li>
              <li>
                <Link to="/albums"><BiPhotoAlbum/> Albums</Link>
              </li>
              <li>
              <button onClick={handelLogout}> <FiLogOut/> LogI Out</button>
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
