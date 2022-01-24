import DefaultLayout from '../layouts/default';

const About: React.FC = (): JSX.Element => {
  return (
    <DefaultLayout>
      <div className="pm-container">
        <p>About page (for now just to test router)</p>
      </div>
    </DefaultLayout>
  );
};

export default About;