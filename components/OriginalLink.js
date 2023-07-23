import React from "react";

const OriginalLink = ({ url }) => {
  return (
    <div className="p-3 m-3 border-2 rounded-lg border-blueGray-500">
      <a
        className="font-sans font-medium break-all text-blueGray-600 flex-nowrap"
        href={url}
      >
        {url}
      </a>
    </div>
  );
};

export default OriginalLink;
