import React from 'react';
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { RiImageAddFill } from 'react-icons/ri';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const data = useSelector((state) => state);
  const email = data?.currentUser?.email;
  const { register, handleSubmit, watch } = useForm();
  const imageHostKey = "0a8ef11a7d70acd362278a77fba31d7a";
  const navigate = useNavigate()

  //   fast
  const onSubmit = (data) => {
    const name = data.username;
    const image = data.image[0];
    if (name) {
      fetch(`https://store-ko-sserver.vercel.app/username?email=${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({name}),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            navigate('/myProfile')
            return toast.success(" Update success full !!");
          }
        });
    } else if (image) {
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

            fetch(`https://store-ko-sserver.vercel.app/userPut?email=${email}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({img}),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  navigate('/myProfile')
                  return toast.success(" Update success full !!");
                }
              });
          }
        });
    } else {
      return;
    }
  };

  return (
    <div className="w-full text-left mx-auto my-5 max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Update User</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="text-xl capitalize font-semibold">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="email"
            disabled
            defaultValue={email}
            placeholder="email"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="username"
            className="text-xl text-left capitalize font-semibold"
          >
            Username 
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
        </div>
      

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="image" className="text-xl capitalize font-semibold ">
            Upload Image 
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
              {...register("image")}
            />
          </label>
        </div>
        

        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-400">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;