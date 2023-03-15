import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyProfile = () => {
  const data = useSelector(state => state);
  const image = data?.currentUser?.image;
  const name = data?.currentUser?.name;
  const email = data?.currentUser?.email;

  return (
    <div>
      <div className="flex flex-col mx-auto my-8 justify-center max-w-sm p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
        <div className="text-left ">
          <Link to='/updateProfile'>
          <span className="text-pink-700 t text-2xl left-0 flex justify-end items-center">
            <AiOutlineEdit /> Edit
          </span>
          </Link>
        </div>
        <img
          src={image}
          alt=""
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
            <p className="px-5 text-xs sm:text-base text-gray-400">{email}</p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <div className="mx-10">
              <h1 className="font-bold">
                <span>Type :</span> normal
              </h1>

              <div className="flex gap-3 mt-3">
                <div className="">
                  <h1>0 FOLLOWING</h1>
                </div>
                <div className=" border border-l-2"></div>
                <div className="">
                  <h1>0 FOLLOWERS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;