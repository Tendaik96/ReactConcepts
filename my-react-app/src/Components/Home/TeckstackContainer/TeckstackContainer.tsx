import { Link, useNavigate } from 'react-router';
import TechstackCard from './TechstackCard/TechstackCard';
import styles from './TeckstackContainer.module.css'

export default function TeckstackContainer() {
  const navigate = useNavigate();

    function toReactPage() {
  navigate('concepts/react')
}

  /*   function toJavascriptPage() {
  navigate('/concepts/javascript')
} */

  return (
    <div className={styles.techstackRow}>
      {" "}
      <TechstackCard name="React" nav={toReactPage} />
      <TechstackCard name="Javascript" nav={() => {}} />
      <TechstackCard name="CSS" nav={() => {}} />
      <TechstackCard name="Next.JS" nav={() => {}} />
      <TechstackCard name="NodeJS" nav={() => {}} />
    </div>
  );
}
