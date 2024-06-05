import { aboutData } from '../data/data';

const AboutPage = () => {
  return (
    <>
      <h2>Sobre Mí:</h2>
      <br />
      <h3>{aboutData.description}</h3>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Columna 1 */}
        <div>
        <br />
          <h2>Lenguajes:</h2>
          <br />
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {aboutData.languages.map((language, index) => (
              <div key={index} style={{ marginRight: '20px', marginBottom: '20px', textAlign: 'center' }}>
                <img src={`/logos/${language}.svg`} alt={language} style={{ width: '50px', height: '50px' }} />
                <div>{language}</div>
              </div>
            ))}
          </div>
        </div>
        <br />
        {/* Columna 2 */}
        <div>
          <h2>Tecnologías:</h2>
          <br />
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {aboutData.technologies.map((tech, index) => (
              <div key={index} style={{ marginRight: '20px', marginBottom: '20px', textAlign: 'center' }}>
                <img src={`/logos/${tech}.svg`} alt={tech} style={{ width: '50px', height: '50px' }} />
                <div>{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
