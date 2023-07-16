import React from "react";

const OriginalLink = ({ url }) => {
  return (
    <div className="border-2 border-slate-400 rounded-lg p-2 mx-3 my-3">
      <p className="text-gray-700 font-sans font-medium break-all flex-nowrap">
        {url}
      </p>
    </div>
  );
};

export default OriginalLink;
