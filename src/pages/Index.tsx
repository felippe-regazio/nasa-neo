import DefaultLayout from '../layouts/default';
import NeoFeed from '../components/NeoFeed/';
import NasaNeoWsProvider from '../components/NasaNeoWsProvider'

const Index: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout>
      <div className="pm-container">
        <NasaNeoWsProvider>
          <NeoFeed />
        </NasaNeoWsProvider>
      </div>
    </DefaultLayout>
  );
};

export default Index;