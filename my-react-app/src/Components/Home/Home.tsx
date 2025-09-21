import BackgroundCardContainer from '../TechstackCard/BackgroundCardContainer/BackgroundCardContainer';
import TeckstackContainer from '../TeckstackContainer/TeckstackContainer';
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <BackgroundCardContainer />

      <TeckstackContainer />
    </div>
  );
}
