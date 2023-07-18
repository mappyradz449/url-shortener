import React from "react";

const OriginalLink = ({ url }) => {
  return (
    <div className="border-2 border-blueGray-500 rounded-lg p-3 m-3">
      <p className="text-gray-700 font-sans font-medium break-all flex-nowrap">
        {url}
      </p>
    </div>
  );
};

export default OriginalLink;
