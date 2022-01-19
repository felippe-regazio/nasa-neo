import { useEffect } from 'react';
import DefaultLayout from '../layouts/default'
import { getNeoWsFeed } from '../request/nasa'

const Index: React.FC = (): JSX.Element => {
  useEffect(() => {
    getNeoWsFeed().then(console.log);
  });

  return (
    <DefaultLayout>
      <div className="pm-container">
        hellow world
      </div>
    </DefaultLayout>
  );
};

export default Index;