import React from "react";

const ApiKeys = () => {
    const copyText ='df1509eeb08fa7011ab2697f6fe3f944'

  return (
    <div className="text-left lg:w-2/4 my-6 mx-auto">
      <div>
        <h1 className="text-2xl font-medium my-3">API version 1</h1>
        <p className="text-xl">Imgbb's API v1 allows to upload pictures.</p>
      </div>
      <div>
        <input className="w-full border-2 p-2 border-black my-3" type="text" defaultValue={copyText} disabled value={copyText} />
        <button onClick={()=>{
            navigator.clipboard.writeText(copyText)
        }}>coppy</button>
      </div>
    </div>
  );
};

export default ApiKeys;
