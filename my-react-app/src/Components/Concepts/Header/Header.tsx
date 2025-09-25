import { useNavigate } from 'react-router';
import Menu from '../Menu/Menu';
import styles from './Header.module.css'

export default function Header() {
      const navigate = useNavigate();

    return (
      <div>
        <div className={styles.headingContainer} onClick={() => { navigate('/') }}>
          <h3 className={styles.heading}>Code Concepts</h3>
          <h3 className={styles.heading}>Code Concepts</h3>
        </div>

       <Menu/>
      </div>
    );
}
