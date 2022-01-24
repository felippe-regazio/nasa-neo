import type { NeoWsFeedParams } from "./nasa-types";
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY as string;

export const getNeoWsFeed = (params: NeoWsFeedParams = {}): Promise<any> => {
  const urlParams = new URLSearchParams({ ...params, api_key:  NASA_API_KEY  });
  const endpoint = `https://api.nasa.gov/neo/rest/v1/feed?${urlParams.toString()}`;

  return fetch(endpoint).then(result => result.json());
}