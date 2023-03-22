import styles from './NavBar.module.css'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// redux actions
import { setNavbar } from '../../actions'

const NavBar = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profileReducer)
  const navbar = useSelector(state => state.navbarReducer)
  const location = useLocation()
  const page = location.pathname.split('/')[1].toLowerCase();

  function handleShowNavbar() {
    switch (page) {
      case "":
      case "login":
      case "createparentprofile":
      case "createkidprofile":
      case "choreboard":
      case "kidchores":
      case "coingoal":
        dispatch(setNavbar(false)) // navbar hide
        break
      case "feed":
      case "map":
      case "parentprofile":
        dispatch(setNavbar(true)) // navbar show
        break
      default:
        break
    }
  }

  useEffect(() => {
    // grab page name
    handleShowNavbar()
  }, [page])

  return (
    <nav className={ navbar.show ? `${styles.container}` : `${styles.container} ${styles.hide}`}>
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
            <Link className={styles.link} to="/parentprofile">
              <img className={styles.navItemImgProfile} src={ profile.profileAvatar } alt={ profile.profileAvatar } />
              <div>Profile</div>
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar
