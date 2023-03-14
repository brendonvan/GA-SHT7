import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {true ? // boolean is in place for testing. Once user is finished we can replace with "user"
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/feed">
              <img className={styles.navItemImg} src="https://source.unsplash.com/300x300" alt="test-img" />
              <div>Feed</div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/map">
              <img className={styles.navItemImg} src="https://source.unsplash.com/300x300" alt="test-img" />
              <div>Map</div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/profiles">
              <img className={styles.navItemImg} src="https://source.unsplash.com/300x300" alt="test-img" />
              <div>Profile</div>
            </Link>
          </li>
        </ul>
      :
        <ul>
        </ul>
      }
    </nav>
  )
}

export default NavBar
