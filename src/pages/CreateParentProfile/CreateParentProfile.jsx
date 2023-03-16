import styles from './CreateParentProfile.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// redux actions
import { setProfileAvatar } from '../../actions';

const CreateParentProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer);

  const handleProfileChange = (profile, avatar) => {
    dispatch(setProfileAvatar(profile, avatar))
    console.log('user', profile.user)
    console.log('avatar:', profile.profileAvatar)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          <h1 className={styles.header_h1}>Parent Profile</h1>
          <p className={styles.header_p}>Choose an avatar</p>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={profile.profileAvatar} alt={profile.profileAvatar}></img>
          <div className={styles.availableAvatar}>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_1.png" alt="choice-1-male" onClick={() => handleProfileChange(profile, "/assets/Parent_Avatar_1.png")} /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_2.png" alt="choice-2-male" onClick={() => handleProfileChange(profile, "/assets/Parent_Avatar_2.png")} /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_3.png" alt="choice-1-female" onClick={() => handleProfileChange(profile, "/assets/Parent_Avatar_3.png")} /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_4.png" alt="choice-2-female" onClick={() => handleProfileChange(profile, "/assets/Parent_Avatar_4.png")} /></div>
          </div>
        </div>
      </div>
      <div className={styles.nextBtn} onClick={() => { navigate('/createparentprofile/setup') }} >Next</div>
    </div>
  )
}

export default CreateParentProfile
