import ProjectCard from '../components/ProjectCard';
import {webSitesProjectsData} from '../data/data';
import {appsProjectsData} from '../data/data';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Algunas cosas que he construido</h3>
      <div className={styles.container}>
        {appsProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </>
  );
};

export async function getStaticProps() {
  

  return {
    props: { title: 'Projects', webSitesProjectsData },
  };
}

export default ProjectsPage;
