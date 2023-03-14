import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiImageAddFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { AuthContext } from '../context/UserContext';
import { toast } from 'react-hot-toast';




const SignUp = () => {
  const { signup } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const imageHostKey = "0a8ef11a7d70acd362278a77fba31d7a";

  //   fast
  const onSubmit = (data) => {
    const name = data.username;
    const image = data.image[0];
    const email = data.email;
    const password = data.password;
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
            name,
            email,
            password,
            image: img,
          };

          signup(email, password).then((res) => {
            const user = res.user;
            if (user?.uid) {
              fetch("http://localhost:8000/userPost", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(usersinfo),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.acknowledged) {
                    return toast.success(" post success full !!");
                  }
                });
            }
          });
        }
      });
  };
  return (
    <div className="w-full mx-auto my-5 max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Sign up</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label
            htmlFor="username"
            className="text-xl text-left capitalize font-semibold"
          >
            Username <span className="text-red-600">*</span>
          </label>
          <input
            {...register("username", { required: "plese type user name" })}
            type="text"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
          {errors.username && (
            <p className="text-red-400 "> {errors.username.message}</p>
          )}
        </div>
        {/* img */}

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="image" className="text-xl capitalize font-semibold ">
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
        {/* img */}
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="text-xl capitalize font-semibold">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
          {errors.email && (
            <p className="text-red-400 "> {errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label
            htmlFor="password"
            className="text-xl capitalize font-semibold"
          >
            Password <span className="text-red-600">*</span>
          </label>
          <input
            {...register("password", { required: "plese type password" })}
            type="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
          {errors.password && (
            <p className="text-red-400 "> {errors.password.message}</p>
          )}
        </div>

        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-400">
          Log in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          // onClick={handelgoogle}
          aria-label="Log in with Google"
          className="p-3  text-3xl font-bold rounded-sm"
        >
          <FcGoogle />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-gray-400">
        Don't have an account?
        <Link
          to="/login"
          rel="noopener noreferrer"
          href="#"
          className="underline text-gray-100"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;