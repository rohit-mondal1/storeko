import React from "react";
import { useForm } from "react-hook-form";
import { RiImageAddFill } from "react-icons/ri";

const UplodeImage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const imageHostKey = "0a8ef11a7d70acd362278a77fba31d7a";



  const handleAddProduct = (data) => {
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
      

    //       fetch("http://localhost:8000/userPost", {
    //         method: "POST",
    //         headers: {
    //           "content-type": "application/json",
    //         },
    //         body: JSON.stringify(usersinfo),
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           if (data.acknowledged) {
    //             return toast.success(" post success full !!");
    //           }
    //         });
        }
      });
  };

  return (
    <div>
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
                  <button
                    type="submit"
                    className="btn btn-primary my-6 "
                  >
                     Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default UplodeImage;
