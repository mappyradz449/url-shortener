import useSWR from "swr";
import redirect from "nextjs-redirect";

import { fetcher } from "@/utils/fetcher";

export const getServerSideProps = async (context) => {
  const { shortLink } = context.query;
  return { props: { shortLink } };
};

export default function RedirectToOriginalLink({ shortLink }) {
  const { data, error, isLoading } = useSWR(`/api/link/${shortLink}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  //return <div>hello {JSON.stringify(data)}!</div>
  const Redirect = redirect(data.originalLink);
  return (
    <Redirect>
      <p>Redirecting to original link</p>
    </Redirect>
  );
}
