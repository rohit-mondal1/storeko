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
  const handleAddProduct = (data) => {
    const img = data.image[0];
    console.log(img);
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
