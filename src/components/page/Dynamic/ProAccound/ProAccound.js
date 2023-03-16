import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const ProAccound = () => {
  //
  return (
    <section className="py-6 bg-gray-100 text-gray-900">
      <div className="container p-4 mx-auto sm:p-10">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-semibold leading-tight">
            StoreKo Pro Account
          </h1>
          <p className="px-4 sm:px-8 lg:px-24">
            StoreKo is a free image hosting service. Upgrade to unlock all the
            features.
          </p>
        </div>
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
          <div className="flex flex-col overflow-hidden border-2 rounded-md border-gray-700">
            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-gray-300">
              <p className="text-lg font-medium">MONTHLY PLAN</p>
              <p className="text-5xl font-bold">5.99 $</p>
            </div>
            <div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-100">
              <ul className="self-stretch flex-1 space-y-2 justify-start pl-24">
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span> No Ads</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>Direct Linking</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>Unlimited space</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>Replace image feature</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>64 MB file size per image</span>
                </li>
              </ul>
              <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-blue-400 text-gray-900">
                Sign up
              </button>
            </div>
          </div>
          {/* 
          one
          */}
          <div className="flex flex-col overflow-hidden border-2 rounded-md border-blue-400">
            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-gray-300">
              <p className="text-lg font-medium">ANNUAL PLAN</p>
              <p className="text-5xl font-bold">4.50 $</p>
            </div>
            <div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-100">
              <ul className="self-stretch flex-1 justify-start pl-24 space-y-2">
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span> No Ads</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>Direct Linking</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>Unlimited space</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>Replace image feature</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>64 MB file size per image</span>
                </li>
              </ul>
              <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-blue-400 text-gray-900">
                Sign up
              </button>
            </div>
          </div>
          {/* 
          one
          */}
          <div className="flex flex-col overflow-hidden border-2 rounded-md border-gray-700">
            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-gray-300">
              <p className="text-lg font-medium">3 YEAR PRO</p>
              <p className="text-5xl font-bold">9.99 $</p>
            </div>
            <div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-100">
              <ul className="self-stretch justify-start pl-24 flex-1 space-y-2">
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span> No Ads</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>Direct Linking</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>Unlimited space</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>Replace image feature</span>
                </li>
                <li className="flex  space-x-2">
                  <span className="text-blue-700 font-bold text-2xl">
                    <FaRegHandPointRight />
                  </span>
                  <span>64 MB file size per image</span>
                </li>
              </ul>
              <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-blue-400 text-gray-900">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProAccound;
