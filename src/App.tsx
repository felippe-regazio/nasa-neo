import AppRoutes from './routes';
import { useState, useEffect } from 'react';
import { getNeoWsFeed } from './request/nasa';
import { NeoWsContext, NeoWsContextDefaults } from './neoWsContext';

export default function App(): JSX.Element {
  const [ neoWsContextData, setNeoContextData ] = useState({ ...NeoWsContextDefaults });

  return (
    <NeoWsContext.Provider value={neoWsContextData}>      
      <AppRoutes />
    </NeoWsContext.Provider>    
  )
}