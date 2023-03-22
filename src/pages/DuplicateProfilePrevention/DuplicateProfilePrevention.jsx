import styles from './DuplicateProfilePrevention.module.css';
import { Link } from 'react-router-dom';

export default function DuplicateProfilePrevention() {
  return (
    <main className={styles.DuplicateProfilePrevention}>
      <h1>Duplicate Profile Error Page</h1>
      <h1>You have already created a profile name and selected an avatar</h1>
      <h1>Please select button to return to home page</h1>
      <Link to ="/">
        <button className={styles.homeButton}>Return to Home</button>
      </Link>
    </main>
  )
}