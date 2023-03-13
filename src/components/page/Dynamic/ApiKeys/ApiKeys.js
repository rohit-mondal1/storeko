import React from "react";
import { toast } from "react-hot-toast";


const ApiKeys = () => {
  const copyText = "df1509eeb08fa7011ab2697f6fe3f944";
  const copyApi = "df1509eeb08fa7011ab2697f6fe3f944";

  return (
    <div className="text-left lg:w-2/4 my-6 mx-auto">
      <div>
        <h1 className="text-2xl font-medium my-3">API version 1</h1>
        <p className="text-xl">StoreKo's API v0.1 allows to upload pictures.</p>
      </div>
      <div>
        <input
          className="w-full border-2 p-2 border-black my-3"
          type="text"
          defaultValue={copyText}
          disabled
          value={copyText}
        />
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            navigator.clipboard.writeText(copyText);
            return toast.success("Copy Link");
          }}
        >
          copy Api
        </button>
      </div>
      {/*  */}
      <div className="mt-14">
        <h1 className="text-2xl font-medium my-3">Request method</h1>
        <p className="text-xl">
          API v0.1 calls can be done using the POST or GET request methods but
          since GET request are limited by the maximum allowed length of an URL
          you should prefer the POST request method.
        </p>
      </div>
      <div className="relative">
        <input
        
          className="w-full  border-2 p-2 border-black my-3"
          type="text"
          defaultValue={copyText}
          disabled
          value={copyText}
        />
        <button
        id="button"
          className="btn btn-primary btn-sm absolute top-4 right-0  "
          onClick={() => {
            navigator.clipboard.writeText(copyApi);
            return toast.success("Copy Link");
          }}
        >
          copy 
        </button>
      </div>
    </div>
  );
};

export default ApiKeys;
