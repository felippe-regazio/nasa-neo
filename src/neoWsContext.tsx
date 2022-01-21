import { createContext } from "react"
import type { NeoWsFeedResponse } from './request/nasa-types'

export interface NeoWsContextData {
  error: boolean;
  notFetched: boolean;
  data?: NeoWsFeedResponse;
}

export const NeoWsContextDefaults: NeoWsContextData = {
  error: false,
  notFetched: true,

  data: {
    links: {},
    element_count: 0,
    near_earth_objects: {},  
  },
}

export const NeoWsContext = createContext<NeoWsContextData>(NeoWsContextDefaults);
