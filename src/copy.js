import React from "react";
import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

const Copy = ({ link, shorten, idx }) => {
  const [copied, setCopied] = useState(false);
  //console.log(links);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 999);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div
      className="flex justify-center items-center grid grid-cols-3 ml-64"
      key={idx}
    >
      <div className="border-2 border-slate-400 rounded-lg p-2 mt-5 mr-6 ml-15">
        <p className="text-gray-700 font-sans font-medium break-all flex-nowrap">
          {link}
        </p>
      </div>

      <div className="border-2 border-slate-400 rounded-lg p-2 mt-5 mr-10 ml-0 ">
        <p className="text-gray-700 font-sans font-medium break-all flex-nowrap">
          {shorten}
        </p>
      </div>

      <CopyToClipboard text={shorten} onCopy={() => setCopied(true)}>
        {/* <button
          className={
            copied
              ? "text-gray-400"
              : "bg-teal-600 hover:bg-teal-400 px-5 py-2 rounded-full ml-2 font-medium font-sans uppercase h-10"
          }
          //className={copied ? "copied" : ""}
        >
          Copy
        </button> */}
        <FaCopy
          className={
            copied
              ? "fil-gray-400"
              : "fill-teal-600 hover:fill-teal-400 h-7 mr-32"
          }
        />
      </CopyToClipboard>
    </div>
  );
};

export default Copy;
