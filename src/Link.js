import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Copy from "./copy";
const crypto = require("crypto");

const getShortLinks = () => {
  let storedLinks = localStorage.getItem("shortenLink");
  //console.log(storedLinks);

  if (storedLinks) {
    return JSON.parse(localStorage.getItem("shortenLink"));
  } else {
    return [];
  }
};

const Link = ({ inputVal }) => {
  //const storedLinks = JSON.parse(localStorage.getItem("shortenLink"));

  const [shortenLink, setShortenLink] = useState(getShortLinks());
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //const [links, setLinks] = useState([]);

  //   const { createHash } = import("node:crypto");

  const fetchData = async () => {
    try {
      setLoading(true);

      function generateShortLink(url) {
        const hash = crypto.createHash("sha256").update(url).digest("base64");
        const shortLink = hash.substring(0, 8);
        return shortLink;
        //return console.log(url);
      }
      const res = await axios(`https://api.shrtco.de/v2/shorten
              ?url=${inputVal}`);
      //const res = generateShortLink(inputVal);
      //console.log(res.data.result.full_short_link);
      // setShortenLink([...shortenLink, res.data.result.full_short_link]);
      setShortenLink((shortenLink) => {
        const links = [...shortenLink, res.data.result.full_short_link];
        localStorage.setItem("shortenLink", JSON.stringify(links));
        return links;
      });
      //store each short link to loacl storage

      //console.log(storedLinks);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  //will run everytime the input val change
  useEffect(() => {
    if (inputVal.length) {
      fetchData();
      //setLinks([ ... links, shortenLink]);
    }
  }, [inputVal]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  if (error) {
    return <p className="noData">Something went wrong XD </p>;
  }

  //console.log(shortenLink);
  //console.log(localStorage.getItem("shortenLink"), "***");
  console.log(shortenLink);

  return (
    <>
      {shortenLink &&
        shortenLink.map((shorten, idx) => {
          return (
            // <div className="link" key={idx}>
            //   <p>{shorten}</p>

            //   <CopyToClipboard text={shorten} onCopy={() => setCopied(true)}>
            //     <button className={copied ? "copied" : ""}>Copy</button>
            //   </CopyToClipboard>
            // </div>
            <Copy shorten={shorten} key={idx} />
          );
        })}
    </>
  );
};

export default Link;
