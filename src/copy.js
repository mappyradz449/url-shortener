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
    <div className="link" key={idx}>
      <p>{shorten}</p>

      <CopyToClipboard text={shorten} onCopy={() => setCopied(true)}>
        <button className={copied ? "copied" : ""}>Copy</button>
      </CopyToClipboard>
    </div>
  );
};

export default Copy;
