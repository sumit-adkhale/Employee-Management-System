import React from "react";

function AcceptTask({ data, onComplete, onFailed }) {
  return (
    <div className="h-full shrink-0 w-[25%] rounded-xl p-5 bg-red-600">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 px-2 py-1 text-sm rounded shadow-md shadow-red-500">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button onClick={onComplete} className="bg-green-500 px-2 py-1 text-xs">
          Mark as Completed
        </button>
        <button onClick={onFailed} className="bg-red-500 px-2 py-1 text-xs">
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
