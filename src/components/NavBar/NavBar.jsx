import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import Profiles from '../../pages/Profiles/Profiles';


const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {user ?
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/feed">
              <img className={styles.navItemImgFeed} src="/assets/Feed.svg" alt="navigate-feed" />
              <div>Feed</div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/map">
              <img className={styles.navItemImgMap} src="/assets/Map.svg" alt="navigate-map" />
              <div>Map</div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/profiles">
               {/* Update different avatar for different profiles */}
              <img className={styles.navItemImgProfile} src="/assets/Parent_Avatar_4.png" alt="Parent_Avatar_Female_2" />
              <div>Profile</div>
            </Link>
          </li>
        </ul>
      :
        <>
        </>
      }
    </nav>
  )
}

export default NavBar
