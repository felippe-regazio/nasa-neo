import AppRoutes from './routes';
import { useState, useEffect } from 'react';
import { getNeoWsFeed } from './request/nasa';
import { NeoWsContext, NeoWsContextDefaults } from './neoWsContext';

export default function App(): JSX.Element {
  const defaultPollingTimeout = 10000;
  const [ neoData, setNeoData ] = useState({ ...NeoWsContextDefaults });
  
  const setNeoDataError = (has: boolean = true) => setNeoData({
    ...neoData, 
    error: has, 
    notFetched: false
  });

  const updateNeoData = () => {
    getNeoWsFeed()
      .then(data => {
        if (data.error) {
          console.error(data);

          return setNeoDataError();
        }

        setTimeout(() => {
          setNeoData({
            data,
            error: false,
            notFetched: false
          });
          
          updateNeoData();
        }, defaultPollingTimeout);
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