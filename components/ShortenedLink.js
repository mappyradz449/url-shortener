import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShortenedLink = ({ url }) => {
  const showToastMsg = () => {
    //alert("copied");
    toast("Link Copied!", { toastId: "Link copied" });
  };

  return (
    <div className="flex justify-between p-2 mx-3 my-3 border-2 rounded-lg border-blueGray-500">
      <a
        className="flex-grow font-sans font-medium break-all text-blueGray-600 flex-nowrap"
        href={url}
      >
        {url}
      </a>
      <CopyToClipboard
        text={url}
        onCopy={() => {
          // TODO: Toast here
          showToastMsg();
          console.log("Copied link: ", url);
        }}
      >
        <FaCopy
          className={"fill-blueGray-500 hover:fill-blueGray-600 h-7 mx-1"}
        />
      </CopyToClipboard>
    </div>
  );
};

export default ShortenedLink;
