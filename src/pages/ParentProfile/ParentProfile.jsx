import styles from './ParentProfile.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// redux actions
import { setProfile } from '../../actions'

// services
import * as authService from '../../services/authService'
import * as childService from '../../services/childService'

const ParentProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)

  const [list, setList] = useState([]);

  const handleLogout = () => {
    authService.logout()
    dispatch(setProfile(profile, null))
    navigate('/')
  }

  useEffect(() => {
    const checkForChildren = async () => {
      try {
        if(profile){
          console.log('profile:', profile)
          const db = await childService.index()
          console.log(db)
          setList(db)
        }
      } catch (error) {
        console.error(error)
      }
    }

    checkForChildren()
  }, [profile])

  
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.navigation}>
            <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />
            <img className={styles.logout} src="/assets/logout.svg" alt="logout" onClick={ handleLogout } />
          </div>
          <h1 className={styles.header_h1}>Parent Profile</h1>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={profile.profileAvatar} alt={profile.profileAvatar}></img>
          <h1 className={styles.profileName}>{profile.profileName}</h1>
        </div>
        <div className={styles.label}>
          <h1 className={styles.listLabel}>Kids</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.childrenListContainer}>
          { list ? (
            <h1 className={styles.childrenList}>{list.map((child) => 
                <div key={child._id} className={styles.kidItem} onClick={() => { navigate(`/choreboard/${child._id}`) }}>
                  <img className={styles.kidImg} src={child.avatar} alt={child.avatar} />
                  <p className={styles.kidName}>{child.name}</p>
                </div>
              )}</h1>
          ) : "" }
        </div>
        <div className={styles.addChildButton} onClick={() => { navigate('/createkidprofile') }}>
          <div className={styles.addBtn}>+</div>
          <div className={styles.addText}>Add Child</div>
        </div>
      </div>
    </div>
  )
}

export default ParentProfile