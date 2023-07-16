export const getOriginalLinks = () => {
  let links = localStorage.getItem("linkHistory");
  if (links) {
    return JSON.parse(links);
  } else {
    return [];
  }
};
