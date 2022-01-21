import AppRoutes from './routes';
import { useState, useEffect } from 'react';
import { getNeoWsFeed } from './request/nasa';
import { NeoWsContext, NeoWsContextDefaults } from './neoWsContext';

export default function App(): JSX.Element {
  const neoPollingInterval = 1000 * 60;
  const [ neoData, setNeoData ] = useState({ ...NeoWsContextDefaults });
  
  const setNeoDataError = (flag: boolean = true) => setNeoData({
    ...neoData, 
    error: flag,
    notFetched: false,
    updatedAt: new Date(),
  });

  const updateNeoData = () => {
    getNeoWsFeed()
      .then(data => {
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

        setTimeout(() => updateNeoData(), neoPollingInterval);
      })
      .catch(error => {
        console.error(error);

        setNeoDataError();
      });
  };

  useEffect(() => {
    !neoData.error && updateNeoData();
  }, []);

  return (
    <NeoWsContext.Provider value={neoData}>      
      <AppRoutes />
    </NeoWsContext.Provider>    
  )
}