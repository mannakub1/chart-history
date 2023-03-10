import humps from "humps";

export const fetchFileFromCdn = async (path: string) => {
  const responseFetch = await fetch(path, {
    method: "get",
  });

  let response;
  try {
    const responseJson = await responseFetch.json();
    response = humps.camelizeKeys(responseJson);
  } catch (e) {
    response = undefined;
  }

  return response;
};
