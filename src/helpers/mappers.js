export const getPlanetID = url => {
  const splitUrl = url.split("/");
  return splitUrl[splitUrl.length - 2];
};
