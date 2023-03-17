import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import Modal from "./Modal";

const stripePromise = loadStripe(
  "pk_test_51MirOnSClmyxetKpgfUtBMbu1B7rBd8boOZgUoXN9uKSD9uSXD2JxeDaNfXZC8fCPn1p3rAchrcvjGbtnLDVgJik00Qf7IFgt1"
);

const ProAccound = () => {
  const [modals, setModal] = useState(null);
  const { data = [], isLoading } = useQuery({
    queryKey: ["priceing"],
    queryFn: async () => {
      const res = await fetch("https://store-ko-sserver.vercel.app/priceing");
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

  const handelPro = (name) => {
    setModal(name);
  };
  //
  return (
    <div className="relative">
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
            {data.map((p) => (
              <div
                key={p._id}
                className="flex flex-col overflow-hidden border-2 rounded-md border-gray-700"
              >
                <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-gray-300">
                  <p className="text-lg font-medium">{p.name}</p>
                  <p className="text-5xl font-bold">{p.price} $</p>
                </div>
                <div className="flex flex-col items-center justify-center px-2 py-8 bg-gray-100">
                  <ul className="self-stretch flex-1 space-y-2 justify-start pl-24">
                    <li className="flex  space-x-2">
                      <span className="text-blue-700 font-bold text-2xl">
                        <FaRegHandPointRight />
                      </span>
                      <span> {p.one}</span>
                    </li>
                    <li className="flex  space-x-2">
                      <span className="text-blue-700 font-bold text-2xl">
                        <FaRegHandPointRight />
                      </span>
                      <span>{p.tow}</span>
                    </li>
                    <li className="flex  space-x-2">
                      <span className="text-blue-700 font-bold text-2xl">
                        <FaRegHandPointRight />
                      </span>
                      <span> {p.three}</span>
                    </li>
                    <li className="flex  space-x-2">
                      <span className="text-blue-700 font-bold text-2xl">
                        <FaRegHandPointRight />
                      </span>
                      <span>{p.forth}</span>
                    </li>
                    <li className="flex  space-x-2">
                      <span className="text-blue-700 font-bold text-2xl">
                        <FaRegHandPointRight />
                      </span>
                      <span>{p.fifth}</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => handelPro(p.name)}
                    className="px-8 py-3 btn mt-6 text-lg font-semibold rounded sm:mt-12 bg-blue-600 text-gray-900"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className=" mx-auto max-w-[430px]  bg-slate-400">
      <div className=" absolute max-w-[430px] top-80  z-50 bg-slate-400">
        {modals && (
          <Elements stripe={stripePromise}>
            <Modal modal={modals} setModal={setModal}></Modal>
          </Elements>
        )}
      </div>
      </div>
    </div>
  );
};

export default ProAccound;
