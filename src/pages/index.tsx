import DefaultLayout from '../layouts/default';
import NeoFeed from '../components/NeoFeed/';

const Index: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout>
      <div className="pm-container">
        <NeoFeed />
      </div>
    </DefaultLayout>
  );
};

export default Index;