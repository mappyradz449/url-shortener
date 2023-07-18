export const getOriginalLinks = () => {
  let links =
    typeof window !== "undefined" ? localStorage.getItem("linkHistory") : "[]";
  if (links) {
    return JSON.parse(links);
  } else {
    return [];
  }
};
