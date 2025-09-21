import styles from './TechstackCard.module.css'

type NameProps = {
  name: string;
};


export default function TechstackCard({name}: NameProps) {
  return <div className={styles.card}>{name}</div>;
}
