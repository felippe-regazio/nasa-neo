import { useState, useEffect } from 'react';
import { getNeoWsFeed } from '../../request/nasa';
import { NeoWsContext, NeoWsContextDefaults } from '../../neoWsContext';

type ComponentProps = {
  children?: JSX.Element,
  pollingInterval?: number,
  onUpdateData?: Function,
};

/**
 * This is an special component, it prepares the Context NeoWsContext Provider
 * to any child compoent, as also manages the data polling on the Nasa API and
 * automatically updates the context in a given interval 
 */
export default function NasaNeoWsProvider({ children, pollingInterval, onUpdateData }: ComponentProps): JSX.Element {
  const [ neoData, setNeoData ] = useState({ ...NeoWsContextDefaults });
  const [ holding, setHolding ] = useState(false);
  
  const setNeoDataError = (flag: boolean = true) => setNeoData({
    ...neoData,
    error: flag,
    notFetched: false,
    updatedAt: new Date(),
  });

  const updateNeoData = () => {
    !holding && getNeoWsFeed()
      .then((data: any) => {
        setHolding(true);

        if (data.error) {
          console.error(data);
          setNeoDataError();

          return false;
        }

        setNeoData({
          ...neoData,

          data,
          error: false,
          notFetched: false,
          updatedAt: new Date()
        });
        
        setTimeout(() => {
          /*
          * the request sets holding to true on the beggining,
          * this tells the component to not trigger another
          * request till holding becomes true again. when
          * changing the state (setHolding) will cause the 
          * component to rerender with holding state false, 
          * triggering a new updateNeoData on the given timeout
           * and starting the process all again
          */
         setHolding(false);
        }, pollingInterval || 5000);

        onUpdateData && onUpdateData();
      })
      .catch((error: any) => {
        console.error(error);

        setNeoDataError();
      });
  };

  useEffect(() => {
    !neoData.error && updateNeoData();
  });

  return (
    <NeoWsContext.Provider value={neoData}>      
      { children }
    </NeoWsContext.Provider>
  )
}