import { useState } from 'react'
import styles from './Menu.module.css'

export default function Menu() {
    const [isReact, setIsReact] = useState(false)
    
    function handleIsReact() {
        setIsReact(current => !current)
    }

  return (
    <div className={styles.conceptsTechstack}>
      <h3 onClick={handleIsReact} className={isReact ? styles.selected : styles.unselected}>React</h3>
          <ul className={isReact ? styles.openReact : styles.closeReact }>
        <li>State Management</li>
        <li>Conditional Rendering</li>
        <li>Hooks</li>
        <li>Custom Hooks</li>
        <li>Context API</li>
        <li>Forms (Controlled & Uncontrolled)</li>
        <li>React Router</li>
        <li> Code Splitting & Lazy Loading</li>
        <li>Redux Toolkit / Zustand</li>
      </ul>
      {/*           
      <h4>Javascript</h4>
          <h4>NodeJS</h4>
          <h4>CSS</h4>
 */}{" "}
    </div>
  );
}
