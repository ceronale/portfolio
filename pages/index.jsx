import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';
import {homeData} from '../data/data';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>{homeData.bigTitleUp}</h1>
          <h1>{homeData.bigTitleDown}</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>{homeData.name}</h1>
            <h6 className={styles.bio}>{homeData.profession}</h6>
            <Link href="/projects">
              <button className={styles.button}>{homeData.leftButton}</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>{homeData.rightButton}</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
