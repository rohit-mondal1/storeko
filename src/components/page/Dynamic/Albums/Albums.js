import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AllImages from "./AllImages";

const Albums = () => {
 
  const state = useSelector(state => state);
  const image = state?.currentUser?.image;
  const name = state?.currentUser?.name;
  const userEmail = state?.user?.email;


  const { data, isLoading, refetch } = useQuery({
    queryKey: ["images", "email"],
    queryFn: async () => {
      const res = await fetch(
        `https://store-ko-sserver.vercel.app/images?email=${userEmail}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <div className="w-16 mx-auto my-20 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
      </div>
    );
  }

  const handelclickdelete = (id) => {
    fetch(`https://store-ko-sserver.vercel.app/imagede/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          return toast.success("Photo Delete Success");
        }
      });
  };

  return (
    <div className="text-left m-14">
      <div>
        <div className="flex">
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img src={image} alt="error" />
            </div>
          </div>
          <div className="mx-10">
            <h1 className="text-3xl font-bold">{name}</h1>
            {/* <div>Edit</div> */}
            <div className="text-left  my-1">
              <Link to="/updateProfile">
                <span className="text-pink-700 t text-2xl left-0 flex justify-end items-center">
                  <AiOutlineEdit /> Edit
                </span>
              </Link>
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
        <h1 className="text-2xl my-6">{name}'s Images</h1>
        <div>
          <section className="py-6 ">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 relative gap-4 lg:grid-cols-4 sm:grid-cols-2">
                {data?.map((p) => (
                  <AllImages
                    handelclickdelete={handelclickdelete}
                    key={p._id}
                    img={p}
                  ></AllImages>
                ))}
              </div>
            </div>
          </section>
        </div>
        {data.length === 0 && <h1 className="text-3xl text-center text-red-800 ">No Data ....? </h1>}
      </div>
    </div>
  );
};

export default Albums;
