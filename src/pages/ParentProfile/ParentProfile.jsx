import styles from './ParentProfile.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// redux actions
import { setProfileName } from '../../actions'

// services
import * as profileService from '../../services/profileService'

const ParentProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)

  const [list, setList] = useState([]);

  useEffect(() => {
    checkForChildren()
  }, [])

  async function checkForChildren() {
    if(profile){
      const db = await profileService.showProfile(profile.user.profile)
      setList(db.child)
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />
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
        <div className={styles.childrenList}>
          

          {/* TODO: Map this for each child in array */}
          { list.length ? (
            <h1 className={styles.childrenList}>{list.map((child) => 
                <div className={styles.kidItem}>
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