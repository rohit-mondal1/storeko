import React from "react";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";


const AllImages = ({img , handelclickdelete}) => {
  const {image, _id} =img;
  const url = image;

  const handelDownlode = (url) => {
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("download", url);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  };




  return (
    <div>
      <div className="relative my-2">
        <div>
          <img
            className="object-cover w-full bg-gray-500 aspect-square border-2"
            src={url}
            alt="url"
          />
        </div>
        <div className="absolute top-4 right-2">
          <div className=" h-full gap-6 p-1 flex bg-white">
            <button onClick={()=>{handelclickdelete(_id)}} className="text-3xl ">
              <MdDelete />
            </button>
            <button
              onClick={() => {
                handelDownlode(url);
              }}
              className="text-3xl  "
            >
              <BsArrowDownSquareFill />
            </button>
            <Link
              className="text-3xl"
              onClick={() => {
                navigator.clipboard.writeText(url);
                return toast.success("Copy Link");
              }}
            >
              <AiOutlineLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllImages;
