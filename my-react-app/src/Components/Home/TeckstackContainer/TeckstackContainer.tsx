import TechstackCard from './TechstackCard/TechstackCard';
import styles from './TeckstackContainer.module.css'

export default function TeckstackContainer() {
  return (
    <div className={styles.techstackRow}>
      <TechstackCard name="React" />
      <TechstackCard name="Javascript" />
      <TechstackCard name="CSS" />
      <TechstackCard name="Next.JS" />
      <TechstackCard name="NodeJS" />
    </div>
  );
}
