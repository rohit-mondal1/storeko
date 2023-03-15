import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { RiImageAddFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const UplodeImage = () => {
  const [modal, setModal] = useState(null);
  const [modaldata, setModaldata] = useState(null);
  const data = useSelector((state) => state);
  const email = data?.currentUser?.email;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const imageHostKey = "0a8ef11a7d70acd362278a77fba31d7a";

  const handleAddProduct = (data ,e) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const img = imageData.data.url;
          const usersinfo = {
            image: img,
            email,
          };
          setModaldata(img)

          fetch(`http://localhost:8000/postImage`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(usersinfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                setModal(true);
                e.target.reset()
                return toast.success(" post success full !!");
              }
            });
        }
      });
  };
 
  const handelclick = () => {
    setModal(null);
  };

  return (
    <div className="relative">
      <div className="lg:w-2/5 mx-auto my-8 shadow-2xl">
        <div className=" w-full">
          <div className=" my-5 flex items-center justify-center">
            <form onSubmit={handleSubmit(handleAddProduct)} className="">
              <div className="grid grid-cols-1  ">
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor="image"
                    className="text-xl capitalize font-semibold my-3 "
                  >
                    Upload Image <span className="text-red-600">*</span>
                  </label>
                  <label
                    htmlFor="image"
                    className="flex items-center gap-4 px-2 py-4 w-full 
                       border-2 border-dashed"
                  >
                    <RiImageAddFill className="w-16  h-16 text-primary"></RiImageAddFill>
                    <input
                      type="file"
                      id="image"
                      placeholder="image"
                      className="placeholder: text-base "
                      {...register("image", {
                        required: "must upload an image",
                      })}
                    />
                  </label>
                  {errors.image && <p>{errors.image.message}</p>}
                </div>
              </div>

              <div className="flex items-center justify-center  mt-4">
                <button type="submit" className="btn btn-primary my-6 ">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {modal && (
        <div className="w-[360px] mx-auto">
          <div className="absolute w-[360px] h-[410px] shadow-2xl border-2 top-14 z-50 bg-white  ">
            <div>
              <h1
                onClick={handelclick}
                className="text-right text-3xl font-bold pr-6 link no-underline mb-4"
              >
                ✕
              </h1>
            </div>
            <div className="avatar">
              <div className="w-56 rounded">
                <img
                  src={modaldata}
                  alt="modaldata"
                />
              </div>
            </div>
            <div>
              <div className="px-4">
                <input
                  className="w-full border-2 p-2 border-black my-3"
                  type="text"
                  defaultValue={modaldata}
                  disabled
                  value={modaldata}
                />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    navigator.clipboard.writeText(modaldata);
                    return toast.success("Copy Link");
                  }}
                >
                  copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UplodeImage;
