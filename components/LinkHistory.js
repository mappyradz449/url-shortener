import React, { useEffect, useState } from "react";
import LinkContainer from "@/components/LinkContainer";
import OriginalLink from "@/components/OriginalLink";
import ShortenedLink from "@/components/ShortenedLink";
import EmptyLink from "@/components/EmptyLink";
import { getOriginalLinks } from "@/utils/localStorage";

import axios from "axios";
import { getBaseUrl } from "@/utils/urls";

const LinkHistory = ({ currentOriginalLink }) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const crypto = require("crypto");

  function generateShortLink(url) {
    const hash = crypto
      .createHash("sha256")
      .update(url)
      .digest("base64")
      .replaceAll("/", "")
      .replaceAll("+", "")
      .replaceAll("=", "");
    //console.log(hash);
    const shortLink = hash.substring(0, 8);
    return shortLink;
    //return console.log(url);
  }

  //console.log(generateShortLink(currentOriginalLink));

  useEffect(() => {
    setLinks(getOriginalLinks());
  }, []);

  // fires every time currentOriginalLink state is updated
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const newShortenedLink = generateShortLink(currentOriginalLink);

        // console.log(newShortenedLink);
        // console.log(currentOriginalLink);

        //calling  api

        const postLinks = async () => {
          try {
            const res = await fetch("/api/links", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                originalLink: currentOriginalLink,
                shortLink: newShortenedLink,
              }),
            });
            const data = await res.json();
            console.log(data);
          } catch (error) {
            console.log("Error while calling postLinks API", error.message);
          }
        };

        postLinks();

        // localStorage.setItem(
        //   "linkHistory",
        //   JSON.stringify([
        //     ...links,
        //     {
        //       originalLink: currentOriginalLink,
        //       shortenedLink: newShortenedLink,
        //     },
        //   ])
        // );

        // reach out to external api

        // axios(`https://api.shrtco.de/v2/shorten
        //       ?url=${currentOriginalLink}`).then((response) => {
        //   // construct the new object
        //   const newOriginalLink = response.data.result.original_link;
        //   const newShortenedLink = response.data.result.full_short_link;

        // write everything to localstorage

        //   localStorage.setItem(
        //     "linkHistory",
        //     JSON.stringify([
        //       ...links,
        //       {
        //         originalLink: newOriginalLink,
        //         shortenedLink: newShortenedLink,
        //       },
        //     ])
        //   );

        // setLinks((oldLinks) => {
        //   return [
        //     {
        //       originalLink: currentOriginalLink,
        //       shortenedLink: newShortenedLink,
        //     },
        //     ...oldLinks,
        //   ];
        // });
        // });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    if (currentOriginalLink.length) {
      fetchData();
    }
  }, [currentOriginalLink]);

  useEffect(() => {
    const getLinks = async () => {
      try {
        const res = await fetch("/api/links", {
          method: "GET",
        });
        const data = await res.json();
        //console.log(data);
        setLinks(data?.links);
      } catch (error) {
        console.log("Error while calling postLinks API", error.message);
      }
    };

    getLinks();
  }, []);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  if (error) {
    return <p className="noData">Something went wrong XD </p>;
  }

  //const { getAllLinks } = getLink;

  return links && links.length > 0 ? (
    links.map((link, idx) => {
      return (
        <LinkContainer key={idx}>
          <OriginalLink url={link.originalLink} />
          <ShortenedLink url={getBaseUrl() + "/" + link.shortLink} />
        </LinkContainer>
      );
    })
  ) : (
    <EmptyLink />
  );
};

export default LinkHistory;
