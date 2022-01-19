import type { NeoWsFeedParams } from "./nasa-types";

export const getNeoWsFeed = (params: NeoWsFeedParams = {}) => {
  const urlParams = new URLSearchParams({ ...params, api_key: process.env.REACT_APP_NASA_API_KEY as string });
  const endpoint = `https://api.nasa.gov/neo/rest/v1/feed?${urlParams.toString()}`;

  return fetch(endpoint).then(result => result.json());
}