import { createContext } from "react"

export type NeoWsResponse = {
  links: any;
  error?: any,
  element_count: number;
  near_earth_objects: any;
}

export interface NeoWsContextData {
  error: any;
  data?: NeoWsResponse;
}

export const NeoWsContextDefaults: NeoWsContextData = {
  error: false,
  
  data: {
    links: {},
    element_count: 0,
    near_earth_objects: {},  
  },
}

export const NeoWsContext = createContext<NeoWsContextData>(NeoWsContextDefaults);
