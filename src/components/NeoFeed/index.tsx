import NeoDataset from './NeoDataset'
import NeoDataError from '../NeoDataError/';
import { NeoWsContext, NeoWsContextData } from '../../neoWsContext';

export default function NeoFeed(): JSX.Element {
  const renderFeed = (ctx: NeoWsContextData) => {
    if (ctx.notFetched) return <p className="pm-h4">Loading, please wait...</p>;
  
    return ctx.error ?
      <NeoDataError /> : 
      <NeoDataset neoList={ctx?.data?.near_earth_objects} />
  }

  return (
    <>
      <h1>Nasa's Near Earth Objects</h1>
      <hr />

      <NeoWsContext.Consumer>
        { ctx => renderFeed(ctx) }
      </NeoWsContext.Consumer>
    </>
  )
}