import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import AllImages from "./AllImages";

const Albums = () => {
  return (
    <div className="text-left m-14">
      <div>
        <div className="flex">
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img
                src="https://i.ibb.co/QnVhN1m/IMG20220618211638.jpg"
                alt="error"
              />
            </div>
          </div>
          <div className="mx-10">
            <h1 className="text-3xl font-bold">Rohit Mondal</h1>
            {/* <div>Edit</div> */}
            <div className="text-left  my-1">
          <span className="text-pink-700 t text-2xl left-0 flex justify-end items-center">
            <AiOutlineEdit /> Edit
          </span>
        </div>
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
      {/* my photo */}
      <div className="mt-16">
        <h1 className="text-2xl my-6">Rohit's Images</h1>
        <div>
        <section className="py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 relative gap-4 lg:grid-cols-4 sm:grid-cols-2">
           
            <AllImages/>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
};

export default Albums;
