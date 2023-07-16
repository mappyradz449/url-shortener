import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

const ShortenedLink = ({ url }) => {
  return (
    <div className="border-2 border-slate-400 rounded-lg p-2 flex justify-between mx-3 my-3">
      <p className="text-gray-700 font-sans font-medium break-all flex-nowrap">
        {url}
      </p>
      <CopyToClipboard
        text={url}
        onCopy={() => {
          // TODO: Toast here
          console.log("Copied link: ", url);
        }}
      >
        <FaCopy className={"fill-teal-600 hover:fill-teal-400 h-7 mx-1"} />
      </CopyToClipboard>
    </div>
  );
};

export default ShortenedLink;
