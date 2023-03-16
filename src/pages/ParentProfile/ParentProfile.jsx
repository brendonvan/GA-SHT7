import styles from './ParentProfile.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// redux actions
import { setProfileName } from '../../actions';

const ParentProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)

  useEffect(() => {
    console.log(profile)
    
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          <h1 className={styles.header_h1}>Parent Profile</h1>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={profile.profileAvatar} alt={profile.profileAvatar}></img>
          <h1 className={styles.profileName}>{profile.profileName}</h1>
        </div>
        <div className={styles.childrenList}>
          <h1 className={styles.listLabel}>Kids</h1>
          <div className={styles.line}></div>

          {/* TODO: Map this for each child in array */}
          <div className={styles.kidItem}>
            <img className={styles.kidImg} src="/assets/Kid_3.png" alt="Kid_3_picture" />
            <p className={styles.kidName}>Billy</p>
          </div>

          <div className={styles.addChildButton} onClick={() => { navigate('/createkidprofile') }}>
            <div className={styles.addBtn}>+</div>
            <div className={styles.addText}>Add Child</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentProfile