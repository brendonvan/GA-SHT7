import styles from './CreateKidProfileSetup.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// redux actions
import { setProfileName, setShowCreateChild } from '../../actions';


const CreateKidProfileSetup = ({ handleChange, handleSubmit, newChildForm, avatarSelection }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)

  function handleSubmit() {
    handleFinishChildCreate()
    console.log(profile)
    navigate('/parentprofile')
  }
  
  function handleFinishChildCreate() {
    dispatch(setShowCreateChild(profile, false))
    console.log('finish onboarding', profile.showOnboarding)
  }

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
          <img className={styles.chosenAvatar} src={avatarSelection} alt="Kid_4_Image"></img>
          <div>
            <form className={styles.formField}>
              <label className={styles.label}>First Name</label>
              <input
                className={styles.input}
                value={newChildForm}
                onChange={handleChange}
                placeholder=""
                type="text"
                name="name"
                required
              />
              <div className={styles.nextBtn} onClick={handleSubmit}>Next</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateKidProfileSetup
