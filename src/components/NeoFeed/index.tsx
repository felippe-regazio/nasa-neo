import NeoDataset from './NeoDataset'
import NeoDataError from '../NeoDataError/';
import { NeoWsContext } from '../../neoWsContext';

export default function NeoFeed(): JSX.Element {
  return (
    <NeoWsContext.Consumer>
      {
        (ctx) => ctx.error ?
          <NeoDataError /> : 
          <NeoDataset neoList={ctx?.data?.near_earth_objects} />
      }
    </NeoWsContext.Consumer>
  )
}