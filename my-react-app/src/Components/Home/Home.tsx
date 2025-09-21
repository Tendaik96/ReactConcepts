import BackgroundCardContainer from './BackgroundCardContainer/BackgroundCardContainer';
import styles from './Home.module.css'
import TeckstackContainer from './TeckstackContainer/TeckstackContainer';

export default function Home() {
  return (
    <div className={styles.home}>

      <div className={styles.headingContainer}>
        <h3 className={styles.heading}>Code Concepts</h3>
        <h3 className={styles.heading}>Code Concepts</h3>
      </div>

      <BackgroundCardContainer />

      <TeckstackContainer />
    </div>
  );
}
