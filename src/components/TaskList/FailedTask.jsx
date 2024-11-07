import React from "react";

function FailedTask({ data }) {
  return (
    <div className="h-full shrink-0 w-[25%] rounded-xl p-5 bg-green-600">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 px-2 py-1 text-sm rounded shadow-md shadow-red-500">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-4">
        <button className="w-full bg-red-700 font-semibold">Failed</button>
      </div>
    </div>
  );
}

export default FailedTask;
