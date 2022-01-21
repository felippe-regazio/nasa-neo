export type NeoWsFeedParams = {
  end_date?: string,
  start_date?: string,
}

export type NeoWsFeedResponse = {
  links: any;
  error?: any,
  element_count: number;
  near_earth_objects: any;
}