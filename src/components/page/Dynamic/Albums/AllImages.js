import React from "react";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";

const AllImages = () => {
  const url ='https://source.unsplash.com/random/300x300/?1'


  const handelDownlode=(url)=>{
    const atag = document.createElement('a')
    atag.href = url;
    atag.setAttribute('download' , url);
    document.body.appendChild(atag);
    atag.click()
    atag.remove()

  }
  return (
    <div>
      <div className="relative">
        <div>
         <img
            className="object-cover w-full bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/300x300/?1"
            alt=""
          /> 
          
        </div>
        <div className="absolute top-4 right-2">
          <div className=" h-full gap-6 p-1 flex bg-white">
            <Link className="text-3xl ">
              <MdDelete />
            </Link>
            <button onClick={()=>{handelDownlode(url)}} className="text-3xl  ">
              <BsArrowDownSquareFill />
            </button>
            <Link className="text-3xl" onClick={()=>{
            navigator.clipboard.writeText(url)
        }}>
              
              <AiOutlineLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllImages;
