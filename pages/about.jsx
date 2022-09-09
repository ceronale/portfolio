import {aboutData} from '../data/data';
const AboutPage = () => {
  return (
    <>
      <h3>{aboutData.description} </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
