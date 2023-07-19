export const getBaseUrl = () => {
  if (window) {
    return window.location.origin;
  } else {
    return "";
  }
};
