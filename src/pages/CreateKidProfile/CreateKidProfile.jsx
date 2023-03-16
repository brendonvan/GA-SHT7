import styles from './CreateKidProfile.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// redux actions
import { setProfileAvatar, setShowCreateChild } from '../../actions';

const CreateKidProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)

  useEffect(() => {
    dispatch(setShowCreateChild(profile, true))
  }, [])
  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          <h1 className={styles.header_h1}>Kid Profile</h1>
          <p className={styles.header_p}>Set up this profile with your child</p>
        </div>
        <div className={styles.selectAvatar}>
          {/* TODO: Update this name for current profile */}
          <img className={styles.chosenAvatar} src="/assets/Kid_4.png" alt="Kid_4_Image"></img>
          <div className={styles.availableAvatar}>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Kid_1.png" alt="choice-1-girl" /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Kid_2.png" alt="choice-2-boy" /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Kid_3.png" alt="choice-1-girl" /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Kid_4.png" alt="choice-2-boy" /></div>
          </div>
        </div>
      </div>
      <div className={styles.nextBtn}>Next</div>
    </div>
  )
}

export default CreateKidProfile
