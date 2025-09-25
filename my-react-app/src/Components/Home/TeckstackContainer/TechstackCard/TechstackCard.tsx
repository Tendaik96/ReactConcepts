import styles from './TechstackCard.module.css'

type NameProps = {
  name: string;
  nav: () => void;
};


export default function TechstackCard({name, nav}: NameProps) {
  return <div className={styles.card} onClick={nav}>{name}</div>;
}
