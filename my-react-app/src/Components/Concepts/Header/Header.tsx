import styles from './Header.module.css'

export default function 
() {
    return (
      <div>
        <div className={styles.headingContainer}>
          <h3 className={styles.heading}>Code Concepts</h3>
          <h3 className={styles.heading}>Code Concepts</h3>
        </div>

            <div className={styles.conceptsTechstack}>
          <h4>Javascript</h4>
          <h4>React</h4>
          <h4>NodeJS</h4>
          <h4>CSS</h4>
        </div>
      </div>
    );
}
