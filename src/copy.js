import React from "react";
import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Copy = ({ shorten, idx }) => {
  const [copied, setCopied] = useState(false);
  //console.log(links);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 999);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="flex justify-center items-center" key={idx}>
      <p className="border-2 rounded-lg p-2 mt-5 mr-20 ">{shorten}</p>

      <CopyToClipboard text={shorten} onCopy={() => setCopied(true)}>
        <button
          className="bg-teal-700 px-9 py-1 rounded-xl ml-2 font-medium font-sans"
          //className={copied ? "copied" : ""}
        >
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Copy;
