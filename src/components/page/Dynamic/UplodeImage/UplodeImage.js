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
  const onsubmite = (data) => {};

  return (
    <div>
      <div
        className="lg:w-2/5 mx-auto my-8 shadow-2xl"
      >
        <form className="p-4" onClick={handleSubmit(onsubmite)}>
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="image"
              className="text-xl capitalize font-semibold "
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
          <button className="btn btn-primary my-3">submit</button>
        </form>
      </div>
    </div>
  );
};

export default UplodeImage;
