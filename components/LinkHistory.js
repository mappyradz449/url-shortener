import React, { useEffect, useState } from "react";
import LinkContainer from "@/components/LinkContainer";
import OriginalLink from "@/components/OriginalLink";
import ShortenedLink from "@/components/ShortenedLink";
import EmptyLink from "@/components/EmptyLink";
import { getOriginalLinks } from "@/utils/localStorage";
import axios from "axios";

const LinkHistory = ({ currentOriginalLink }) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLinks(getOriginalLinks());
  }, []);

  // fires every time currentOriginalLink state is updated
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // reach out to external api
        axios(`https://api.shrtco.de/v2/shorten
              ?url=${currentOriginalLink}`).then((response) => {
          // construct the new object
          const newOriginalLink = response.data.result.original_link;
          const newShortenedLink = response.data.result.full_short_link;

          // write everything to localstorage
          localStorage.setItem(
            "linkHistory",
            JSON.stringify([
              ...links,
              {
                originalLink: newOriginalLink,
                shortenedLink: newShortenedLink,
              },
            ])
          );

          setLinks((oldLinks) => {
            return [
              {
                originalLink: newOriginalLink,
                shortenedLink: newShortenedLink,
              },
              ...oldLinks,
            ];
          });
        });
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

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  if (error) {
    return <p className="noData">Something went wrong XD </p>;
  }

  return links && links.length > 0 ? (
    links.map((link, idx) => {
      return (
        <LinkContainer key={idx}>
          <OriginalLink url={link.originalLink} />
          <ShortenedLink url={link.shortenedLink} />
        </LinkContainer>
      );
    })
  ) : (
    <EmptyLink />
  );
};

export default LinkHistory;
